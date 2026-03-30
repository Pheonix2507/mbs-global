"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "/about-us" },
  {
    name: "Solutions",
    href: "#",
    subLinks: [
      { name: "AI Fueled Innovation", href: "/solutions/innovation" },
      {
        name: "GCC Strategy & Enablement",
        href: "/solutions/workspace-solution",
      },
      {
        name: "Cognitive Business Intelligence",
        href: "/solutions/business-information",
      },
      {
        name: "Digital Talent Orchestration",
        href: "/solutions/total-talent-solutions",
      },
      { name: "Strategic Consulting", href: "/solutions/strategic-consulting" },
      {
        name: "Operations Management",
        href: "/solutions/operative-managements",
      },
    ],
  },
  {
    name: "Services",
    href: "#",
    subLinks: [
      {
        name: "Next-Gen AI Platform Engineering",
        href: "/services/platform-product-engineering",
      },
      {
        name: "AI-centric Product Engineering",
        href: "/services/ai-centric-product-engineering",
      },
      {
        name: "Data, Analytics, Cloud & AI",
        href: "/services/data-analytics-cloud-ai",
      },
      { name: "Autonomous Infra & Ops", href: "/services/digital-infra-ops" },
    ],
  },
  { name: "Insights", href: "/blogs" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* ── Navbar — desktop unchanged, mobile gets hamburger ── */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex w-full items-center justify-between px-6 md:px-12 lg:px-30 py-3 backdrop-blur-xl bg-[#1F2123] text-white">
          {/* Logo — unchanged */}
          <Link
            href="/"
            className="font-zalando shrink-0 text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            <Image
              src="/mbs-logo.svg"
              alt="Logo"
              width={150}
              height={35}
              className="md:w-[200px] md:h-[43px]"
            />
          </Link>

          {/* Desktop nav links — UNCHANGED */}
          <div className="hidden gap-10 lg:gap-20 lg:flex flex-1 items-center justify-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group p-2">
                {link.subLinks ? (
                  <div className="text-base font-semibold flex items-center gap-1 hover:text-[#AF33FF] transition-colors cursor-pointer">
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-base font-semibold flex items-center gap-1 hover:text-[#AF33FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu — UNCHANGED */}
                {link.subLinks && (
                  <div className="absolute left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                    <div className="bg-black/90 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-xl w-64 overflow-hidden flex flex-col p-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="px-4 py-3 text-sm font-medium text-zinc-300 hover:text-[#AF33FF] hover:bg-zinc-800/50 rounded-xl transition-all"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle — desktop only */}
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex items-center justify-center w-[40px] h-[40px] text-white hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile drawer — only visible on mobile ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel — slides down from nav bar */}
        <div
          className={`absolute top-[52px] left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <button
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-[#AF33FF] transition-all text-left"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name,
                    )
                  }
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile accordion sub-links */}
                {link.subLinks && openDropdown === link.name && (
                  <div className="ml-4 flex flex-col gap-1 mt-1 mb-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#AF33FF] rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Theme toggle inside drawer — mobile only */}
            <div className="flex items-center justify-between px-3 py-3 mt-2 border-t border-zinc-200 dark:border-zinc-800">
              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Theme
              </span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
