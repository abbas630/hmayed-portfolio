"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  
  const scrollToMenu = () => {
    const menuSection = document.getElementById("growth-menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      
      {/* 0. BRANDING (New) */}
      <div className="absolute top-8 left-6 md:left-12 z-50 mix-blend-difference">
        <span className="text-2xl font-black tracking-tighter text-primary uppercase">
            Hmayed
        </span>
      </div>

      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/hero-bg.mp4" 
          autoPlay
          loop
          muted
          playsInline 
          className="h-full w-full object-cover scale-110" 
          style={{ filter: "contrast(1.2) brightness(0.6) saturate(1.5)" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950 z-10" />
        <div className="absolute inset-0 opacity-20 contrast-150 mix-blend-overlay pointer-events-none z-10" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
        />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-20 flex h-full flex-col justify-center px-6 md:px-24">
        
        {/* Headline Group */}
        <div className="flex flex-col relative z-20 group cursor-default mt-12 md:mt-0">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }}
              className="text-6xl md:text-[10rem] font-bold uppercase leading-[0.9] md:leading-[0.85] tracking-tighter text-primary mix-blend-difference transition-all duration-500 group-hover:mix-blend-normal group-hover:text-accent"
            >
              Great Food,
            </motion.h1>
          </div>
          
          <div className="flex items-center gap-4 overflow-hidden">
             <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.6, 0.01, 0.05, 0.95] }}
                className="text-6xl md:text-[10rem] font-bold uppercase leading-[0.9] md:leading-[0.85] tracking-tighter text-transparent stroke-text drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:text-primary group-hover:drop-shadow-none"
                style={{ WebkitTextStroke: "1px #D94E1F" }} 
              >
                 <span className="group-hover:[--webkit-text-stroke:0px] group-hover:[-webkit-text-stroke:0px]">
                    Weak Brand?
                 </span>
              </motion.h1>
          </div>
        </div>

        {/* Pitch Section */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 md:mt-16 flex flex-col md:flex-row md:items-end justify-between border-t border-white/10 pt-6 md:pt-8 bg-zinc-950/80 backdrop-blur-md p-6 rounded-2xl md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none"
        >
            <div className="max-w-xl">
                <p className="text-xl md:text-2xl text-primary font-medium mb-4 leading-tight">
                    You’ve mastered the menu. <br/>
                    <span className="text-accent">Now, let me master the message.</span>
                </p>
                <p className="text-secondary font-light leading-relaxed text-sm md:text-lg">
                    I create content that turns <span className="text-stone-500 line-through decoration-red-500/30">casual scrollers</span> into <br/>
                    {/* UPDATED: Solid Saffron Color */}
                    <span className="text-accent font-bold text-lg md:text-xl">
                        loyal regulars.
                    </span>
                </p>
            </div>

            <div className="mt-6 md:mt-0">
                {/* UPDATED: onClick handler */}
                <button 
                    onClick={scrollToMenu}
                    className="w-full md:w-auto group flex items-center justify-center gap-3 px-6 py-4 bg-primary text-black font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-accent hover:text-white transition-all duration-300 rounded-lg md:rounded-none"
                >
                    <span>Close The Gap</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};