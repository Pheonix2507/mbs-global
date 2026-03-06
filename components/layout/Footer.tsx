const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-xl font-bold tracking-tighter">MBS</span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Transforming businesses through premium digital experiences.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm hover:text-blue-500 transition-colors"
            >
              Dribbble
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} MBS Freelance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
