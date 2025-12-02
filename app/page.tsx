import { Hero } from "@/components/modules/Hero";
import { FandBSection } from "@/components/modules/FandBSection";
import { ServicesSection } from "@/components/modules/ServicesSection";
import { BioSection } from "@/components/modules/BioSection"; // <--- Import
import { ContactFooter } from "@/components/modules/ContactFooter";

export default function Home() {
  return (
    <main className="w-full bg-background text-primary">
      <Hero />
      <FandBSection />
      <ServicesSection />
      <BioSection /> {/* <--- Placed between Menu and Footer */}
      <ContactFooter />
    </main>
  );
}
