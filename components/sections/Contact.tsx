const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-4xl rounded-[40px] bg-black p-12 text-white dark:bg-white dark:text-black sm:p-20">
        <div className="text-center">
          <h2 className="font-zalando text-4xl font-bold tracking-tight sm:text-6xl mb-8">
            Ready to start your next project?
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-lg text-zinc-400 dark:text-zinc-500">
            Let&apos;s build something incredible together. Reach out for a
            consultation or just to say hello.
          </p>
          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href="mailto:hello@mbsfreelance.com"
              className="text-3xl font-semibold underline decoration-zinc-700 underline-offset-8 transition-colors hover:decoration-white dark:decoration-zinc-300 dark:hover:decoration-black sm:text-5xl"
            >
              hello@mbsfreelance.com
            </a>
            <div className="mt-8 flex gap-8">
              <a href="#" className="hover:opacity-70 transition-opacity">
                Instagram
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                Twitter
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
