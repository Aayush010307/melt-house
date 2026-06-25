'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MenuTab } from '@/types/menu';
import { menuData } from '@/data/menu';
import CategorySection from './CategorySection';

const TABS: { id: MenuTab; label: string }[] = [
  { id: 'food', label: 'Food' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'drinks', label: 'Drinks' },
];

export default function MenuTabView() {
  const [activeTab, setActiveTab] = useState<MenuTab>('food');
  const reduced = useReducedMotion();

  const visibleCategories = menuData.filter((c) => c.tab === activeTab);

  return (
    <>
      {/* Tab bar */}
      <div className="sticky top-[60px] z-40 bg-melt-dark border-b border-white/10 px-4">
        <div className="flex max-w-xs mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`relative flex-1 py-3 text-sm font-semibold text-center cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink focus-visible:ring-inset ${
                activeTab === tab.id
                  ? 'text-melt-pink'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-melt-pink"
                  transition={{ duration: reduced ? 0 : 0.2, ease: 'easeInOut' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Category list with tab transition */}
      <div className="bg-melt-dark px-6 md:px-12 py-10 max-w-5xl mx-auto">
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
      </div>
    </>
  );
}
