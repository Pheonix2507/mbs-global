import Image from "next/image";

const SOLUTIONS_DATA = [
  {
    title: "Financial Agility (Economics)",
    image: "/mechanism.jpg",
    points: [
      {
        title: "Capital Efficiency",
        description:
          "Minimize overhead and maximize output through strategic talent bridging and optimized resource allocation.",
      },
      {
        title: "Resource Optimization",
        description:
          "Aligning engineering costs directly with core business outcomes to ensure every investment drives value.",
      },
    ],
  },
  {
    title: "Frictionless Operations (Infrastructure)",
    image: "/hero.jpg",
    points: [
      {
        title: "Elastic Scaling",
        description:
          "Seamlessly expand your team capacity without the traditional friction of local hiring and infrastructure setup.",
      },
      {
        title: "Integrated Workflow",
        description:
          "Advanced Co-Engineering practices that make distributed teams feel like a natural extension of your office.",
      },
    ],
  },
  {
    title: "Security & Compliance (Safety)",
    image: "/join.jpg",
    points: [
      {
        title: "Enterprise Security",
        description:
          "Implementing world-class safety protocols and encrypted communication across all distributed workspaces.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Ensuring 100% adherence to global data protection standards and industry-specific regulatory requirements.",
      },
    ],
  },
];

const SolutionsGrid = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <span className="flex items-center justify-center font-zalando font-normal text-[#D699FF] text-5xl mb-12">
          The Three Pillars of MBS Workspaces
        </span>
        <div className="flex flex-col gap-24">
          {SOLUTIONS_DATA.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start"
            >
              {/* Left: Title */}
              <div className="order-1 md:pt-4">
                <h3 className="font-zalando text-3xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Middle: Image */}
              <div className="order-2 relative aspect-4/3 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800 shadow-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Right: Description (Points) */}
              <div className="order-3 space-y-8 md:pt-4">
                {item.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex gap-4">
                    <span className="text-2xl font-bold text-purple-400 shrink-0">
                      {pIdx + 1}.
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-zalando text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                        {point.title}
                      </h4>
                      <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
