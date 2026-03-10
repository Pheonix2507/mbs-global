"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; // Make sure lucide-react is installed, or omit the icon if not preferred

const navLinks = [
  { name: "About", href: "/about-us" },
  {
    name: "Solutions",
    href: "/solutions",
    subLinks: [
      { name: "Workspace Solution", href: "/solutions/workspace-solution" },
      {
        name: "Total Talent Solutions",
        href: "/solutions/total-talent-solutions",
      },
      {
        name: "Operative Managements",
        href: "/solutions/operative-managements",
      },
      { name: "Strategic Consulting", href: "/solutions/strategic-consulting" },
      { name: "Innovation", href: "/solutions/innovation" },
      { name: "Business Information", href: "/solutions/business-information" },
    ],
  },
  {
    name: "Services",
    href: "#",
    subLinks: [
      {
        name: "Platform & Product Engineering",
        href: "/services/platform-product-engineering",
      },
      { name: "Digital Infra & Ops", href: "/services/digital-infra-ops" },
      {
        name: "Data, Analytics, Cloud & AI",
        href: "/services/data-analytics-cloud-ai",
      },
    ],
  },
  { name: "Blogs", href: "/blogs" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <div className="flex w-full items-center justify-between px-6 md:px-30 py-3 backdrop-blur-md dark:bg-black/20">
        <Link
          href="/"
          className="font-zalando shrink-0 text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          <Image src="/mbs-logo.png" alt="Logo" width={200} height={43} />
        </Link>
        <div className="hidden gap-10 lg:gap-20 md:flex flex-1 items-center justify-center">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group p-2">
              <Link
                href={link.href}
                className="text-base font-semibold flex items-center gap-1 hover:text-[#AF33FF] transition-colors"
              >
                {link.name}
                {link.subLinks && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.subLinks && (
                <div className="absolute left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                  <div className="bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl w-64 overflow-hidden flex flex-col p-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#AF33FF] dark:hover:text-[#AF33FF] hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-xl transition-all"
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

        {/* Theme Toggle aligned to the right playfully while keeping nav centered ideally */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
