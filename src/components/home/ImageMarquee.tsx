'use client';

import { motion, useReducedMotion } from 'framer-motion';

const IMAGES = [
  '/images/15dce645ddb23ae4c4c2de8ce6da3b19.jpg',
  '/images/25fd868da84882de788522ae66d265f0.jpg',
  '/images/37d4cd205a8181041a68032da3861ca9 (1).jpg',
  '/images/37d4cd205a8181041a68032da3861ca9.jpg',
  '/images/398db6ff43c86951625e71d5ee816eb6.jpg',
  '/images/75f09bd29384d7f43623ed7bf7fa949b.jpg',
  '/images/825a8e12100c50b2f8d2e35a3e9c12c7.jpg',
  '/images/ad5b3a54fd9881dd390f1c13408c6442.jpg',
  '/images/d053771da0fcb8d8fb266c1df016cce0.jpg',
  '/images/e459fe6a050601efc3c76a784019172c.jpg',
];

// Duplicate so the seam is invisible: animate 0% → -50%
const TRACK = [...IMAGES, ...IMAGES];

export default function ImageMarquee() {
  const reduced = useReducedMotion();

  return (
    <div className="bg-melt-dark py-14 overflow-hidden">
      <p className="text-melt-pink text-xs font-semibold tracking-widest uppercase text-center mb-6">
        The Space
      </p>

      <motion.div
        className="flex"
        animate={reduced ? undefined : { x: ['0%', '-50%'] }}
        transition={{
          duration: 70,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {TRACK.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className="h-64 md:h-80 w-auto rounded-2xl object-cover mx-3 shadow-lg shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}
