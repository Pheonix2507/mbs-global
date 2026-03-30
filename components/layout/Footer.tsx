import Link from "next/link";
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F1F1F] border-t border-zinc-800">
      <div className="container mx-auto px-6 max-w-7xl pt-[40px] pb-12 md:py-16">
        {/* ── DESKTOP layout (hidden on mobile) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 4: Social + Contact */}
          <div className="flex flex-col gap-7">
            <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-400">
              <Image src="/mbs-logo.svg" alt="Logo" width={150} height={35} />
            </div>
            <div>
              <Link
                href="/contact"
                className="border text-white border-white rounded-sm py-3 px-6 hover:bg-white hover:text-black"
              >
                <span className="font-zalando font-normal text-sm tracking-wide uppercase">
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

          {/* Column 1: Quick links */}
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
                Insights
              </Link>
              {/* <Link
                href="/partners"
                className="hover:text-white transition-colors"
              >
                Our Partners
              </Link> */}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-zinc-100">
              Solutions
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                href="/solutions/innovation"
                className="hover:text-white transition-colors"
              >
                AI-Fueled innovation
              </Link>
              <Link
                href="/solutions/workspace-solution"
                className="hover:text-white transition-colors"
              >
                GCC Strategy & Enablement
              </Link>
              <Link
                href="/solutions/business-information"
                className="hover:text-white transition-colors"
              >
                Cognitive business intelligence
              </Link>
              <Link
                href="/solutions/total-talent-solutions"
                className="hover:text-white transition-colors"
              >
                Digital Talent orchestration
              </Link>
              <Link
                href="/solutions/strategic-consulting"
                className="hover:text-white transition-colors"
              >
                Strategic Consulting
              </Link>
              <Link
                href="/solutions/operative-managements"
                className="hover:text-white transition-colors"
              >
                Operations Management
              </Link>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-zinc-100">
              Services
            </h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                href="/services/platform-product-engineering"
                className="hover:text-white transition-colors"
              >
                Next-Gen AI Platform Engineering
              </Link>
              <Link
                href="/services/ai-centric-product-engineering"
                className="hover:text-white transition-colors"
              >
                AI-centric Product Engineering
              </Link>
              <Link
                href="/services/data-analytics-cloud-ai"
                className="hover:text-white transition-colors"
              >
                Data, analytics, cloud & Ai
              </Link>
              <Link
                href="/services/digital-infra-ops"
                className="hover:text-white transition-colors"
              >
                Autonomous Infra and Ops
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
                Insights
              </Link>
              <Link
                href="/partners"
                className="hover:text-white transition-colors"
              >
                Our Partners
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-white">Solutions</h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                href="/solutions/innovation"
                className="hover:text-white transition-colors"
              >
                AI-Fueled innovation
              </Link>
              <Link
                href="/solutions/business-information"
                className="hover:text-white transition-colors"
              >
                Cognitive business intelligence
              </Link>
              <Link
                href="/solutions/total-talent-solutions"
                className="hover:text-white transition-colors"
              >
                Digital Talent orchestration
              </Link>
              <Link
                href="/solutions/strategic-consulting"
                className="hover:text-white transition-colors"
              >
                Strategic Consulting
              </Link>
              <Link
                href="/solutions/operative-managements"
                className="hover:text-white transition-colors"
              >
                Operations Management
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold font-zalando text-white">Services</h3>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                href="/services/platform-product-engineering"
                className="hover:text-white transition-colors"
              >
                Next-Gen AI Platform Engineering
              </Link>
              <Link
                href="/services/platform-product-engineering"
                className="hover:text-white transition-colors"
              >
                AI-centric Product Engineering
              </Link>
              <Link
                href="/services/data-analytics-cloud-ai"
                className="hover:text-white transition-colors"
              >
                Data, analytics, cloud & Ai
              </Link>
              <Link
                href="/services/digital-infra-ops"
                className="hover:text-white transition-colors"
              >
                Autonomous Infra and Ops
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2 text-zinc-600 dark:text-zinc-400">
              <Image src="/mbs-logo.svg" alt="Logo" width={150} height={35} />
            </div>
            <div>
              <Link
                href="/contact"
                className="border border-white rounded-sm py-3 px-6 text-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                <span className="font-zalando font-normal text-sm tracking-wide uppercase">
                  Contact Us
                </span>
              </Link>
            </div>
            {/* Social Icons */}
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
