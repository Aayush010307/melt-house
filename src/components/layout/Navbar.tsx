'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/visit', label: 'Visit' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
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
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile dropdown — absolutely positioned so it never inflates the nav's 60px height */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="absolute top-full left-0 right-0 md:hidden border-t border-melt-border/60 bg-white overflow-hidden z-50"
          >
            <div className="flex flex-col pb-4">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full py-5 px-6 text-lg font-medium border-b border-melt-border text-melt-dark hover:text-melt-pink transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </Link>
              ))}
              <a
                href="tel:+918691990290"
                className="w-full text-center py-4 px-6 mt-4 mx-6 text-base bg-melt-pink text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
