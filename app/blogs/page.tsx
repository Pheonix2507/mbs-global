import BlogHero from "@/components/sections/BlogHero";
import BlogCard from "@/components/ui/BlogCard";
import { fetchStrapi, getStrapiMedia, blocksToText } from "@/lib/strapi";
import { StrapiBlog, StrapiResponse } from "@/lib/strapi-types";
import { BlogPost } from "@/lib/blog-data";

export default async function BlogsPage() {
  const response = await fetchStrapi<StrapiResponse<StrapiBlog[]>>("/blogs");

  const blogs: BlogPost[] = (response.data || []).map((blog) => {
    // Strapi 5 uses direct properties (capitalized) or attributes (lowercase fallback)
    const title = blog.Title || blog.attributes?.title || "";
    const contentText =
      blocksToText(blog.Content) ||
      (typeof blog.attributes?.content === "string"
        ? blog.attributes.content
        : "");
    const media = blog.Image || blog.attributes?.image;

    return {
      id: blog.documentId || blog.id.toString(), // Prefer documentId for Strapi 5 routing
      title: title,
      description: contentText.substring(0, 160) + "..." || "",
      mainImage: getStrapiMedia(media) || "",
      sections: [],
    };
  });

  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  if (!featuredBlog) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">No Insights found.</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto mt-32 px-6 pb-24 max-w-7xl">
        <header className="my-8">
          <h1 className="text-4xl font-zalando font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            Insights
          </h1>
        </header>

        <div className="space-y-24">
          <BlogHero blog={featuredBlog} />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
