"use client";

import { motion } from "framer-motion";

export const BioSection = () => {
  return (
    <section className="min-h-screen bg-zinc-950 flex items-center justify-center py-24 px-6 md:px-24 border-t border-white/10">
      
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* 1. The Portrait (Visual Weight) */}
        <div className="w-full md:w-1/2 relative">
            {/* TODO: Replace with a real photo of Hmayed.
               Name it: /assets/hmayed-portrait.jpg
            */}
            <div className="aspect-[3/4] w-full bg-zinc-900 relative overflow-hidden group">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900" />
                
                {/* If you have a photo, uncomment this:
                <img 
                    src="/assets/hmayed-portrait.jpg" 
                    alt="Hmayed" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                /> 
                */}

                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-white/10 z-10" />
                
                {/* Label */}
                <div className="absolute bottom-8 left-8 z-20">
                    <p className="text-accent text-xs uppercase tracking-[0.3em] font-bold">
                        The Director
                    </p>
                </div>
            </div>
        </div>

        {/* 2. The Narrative (Text) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-bold uppercase text-primary leading-[0.85] mb-8"
            >
                More Than <br/> 
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #D94E1F" }}>
                    Just Content.
                </span>
            </motion.h2>

            <div className="space-y-6 text-secondary text-lg font-light leading-relaxed">
                <p>
                    I didn’t start in marketing. I started in <span className="text-white font-medium">cinema</span>.
                </p>
                <p>
                    From documenting the ancient grandeur of the <span className="text-accent">Baalbek Festival</span> to filming award-winning series in the gritty streets of <span className="text-accent">Iraq</span>, I learned one truth: 
                </p>
                <p className="text-primary text-xl font-medium italic border-l-2 border-accent pl-6 py-2">
                    "If you don't feel it, you won't remember it."
                </p>
                <p>
                    Today, I apply that documentary precision to Food & Beverage. I don't just make food look "pretty." I find the narrative in the kitchen and the drama in the dish. 
                    I turn restaurants into brands that people don't just eat at—they subscribe to.
                </p>
            </div>

            {/* Signature / Stats */}
            <div className="mt-12 flex gap-12 border-t border-white/10 pt-8">
                <div>
                    <span className="block text-3xl font-bold text-white">4+</span>
                    <span className="text-xs uppercase tracking-widest text-secondary">Years Exp</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white">2</span>
                    <span className="text-xs uppercase tracking-widest text-secondary">Cities Base</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white">100%</span>
                    <span className="text-xs uppercase tracking-widest text-secondary">Cinema</span>
                </div>
            </div>

        </div>

      </div>

    </section>
  );
};
