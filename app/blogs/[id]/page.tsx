import {
  fetchStrapi,
  getStrapiMedia,
  blocksToText,
  htmlToPlainText,
  STRAPI_ORIGIN,
} from "@/lib/strapi";
import { StrapiBlog, StrapiResponse } from "@/lib/strapi-types";
import { BlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import BlogSideIndex from "@/components/ui/BlogSideIndex";
import BlogBlocksContent, {
  blogLegacyHtmlClassName,
} from "@/components/blog/BlogBlocksContent";
import Image from "next/image";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetchStrapi<StrapiResponse<StrapiBlog>>(
    `/blogs/${id}`,
  );

  if (!response.data) {
    notFound();
  }

  const blogData = response.data;
  const title = blogData.Title || blogData.attributes?.title || "Untitled";

  const blocksContent: BlocksContent | null =
    Array.isArray(blogData.Content) && blogData.Content.length > 0
      ? (blogData.Content as BlocksContent)
      : null;

  const legacyHtml =
    !blocksContent &&
    typeof blogData.attributes?.content === "string" &&
    blogData.attributes.content.trim().length > 0
      ? blogData.attributes.content
      : "";

  const contentText =
    blocksToText(blogData.Content) ||
    (legacyHtml ? htmlToPlainText(legacyHtml) : "");

  const media = blogData.Image || blogData.attributes?.image;

  const blog: BlogPost = {
    id: blogData.documentId || blogData.id.toString(),
    title: title,
    description: contentText.substring(0, 200) || "",
    mainImage: getStrapiMedia(media) || "",
    sections: [
      {
        id: "main-content",
        title: title,
        content: contentText,
      },
    ],
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-20 overflow-hidden">
        {/* Full width header image */}
        <div className="relative h-[60vh] w-full bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={blog.mainImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="flex flex-col gap-16 lg:flex-row">
            {/* Side Index */}
            <BlogSideIndex sections={blog.sections} />

            {/* Content Area */}
            <article className="flex-1 space-y-16">
              <header className="space-y-6 border-b border-zinc-200 pb-12 dark:border-zinc-800">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                  {blog.title}
                </h1>
                <p className="text-lg font-light leading-relaxed text-zinc-600 md:text-xl dark:text-zinc-400">
                  {blog.description}
                </p>
              </header>

              <div className="space-y-24">
                {blog.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-32 space-y-6"
                  >
                    {section.id !== "main-content" ? (
                      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                        {section.title}
                      </h2>
                    ) : null}
                    {blocksContent ? (
                      <BlogBlocksContent
                        content={blocksContent}
                        strapiOrigin={STRAPI_ORIGIN}
                      />
                    ) : legacyHtml ? (
                      <div
                        className={blogLegacyHtmlClassName}
                        dangerouslySetInnerHTML={{ __html: legacyHtml }}
                      />
                    ) : (
                      <div className="max-w-none">
                        <p className="text-base leading-[1.75] text-zinc-600 md:text-[1.125rem] md:leading-8 dark:text-zinc-400">
                          {section.content}
                        </p>
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
