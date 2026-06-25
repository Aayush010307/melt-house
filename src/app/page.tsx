'use client';

import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
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
      <div className="bg-melt-cream py-24 md:py-28 px-6 md:px-10">
        <StaggerGrid className="flex flex-col md:flex-row gap-12 md:gap-16 justify-center max-w-3xl mx-auto text-center">
          <StaggerItem className="flex-1">
            <MapPin className="mx-auto mb-4 text-melt-pink" size={20} aria-hidden="true" />
            <p className="font-semibold text-melt-dark text-sm mb-2">Location</p>
            <p className="text-melt-mid text-sm leading-[1.75]">
              M3M IFC, Sector 66, Gurugram<br />Gurugram, Haryana
            </p>
          </StaggerItem>
          <StaggerItem className="flex-1">
            <Clock className="mx-auto mb-4 text-melt-pink" size={20} aria-hidden="true" />
            <p className="font-semibold text-melt-dark text-sm mb-2">Hours</p>
            <p className="text-melt-mid text-sm leading-[1.75]">
              Mon–Thu 8am–11pm<br />Fri–Sun 8am–12am
            </p>
          </StaggerItem>
          <StaggerItem className="flex-1">
            <Phone className="mx-auto mb-4 text-melt-pink" size={20} aria-hidden="true" />
            <p className="font-semibold text-melt-dark text-sm mb-2">Reserve</p>
            <a
              href="tel:+918691990290"
              aria-label="Call us at +91 86919 90290"
              className="text-melt-pink text-sm leading-[1.75] hover:opacity-70 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink rounded-sm"
            >
              +91 86919 90290
            </a>
          </StaggerItem>
        </StaggerGrid>

        <FadeIn delay={0.2} className="text-center mt-12">
          <Link
            href="/visit"
            className="text-melt-pink font-semibold text-sm hover:opacity-70 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink rounded-sm"
          >
            Get Directions →
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
