import Link from "next/link";
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F1F1F] border-t border-zinc-200">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Icons and Contact Button */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-400">
              <Link
                href="#"
                className="hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-blue-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="relative z-10 border border-white rounded-sm py-3 px-6"
              >
                <span className="font-zalando font-normal text-sm tracking-wide uppercase">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-zinc-900 dark:text-zinc-100">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Link
                href="/"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                About us
              </Link>
              <Link
                href="/blogs"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/partners"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Our partners
              </Link>
            </div>
          </div>

          {/* Column 3: Solutions */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-zinc-900 dark:text-zinc-100">
              Solutions
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Link
                href="/solutions/workspace-solution"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Workspace solution
              </Link>
              <Link
                href="/solutions/total-talent-solutions"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Total talent solutions
              </Link>
              <Link
                href="/solutions/operative-managements"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Operative managements
              </Link>
              <Link
                href="/solutions/strategic-consulting"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Strategic consulting
              </Link>
              <Link
                href="/solutions/innovation"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Innovation
              </Link>
              <Link
                href="/solutions/business-information"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Business information
              </Link>
            </div>
          </div>

          {/* Column 4: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-zinc-900 dark:text-zinc-100">
              Services
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Link
                href="/services/platform-product-engineering"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Platform & product engineering
              </Link>
              <Link
                href="/services/digital-infra-ops"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Digital infra & Ops
              </Link>
              <Link
                href="/services/data-analytics-cloud-ai"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Data, Analytics, Cloud & AI
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Band */}
      <div className="w-full bg-white text-zinc-600 py-6 border-t border-zinc-200 dark:bg-white dark:text-zinc-400 dark:border-zinc-800">
        <div className="container ms-10 px-6 max-w-7xl">
          <p className="text-sm">
            © 2025 MBS Global • Privacy Policy • Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
