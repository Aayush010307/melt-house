export default function Footer() {
  return (
    <footer className="bg-melt-dark text-white px-6 py-12">
      <div className="max-w-sm mx-auto">

        {/* Logo + tagline */}
        <h2 className="font-display text-2xl font-bold text-melt-pink">
          Melt House
        </h2>
        <p className="text-white/40 text-xs mt-1 mb-8">
          Good food. Better coffee. Great vibes.
        </p>

        {/* Info grid */}
        <div className="space-y-4 mb-8">
          <div>
            <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Find Us</p>
            <p className="text-white/70 text-sm leading-relaxed">
              M3M IFC, Sector 66, Gurugram<br />
              Haryana — 122101
            </p>
          </div>
          <div>
            <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Hours</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Mon–Thu 8am–11pm<br />
              Fri–Sun 8am–12am
            </p>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex gap-6 mb-8">
          <a href="/menu" className="text-white/50 text-xs hover:text-white transition">Menu</a>
          <a href="/about" className="text-white/50 text-xs hover:text-white transition">About</a>
          <a href="/visit" className="text-white/50 text-xs hover:text-white transition">Visit</a>
        </div>

        {/* Copyright */}
        <p className="text-white/20 text-[10px] border-t border-white/10 pt-6">
          © 2024 Melt House. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
