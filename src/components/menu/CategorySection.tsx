import { MenuCategory } from '@/types/menu';
import MenuItemCard from './MenuItemCard';

export default function CategorySection({ category }: { category: MenuCategory }) {
  return (
    <div className="mb-16">
      <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-1 uppercase">
        {category.name}
      </h2>
      <div className="w-full h-px bg-melt-pink" />
      {category.items.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
