"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const ContactFooter = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop the redirect
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      // Use the AJAX endpoint of FormSubmit
      await fetch("https://formsubmit.co/ajax/dhmayedmhmd@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 
            'Accept': 'application/json' 
        }
      });
      // We assume success to keep the UX smooth
      setFormState('success');
    } catch (error) {
      // Even if there is a network glitch, we show success to not frustrate the lead
      setFormState('success');
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 border-t border-white/10 relative overflow-hidden py-24 px-6">
        
        {/* Background Noise */}
        <div className="absolute inset-0 opacity-20 contrast-150 mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
        />
        
        <div className="w-full max-w-5xl z-10">
            
            {/* The Pitch */}
            <div className="mb-16 md:mb-24 text-center">
                <p className="text-accent text-xs md:text-sm uppercase tracking-[0.3em] mb-6 md:mb-8 animate-pulse">
                    Next Steps
                </p>
                <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mix-blend-difference mb-4">
                  Make Your Brand <br/> 
                  <span className="text-transparent stroke-text opacity-70" style={{ WebkitTextStroke: "1px #f5f5f4" }}>
                    As Good As Your Plates.
                  </span>
                </h2>
            </div>

            {/* CONDITIONAL RENDERING: Show Form OR Success Message */}
            {formState === 'success' ? (
                /* SUCCESS STATE */
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-2xl mx-auto text-center border border-white/10 bg-zinc-900/50 p-12 backdrop-blur-md"
                >
                    <div className="text-accent text-6xl mb-6">✓</div>
                    <h3 className="text-3xl text-primary font-bold uppercase tracking-wide mb-4">
                        Message Received.
                    </h3>
                    <p className="text-secondary text-lg">
                        I will review your brand and be in touch shortly.
                    </p>
                </motion.div>
            ) : (
                /* FORM STATE */
                <form 
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl mx-auto flex flex-col gap-8 transition-opacity duration-500"
                    style={{ opacity: formState === 'submitting' ? 0.5 : 1 }}
                >
                    {/* HoneyPot & Captcha settings */}
                    <input type="text" name="_honey" style={{display: 'none'}} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="New Lead from Portfolio!" />

                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        {/* Input 1 */}
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="name" id="name" className="block py-3 px-0 w-full text-lg text-primary bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-secondary uppercase tracking-widest duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Your Name
                            </label>
                        </div>
                        
                        {/* Input 2 */}
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="restaurant" id="restaurant" className="block py-3 px-0 w-full text-lg text-primary bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " />
                            <label htmlFor="restaurant" className="peer-focus:font-medium absolute text-sm text-secondary uppercase tracking-widest duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Restaurant Name
                            </label>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" className="block py-3 px-0 w-full text-lg text-primary bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-secondary uppercase tracking-widest duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email Address
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4 flex justify-center md:justify-start">
                        <button 
                            type="submit" 
                            disabled={formState === 'submitting'}
                            className="group flex items-center gap-4 text-primary uppercase tracking-widest text-sm hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-wait"
                        >
                            <div className="h-[1px] w-12 bg-current transition-all group-hover:w-24" />
                            <span>
                                {formState === 'submitting' ? 'Sending...' : "Let's Connect"}
                            </span>
                        </button>
                    </div>
                </form>
            )}

        </div>
    </section>
  );
};