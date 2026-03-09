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
      year: "2020",
      title: "The Beginning",
      description:
        "MBS Freelance was founded with a vision to redefine digital experiences for modern brands.",
    },
    {
      year: "2021",
      title: "Expanding Horizons",
      description:
        "We grew our team of experts and started working with global clients across various industries.",
    },
    {
      year: "2022",
      title: "Innovation Award",
      description:
        "Recognized as one of the most innovative digital agencies in the region.",
    },
    {
      year: "2023",
      title: "Global Scale",
      description:
        "Successfully launched over 50+ enterprise-grade applications and platforms worldwide.",
    },
    {
      year: "2024",
      title: "Future Ready",
      description:
        "Continuously evolving our tech stack and design principles to stay ahead of the curve.",
    },
  ];

  return (
    <main className="min-h-screen pt-20 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center px-39">
          <div className="font-zalando text-5xl md:text-5xl font-semibold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            Pertaining to Projection: Where Your Vision Meets Our Scale
          </div>
          <div className="mx-27.5 text-xl text-zinc-200 font-sans font-normal animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            MBS empowers global enterprises to build distributed teams that
            drive workforce transformation and strategic capability development.
            We bridge the gap between ambitious global goals and the world-class
            engineering talent of India.
          </div>
        </div>
      </section>

      {/* Main Content Sections with Common Background */}
      <section className="bg-[#1F2123] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section 1: Title and Description */}
          <div className="mb-24 md:mb-32">
            <h2 className="font-zalando text-[#D699FF] text-6xl font-normal mb-8 tracking-tight">
              High Performance. Zero Capital Risk.
            </h2>
            <p className="mx-auto font-sans font-normal text-2xl">
              We eliminate the traditional risks of global expansion. Our
              innovative "pay-as-you-grow" model allows you to establish and
              manage elite teams without the burden of capital expenditure. We
              guide you through dynamic landscapes with risk mitigation and
              efficiency at the forefront.
            </p>
          </div>

          {/* Section 2: Values Split Layout */}
          <div className="mb-32 md:mb-48">
            <div className="text-center mb-8">
              <h3 className="font-zalando font-semibold text-5xl mb-4">
                Values That Drive Excellence.
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
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
            <div className="text-center mb-24">
              <h3 className="font-zalando text-3xl md:text-4xl font-bold mb-4">
                Our Timeline
              </h3>
              <p className="text-muted-foreground">
                Milestones that defined our path.
              </p>
            </div>

            <div className="relative">
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
                    className={`flex flex-col md:flex-row items-center justify-between w-full group ${
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Spacer for desktop */}
                    <div className="hidden md:block w-[45%]" />

                    {/* Content Card */}
                    <div className="w-full md:w-[45%] relative z-10">
                      <div
                        className={`p-8 rounded-3xl backdrop-blur-md bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-lg hover:border-purple-500/50 transition-colors duration-500 ${
                          idx % 2 === 0 ? "md:mr-8" : "md:ml-8"
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl font-black text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                            {event.year}
                          </span>
                          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3 font-zalando tracking-tight">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed italic">
                          "{event.description}"
                        </p>
                      </div>

                      {/* Connection Dot */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-purple-500 z-20 hidden md:block ${
                          idx % 2 === 0 ? "-left-10" : "-right-10"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="my-24">
            <h2 className="font-zalando text-[#D699FF] text-6xl font-normal mb-8 tracking-tight">
              Empowering Every Voice.
            </h2>
            <p className="mx-auto font-sans font-normal text-2xl">
              Embracing DE&I is the heart of our mission. We create a workspace
              where every perspective is respected, providing every individual
              the opportunity to thrive, succeed, and redefine the future of
              work.
            </p>
          </div>
        </div>

        {/* Full-width CTA Section */}
        <div className="relative mt-32 py-32 overflow-hidden text-center w-full">
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
            <h2 className="text-5xl md:text-7xl font-normal font-zalando mb-8 tracking-tighter text-white">
              Ready to Reach the Pinnacle?
            </h2>
            <p className="text-xl md:text-2xl font-sans font-normal text-zinc-200 mb-12 max-w-2xl mx-auto">
              At MBS, the sky is the limit. Let&apos;s build your next strategic
              powerhouse together.
            </p>
            <div className="inline-block border border-white/40 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm py-4 px-12 cursor-pointer group">
              <span className="font-zalando font-normal text-lg tracking-wide uppercase">
                Build Your Team
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
