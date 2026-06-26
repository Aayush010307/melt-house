import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About | Melt House' };

export default function AboutPage() {
  const values = [
    { num: '01', title: 'No shortcuts.', desc: "If it takes seventeen tries or a 48-hour ferment, that's what it takes. Quality is the only deadline." },
    { num: '02', title: 'A space for everyone.', desc: "Solo with a laptop, a long brunch, a late glass of wine — the room bends to your day, not the other way around." },
    { num: '03', title: 'Gurugram, always.', desc: "We're proud to be from here, built for the people who call this city home." },
  ];

  return (
    <div style={{ background: '#1A1A1A', color: '#FAF8F5', fontFamily: 'Inter, sans-serif' }}>

      {/* 1 — HERO */}
      <div style={{ padding: '64px 28px 56px' }}>
        <div style={{ font: '600 10px/1 Inter,sans-serif', letterSpacing: '.24em', textTransform: 'uppercase', color: '#FFE600' }}>
          Est. 2023 · Gurugram
        </div>
        <h1 style={{ margin: '22px 0 0', font: '500 italic 56px/.98 "Playfair Display",serif', letterSpacing: '-.01em', color: '#FAF8F5' }}>
          Our Story
        </h1>
        <p style={{ margin: '20px 0 0', font: '400 15px/1.5 Inter,sans-serif', color: '#8f877c', maxWidth: '280px' }}>
          Born from obsession. Built for Gurugram.
        </p>
      </div>

      {/* 2 — STORY */}
      <div style={{ background: '#FAF8F5', color: '#1A1A1A', padding: '48px 28px 52px' }}>
        <p style={{ margin: 0, font: '400 15.5px/1.78 Inter,sans-serif', color: '#2b2825' }}>
          <span style={{ float: 'left', font: '600 italic 62px/.78 "Playfair Display",serif', color: '#E8186D', margin: '6px 12px 0 0' }}>M</span>
          elt House opened at M3M IFC with one mission — prove that Gurugram deserves a world-class all-day café that doesn&apos;t compromise. Not on the coffee. Not on the food.
        </p>
        <p style={{ margin: '24px 0 0', font: '400 15.5px/1.78 Inter,sans-serif', color: '#46423d' }}>
          Every item went through dozens of iterations. The Tiramisu Latte was tested seventeen times. Our sourdough ferments for 48 hours. The hot chocolate took three months to perfect.
        </p>
        <p style={{ margin: '24px 0 0', font: '400 15.5px/1.78 Inter,sans-serif', color: '#46423d' }}>
          We&apos;re obsessive about sourcing. Ceremonial grade matcha. Custom dark roast espresso blend. Produce sourced fresh every morning.
        </p>
      </div>

      {/* 3 — PULL QUOTE */}
      <div style={{ background: '#E8186D', padding: '56px 30px' }}>
        <div style={{ font: '600 76px/1 "Playfair Display",serif', color: 'rgba(255,255,255,.32)', height: '34px' }}>&ldquo;</div>
        <blockquote style={{ margin: 0, font: '500 italic 27px/1.32 "Playfair Display",serif', color: '#fff', letterSpacing: '-.01em' }}>
          Great food should feel effortless. Getting there is anything but.
        </blockquote>
        <div style={{ marginTop: '24px', font: '600 12px/1 Inter,sans-serif', letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)' }}>
          — The Melt House Team
        </div>
      </div>

      {/* 4 — VALUES */}
      <div style={{ padding: '56px 28px 50px' }}>
        <div style={{ font: '600 10px/1 Inter,sans-serif', letterSpacing: '.24em', textTransform: 'uppercase', color: '#FFE600', marginBottom: '34px' }}>
          Our Values
        </div>
        {values.map((v) => (
          <div key={v.num} style={{ borderTop: '1px solid rgba(255,255,255,.1)', padding: '24px 0' }}>
            <div style={{ font: '700 12px/1 Inter,sans-serif', color: '#E8186D', letterSpacing: '.06em' }}>{v.num}</div>
            <div style={{ marginTop: '12px', font: '600 21px/1.15 "Playfair Display",serif', color: '#FAF8F5' }}>{v.title}</div>
            <div style={{ marginTop: '9px', font: '400 13.5px/1.6 Inter,sans-serif', color: '#8f877c', maxWidth: '300px' }}>{v.desc}</div>
          </div>
        ))}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }} />
      </div>

      {/* 5 — CTA */}
      <div style={{ padding: '8px 28px 64px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 26px', font: '500 italic 34px/1.12 "Playfair Display",serif', color: '#FAF8F5' }}>
          Come taste the difference.
        </h2>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/menu" style={{ flex: 1, textAlign: 'center', background: '#E8186D', color: '#fff', padding: '16px 8px', borderRadius: '999px', font: '600 14px Inter,sans-serif', textDecoration: 'none', boxShadow: '0 8px 24px rgba(232,24,109,.34)' }}>
            Our Menu
          </Link>
          <Link href="/visit" style={{ flex: 1, textAlign: 'center', background: 'transparent', color: '#FAF8F5', border: '1.5px solid rgba(250,248,245,.35)', padding: '14.5px 8px', borderRadius: '999px', font: '600 14px Inter,sans-serif', textDecoration: 'none' }}>
            Visit Us
          </Link>
        </div>
      </div>

    </div>
  );
}
