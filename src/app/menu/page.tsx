import type { Metadata } from 'next';
import MenuTabView from '@/components/menu/MenuTabView';

export const metadata: Metadata = {
  title: 'Menu | Melt House',
};

export default function MenuPage() {
  return (
    <div className="bg-melt-dark min-h-screen">
      {/* Page header */}
      <div className="bg-melt-dark py-10 px-4 text-center">
        <h1 className="font-display text-4xl font-bold text-white">Our Menu</h1>
        <p className="text-melt-light text-sm mt-1">Made with love, served with soul.</p>
      </div>

      <MenuTabView />
    </div>
  );
}
