import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";

export default function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="group flex flex-col space-y-4 rounded-2xl border border-transparent p-4 transition-all hover:border-zinc-200 hover:bg-zinc-50 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/50"
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={blog.mainImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="line-clamp-2 font-zalando text-xl font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-[#D699FF]">
          {blog.title}
        </h3>
        <p className="line-clamp-3 font-sans text-sm font-normal text-zinc-600 dark:text-zinc-400">
          {blog.description}
        </p>
      </div>
    </Link>
  );
}
