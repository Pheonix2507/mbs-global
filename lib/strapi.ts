import populationMap from "./population-map.json";

const STRAPI_URL = process.env.NEXT_PROD_STRAPI_URL || "http://localhost:1337";

const requestCache = new Map<string, Promise<any>>();

export async function fetchStrapi<T>(
  path: string,
  urlParamsObject?: any,
  options?: RequestInit,
): Promise<T> {
  const pathSegments = path.split("/").filter(Boolean);
  const apiName = pathSegments[0];
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;


  const apiToModelMap: Record<string, string> = {
    categories: "category",
    about_us: "about_us",
    blogs: "blog",
  };

  const modelName = apiToModelMap[apiName] || apiName;

  try {
    let finalParams = { ...urlParamsObject };

    // Use the mapped modelName for the population-map lookup
    if (
      modelName &&
      !finalParams.populate &&
      (populationMap as any)[modelName]
    ) {
      finalParams.populate = (populationMap as any)[modelName];
    }

    const buildQueryString = (params: any, prefix = ""): string => {
      const query = Object.keys(params)
        .map((key) => {
          const value = params[key];
          const newPrefix = prefix ? `${prefix}[${key}]` : key;

          if (
            value !== null &&
            typeof value === "object" &&
            !Array.isArray(value)
          ) {
            return buildQueryString(value, newPrefix);
          }

          if (Array.isArray(value)) {
            return value
              .map(
                (item, index) =>
                  `${encodeURIComponent(`${newPrefix}[${index}]`)}=${encodeURIComponent(item)}`,
              )
              .join("&");
          }

          return `${encodeURIComponent(newPrefix)}=${encodeURIComponent(value)}`;
        })
        .filter((str) => str !== "")
        .join("&");
      return query;
    };

    const queryString =
      Object.keys(finalParams).length > 0
        ? `?${buildQueryString(finalParams)}`
        : "";

    const requestUrl = `${STRAPI_URL}/api${normalizedPath}${queryString}`;
    const controller = new AbortController();
    const TIMEOUT = Number(process.env.NEXT_PUBLIC_FETCH_TIMEOUT) || 8000;

    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
    // 🔥 DEDUPE LOGIC
    if (requestCache.has(requestUrl)) {
      return requestCache.get(requestUrl);
    }

    const fetchPromise = (async () => {
      try {
        const response = await fetch(requestUrl, {
          ...options,
          signal: controller.signal,
          next: {
            revalidate: 3600,
            tags: [`strapi-${modelName}`],
          },
          headers: {
            "Content-Type": "application/json",
            ...options?.headers,
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          let errorDetail = "";
          try {
            const errorData = await response.json();
            errorDetail = JSON.stringify(errorData);
          } catch {
            errorDetail = response.statusText;
          }
          throw new Error(
            `Strapi fetch error: ${response.status} ${errorDetail}`,
          );
        }

        return response.json();
      } catch (err) {
        clearTimeout(timeoutId); // 🔥 important
        throw err;
      }
    })();

    fetchPromise.finally(() => {
      requestCache.delete(requestUrl);
    });

    requestCache.set(requestUrl, fetchPromise);

    return fetchPromise;
  } catch (error: any) {
    console.error("Strapi fetch error details:", error.message || error);
    throw new Error(
      `Strapi connectivity failed at ${STRAPI_URL}/api${normalizedPath}. Error: ${error.message || "Unknown error"}`,
    );
  }
}

export function getStrapiMedia(media: any) {
  if (media == null) return null;

  // Handle Strapi v5 array of media objects
  if (Array.isArray(media)) {
    if (media.length === 0) return null;
    media = media[0];
  }

  // If it's a string (direct URL)
  if (typeof media === "string") {
    if (media.startsWith("http") || media.startsWith("//")) return media;
    return `${STRAPI_URL}${media}`;
  }

  // If it's an object with a url property
  if (media.url) {
    if (media.url.startsWith("http") || media.url.startsWith("//"))
      return media.url;
    return `${STRAPI_URL}${media.url}`;
  }

  // Fallback for nested data structure
  const url = media.data?.attributes?.url || media.attributes?.url;
  if (url) {
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return `${STRAPI_URL}${url}`;
  }

  return null;
}

export function blocksToText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      if (block.type === "paragraph" || block.type === "heading") {
        return block.children?.map((child: any) => child.text).join("") || "";
      }
      return "";
    })
    .join("\n");
}
