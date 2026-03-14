"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";

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
    title: "Agile Product Engineering",
    description:
      "Accelerate from idea to implementation with end-to-end managed services and quality engineering.",
    image: "/mechanism.jpg",
  },
  {
    title: "DevOps & SRE",
    description:
      "Add resilience to your systems with AI-powered automation, continuous improvement, and seamless business continuity.",
    image: "/hero.jpg",
  },
  {
    title: "Architecture Builder",
    description:
      "Gain real-time visualization of your \"to-be\" state with our automated architecture blueprints and fix bottlenecks before they happen.",
    image: "/about-values-side.jpg",
  },
  {
    title: "Platform Modernization",
    description:
      "Transform into a tech-centric organization with high-performing CRM, MarTech, and cloud-native capabilities.",
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
  data?: Array<{
    title: string;
    subtitle: string;
    image: any;
  }>;
}

const SolutionAnimatedFeatures = ({ slug, data: strapiFeatures }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const staticData =
    slug === "platform"
      ? PLATFORM_DATA
      : slug === "infra"
        ? INFRA_DATA
        : slug === "data"
          ? DATA_AI_DATA
          : slug === "innovation"
            ? INNOVATION_DATA
            : OPERATIVE_DATA;

  const data: FeaturePoint[] = strapiFeatures 
    ? strapiFeatures.map(item => ({
        title: item.title,
        description: item.subtitle,
        image: getStrapiMedia(item.image) || "/mechanism.jpg"
      }))
    : staticData;

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
    <section className="py-16 md:py-24 bg-[#1F1F1F]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Dynamic Image Container */}
          <div className="relative aspect-[4/3] lg:aspect-square w-full max-w-[400px] lg:max-w-none mx-auto lg:mx-0 rounded-[4px] overflow-hidden shadow-2xl bg-zinc-900 mb-2 lg:mb-0">
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
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Right: Points with Loaders */}
          <div className="flex flex-col gap-10 md:gap-12">
            {data.map((item, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className="flex flex-col gap-4 cursor-pointer"
                  onClick={() => {
                    setActiveIndex(idx);
                    setProgress(0);
                  }}
                >
                  <div className="space-y-3">
                    <h3
                      className={`font-zalando text-[39px] md:text-4xl font-semibold tracking-tight text-left text-white transition-colors duration-500 leading-[110%] ${
                        isActive ? "text-[#AF33FF]" : ""
                      }`}
                    >
                      {item.title}:
                    </h3>
                    
                    {/* Description - always show or only active? Screenshot shows active one expanded */}
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-40 lg:opacity-100"}`}>
                      <p className="font-sans text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar - Visible for active item on both desktop and mobile */}
                  <div className={`relative w-full overflow-hidden transition-all duration-500 rounded-full ${isActive ? "h-[6px] mt-2 opacity-100" : "h-0 opacity-0 mt-0"}`}>
                    <div className="absolute inset-0 bg-white/20 rounded-full" />
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-[#AF33FF] rounded-full transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
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
