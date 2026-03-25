"use client";

const ContactHero = () => {
  return (
    <section className="relative flex flex-col items-center pt-[153px] pb-16 px-[26px] overflow-hidden bg-white dark:bg-[#1F2123] min-h-[500px]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* "Contact us" Button */}
      <div 
        className="relative flex items-center justify-center w-[130px] h-[35px] rounded-[16px] p-px mb-[46px]" 
        style={{ background: "linear-gradient(90deg, #FFFFFF 0%, #AF33FF 100%)" }}
      >
        <div className="w-full h-full bg-white dark:bg-[#1F2123] rounded-[15px] flex items-center justify-center py-[8px] px-[16px]">
            <span className="text-zinc-900 dark:text-white text-[14px] font-normal font-sans capitalize leading-none">Contact us</span>
        </div>
      </div>

      {/* Title & Text Container in center */}
      <div className="flex flex-col items-center justify-center w-full max-w-[362px] min-h-[261px] md:max-w-[1199px] md:min-h-[131px] gap-[40px] z-10 transition-all">
        {/* Title */}
        <h1 className="font-zalando font-semibold text-3xl md:text-[49px] leading-[120%] tracking-[0%] text-center text-zinc-900 dark:text-white m-0">
          Let&apos;s build your global team, together.
        </h1>

        {/* Description */}
        <p className="font-sans font-normal text-center text-zinc-600 dark:text-zinc-300 text-[16px] md:text-[20px] leading-[120%] tracking-[0%] m-0">
          Got a question about our workspace solutions or talent acquisition? Reach out! We usually respond within a business day.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
