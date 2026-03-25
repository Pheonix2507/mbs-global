import Image from "next/image";
import { CheckCircle2, Target, Users, Lightbulb } from "lucide-react";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import { StrapiAboutUs } from "@/lib/strapi-types";

const AboutUs = async () => {
  let aboutData: StrapiAboutUs | null = null;
  try {
    const response = await fetchStrapi<StrapiAboutUs>("about-us");
    aboutData = (response as any).data;
  } catch (error) {}

  const timelineEvents =
    aboutData?.A_Legacy_of_Transformation?.yearAndtext || [];

  return (
    <main className="min-h-screen pt-20 text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={getStrapiMedia(aboutData?.hero_section?.background_image) || ""}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center px-6 md:px-39 flex flex-col items-center justify-center gap-[40px] w-[360px] md:w-auto">
          <div className="font-zalando text-[32px] md:text-5xl font-semibold tracking-tighter text-white leading-[120%] animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {aboutData?.hero_section?.title}
          </div>
          <div className="text-sm md:text-xl text-zinc-200 font-sans font-normal leading-[150%] animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            {aboutData?.hero_section?.subtitle}
          </div>
          {aboutData?.hero_section?.button &&
            aboutData.hero_section.button.length > 0 && (
              <div className="md:hidden">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-[235px] h-[48px] border border-white rounded-[4px] px-6 py-3 cursor-pointer"
                >
                  <span className="font-zalando font-normal text-sm tracking-wide uppercase text-white">
                    {aboutData.hero_section.button[0].text}
                  </span>
                </a>
              </div>
            )}
        </div>
      </section>

      {/* Main Content Sections with Common Background */}
      <section className="bg-white dark:bg-[#1F2123] py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section 1: Title and Description (short_about - repeatable) */}
          <div className="mb-16 md:mb-32">
            {aboutData?.short_about?.map((item, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="font-zalando text-[#D699FF] dark:text-[#D699FF] text-4xl md:text-6xl font-normal mb-6 md:mb-8 tracking-tight leading-[120%]">
                  {item.title}
                </h2>
                <p className="mx-auto font-sans font-normal text-base md:text-2xl leading-relaxed text-zinc-700 dark:text-zinc-200">
                  {item.sub_title}
                </p>
              </div>
            ))}
          </div>

          {/* Section 2: Values Split Layout */}
          <div className="mb-16 md:mb-48">
            {/* Heading — left aligned on mobile, centered on desktop */}
            <div className="text-left md:text-center mb-8">
              <h3 className="font-zalando font-semibold text-3xl md:text-5xl mb-4 text-zinc-900 dark:text-white">
                Values That
                <br className="md:hidden" /> Drive <br className="md:hidden" />
                Excellence.
              </h3>
            </div>

            {/* ── MOBILE layout ── */}
            <div className="flex flex-col gap-8 md:hidden">
              {/* Image - full width touching edges */}
              <div className="relative h-[300px] -mx-6 w-[calc(100%+3rem)]">
                <Image
                  src="/about-values-side.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* Competency items */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h4 className="font-zalando font-medium text-lg text-zinc-900 dark:text-white">
                    Platform & Product <br className="md:hidden" />
                    Engineering
                  </h4>
                  <p className="font-sans font-normal text-sm text-zinc-500 dark:text-zinc-400">
                    Modern architecture for scalable{" "}
                    <br className="md:hidden" /> global products.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-zalando font-medium text-lg text-zinc-900 dark:text-white">
                    Digital Infra & Ops
                  </h4>
                  <p className="font-sans font-normal text-sm text-zinc-500 dark:text-zinc-400">
                    Robust infrastructure management for 24/7 availability.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-zalando font-medium text-lg text-zinc-900 dark:text-white">
                    Data, Analytics & AI
                  </h4>
                  <p className="font-sans font-normal text-sm text-zinc-500 dark:text-zinc-400">
                    Actionable intelligence to power your digital evolution.
                  </p>
                </div>
              </div>

              {/* Explore more button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border border-zinc-900 dark:border-white rounded-sm py-2 px-6"
                >
                  <span className="font-zalando font-normal text-sm text-zinc-900 dark:text-white">
                    Explore more
                  </span>
                </a>
              </div>
            </div>

            {/* ── DESKTOP layout ── */}
            <div className="hidden md:grid md:grid-cols-2 gap-16 items-start">
              <div className="relative h-[656px] w-full max-w-[601px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/about-values-side.jpg"
                  alt=""
                  fill
                  className="object-fill"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-col gap-12 py-6">
                {/* We'll keep these values as they are not mapped yet properly in the split section as requested */}
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 mt-1">
                    <Lightbulb className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-white font-zalando tracking-tight">
                      People First
                    </h4>
                    <p className="text-zinc-600 dark:text-white text-lg leading-relaxed max-w-md">
                      Your growth is our growth; we foster an atmosphere of
                      mutual respect and loyalty.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 mt-1">
                    <Target className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-white font-zalando tracking-tight">
                      Knowledge Sharing
                    </h4>
                    <p className="text-zinc-600 dark:text-white text-lg leading-relaxed max-w-md">
                      We host weekly MBS Knowledge Exchange sessions to ensure
                      expertise flows across every team and country.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-white font-zalando tracking-tight">
                      Customer Transparency
                    </h4>
                    <p className="text-zinc-600 dark:text-white text-lg leading-relaxed max-w-md">
                      We build long-term relationships through proactive
                      value-adds and shared common goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 mt-1">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-white font-zalando tracking-tight">
                      Quality Without Compromise
                    </h4>
                    <p className="text-zinc-600 dark:text-white text-lg leading-relaxed max-w-md">
                      100% efficiency is our norm because in technology,
                      &quot;enough&quot; is never enough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Timeline (A_Legacy_of_Transformation) */}
          <div className="relative overflow-hidden pt-12">
            {/* Heading */}
            <div className="text-center mb-12 md:mb-24">
              <h3 className="font-zalando font-semibold text-[49px] leading-[120%] text-center text-zinc-900 dark:text-white">
                {aboutData?.A_Legacy_of_Transformation?.title}
              </h3>
            </div>

            {/* ── MOBILE Timeline ── */}
            <div className="relative md:hidden flex flex-col items-center gap-5 px-6">
              {/* Vertical line through the center */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-300 dark:bg-zinc-800"></div>

              {timelineEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="relative z-10 w-full max-w-[361px] min-h-[183px] bg-[#D699FF] dark:bg-[#150D1D] p-[28px_18px] rounded-[4px] border border-[#D699FF] dark:border-zinc-800/50 flex flex-col gap-[10px] items-center text-center justify-center"
                >
                  <h4 className="font-zalando font-bold text-3xl text-zinc-900 dark:text-white">
                    {event.title}
                  </h4>
                  <p className="font-sans text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-center">
                    {event.sub_title}
                  </p>
                </div>
              ))}
            </div>

            {/* ── DESKTOP Timeline ── */}
            <div className="relative hidden md:block">
              {/* Vertical Center Wall (Stem) */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 flex flex-col gap-4">
                <div className="flex-1 bg-purple-300" />
                <div className="h-24 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] animate-pulse" />
                <div className="flex-1 bg-purple-300" />
              </div>

              {/* Timeline Items */}
              <div className="space-y-24">
                {timelineEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-row items-center justify-between w-full group ${
                      idx % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                  >
                    {/* Spacer */}
                    <div className="w-[45%]" />

                    {/* Content Card */}
                    <div className="w-[45%] relative z-10">
                      <div
                        className={`p-8 rounded-3xl backdrop-blur-md bg-[#D699FF] dark:bg-[#150D1D] border border-[#D699FF] dark:border-zinc-800 shadow-lg hover:border-purple-500/50 transition-colors duration-500 ${
                          idx % 2 === 0 ? "mr-8" : "ml-8"
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <span className="font-zalando font-normal text-[39px] leading-[120%] text-black transition-colors dark:text-white">
                            {event.title}
                          </span>
                          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                        <p className="font-zalando font-normal text-[20px] leading-[120%] text-black dark:text-white">
                          &quot;{event.sub_title}&quot;
                        </p>
                      </div>

                     
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-500 z-20 ${
                          idx % 2 === 0 ? "-left-10" : "-right-10"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Section 4: Empowering Every Voice (empowering_text - repeatable) */}
          <div className="my-16 md:my-24">
            {aboutData?.empowering_text?.map((item, idx) => (
              <div key={idx} className="mb-12">
                <h2 className="font-zalando text-[#D699FF] dark:text-[#D699FF] text-4xl md:text-6xl font-normal mb-6 md:mb-8 tracking-tight leading-[120%]">
                  {item.title}
                </h2>
                <p className="mx-auto font-sans font-normal text-base md:text-2xl leading-relaxed text-zinc-700 dark:text-zinc-200">
                  {item.sub_title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
