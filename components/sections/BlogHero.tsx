import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

export default function BlogHero({ blog }: { blog: BlogPost }) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Hero Image */}
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
          {blog.mainImage ? (
            <img
              src={blog.mainImage}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-zinc-400 font-medium">Featured Image</span>
          )}
        </div>

        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-zalando font-semibold tracking-tight text-zinc-900 dark:text-white lg:text-5xl">
              {blog.title.split(" ").map((word, i) => {
                const highlightWords = [
                  "Transformation",
                  "Applications",
                  "Business",
                  "Remote",
                ];
                const shouldHighlight = highlightWords.includes(
                  word.replace(/[.,]/g, ""),
                );
                return (
                  <span
                    key={i}
                    style={shouldHighlight ? { color: "#D699FF" } : {}}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </h2>
            <p className="text-lg font-sans font-normal leading-relaxed text-zinc-600 dark:text-zinc-400">
              {blog.description}
            </p>
          </div>

          <Link
            href={`/blogs/${blog.id}`}
            className="relative z-10 font-zalando max-w-fit border border-white rounded-sm py-3 px-6 text-center"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
