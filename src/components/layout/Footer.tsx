export default function Footer() {
  return (
    <footer className="bg-melt-dark text-white">
      <div className="max-w-350 mx-auto px-6 md:px-10 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-16 border-b border-white/10">
          <div>
            <p className="font-display text-melt-pink text-3xl font-bold tracking-tight">Melt House</p>
            <p className="text-white/40 text-sm mt-4 leading-[1.8]">
              Good food. Better coffee.<br />Great vibes.
            </p>
          </div>

          <div>
            <p className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.22em] mb-5">Find Us</p>
            <p className="text-white/55 text-sm leading-[1.8]">
              M3M IFC, Sector 66, Gurugram<br />
              Gurugram, Haryana — 122101
            </p>
          </div>

          <div>
            <p className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.22em] mb-5">Hours</p>
            <p className="text-white/55 text-sm leading-[1.8]">
              Mon – Thu · 8am – 11pm<br />
              Fri – Sun · 8am – 12am
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs">© 2024 Melt House. All rights reserved.</p>
          <p className="text-white/20 text-xs">M3M IFC · Sector 66 · Gurugram</p>
        </div>

      </div>
    </footer>
  );
}
