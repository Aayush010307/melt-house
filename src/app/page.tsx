import Link from 'next/link';
import { MapPin, Clock, Phone } from 'lucide-react';
import { menuData } from '@/data/menu';
import MenuItemCard from '@/components/menu/MenuItemCard';
import HeroContent from '@/components/home/HeroContent';
import ImageMarquee from '@/components/home/ImageMarquee';
import FadeIn from '@/components/ui/FadeIn';
import { StaggerGrid, StaggerItem } from '@/components/ui/StaggerChildren';

const signatures = menuData
  .flatMap((category) => category.items)
  .filter((item) => item.isSignature)
  .slice(0, 6);

export default function Home() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <div className="min-h-svh bg-melt-dark flex flex-col items-center justify-center relative">
        <HeroContent />
      </div>

      {/* SECTION 2 — Image Marquee */}
      <ImageMarquee />

      {/* SECTION 3 — Signature Picks */}
      <div className="bg-melt-cream py-28 md:py-36 px-6 md:px-10">
        <FadeIn className="text-center mb-16 md:mb-20">
          <p className="text-melt-pink text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">
            The Menu
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-melt-dark leading-[1.05] tracking-tight">
            Our Signatures
          </h2>
          <p className="text-melt-mid/70 text-sm mt-4 max-w-xs mx-auto leading-relaxed">
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
            feel effortless. Tucked inside IFC Mall, we&apos;ve built a space where mornings feel slower,
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
