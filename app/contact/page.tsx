import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import WorldMap from "@/components/sections/WorldMap";
import GetInTouch from "@/components/sections/GetInTouch";
import { fetchStrapi } from "@/lib/strapi";
import { StrapiContactUs } from "@/lib/strapi-types";

export const metadata: Metadata = {
  title: "Contact Us | MBS Global",
  description:
    "Get in touch with the MBS Global team. Reach us by phone, email, or visit one of our offices worldwide.",
};

const ContactPage = async () => {
  const response = await fetchStrapi<{ data: StrapiContactUs }>("/contact-us");
  const contactData = response.data;
  
  return (
    <main className="min-h-screen bg-[#1F2123]">
      <ContactHero />
      <WorldMap data={contactData?.location} />
      <GetInTouch />
    </main>
  );
};

export default ContactPage;
