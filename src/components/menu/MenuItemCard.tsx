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
      style={{
        borderTop: '1px solid rgba(255,255,255,.08)',
        borderLeft: item.isSignature ? '2px solid #E8186D' : '2px solid transparent',
        background: item.isSignature ? 'rgba(232,24,109,.05)' : 'transparent',
        padding: '18px 0 18px 16px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '14px' }}>
        <p style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '16.5px', lineHeight: '1.25', color: '#FAF8F5', margin: 0 }}>
          {item.name}
          {item.isSignature && (
            <span style={{ color: '#FFE600', marginLeft: '7px', fontSize: '13px' }}>★</span>
          )}
        </p>
        <p style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: '15px', lineHeight: 1, color: '#E8186D', whiteSpace: 'nowrap', margin: 0 }}>
          ₹{item.price}
        </p>
      </div>

      {item.description && (
        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12.5px', lineHeight: '1.55', color: '#8f877c', marginTop: '7px', maxWidth: '290px', marginBottom: 0 }}>
          {item.description}
        </p>
      )}

      {item.dietary.length > 0 && (
        <p style={{ fontSize: '10px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.25)', marginTop: '8px', marginBottom: 0 }}>
          {dietaryLine}
        </p>
      )}
    </div>
  );
}
