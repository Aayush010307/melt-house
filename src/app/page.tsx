'use client';

import Link from 'next/link';
import { menuData } from '@/data/menu';
import MenuItemCard from '@/components/menu/MenuItemCard';
import HeroContent from '@/components/home/HeroContent';
import FadeIn from '@/components/ui/FadeIn';
import { StaggerGrid, StaggerItem } from '@/components/ui/StaggerChildren';

const signatures = menuData
  .flatMap((category) => category.items)
  .filter((item) => item.isSignature)
  .slice(0, 6);

const images = [
  { src: '/images/15dce645ddb23ae4c4c2de8ce6da3b19.jpg', alt: 'Melt House interior' },
  { src: '/images/25fd868da84882de788522ae66d265f0.jpg', alt: 'Melt House coffee' },
  { src: '/images/37d4cd205a8181041a68032da3861ca9 (1).jpg', alt: 'Melt House food' },
  { src: '/images/37d4cd205a8181041a68032da3861ca9.jpg', alt: 'Melt House ambience' },
  { src: '/images/398db6ff43c86951625e71d5ee816eb6.jpg', alt: 'Melt House drinks' },
  { src: '/images/75f09bd29384d7f43623ed7bf7fa949b.jpg', alt: 'Melt House brunch' },
  { src: '/images/825a8e12100c50b2f8d2e35a3e9c12c7.jpg', alt: 'Melt House dessert' },
  { src: '/images/ad5b3a54fd9881dd390f1c13408c6442.jpg', alt: 'Melt House space' },
  { src: '/images/d053771da0fcb8d8fb266c1df016cce0.jpg', alt: 'Melt House bar' },
  { src: '/images/e459fe6a050601efc3c76a784019172c.jpg', alt: 'Melt House table' },
];

export default function Home() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <div className="min-h-svh bg-melt-dark flex flex-col items-center justify-center relative">
        <HeroContent />
      </div>

      {/* SECTION 2 — Image Marquee */}
      <section className="bg-melt-dark py-14 overflow-hidden">
        <p className="text-center text-melt-pink text-xs font-semibold tracking-widest uppercase mb-8">
          The Space
        </p>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              width: 'max-content',
              animation: 'marquee 35s linear infinite',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
            onTouchStart={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
            onTouchEnd={(e) => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {[...images, ...images].map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="h-64 md:h-80 rounded-2xl object-cover shrink-0 shadow-lg"
                style={{ width: '240px' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Signature Picks */}
      <div className="bg-melt-dark py-28 md:py-36 px-6 md:px-10">
        <FadeIn className="text-center mb-16 md:mb-20">
          <p className="text-melt-pink text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">
            The Menu
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            Our Signatures
          </h2>
          <p className="text-white/50 text-sm mt-4 max-w-xs mx-auto leading-relaxed">
            The dishes and drinks that made us famous.
          </p>
        </FadeIn>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {signatures.map((item) => (
            <StaggerItem key={item.id}>
              <MenuItemCard item={item} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <FadeIn delay={0.2} className="text-center mt-12">
          <Link
            href="/menu"
            className="text-melt-pink text-sm font-semibold hover:opacity-70 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink rounded-sm"
          >
            View Full Menu →
          </Link>
        </FadeIn>
      </div>

      {/* SECTION 4 — The Vibe */}
      <div className="bg-melt-dark py-28 md:py-36 px-6 md:px-10 text-center">
        <FadeIn>
          <p className="text-melt-yellow/70 text-[11px] font-semibold tracking-[0.22em] uppercase mb-6">
            Our Story
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-10">
            More than a Café
          </h2>
          <p className="text-white/45 text-sm md:text-base leading-[1.9] max-w-xl mx-auto mb-5">
            Melt House was born from a simple belief — that great food and exceptional coffee should
            feel effortless. Tucked inside M3M IFC, Gurugram, we&apos;ve built a space where mornings feel slower,
            brunches last longer, and every evening turns into a story worth telling.
          </p>
          <p className="text-white/45 text-sm md:text-base leading-[1.9] max-w-xl mx-auto mb-10">
            From our legendary Tiramisu Latte to our wood-fired Pepperoni Hot Honey pizza, everything
            on our menu is made with obsessive attention to detail — and a lot of love.
          </p>
          <Link
            href="/about"
            className="text-melt-pink text-sm font-semibold inline-block hover:opacity-70 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink rounded-sm"
          >
            Read Our Story →
          </Link>
        </FadeIn>
      </div>

      {/* SECTION 5 — Quick Visit Info */}
      <section className="bg-melt-cream py-16 px-6">
        <h2 className="font-display text-3xl font-bold text-melt-dark text-center mb-10">Find Us</h2>

        <div className="max-w-sm mx-auto space-y-6">

          {/* Location */}
          <div className="bg-white rounded-2xl p-6 border border-melt-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-melt-pink text-lg">📍</span>
              <span className="font-semibold text-melt-dark text-sm">Location</span>
            </div>
            <p className="text-melt-mid text-sm leading-relaxed">
              M3M IFC, Sector 66<br />Gurugram, Haryana — 122101
            </p>
            <a
              href="https://maps.google.com/?q=M3M+International+Financial+Centre+Sector+66+Gurugram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-melt-pink text-xs font-semibold mt-3 inline-block"
            >
              Open in Maps →
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl p-6 border border-melt-border">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-melt-pink text-lg">🕐</span>
              <span className="font-semibold text-melt-dark text-sm">Hours</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-melt-dark">Mon – Thu</span>
                <span className="text-melt-mid">8am – 11pm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-melt-dark">Fri – Sun</span>
                <span className="text-melt-mid">8am – 12am</span>
              </div>
            </div>
          </div>

          {/* Reserve */}
          <div className="bg-melt-pink rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-white text-lg">📞</span>
              <span className="font-semibold text-white text-sm">Reserve a Table</span>
            </div>
            <p className="text-white/70 text-xs mb-4">
              Walk-ins welcome · Groups of 6+ call ahead
            </p>
            <a
              href="tel:+918691990290"
              className="block w-full bg-white text-melt-pink font-bold text-center py-3 rounded-xl text-sm"
            >
              +91 86919 90290
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
