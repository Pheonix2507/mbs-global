"use client";

const ContactHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-36 pb-16 px-6 overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Gradient border wrapper (1px pad with gradient bg = gradient border) */}
      <div
        className="relative z-10 mb-6 inline-block rounded-full p-px"
        style={{
          background: "linear-gradient(135deg, #ffffff, #AF33FF)",
        }}
      >
        <span
          className="inline-block font-zalando px-6 py-2 rounded-full text-sm font-normal tracking-widest uppercase bg-background text-foreground"
        >
          Contact Us
        </span>
      </div>

      {/* Title */}
      <h1 className="relative mx-auto z-10 font-zalando font-semibold text-5xl text-foreground leading-tight mb-6">
        Let&apos;s build your global team, together.
      </h1>

      {/* Description */}
      <p className="relative z-10 text-muted-foreground text-base md:text-lg max-w-4xl leading-relaxed">
        Got a question about our workspace solutions or talent acquisition? Reach out! We usually respond within a business day.
      </p>
    </section>
  );
};

export default ContactHero;
