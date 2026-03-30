"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

function resolveStrapiAssetUrl(url: string, base: string): string {
  if (!url) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  const origin = base.replace(/\/$/, "");
  return `${origin}${url.startsWith("/") ? url : `/${url}`}`;
}

/** Body copy: comfortable reading size, scales up on md+ */
const bodyText =
  "text-base leading-[1.75] text-zinc-600 md:text-[1.125rem] md:leading-8 dark:text-zinc-400";

const headingShared = "scroll-mt-32 font-bold tracking-tight text-zinc-900 dark:text-white";

/**
 * Use on a wrapper around CMS HTML so tags inherit article typography
 * (mirrors block renderer sizing).
 */
export const blogLegacyHtmlClassName = [
  "max-w-none text-zinc-600 dark:text-zinc-400",
  "[&_p]:mb-6 [&_p]:last:mb-0 [&_p]:text-base [&_p]:leading-[1.75] md:[&_p]:text-[1.125rem] md:[&_p]:leading-8",
  "[&_h1]:mb-4 [&_h1]:mt-10 [&_h1]:first:mt-0 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-zinc-900 md:[&_h1]:text-3xl dark:[&_h1]:text-white",
  "[&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:first:mt-0 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-zinc-900 md:[&_h2]:mb-4 md:[&_h2]:mt-12 md:[&_h2]:text-2xl dark:[&_h2]:text-white",
  "[&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:first:mt-0 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-900 md:[&_h3]:text-xl dark:[&_h3]:text-white",
  "[&_h4]:mb-2 [&_h4]:mt-6 [&_h4]:first:mt-0 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-zinc-900 md:[&_h4]:text-lg dark:[&_h4]:text-white",
  "[&_h5]:mb-2 [&_h5]:mt-5 [&_h5]:text-sm [&_h5]:font-semibold [&_h5]:uppercase [&_h5]:tracking-wide [&_h5]:text-zinc-800 md:[&_h5]:text-base dark:[&_h5]:text-zinc-200",
  "[&_h6]:mb-2 [&_h6]:mt-4 [&_h6]:text-sm [&_h6]:font-medium [&_h6]:text-zinc-700 dark:[&_h6]:text-zinc-300",
  "[&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-zinc-400 dark:[&_ul]:marker:text-zinc-500",
  "[&_ol]:my-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:marker:text-zinc-400 dark:[&_ol]:marker:text-zinc-500",
  "[&_li]:text-base [&_li]:leading-[1.75] md:[&_li]:text-[1.125rem] md:[&_li]:leading-8",
  "[&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-zinc-300 [&_blockquote]:pl-5 [&_blockquote]:text-base [&_blockquote]:italic [&_blockquote]:text-zinc-700 md:[&_blockquote]:text-lg md:[&_blockquote]:leading-relaxed dark:[&_blockquote]:border-zinc-600 dark:[&_blockquote]:text-zinc-300",
  "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-zinc-100 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:text-zinc-900 dark:[&_pre]:bg-zinc-900 dark:[&_pre]:text-zinc-100",
  "[&_code]:rounded [&_code]:bg-zinc-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_code]:text-zinc-800 dark:[&_code]:bg-zinc-800 dark:[&_code]:text-zinc-200",
  "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-sm",
  "[&_a]:font-medium [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-2 dark:[&_a]:text-blue-400",
  "[&_img]:my-8 [&_img]:max-h-[min(70vh,720px)] [&_img]:w-auto [&_img]:max-w-full [&_img]:rounded-lg",
  "[&_strong]:font-semibold [&_strong]:text-zinc-800 dark:[&_strong]:text-zinc-200",
].join(" ");

export default function BlogBlocksContent({
  content,
  strapiOrigin,
}: {
  content: BlocksContent;
  strapiOrigin: string;
}) {
  return (
    <div className="max-w-none">
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => (
            <p className={`mb-6 last:mb-0 ${bodyText}`}>{children}</p>
          ),
          heading: ({ level, children }) => {
            switch (level) {
              case 1:
                return (
                  <h1
                    className={`mb-4 mt-10 text-2xl first:mt-0 md:text-3xl ${headingShared}`}
                  >
                    {children}
                  </h1>
                );
              case 2:
                return (
                  <h2
                    className={`mb-3 mt-10 text-xl first:mt-0 md:mb-4 md:mt-12 md:text-2xl ${headingShared}`}
                  >
                    {children}
                  </h2>
                );
              case 3:
                return (
                  <h3
                    className={`mb-3 mt-8 text-lg font-semibold first:mt-0 tracking-tight text-zinc-900 md:text-xl dark:text-white`}
                  >
                    {children}
                  </h3>
                );
              case 4:
                return (
                  <h4
                    className={`mb-2 mt-6 text-base font-semibold first:mt-0 text-zinc-900 md:text-lg dark:text-white`}
                  >
                    {children}
                  </h4>
                );
              case 5:
                return (
                  <h5
                    className="mb-2 mt-5 text-sm font-semibold uppercase tracking-wide text-zinc-800 md:text-base dark:text-zinc-200"
                  >
                    {children}
                  </h5>
                );
              case 6:
                return (
                  <h6 className="mb-2 mt-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {children}
                  </h6>
                );
            }
          },
          quote: ({ children }) => (
            <blockquote
              className={`my-8 border-l-4 border-zinc-300 pl-5 text-base italic text-zinc-700 md:text-lg md:leading-relaxed dark:border-zinc-600 dark:text-zinc-300`}
            >
              {children}
            </blockquote>
          ),
          code: ({ plainText }) => (
            <pre className="my-6 overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm leading-relaxed text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
              <code>{plainText}</code>
            </pre>
          ),
          list: ({ format, children }) => {
            const listClass = `my-6 space-y-2 pl-1 ${bodyText} marker:text-zinc-400 dark:marker:text-zinc-500`;
            return format === "ordered" ? (
              <ol className={`${listClass} list-decimal pl-6`}>{children}</ol>
            ) : (
              <ul className={`${listClass} list-disc pl-6`}>{children}</ul>
            );
          },
          "list-item": ({ children }) => (
            <li className="pl-1 [&_p]:mb-2 [&_p]:last:mb-0">{children}</li>
          ),
          image: ({ image }) => (
            // eslint-disable-next-line @next/next/no-img-element -- Strapi block URLs; Next/Image needs remotePatterns per host
            <img
              src={resolveStrapiAssetUrl(image.url, strapiOrigin)}
              alt={image.alternativeText ?? ""}
              width={image.width}
              height={image.height}
              loading="lazy"
              className="my-8 max-h-[min(70vh,720px)] w-auto max-w-full rounded-lg"
            />
          ),
          link: ({ url, children }) => {
            const external =
              url.startsWith("http") ||
              url.startsWith("//") ||
              url.startsWith("mailto:");
            return (
              <a
                href={url}
                className="font-medium text-blue-600 underline underline-offset-2 dark:text-blue-400"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {children}
              </a>
            );
          },
        }}
        modifiers={{
          bold: ({ children }) => (
            <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
              {children}
            </strong>
          ),
          code: ({ children }) => (
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.9em] text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              {children}
            </code>
          ),
        }}
      />
    </div>
  );
}
