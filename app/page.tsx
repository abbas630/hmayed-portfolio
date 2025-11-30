import { Hero } from "@/components/modules/Hero";
import { FandBSection } from "@/components/modules/FandBSection";
import { ServicesSection } from "@/components/modules/ServicesSection";
import { ContactFooter } from "@/components/modules/ContactFooter";

export default function Home() {
  return (
    <main className="w-full bg-background text-primary">
    
      <Hero />
      
    
      <FandBSection />
      
    
      <ServicesSection />
      
      
      <ContactFooter />
    </main>
  );
}