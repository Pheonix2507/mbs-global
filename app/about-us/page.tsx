import Image from "next/image";
import { CheckCircle2, Target, Users, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      title: "People First",
      description:
        "Your growth is our growth; we foster an atmosphere of mutual respect and loyalty.",
      icon: <Lightbulb className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Knowledge Sharing",
      description:
        "We host weekly MBS Knowledge Exchange sessions to ensure expertise flows across every team and country.",
      icon: <Target className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Customer Transparency",
      description:
        "We build long-term relationships through proactive value-adds and shared common goals.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Quality Without Compromise",
      description:
        "100% efficiency is our norm because in technology, 'enough' is never enough.",
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
  ];

  const timelineEvents = [
    {
      year: "2018",
      description:
        "Launched our Digital Journey in India.",
    },
    {
      year: "2019",
      description:
        "Catalyzed digital leverage for small-scale industries.",
    },
    {
      year: "2020",
      description:
        "Scaled to 100+ active contractors for 10+ diversified clients.",
    },
    {
      year: "2022",
      description:
        "Orchestrated talent solutions in the Healthcare & Pharmaceutic sectors.",
    },
    {
      year: "2021",
      description:
        "Achieved Platinum Partner status for a leading digital engineering company.",
    },
    {
      year: "2023",
      description:
        "Delivered end-to-end digital transformation for a leading Indian bank.",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center px-6 md:px-39 flex flex-col items-center justify-center gap-[40px] w-[360px] md:w-auto">
          <div className="font-zalando text-[32px] md:text-5xl font-semibold tracking-tighter text-white leading-[120%] animate-in fade-in slide-in-from-bottom-5 duration-1000">
            Pertaining to Projection: Where Your Vision Meets Our Scale
          </div>
          <div className="text-sm md:text-xl text-zinc-200 font-sans font-normal leading-[150%] animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            MBS empowers global enterprises to build distributed teams that
            drive workforce transformation and strategic capability development.
            We bridge the gap between ambitious global goals and the world-class
            engineering talent of India.
          </div>
          <div className="md:hidden">
            <a
              href="/contact"
              className="inline-flex items-center justify-center w-[235px] h-[48px] border border-white rounded-[4px] px-6 py-3 cursor-pointer"
            >
              <span className="font-zalando font-normal text-sm tracking-wide uppercase text-white">
                Build Your Team
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections with Common Background */}
      <section className="bg-[#1F2123] py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section 1: Title and Description */}
          <div className="mb-16 md:mb-32">
            <h2 className="font-zalando text-[#D699FF] text-4xl md:text-6xl font-normal mb-6 md:mb-8 tracking-tight leading-[120%]">
              High<br className="md:hidden" /> Performance.<br className="md:hidden" /> Zero Capital<br className="md:hidden" /> Risk.
            </h2>
            <p className="mx-auto font-sans font-normal text-base md:text-2xl leading-relaxed">
              We eliminate the traditional risks of global expansion. Our
              innovative "pay-as-you-grow" model allows you to establish and
              manage elite teams without the burden of capital expenditure. We
              guide you through dynamic landscapes with risk mitigation and
              efficiency at the forefront.
            </p>
          </div>

          {/* Section 2: Values Split Layout */}
          <div className="mb-16 md:mb-48">
            {/* Heading — left aligned on mobile, centered on desktop */}
            <div className="text-left md:text-center mb-8">
              <h3 className="font-zalando font-semibold text-3xl md:text-5xl mb-4">
                Values That<br className="md:hidden" /> Drive <br className="md:hidden" />Excellence.
              </h3>
            </div>

            {/* ── MOBILE layout ── */}
            <div className="flex flex-col gap-8 md:hidden">
              {/* Image - full width touching edges */}
              <div className="relative h-[300px] -mx-6 w-[calc(100%+3rem)]">
                <Image
                  src="/about-values-side.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* Competency items */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h4 className="font-zalando font-medium text-lg text-white">
                    Platform & Product <br className="md:hidden" />Engineering
                  </h4>
                  <p className="font-sans font-normal text-sm text-zinc-400">
                    Modern architecture for scalable <br className="md:hidden" /> global products.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-zalando font-medium text-lg text-white">
                    Digital Infra & Ops
                  </h4>
                  <p className="font-sans font-normal text-sm text-zinc-400">
                    Robust infrastructure management for 24/7 availability.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-zalando font-medium text-lg text-white">
                    Data, Analytics & AI
                  </h4>
                  <p className="font-sans font-normal text-sm text-zinc-400">
                    Actionable intelligence to power your digital evolution.
                  </p>
                </div>
              </div>

              {/* Explore more button */}
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center border border-white rounded-sm py-2 px-6"
                >
                  <span className="font-zalando font-normal text-sm text-white">
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
                  alt="Our Team"
                  fill
                  className="object-fill"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-col gap-12 py-6">
                {values.map((value, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="shrink-0 mt-1">{value.icon}</div>
                    <div>
                      <h4 className="text-2xl font-semibold mb-2 text-white font-zalando tracking-tight">
                        {value.title}
                      </h4>
                      <p className="text-white text-lg leading-relaxed max-w-md">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Timeline */}
          <div className="relative overflow-hidden pt-12">
            {/* Heading */}
            <div className="text-center mb-12 md:mb-24">
              <h3 className="font-zalando text-3xl md:text-4xl font-bold mb-4">
                A Legacy of<br className="md:hidden" /> Transformation
              </h3>
              <p className="hidden md:block text-muted-foreground">
                Milestones that defined our path.
              </p>
            </div>

            {/* ── MOBILE Timeline ── */}
            <div className="relative md:hidden flex flex-col items-center gap-5 px-6">
              {/* Vertical line through the center */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-zinc-800"></div>

              {timelineEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="relative z-10 w-full max-w-[361px] min-h-[183px] bg-[#150D1D] p-[28px_18px] rounded-[4px] border border-zinc-800/50 flex flex-col gap-[10px] items-center text-center justify-center"
                >
                  {/* Year dot on the line */}
                  {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div> */}

                  <h4 className="font-zalando font-bold text-3xl text-white">
                    {event.year}
                  </h4>
                  <p className="font-sans text-sm text-zinc-300 leading-relaxed text-center">
                    {event.description}
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
                    className={`flex flex-row items-center justify-between w-full group ${idx % 2 === 0 ? "flex-row-reverse" : ""
                      }`}
                  >
                    {/* Spacer */}
                    <div className="w-[45%]" />

                    {/* Content Card */}
                    <div className="w-[45%] relative z-10">
                      <div
                        className={`p-8 rounded-3xl backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg hover:border-purple-500/50 transition-colors duration-500 ${idx % 2 === 0 ? "mr-8" : "ml-8"
                          }`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl font-black text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                            {event.year}
                          </span>
                          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "{event.description}"
                        </p>
                      </div>

                      {/* Connection Dot */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-500 z-20 ${idx % 2 === 0 ? "-left-10" : "-right-10"
                          }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-16 md:my-24">
            <h2 className="font-zalando text-[#D699FF] text-4xl md:text-6xl font-normal mb-6 md:mb-8 tracking-tight leading-[120%]">
              Empowering Every Voice.
            </h2>
            <p className="mx-auto font-sans font-normal text-base md:text-2xl leading-relaxed">
              Embracing DE&I is the heart of our mission. We create a workspace
              where every perspective is respected, providing every individual
              the opportunity to thrive, succeed, and redefine the future of
              work.
            </p>
          </div>
        </div>

        {/* Full-width CTA Section */}
        <div className="hidden md:block relative mt-16 md:mt-32 py-20 md:py-32 overflow-hidden text-center w-full">
          {/* CTA Background */}
          <div className="absolute inset-0 z-0 w-full">
            <Image
              src="/join.jpg"
              alt="CTA Background"
              fill
              className="object-cover"
            />
            {/* Dark overlay to make text readable */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* CTA Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-7xl font-normal font-zalando mb-6 md:mb-8 tracking-tighter text-white leading-[120%]">
              Ready to Reach the Pinnacle?
            </h2>
            <p className="text-base md:text-2xl font-sans font-normal text-zinc-200 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              At MBS, the sky is the limit. Let&apos;s build your next strategic
              powerhouse together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center w-[235px] h-[48px] border border-white rounded-[4px] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group"
            >
              <span className="font-zalando font-normal text-sm md:text-lg tracking-wide uppercase text-current">
                Build Your Team
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
