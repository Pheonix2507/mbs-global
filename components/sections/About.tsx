const About = () => {
  return (
    <section id="about" className="bg-zinc-50 py-32 px-6 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-2 mt-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Mission
            </span>
            <h2 className="mt-4 font-zalando text-4xl font-bold tracking-tight sm:text-5xl">
              Driving excellence in every line of code.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg text-zinc-600 dark:text-zinc-400">
            <p>
              At MBS Freelance, we believe that great software isn&apos;t just
              functional—it&apos;s an experience. We combine technical expertise
              with a deep understanding of user behavior to create products that
              people love.
            </p>
            <p>
              Whether you&apos;re a startup looking to make your mark or an
              established brand seeking a digital refresh, we provide the tools
              and creativity to help you succeed.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <div className="font-zalando text-3xl font-bold">50+</div>
                <div className="text-sm text-zinc-500">Projects Completed</div>
              </div>
              <div>
                <div className="font-zalando text-3xl font-bold">10+</div>
                <div className="text-sm text-zinc-500">Design Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
