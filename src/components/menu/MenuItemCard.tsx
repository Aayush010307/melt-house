import { MenuItem } from '@/types/menu';
import type { DietaryFlag } from '@/types/menu';

const DIETARY_LABELS: Record<DietaryFlag, string> = {
  'veg': 'Veg',
  'non-veg': 'Non-Veg',
  'vegan-option': 'Vegan',
  'gluten-free': 'GF',
  'contains-dairy': 'Dairy',
  'contains-nuts': 'Nuts',
  'contains-eggs': 'Eggs',
  'contains-alcohol': 'Alcohol',
  'spicy': 'Spicy',
  'contains-seafood': 'Seafood',
  'contains-pork': 'Pork',
};

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const dietaryLine = item.dietary
    .slice(0, 4)
    .map((flag) => DIETARY_LABELS[flag])
    .join(' · ');

  return (
    <div
      className={`group relative py-5 border-b border-white/10${item.isSignature ? ' pl-4' : ''}`}
      style={item.isSignature ? { borderLeft: '2px solid #E8186D' } : undefined}
    >
      {/* Name + price */}
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-white font-semibold text-base leading-snug">
          {item.name}
          {item.isSignature && (
            <span className="text-melt-yellow text-xs ml-1.5">★</span>
          )}
        </p>
        <p className="text-melt-pink font-bold text-lg whitespace-nowrap ml-6 shrink-0">
          ₹{item.price}
        </p>
      </div>

      {/* Description */}
      {item.description && (
        <p className="text-white/50 text-xs leading-relaxed mt-1.5 max-w-2xl">
          {item.description}
        </p>
      )}

      {/* Dietary flags */}
      {item.dietary.length > 0 && (
        <p className="text-white/30 text-[10px] tracking-wide uppercase mt-2">
          {dietaryLine}
        </p>
      )}
    </div>
  );
}
