'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MenuTab } from '@/types/menu';
import { menuData } from '@/data/menu';
import CategorySection from './CategorySection';
import MenuItemCard from './MenuItemCard';

const TABS: { id: MenuTab; label: string }[] = [
  { id: 'food', label: 'Food' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'drinks', label: 'Drinks' },
];

const PLACEHOLDERS = [
  'Search menu...',
  "Try 'Tiramisu Latte'...",
  "Try 'Smores Mocha'...",
  "Try 'Skillet Cookie'...",
  "Try 'Nashville Chicken'...",
];

const allItems = menuData.flatMap((category) =>
  category.items.map((item) => ({ item, categoryName: category.name }))
);

export default function MenuTabView() {
  const [activeTab, setActiveTab] = useState<MenuTab>('food');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const reduced = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isSearching = searchQuery.trim().length > 0;
  const query = searchQuery.trim().toLowerCase();
  const showAnimatedPlaceholder = !isSearching && !isFocused;

  useEffect(() => {
    if (reduced) return;
    intervalRef.current = setInterval(() => {
      setPlaceholderIndex((i) => (i + 1) % PLACEHOLDERS.length);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduced]);

  const searchResults = isSearching
    ? allItems.filter(
        ({ item }) =>
          item.name.toLowerCase().includes(query) ||
          (item.description?.toLowerCase() ?? '').includes(query)
      )
    : [];

  const visibleCategories = menuData.filter((c) => c.tab === activeTab);

  return (
    <>
      {/* Tab bar — hidden while searching */}
      {!isSearching && (
        <div
          style={{
            position: 'sticky',
            top: '60px',
            zIndex: 40,
            display: 'flex',
            background: 'rgba(26,26,26,.94)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,.1)',
            padding: '0 12px',
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #E8186D' : '2px solid transparent',
                cursor: 'pointer',
                padding: '16px 0 14px',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '12.5px',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: activeTab === tab.id ? '#E8186D' : 'rgba(250,248,245,.5)',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Content area */}
      <div className="bg-melt-dark max-w-5xl mx-auto">

        {/* Search input — entrance animation */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.4, ease: 'easeOut' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#232220',
            border: `1px solid ${isFocused ? 'rgba(232,24,109,0.8)' : 'rgba(255,255,255,.1)'}`,
            borderRadius: '999px',
            padding: '12px 18px',
            margin: '20px 24px 6px',
            position: 'relative',
            boxShadow: isFocused ? '0 0 0 3px rgba(232,24,109,0.15)' : 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        >
          {/* SVG search icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="10.5" cy="10.5" r="6.5" stroke="#E8186D" strokeWidth="2.2" />
            <line x1="15.6" y1="15.6" x2="20" y2="20" stroke="#E8186D" strokeWidth="2.2" strokeLinecap="round" />
          </svg>

          {/* Input + animated placeholder */}
          <div style={{ position: 'relative', flex: 1 }}>
            <AnimatePresence mode="wait">
              {showAnimatedPlaceholder && (
                <motion.span
                  key={placeholderIndex}
                  initial={reduced ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? undefined : { opacity: 0, y: -4 }}
                  transition={{ duration: reduced ? 0 : 0.3, ease: 'easeOut' }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    fontFamily: 'Inter',
                    fontSize: '13.5px',
                    color: 'rgba(255,255,255,.25)',
                    whiteSpace: 'nowrap',
                  }}
                  aria-hidden="true"
                >
                  {PLACEHOLDERS[placeholderIndex]}
                </motion.span>
              )}
            </AnimatePresence>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder=""
              aria-label="Search menu items"
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontFamily: 'Inter',
                fontSize: '13.5px',
                color: '#FAF8F5',
              }}
            />
          </div>

          {/* Clear button — fades in/out */}
          <AnimatePresence>
            {isSearching && (
              <motion.button
                initial={reduced ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,.4)',
                  cursor: 'pointer',
                  fontSize: '18px',
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                ×
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Search results */}
        {isSearching ? (
          <div style={{ padding: '0 24px' }}>
            {searchResults.length > 0 ? (
              <>
                <motion.p
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{ color: 'rgba(255,255,255,.5)', fontSize: '11px', marginBottom: '6px', marginTop: '16px' }}
                >
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &lsquo;{searchQuery.trim()}&rsquo;
                </motion.p>
                <AnimatePresence>
                  {searchResults.map(({ item }, index) => (
                    <motion.div
                      key={item.id}
                      initial={reduced ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? undefined : { opacity: 0, y: -4 }}
                      transition={{ duration: reduced ? 0 : 0.22, delay: reduced ? 0 : index * 0.04, ease: 'easeOut' }}
                    >
                      <MenuItemCard item={item} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </>
            ) : (
              <motion.p
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                style={{ color: 'rgba(255,255,255,.4)', fontSize: '14px', textAlign: 'center', padding: '80px 0' }}
              >
                Nothing found for &lsquo;{searchQuery.trim()}&rsquo;
              </motion.p>
            )}
          </div>
        ) : (
          /* Normal tab-filtered view */
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reduced ? 0 : 0.2, ease: 'easeOut' }}
            >
              {visibleCategories.map((category) => (
                <CategorySection key={category.id} category={category} />
              ))}

              {/* Footer note */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', letterSpacing: '.16em', textTransform: 'uppercase', color: '#FFE600', marginBottom: '8px', fontWeight: 500 }}>
                  ★ Signature
                </div>
                <div style={{ fontSize: '11.5px', lineHeight: '1.6', color: '#6f675d' }}>
                  All prices in ₹ · inclusive of taxes<br />
                  M3M IFC · Sector 66 · Gurugram
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
