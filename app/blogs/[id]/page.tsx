import { fetchStrapi, getStrapiMedia, blocksToText } from "@/lib/strapi";
import { StrapiBlog, StrapiResponse } from "@/lib/strapi-types";
import { BlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import BlogSideIndex from "@/components/ui/BlogSideIndex";
import Image from "next/image";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetchStrapi<StrapiResponse<StrapiBlog>>(
    `/blogs/${id}`,
    {
      populate: "*",
    },
  );

  if (!response.data) {
    notFound();
  }

  const blogData = response.data;
  const title = blogData.Title || blogData.attributes?.title || "Untitled";
  const contentText =
    blocksToText(blogData.Content) ||
    (typeof blogData.attributes?.content === "string"
      ? blogData.attributes.content
      : "");
  const media = blogData.Image || blogData.attributes?.image;

  const blog: BlogPost = {
    id: blogData.documentId || blogData.id.toString(),
    title: title,
    description: contentText.substring(0, 200) || "",
    mainImage: getStrapiMedia(media) || "/mechanism.jpg",
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
                <p className="text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
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
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                      {section.title}
                    </h2>
                    <div className="prose prose-zinc dark:prose-invert max-w-none text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                      <p>{section.content}</p>
                    </div>
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
