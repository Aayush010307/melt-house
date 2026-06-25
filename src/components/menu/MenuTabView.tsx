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
        <div className="sticky top-[60px] z-40 bg-melt-dark border-b border-white/10 px-4">
          <div className="flex max-w-xs mx-auto min-h-[52px]">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`relative flex-1 py-4 text-base font-semibold text-center cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink focus-visible:ring-inset ${
                  activeTab === tab.id
                    ? 'text-melt-pink'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-melt-pink"
                    transition={{ duration: reduced ? 0 : 0.2, ease: 'easeInOut' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content area */}
      <div className="bg-melt-dark px-6 md:px-16 py-10 max-w-5xl mx-auto">

        {/* Search input — entrance animation */}
        <motion.div
          className="relative mb-8"
          initial={reduced ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.4, ease: 'easeOut' }}
        >
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none select-none text-sm z-10">
            🔍
          </span>

          {/* Animated placeholder overlay — visible only when empty and unfocused */}
          <AnimatePresence mode="wait">
            {showAnimatedPlaceholder && (
              <motion.span
                key={placeholderIndex}
                initial={reduced ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: reduced ? 0 : 0.3, ease: 'easeOut' }}
                className="absolute left-10 top-1/2 -translate-y-1/2 text-sm text-white/30 pointer-events-none select-none"
                aria-hidden="true"
              >
                {PLACEHOLDERS[placeholderIndex]}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Focus glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={
              reduced
                ? {}
                : {
                    boxShadow: isFocused
                      ? '0 0 0 3px rgba(232,24,109,0.15)'
                      : '0 0 0 0px rgba(232,24,109,0)',
                  }
            }
            transition={{ duration: 0.2 }}
          />

          <motion.input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder=""
            aria-label="Search menu items"
            animate={
              reduced
                ? {}
                : {
                    borderColor: isFocused
                      ? 'rgba(232,24,109,0.8)'
                      : 'rgba(255,255,255,0.2)',
                  }
            }
            transition={{ duration: 0.2 }}
            className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 pl-10 text-sm text-white outline-none"
          />

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
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors duration-150 cursor-pointer text-lg leading-none"
              >
                ×
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Search results */}
        {isSearching ? (
          searchResults.length > 0 ? (
            <>
              <motion.p
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="text-white/50 text-xs mb-6"
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
              className="text-white/40 text-sm text-center py-20"
            >
              Nothing found for &lsquo;{searchQuery.trim()}&rsquo;
            </motion.p>
          )
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
              {visibleCategories.map((category, i) => (
                <div key={category.id} className={i > 0 ? 'mt-2' : ''}>
                  <CategorySection category={category} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
