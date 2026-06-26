import { MenuCategory } from '@/types/menu';
import MenuItemCard from './MenuItemCard';

export default function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <div>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          fontSize: '40px',
          lineHeight: 1,
          textTransform: 'uppercase',
          color: '#FAF8F5',
          padding: '24px 24px 4px',
          margin: 0,
        }}
      >
        {category.name}
      </h2>
      <div
        style={{
          width: '54px',
          height: '2px',
          background: '#E8186D',
          marginTop: '14px',
          marginLeft: '24px',
        }}
      />
      <div style={{ padding: '14px 24px 40px' }}>
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
