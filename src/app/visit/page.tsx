'use client';

import Link from 'next/link';

const HOURS = [
  { day: 'Monday – Friday',  time: '8:00 AM – 11:00 PM', days: [1, 2, 3, 4, 5] },
  { day: 'Saturday',         time: '8:00 AM – 12:00 AM', days: [6] },
  { day: 'Sunday',           time: '9:00 AM – 11:00 PM', days: [0] },
];

const TRANSPORT = [
  {
    label: 'Metro',
    desc: 'Sector 55–56 station, 7 min cab',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8186D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M8 6h8M8 10h8M8 16h2M14 16h2" />
      </svg>
    ),
  },
  {
    label: 'By Car',
    desc: 'Valet parking available at M3M IFC',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8186D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3v-4l2.5-6h11L19 13v4h-2" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
      </svg>
    ),
  },
  {
    label: 'Auto',
    desc: 'Golf Course Extension Road, main entrance',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8186D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 17v-5l3-6h7l3 6v5" />
        <path d="M4 12h14" />
        <circle cx="8" cy="17" r="1.5" />
        <circle cx="16" cy="17" r="1.5" />
        <path d="M18 8c1.5 0 3 1 3 3v6" />
      </svg>
    ),
  },
];

export default function VisitPage() {
  const today = new Date().getDay();

  return (
    <div style={{ background: '#1A1A1A', fontFamily: 'Inter, sans-serif' }}>

      {/* ── SECTION 1 · HERO ── */}
      <div style={{ padding: '62px 28px 40px' }}>
        <div style={{ font: '600 10px/1 Inter,sans-serif', letterSpacing: '.24em', textTransform: 'uppercase', color: '#FFE600' }}>
          Plan Your Visit
        </div>
        <h1 style={{ margin: '22px 0 0', font: '500 italic 54px/.98 "Playfair Display",serif', letterSpacing: '-.01em', color: '#FAF8F5' }}>
          Come Find Us.
        </h1>
        <p style={{ margin: '18px 0 0', font: '400 15px/1.5 Inter,sans-serif', color: '#8f877c' }}>
          We&apos;re easy to reach, hard to leave.
        </p>
        <div style={{ marginTop: '38px', height: '1px', background: 'rgba(255,255,255,.1)' }} />
      </div>

      {/* ── SECTION 2 · WHERE WE ARE ── */}
      <div style={{ background: '#FAF8F5', color: '#1A1A1A', padding: '46px 28px 48px' }}>
        <h2 style={{ margin: '0 0 22px', font: '500 30px/1 "Playfair Display",serif', color: '#1A1A1A' }}>
          Where We Are
        </h2>
        <p style={{ margin: 0, font: '400 15px/1.7 Inter,sans-serif', color: '#46423d' }}>
          Ground Floor, M3M International Financial Centre<br />
          Golf Course Extension Road, Sector 66<br />
          Gurugram, Haryana 122101
        </p>

        {/* Map placeholder */}
        <div style={{
          marginTop: '24px',
          height: '170px',
          borderRadius: '14px',
          background: 'linear-gradient(135deg, #ece4d8, #e3d8c6)',
          border: '1px solid rgba(26,26,26,.08)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}>
          {/* Grid-line overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(26,26,26,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,.05) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }} />
          {/* Map pin icon */}
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none" style={{ position: 'relative', zIndex: 1 }}>
            <path d="M11 0C4.925 0 0 4.925 0 11c0 7.656 9.947 14.484 10.363 14.766a1 1 0 001.274 0C12.053 25.484 22 18.656 22 11 22 4.925 17.075 0 11 0z" fill="#E8186D" />
            <circle cx="11" cy="11" r="4" fill="#fff" />
          </svg>
          <div style={{ position: 'relative', zIndex: 1, font: '600 10px/1 Inter,sans-serif', letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(26,26,26,.35)' }}>
            Map
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=M3M+IFC+Sector+66+Gurugram"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '18px', font: '600 14px/1 Inter,sans-serif', color: '#E8186D', textDecoration: 'none' }}
        >
          Get Directions →
        </a>
      </div>

      {/* ── SECTION 3 · HOURS ── */}
      <div style={{ padding: '48px 28px 46px' }}>
        <h2 style={{ margin: '0 0 22px', font: '500 30px/1 "Playfair Display",serif', color: '#FAF8F5' }}>
          When We&apos;re Open
        </h2>
        {HOURS.map((row) => {
          const isToday = row.days.includes(today);
          return (
            <div
              key={row.day}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,.1)', padding: '16px 0' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {isToday && (
                  <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: '#FFE600', boxShadow: '0 0 0 4px rgba(255,230,0,.18)', flexShrink: 0, display: 'inline-block' }} />
                )}
                <span style={{ font: '600 14.5px/1 Inter,sans-serif', color: isToday ? '#FFE600' : '#FAF8F5' }}>
                  {row.day}
                </span>
              </div>
              <span style={{ font: '400 14px/1 Inter,sans-serif', color: isToday ? '#FAF8F5' : '#8f877c' }}>
                {row.time}
              </span>
            </div>
          );
        })}
        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', marginBottom: '18px' }} />
        <p style={{ margin: 0, font: '400 12px/1.5 Inter,sans-serif', fontStyle: 'italic', color: '#6f675d' }}>
          Kitchen closes 1 hour before closing.
        </p>
      </div>

      {/* ── SECTION 4 · RESERVE ── */}
      <div style={{ background: '#E8186D', padding: '52px 30px' }}>
        <blockquote style={{ margin: 0, font: '500 italic 34px/1.1 "Playfair Display",serif', color: '#fff', letterSpacing: '-.01em' }}>
          Some tables go fast.
        </blockquote>
        <p style={{ margin: '16px 0 0', font: '400 14.5px/1.55 Inter,sans-serif', color: 'rgba(255,255,255,.82)' }}>
          Call or WhatsApp us to reserve your spot.
        </p>
        <p style={{ margin: '18px 0 0', font: '600 19px/1 Inter,sans-serif', color: '#fff' }}>
          +91 98765 43210
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '26px' }}>
          <a
            href="tel:+919876543210"
            style={{ flex: 1, textAlign: 'center', background: '#fff', color: '#E8186D', padding: '15px 8px', borderRadius: '999px', font: '700 14px/1 Inter,sans-serif', textDecoration: 'none' }}
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px', background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.55)', padding: '13.5px 8px', borderRadius: '999px', font: '600 14px/1 Inter,sans-serif', textDecoration: 'none' }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: '#25D366', flexShrink: 0 }} />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ── SECTION 5 · GETTING HERE ── */}
      <div style={{ padding: '48px 28px 44px' }}>
        <h2 style={{ margin: '0 0 24px', font: '500 30px/1 "Playfair Display",serif', color: '#FAF8F5' }}>
          Getting Here
        </h2>
        {TRANSPORT.map((row) => (
          <div key={row.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', borderTop: '1px solid rgba(255,255,255,.08)', padding: '20px 0' }}>
            <div style={{ width: '42px', height: '42px', flexShrink: 0, border: '1.5px solid rgba(232,24,109,.55)', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {row.icon}
            </div>
            <div>
              <div style={{ font: '600 15px/1.2 Inter,sans-serif', color: '#FAF8F5' }}>{row.label}</div>
              <div style={{ marginTop: '5px', font: '400 13px/1.5 Inter,sans-serif', color: '#8f877c' }}>{row.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── SECTION 6 · FOOTER CTA ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', padding: '40px 28px 52px', textAlign: 'center' }}>
        <p style={{ margin: 0, font: '500 italic 22px/1.3 "Playfair Display",serif', color: '#FAF8F5' }}>
          While you&apos;re planning...
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '22px' }}>
          <Link href="/menu" style={{ font: '600 14px/1 Inter,sans-serif', color: '#E8186D', textDecoration: 'none' }}>
            See Our Menu →
          </Link>
          <Link href="/about" style={{ font: '600 14px/1 Inter,sans-serif', color: '#E8186D', textDecoration: 'none' }}>
            Our Story →
          </Link>
        </div>
        <p style={{ marginTop: '30px', font: '500 10px/1 Inter,sans-serif', letterSpacing: '.16em', textTransform: 'uppercase', color: '#6f675d' }}>
          M3M IFC · Sector 66 · Gurugram
        </p>
      </div>

    </div>
  );
}
