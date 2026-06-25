'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

export default function HeroContent() {
  const reduced = useReducedMotion();

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease: 'easeOut' as const },
  });

  return (
    <div className="relative z-10 text-center px-6 md:px-10 max-w-5xl mx-auto">
      <motion.p
        {...fade(0)}
        className="text-melt-yellow/80 text-[11px] font-semibold tracking-[0.22em] uppercase mb-7"
      >
        M3M IFC · Sector 66 · Gurugram
      </motion.p>

      <motion.h1
        {...fade(0.18)}
        className="font-display font-bold text-white leading-[0.92] tracking-tight text-[56px] sm:text-[72px] md:text-[90px] lg:text-[108px]"
      >
        Where Every Sip<br />Tells a Story.
      </motion.h1>

      <motion.p
        {...fade(0.34)}
        className="text-white/50 text-sm md:text-base mt-8 max-w-sm mx-auto leading-[1.75]"
      >
        Gurugram&apos;s most loved café — from your morning flat white to your midnight cocktail.
      </motion.p>

      <motion.div {...fade(0.48)} className="flex gap-4 mt-12 justify-center flex-wrap">
        <Link
          href="/menu"
          className="bg-melt-pink text-white px-9 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-melt-dark"
        >
          See Our Menu
        </Link>
        <Link
          href="/visit"
          className="border border-white/50 text-white/80 px-9 py-3.5 rounded-full font-semibold text-sm hover:border-white hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-melt-dark"
        >
          Find Us
        </Link>
      </motion.div>
    </div>
  );
}
