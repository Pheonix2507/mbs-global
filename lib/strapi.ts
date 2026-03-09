const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchStrapi<T>(
  path: string,
  urlParamsObject?: Record<string, string>,
  options?: RequestInit,
): Promise<T> {
  try {
    const queryString = urlParamsObject
      ? `?${new URLSearchParams(urlParamsObject).toString()}`
      : "";

    const requestUrl = `${STRAPI_URL}/api${path}${queryString}`;

    const response = await fetch(requestUrl, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Strapi fetch error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Strapi fetch error details:", error.message || error);
    throw new Error(
      `Strapi connectivity failed at ${STRAPI_URL}/api${path}. Error: ${error.message || "Unknown error"}`,
    );
  }
}

export function getStrapiMedia(media: any) {
  if (media == null) return null;

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
