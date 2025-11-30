"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const cards = [
  {
    id: 1,
    client: "Tia’s House",
    category: "Mexican / Latin",
    value: 240,
    prefix: "+",
    suffix: "%",
    label: "Weekend Footfall",
    problem: "Great menu, but empty tables on weeknights.",
    solution: "High-energy, texture-focused visuals that framed the restaurant as the city's social hub.",
    img: "/assets/tias-house.jpg", 
  },
  {
    id: 2,
    client: "Gia La Cucina",
    category: "Italian Fine Dining",
    value: 85,
    prefix: "$",
    suffix: "",
    label: "Avg. Order Value",
    problem: "Customers were ordering pizza, skipping the high-margin wine & seafood.",
    solution: "Cinematic storytelling focused on the 'Romance' of the ingredients, driving upsells.",
    img: "/assets/gia-italian.jpg",
  },
  {
    id: 3,
    client: "Mögetee | Hun & Pot",
    category: "Asian Fusion / Tea",
    value: 1.2,
    prefix: "",
    suffix: "M",
    label: "Viral Reach",
    problem: "A complex menu that intimidated new customers.",
    solution: "Short-form 'How-to-Eat' video edits that demystified the Hot Pot experience for Gen Z.",
    img: "/assets/mogetee.jpg",
  },
];

export const FandBSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // NOTE: We allow this logic to run on Mobile now as requested.
  // It gives a "Sticky App-Like" feel on the phone.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] 
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    // Height is 300vh to ensure enough scroll room for the horizontal animation
    <section ref={targetRef} className="relative h-[300vh] bg-surface">
      
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen flex-col md:flex-row items-center overflow-hidden py-12 md:py-0">
        
        {/* Section Marker */}
        <div className="absolute left-6 top-6 md:left-8 md:top-8 z-20 text-accent uppercase tracking-widest text-xs font-bold">
           02. The Track Record
        </div>

        <motion.div 
            style={{ x }} 
            className="flex flex-row gap-8 md:gap-16 px-6 md:px-24 w-auto h-full items-center"
        >
          
          {/* Intro Text Block */}
          <div className="flex w-[80vw] md:w-[30vw] flex-col justify-center shrink-0">
             <h2 className="text-4xl md:text-7xl font-bold text-primary leading-tight">
                {/* UPDATED: Copy Change */}
               Offline Success, <br/> <span className="text-accent">Online Ghost.</span>
             </h2>
             <p className="mt-4 md:mt-8 text-secondary leading-relaxed max-w-md text-sm md:text-lg">
               We don't guess. We test. <br/>
               From viral tea spots to high-end Italian dining, our lens is calibrated to drive specific business outcomes.
             </p>
          </div>

          {/* Cards */}
          {cards.map((card) => (
            <div key={card.id} className="group relative h-[60vh] md:h-[70vh] w-[85vw] md:w-[45vw] shrink-0 overflow-hidden border border-white/10 bg-zinc-900 rounded-lg md:rounded-none">
              
              {/* Image Layer */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                    src={card.img} 
                    alt={card.client} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
              </div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] md:text-xs uppercase tracking-widest text-white/90 backdrop-blur-md bg-black/30">
                        {card.category}
                    </span>
                </div>

                <div>
                    <div className="mb-4 md:mb-8">
                        <AnimatedCounter 
                            value={card.value} 
                            prefix={card.prefix} 
                            suffix={card.suffix} 
                            label={card.label} 
                        />
                    </div>

                    <div className="space-y-2 md:space-y-4 border-t border-white/20 pt-4 md:pt-6">
                        <div>
                            <span className="text-[10px] text-secondary uppercase tracking-wider block mb-1">Challenge</span>
                            <p className="text-xs md:text-sm text-stone-200 leading-relaxed line-clamp-2 md:line-clamp-none">{card.problem}</p>
                        </div>
                        <div>
                            <span className="text-[10px] text-accent uppercase tracking-wider block mb-1">Strategic Fix</span>
                            <p className="text-xs md:text-sm text-white font-medium leading-relaxed line-clamp-2 md:line-clamp-none">{card.solution}</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
          
        </motion.div>
      </div>
    </section>
  );
};