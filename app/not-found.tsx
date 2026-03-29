import { FileQuestion, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-zinc-50 dark:bg-black px-4 py-12 text-center md:px-6">
      <div className="relative mb-6 w-full max-w-[240px] aspect-[4/3] sm:mb-10 sm:max-w-[320px] md:mb-12 md:max-w-md">
        <Image
          src="/error_white.svg"
          alt="Not Found Illustration Light"
          fill
          className="block dark:hidden object-contain"
          priority
        />
        <Image
          src="/error.svg"
          alt="Not Found Illustration Dark"
          fill
          className="hidden dark:block object-contain"
          priority
        />
      </div>

      <h1 className="mb-3 text-2xl font-bold tracking-wide text-zinc-900 dark:text-white sm:mb-4 sm:text-4xl md:text-5xl font-zalando">
        Something went wrong
      </h1>

      <p className="mx-auto max-w-[280px] text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-300 sm:max-w-md sm:text-sm md:max-w-lg md:text-base">
        We're having trouble loading this page. It's not you — this is
        <br className="hidden sm:block" />
        on our end, and we're already working on it.
      </p>
    </main>
  );
}

