import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'About | Melt House',
};

export default function AboutPage() {
  return (
    <div className="bg-melt-cream">

      {/* Hero */}
      <div className="bg-melt-dark py-24 md:py-32 px-6 text-center">
        <FadeIn>
          <p className="text-melt-yellow/70 text-[11px] font-semibold tracking-[0.22em] uppercase mb-6">
            Melt House · Est. 2024
          </p>
          <h1 className="font-display font-bold text-white leading-[0.92] tracking-tight text-[52px] md:text-[72px] lg:text-[88px]">
            Our Story
          </h1>
          <p className="text-white/35 text-sm mt-6">Born in Mumbai. Built on obsession.</p>
        </FadeIn>
      </div>

      {/* Story */}
      <div className="bg-melt-cream">
        <div className="max-w-2xl mx-auto py-20 md:py-28 px-6 md:px-10">
          <FadeIn>
            <p className="text-melt-dark text-base leading-[1.85] mb-8">
              Melt House opened its doors at IFC Mall with one mission: to prove that Mumbai deserves
              a world-class all-day café that doesn&apos;t compromise. Not on the coffee. Not on the food.
              Not on the atmosphere.
            </p>
            <p className="text-melt-dark text-base leading-[1.85] mb-8">
              Every item on our menu went through dozens of iterations. The Tiramisu Latte was tested
              seventeen times before it made the cut. Our sourdough is fermented for 48 hours. The hot
              chocolate — the one that started it all — took three months to perfect.
            </p>
            <p className="text-melt-dark text-base leading-[1.85]">
              We&apos;re obsessive about sourcing. Our espresso is a custom dark roast blend from a
              specialty roastery. Our matcha is ceremonial grade. Our produce is sourced fresh every
              morning from the local market.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Quote divider */}
      <FadeIn>
        <div className="bg-melt-pink py-20 md:py-24 px-6 md:px-16 text-center">
          <p className="font-display text-2xl md:text-3xl italic text-white leading-[1.4] max-w-2xl mx-auto">
            &ldquo;Great food should feel effortless. Getting there is anything but.&rdquo;
          </p>
          <p className="text-white/55 text-sm mt-5">— The Melt House Team</p>
        </div>
      </FadeIn>

      {/* Philosophy */}
      <div className="bg-melt-cream">
        <div className="max-w-2xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-melt-dark tracking-tight mb-14">
              What We Stand For
            </h2>
          </FadeIn>

          {[
            {
              title: 'No shortcuts.',
              body: 'From our 24-hour fermented sourdough to our slow-brewed cold brew, we do things the long way because the result is worth it.',
            },
            {
              title: 'A space for everyone.',
              body: "Whether you're here for a solo morning coffee, a long Sunday brunch with your family, or late-night cocktails with friends — Melt House has a seat for you.",
            },
            {
              title: 'Mumbai, always.',
              body: "We're deeply rooted in this city. Our Chettinad Chicken Benedict, our Delhi Cold Coffee, our Nahari Sando — the menu is a love letter to India, filtered through a global lens.",
            },
          ].map(({ title, body }, i) => (
            <FadeIn key={title} delay={i * 0.1} className="mb-12 last:mb-0">
              <p className="text-[11px] font-bold text-melt-dark uppercase tracking-[0.18em] mb-3">{title}</p>
              <p className="text-melt-mid text-base leading-[1.75]">{body}</p>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-melt-dark py-20 md:py-24 px-6 text-center">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            Come taste the difference.
          </h2>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <Link
              href="/menu"
              className="bg-melt-pink text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink"
            >
              Our Menu
            </Link>
            <Link
              href="/visit"
              className="border border-white/50 text-white/80 px-8 py-3.5 rounded-full text-sm font-semibold hover:border-white hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-melt-dark"
            >
              Visit Us
            </Link>
          </div>
        </FadeIn>
      </div>

    </div>
  );
}
