import Link from "next/link";
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F1F1F] border-t border-zinc-800">
      <div className="container mx-auto px-6 max-w-7xl pt-[40px] pb-12 md:py-16">
        {/* ── DESKTOP layout (hidden on mobile) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Social + Contact */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-400">
              <Image src="/mbs-logo.svg" alt="Logo" width={150} height={35} />
            </div>
            <div>
              <Link
                href="/contact"
                className="border border-white rounded-sm py-3 px-6"
              >
                <span className="font-zalando font-normal text-sm tracking-wide uppercase text-white">
                  Contact Us
                </span>
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/company/mbs-global/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-zinc-100">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                href="/about-us"
                className="hover:text-white transition-colors"
              >
                About us
              </Link>
              <Link
                href="/blogs"
                className="hover:text-white transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/partners"
                className="hover:text-white transition-colors"
              >
                Our Partners
              </Link>
            </div>
          </div>
          {/* Column 3: Solutions */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-zinc-100">
              Solutions
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                href="/solutions/workspace-solution"
                className="hover:text-white transition-colors"
              >
                Workspace Solutions
              </Link>
              <Link
                href="/solutions/total-talent-solutions"
                className="hover:text-white transition-colors"
              >
                Total Talent Solutions
              </Link>
              <Link
                href="/solutions/operative-managements"
                className="hover:text-white transition-colors"
              >
                Operations Management
              </Link>
              <Link
                href="/solutions/strategic-consulting"
                className="hover:text-white transition-colors"
              >
                Strategic Consulting
              </Link>
              <Link
                href="/solutions/innovation"
                className="hover:text-white transition-colors"
              >
                Innovation
              </Link>
              <Link
                href="/solutions/business-information"
                className="hover:text-white transition-colors"
              >
                Business Transformation
              </Link>
            </div>
          </div>
          {/* Column 4: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-zinc-100">
              Services
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                href="/services/platform-product-engineering"
                className="hover:text-white transition-colors"
              >
                Platform & product engineering
              </Link>
              <Link
                href="/services/digital-infra-ops"
                className="hover:text-white transition-colors"
              >
                Digital infra & Ops
              </Link>
              <Link
                href="/services/data-analytics-cloud-ai"
                className="hover:text-white transition-colors"
              >
                Data, Analytics, Cloud & AI
              </Link>
            </div>
          </div>
        </div>

        {/* ── MOBILE layout (hidden on desktop) ── */}
        <div className="flex flex-col gap-[57px] md:hidden">
          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-white">
              Quick links
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                href="/about-us"
                className="hover:text-white transition-colors"
              >
                About us
              </Link>
              <Link
                href="/blogs"
                className="hover:text-white transition-colors"
              >
                blogs
              </Link>
              <Link
                href="/partners"
                className="hover:text-white transition-colors"
              >
                Our Partners
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-white">services</h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                href="/services/platform-product-engineering"
                className="hover:text-white transition-colors"
              >
                platform & product engineering
              </Link>
              <Link
                href="/services/digital-infra-ops"
                className="hover:text-white transition-colors"
              >
                digital infra & Ops
              </Link>
              <Link
                href="/services/data-analytics-cloud-ai"
                className="hover:text-white transition-colors"
              >
                data, analytics, cloud & Ai
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-white">Solutions</h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                href="/solutions/workspace-solution"
                className="hover:text-white transition-colors"
              >
                Workspace Solutions
              </Link>
              <Link
                href="/solutions/total-talent-solutions"
                className="hover:text-white transition-colors"
              >
                Total Talent Solutions
              </Link>
              <Link
                href="/solutions/operative-managements"
                className="hover:text-white transition-colors"
              >
                Operations Management
              </Link>
              <Link
                href="/solutions/strategic-consulting"
                className="hover:text-white transition-colors"
              >
                Strategic Consulting
              </Link>
              <Link
                href="/solutions/innovation"
                className="hover:text-white transition-colors"
              >
                Innovation
              </Link>
              <Link
                href="/solutions/business-information"
                className="hover:text-white transition-colors"
              >
                Business Transformation
              </Link>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-5 text-white">
            <Link
              href="#"
              className="hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-blue-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>

          {/* Contact Us Button */}
          <div>
            <Link
              href="/contact"
              className="inline-block border border-white rounded-sm py-3 px-6"
            >
              <span className="font-zalando font-normal text-sm tracking-wide uppercase text-white">
                Contact us
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Band - White on mobile as per design */}
      <div className="w-full bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 py-8 border-t border-zinc-100 dark:border-zinc-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-xs md:text-sm leading-relaxed text-center sm:text-left">
            © 2025 MBS Global •{" "}
            <Link
              href="/privacy-policy"
              className="underline hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            •{" "}
            <Link
              href="/terms-conditions"
              className="underline hover:text-black dark:hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
