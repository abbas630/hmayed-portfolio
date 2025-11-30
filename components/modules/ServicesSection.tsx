"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Creative Direction",
    description: "We don't just shoot food. We define the visual vocabulary of your brand.",
    tags: ["Visual Identity", "Art Direction"]
  },
  {
    id: "02",
    title: "Content Production",
    description: "High-fidelity video and photography designed for the feed. Slow-motion sensory triggers.",
    tags: ["4K Video", "Editorial Photo"]
  },
  {
    id: "03",
    title: "Ad Strategy",
    description: "Content is useless if nobody sees it. We manage distribution in Baghdad & Erbil.",
    tags: ["Meta Ads", "Audience Targeting"]
  }
];

export const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    // ADDED: id="growth-menu"
    <section id="growth-menu" className="bg-zinc-950 py-24 md:py-32 px-6 md:px-24 border-t border-white/10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
        <h2 className="text-4xl md:text-8xl font-bold uppercase text-primary leading-[0.8]">
          The <span className="text-accent">Menu</span>
        </h2>
        <p className="mt-4 md:mt-0 text-secondary text-xs md:text-sm uppercase tracking-widest max-w-xs md:text-right">
          A la carte solutions for <br/> scalable restaurant growth.
        </p>
      </div>

      {/* The List */}
      <div className="flex flex-col">
        {services.map((service) => (
          <motion.div 
            key={service.id}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            className={`group relative flex flex-col md:flex-row border-t border-white/10 py-8 md:py-12 transition-all duration-500 ${
                hoveredService && hoveredService !== service.id ? "md:opacity-30 md:blur-[2px]" : "opacity-100"
            }`}
          >
            {/* Content... (Same as before) */}
            <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-between items-center md:items-start mb-4 md:mb-0">
                <span className="text-accent font-mono text-xs md:text-sm">({service.id})</span>
                <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 rounded-full text-secondary">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full md:w-1/3 mb-2 md:mb-0">
                <h3 className="text-3xl md:text-5xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                </h3>
            </div>

            <div className="w-full md:w-1/3">
                <p className="text-secondary text-sm md:text-lg leading-relaxed max-w-sm group-hover:text-primary transition-colors">
                    {service.description}
                </p>
            </div>
          </motion.div>
        ))}
        <div className="w-full h-[1px] bg-white/10" />
      </div>

    </section>
  );
};