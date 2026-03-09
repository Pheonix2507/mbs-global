import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "/about-us" },
    { name: "Solutions", href: "#solutions" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center">
      <div className="flex w-full items-center justify-between px-30 py-3 backdrop-blur-md dark:bg-black/20">
        <Link
          href="/"
          className="font-zalando text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          <Image src="/mbs-logo.png" alt="Logo" width={200} height={43} />
        </Link>
        <div className="hidden gap-20 md:flex items-center justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-semibold"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
