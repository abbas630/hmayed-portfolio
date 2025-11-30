"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;        // The target number (e.g., 320)
  direction?: "up" | "down";
  prefix?: string;      // e.g., "+"
  suffix?: string;      // e.g., "%" or "k"
  label?: string;       // The small text below the number
}

export const AnimatedCounter = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  label 
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Only animate when the specific number enters the viewport
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Luxury Physics: No linear easing. This feels heavy and mechanical.
  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 3, // Takes 3 seconds to settle
  });

  // Trigger animation
  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  // Transform the raw number into a formatted string (no decimals)
  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString()
  );

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-baseline text-5xl md:text-7xl font-bold text-primary tracking-tighter">
        <span className="text-accent mr-1 text-4xl">{prefix}</span>
        <motion.span ref={ref}>
            {displayValue}
        </motion.span>
        <span className="text-accent ml-1 text-4xl">{suffix}</span>
      </div>
      {label && (
        <span className="mt-2 text-sm uppercase tracking-widest text-secondary font-medium">
          {label}
        </span>
      )}
    </div>
  );
};