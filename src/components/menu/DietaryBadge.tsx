import { DietaryFlag } from '@/types/menu';

const LABELS: Record<DietaryFlag, string> = {
  'veg': '🟢 Veg',
  'vegan-option': '🌿 Vegan',
  'non-veg': '🔴 Non-Veg',
  'gluten-free': 'GF',
  'contains-dairy': '🥛 Dairy',
  'contains-nuts': '🥜 Nuts',
  'contains-eggs': '🥚 Eggs',
  'contains-alcohol': '🍷 Alcohol',
  'spicy': '🌶️ Spicy',
  'contains-seafood': '🦐 Seafood',
  'contains-pork': '🐷 Pork',
};

export default function DietaryBadge({ flag }: { flag: DietaryFlag }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-melt-cream border border-melt-border text-melt-mid">
      {LABELS[flag]}
    </span>
  );
}
