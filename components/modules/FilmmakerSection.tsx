"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Baalbek Live",
    role: "Director of Photography",
    year: "2023",
    desc: "Capturing the ancient Roman grandeur meeting modern soundscapes. A visual symphony of light and stone.",
    img: "/assets/film-1.jpg", // Placeholder
  },
  {
    id: 2,
    title: "Baghdad Series",
    role: "Documentary Lead",
    year: "2024",
    desc: "An award-winning exploration of the new culinary wave in post-war Iraq. Gritty, raw, and hopeful.",
    img: "/assets/film-2.jpg", // Placeholder
  },
];

export const FilmmakerSection = () => {
  return (
    <section className="bg-zinc-950 py-32">
        <div className="container mx-auto px-4 md:px-12">
            
            {/* Section Header */}
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
                <h2 className="text-5xl md:text-8xl font-bold uppercase text-primary leading-[0.8]">
                    The <br/> <span className="text-accent">Auteur</span>
                </h2>
                <p className="mt-8 md:mt-0 max-w-md text-secondary text-sm md:text-base text-right">
                    From the temples of Baalbek to the streets of Baghdad.
                    Documenting culture through a cinematic lens.
                </p>
            </div>

            {/* Project Stack */}
            <div className="flex flex-col gap-32">
                {projects.map((project, index) => (
                    <ProjectBlock key={project.id} project={project} index={index} />
                ))}
            </div>

        </div>
    </section>
  );
};

const ProjectBlock = ({ project, index }: { project: any; index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax Effect: Image moves slower than the container
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    
    // Fade In Effect
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const isEven = index % 2 === 0;

    return (
        <motion.div 
            ref={ref}
            style={{ opacity }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
        >
            {/* Image Container with Parallax */}
            <div className="relative h-[60vh] w-full md:w-1/2 overflow-hidden bg-zinc-900">
                <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
                     <div className="h-full w-full bg-zinc-800" /> 
                     {/* Replace div above with: <img src={project.img} className="h-full w-full object-cover" /> */}
                     <div className="absolute inset-0 bg-black/20" />
                </motion.div>
                
                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                    {project.year}
                </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div className="flex flex-col">
                    <span className="text-accent text-sm uppercase tracking-widest font-semibold mb-2">
                        {project.role}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-primary">
                        {project.title}
                    </h3>
                </div>
                <p className="text-secondary text-lg leading-relaxed max-w-sm">
                    {project.desc}
                </p>
                
                {/* Minimal "Watch" Button */}
                <button className="w-fit flex items-center gap-4 text-primary uppercase tracking-widest text-xs group hover:text-accent transition-colors mt-4">
                    <span className="h-[1px] w-8 bg-current transition-all group-hover:w-16" />
                    Watch Teaser
                </button>
            </div>
        </motion.div>
    )
}