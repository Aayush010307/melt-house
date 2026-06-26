'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { num: '01', href: '/menu',  label: 'Menu'  },
  { num: '02', href: '/about', label: 'About' },
  { num: '03', href: '/visit', label: 'Visit' },
];

function DrawerLink({ num, href, label, onClose }: { num: string; href: string; label: string; onClose: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onClick={onClose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '26px 28px', borderBottom: '1px solid rgba(255,255,255,.07)', textDecoration: 'none' }}
    >
      <span style={{
        font: '600 10px/1 Inter,sans-serif',
        color: '#E8186D',
        letterSpacing: '.08em',
        paddingTop: '8px',
        textShadow: hovered ? '0 0 14px rgba(255,230,0,.5)' : 'none',
        transition: 'text-shadow 0.2s, color 0.2s',
      }}>
        {num}
      </span>
      <span style={{ flex: 1, font: '500 italic 44px/1 "Playfair Display",serif', color: '#FAF8F5' }}>
        {label}
      </span>
      <span style={{ fontSize: '22px', color: '#E8186D' }}>→</span>
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="h-[60px] flex items-center bg-white border-b border-melt-border/60 sticky top-0 z-50 relative">
        <div className="max-w-350 mx-auto px-6 md:px-10 w-full flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-melt-pink font-bold text-xl tracking-tight rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink focus-visible:ring-offset-2"
          >
            Melt House
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-melt-mid text-sm font-medium hover:text-melt-dark transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:+918691990290"
              aria-label="Call us to reserve a table: +91 86919 90290"
              className="hidden sm:block bg-melt-pink text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink focus-visible:ring-offset-2 cursor-pointer"
            >
              Reserve
            </a>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="md:hidden p-1 text-melt-mid hover:text-melt-dark transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink rounded-sm"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu size={22} />
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 50,
              background: '#1A1A1A',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Top bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 26px', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
              <span style={{ font: '600 20px/1 "Playfair Display",serif', color: '#FAF8F5' }}>
                Melt House
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{ width: '22px', height: '22px', background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}
              >
                <span style={{ position: 'absolute', left: 0, top: '10px', width: '22px', height: '1.5px', background: '#FAF8F5', transform: 'rotate(45deg)' }} />
                <span style={{ position: 'absolute', left: 0, top: '10px', width: '22px', height: '1.5px', background: '#FAF8F5', transform: 'rotate(-45deg)' }} />
              </button>
            </div>

            {/* Nav links */}
            <nav style={{ paddingTop: '18px' }}>
              {NAV_LINKS.map(({ num, href, label }) => (
                <DrawerLink key={href} num={num} href={href} label={label} onClose={() => setMobileOpen(false)} />
              ))}
            </nav>

            {/* Reserve button */}
            <Link
              href="/visit"
              onClick={() => setMobileOpen(false)}
              style={{
                margin: '32px 28px 0',
                display: 'block',
                textAlign: 'center',
                background: '#E8186D',
                color: '#fff',
                padding: '17px',
                borderRadius: '999px',
                font: '600 15px/1 Inter,sans-serif',
                boxShadow: '0 8px 28px rgba(232,24,109,.38)',
                textDecoration: 'none',
              }}
            >
              Reserve a Table
            </Link>

            {/* Bottom info */}
            <div style={{ marginTop: 'auto', padding: '0 28px 44px' }}>
              <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ font: '600 9px/1 Inter,sans-serif', letterSpacing: '.2em', textTransform: 'uppercase', color: '#FFE600', marginBottom: '9px' }}>Hours</div>
                  <div style={{ font: '400 13px/1 Inter,sans-serif', color: '#FAF8F5' }}>8AM – 11PM Daily</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ font: '600 9px/1 Inter,sans-serif', letterSpacing: '.2em', textTransform: 'uppercase', color: '#FFE600', marginBottom: '9px' }}>Location</div>
                  <div style={{ font: '400 13px/1 Inter,sans-serif', color: '#FAF8F5' }}>M3M IFC, Sector 66</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
