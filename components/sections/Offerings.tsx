"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const OFFERINGS = [
  {
    id: 1,
    title: "Digital Strategy",
    description: "Tailored roadmaps for your digital transformation journey.",
    image: "/mechanism.jpg",
  },
  {
    id: 2,
    title: "Product Design",
    description: "Breathtaking user interfaces and seamless experiences.",
    image: "/hero.jpg",
  },
  {
    id: 3,
    title: "Cloud Migration",
    description: "Seamlessly move your infrastructure to the cloud.",
    image: "/join.jpg",
  },
  {
    id: 4,
    title: "AI Integration",
    description: "Leverage machine learning to optimize your workflows.",
    image: "/competencies.png",
  },
  {
    id: 5,
    title: "Mobile Development",
    description: "High-performance native and cross-platform mobile apps.",
    image: "/value-1.png",
  },
  {
    id: 6,
    title: "Data Analytics",
    description: "Turn your data into actionable business insights.",
    image: "/value-2.png",
  },
  {
    id: 7,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security.",
    image: "/value-3.png",
  },
  {
    id: 8,
    title: "Growth Marketing",
    description: "Scale your business with data-driven marketing strategies.",
    image: "/join.jpg",
  },
];

const Offerings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = OFFERINGS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= totalItems ? 0 : prev + itemsPerPage,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, totalItems - itemsPerPage)
        : prev - itemsPerPage,
    );
  };

  return (
    <section
      id="offerings"
      className="relative bg-white py-24 dark:bg-black overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 flex items-end justify-between">
          <div className="space-y-4">
            <h2 className="font-zalando text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
              Core Offerings
            </h2>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
            }}
          >
            {OFFERINGS.map((item) => (
              <div
                key={item.id}
                className="w-full shrink-0 px-4 sm:w-1/2 lg:w-1/3"
              >
                <div className="group relative flex flex-col space-y-6">
                  <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-zalando text-2xl font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="font-sans text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * itemsPerPage)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === i
                      ? "w-8 bg-zinc-900 dark:bg-white"
                      : "w-2 bg-zinc-200 dark:bg-zinc-800"
                  }`}
                />
              ),
            )}
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all hover:bg-zinc-900 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all hover:bg-zinc-900 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
