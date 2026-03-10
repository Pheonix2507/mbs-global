"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FeaturePoint {
  title: string;
  description: string;
  image: string;
}

const INNOVATION_DATA: FeaturePoint[] = [
  {
    title: "Advanced R&D",
    description:
      "Incubate transformative ideas with our dedicated research teams pushing the boundaries of what's possible.",
    image: "/mechanism.jpg",
  },
  {
    title: "Emerging Tech Integration",
    description:
      "Seamlessly incorporate AI, Blockchain, and IoT into your existing ecosystem for exponential growth.",
    image: "/about-values-side.jpg",
  },
  {
    title: "Rapid Prototyping",
    description:
      "Move from concept to functional prototype in weeks, validating market fit before heavy investment.",
    image: "/join.jpg",
  },
  {
    title: "Innovation Culture",
    description:
      "Instill a mindset of continuous improvement and disruptive thinking across your entire organization.",
    image: "/hero.jpg",
  },
];

const OPERATIVE_DATA: FeaturePoint[] = [
  {
    title: "Process Optimization",
    description:
      "Identify bottlenecks and streamline workflows to achieve maximum operational throughput and efficiency.",
    image: "/hero.jpg",
  },
  {
    title: "Resource Allocation",
    description:
      "Dynamically distribute talent and capital where they yield the absolute highest return on investment.",
    image: "/mechanism.jpg",
  },
  {
    title: "Quality Assurance",
    description:
      "Implement rigorous automated testing and continuous monitoring to maintain flawless delivery.",
    image: "/about-hero.jpg",
  },
  {
    title: "Performance Analytics",
    description:
      "Leverage real-time data dashboards to make informed, proactive, and highly effective management decisions.",
    image: "/join.jpg",
  },
];

const PLATFORM_DATA: FeaturePoint[] = [
  {
    title: "Scalable Architecture",
    description:
      "Design and implement fault-tolerant, highly available systems that grow seamlessly with your user base.",
    image: "/mechanism.jpg",
  },
  {
    title: "Agile Development",
    description:
      "Accelerate time-to-market with iterative delivery, continuous integration, and rapid deployment cycles.",
    image: "/hero.jpg",
  },
  {
    title: "User-Centric Design",
    description:
      "Create intuitive, frictionless experiences that drive deep engagement and long-term customer loyalty.",
    image: "/about-values-side.jpg",
  },
  {
    title: "Robust Security",
    description:
      "Embed enterprise-grade security protocols into every layer of your application from day one.",
    image: "/join.jpg",
  },
];

const INFRA_DATA: FeaturePoint[] = [
  {
    title: "Cloud Migration",
    description:
      "Transition legacy workloads to modern cloud environments securely and with zero downtime.",
    image: "/mechanism.jpg",
  },
  {
    title: "Automated Provisioning",
    description:
      "Deploy infrastructure as code to guarantee consistency, speed, and scalability across environments.",
    image: "/hero.jpg",
  },
  {
    title: "24/7 Monitoring",
    description:
      "Proactively identify and resolve system anomalies before they impact your end-user experience.",
    image: "/about-values-side.jpg",
  },
  {
    title: "Cost Optimization",
    description:
      "Analyze resource utilization to eliminate waste and dramatically reduce your operational footprint.",
    image: "/join.jpg",
  },
];

const DATA_AI_DATA: FeaturePoint[] = [
  {
    title: "Predictive Analytics",
    description:
      "Harness historical data to forecast trends, anticipate market shifts, and mitigate risks.",
    image: "/mechanism.jpg",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Deploy custom algorithms that automate complex tasks and uncover hidden business intelligence.",
    image: "/hero.jpg",
  },
  {
    title: "Data Lake Architecture",
    description:
      "Centralize structured and unstructured data into a scalable, accessible, and secure repository.",
    image: "/about-values-side.jpg",
  },
  {
    title: "Generative AI",
    description:
      "Leverage cutting-edge LLMs to generate content, personalize experiences, and boost productivity.",
    image: "/join.jpg",
  },
];

interface Props {
  slug: string;
}

const SolutionAnimatedFeatures = ({ slug }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const data =
    slug === "platform"
      ? PLATFORM_DATA
      : slug === "infra"
        ? INFRA_DATA
        : slug === "data"
          ? DATA_AI_DATA
          : slug === "innovation"
            ? INNOVATION_DATA
            : OPERATIVE_DATA;
  const DURATION = 6000; // 6 seconds per slide

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      if (elapsed >= DURATION) {
        // Switch to next item
        setActiveIndex((prev) => (prev + 1) % data.length);
        setProgress(0);
        startTime = time; // Reset start time for the next cycle
      } else {
        setProgress((elapsed / DURATION) * 100);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [data.length]);

  return (
    <section className="py-24 bg-[#1F1F1F]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Dynamic Image */}
          <div className="relative aspect-square md:aspect-4/3 lg:aspect-square overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
            {data.map((item, idx) => (
              <Image
                key={idx}
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  activeIndex === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
          </div>

          {/* Right: 4 Points with Loaders */}
          <div className="flex flex-col gap-8">
            {data.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`flex flex-col gap-4 cursor-pointer transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                  onClick={() => {
                    setActiveIndex(idx);
                    setProgress(0); // Optional: Clicking resets the progress for the new active index
                  }}
                >
                  <div className="space-y-2">
                    <h3
                      className={`font-zalando text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-500 ${
                        isActive
                          ? "text-[#AF33FF]"
                          : "text-zinc-900 dark:text-zinc-100"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="font-sans text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>

                  {/* Horizontal Loader - Only visible if active */}
                  {isActive && (
                    <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden relative mt-2">
                      {/* The Fill with Gradient (White to #AF33FF) */}
                      <div
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-75"
                        style={{
                          width: `${progress}%`,
                          background:
                            "linear-gradient(90deg, rgba(255,255,255,1) 0%, #AF33FF 100%)",
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionAnimatedFeatures;
