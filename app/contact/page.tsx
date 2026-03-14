import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import WorldMap from "@/components/sections/WorldMap";
import GetInTouch from "@/components/sections/GetInTouch";

export const metadata: Metadata = {
  title: "Contact Us | MBS Global",
  description:
    "Get in touch with the MBS Global team. Reach us by phone, email, or visit one of our offices worldwide.",
};

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-[#1F2123]">
      <ContactHero />
      <WorldMap />
      <GetInTouch />
    </main>
  );
};

export default ContactPage;
