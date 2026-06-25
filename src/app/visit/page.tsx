import type { Metadata } from 'next';
import { MapPin, Clock, Phone, Train } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import { StaggerGrid, StaggerItem } from '@/components/ui/StaggerChildren';

export const metadata: Metadata = {
  title: 'Visit | Melt House',
};

export default function VisitPage() {
  return (
    <div className="bg-melt-cream min-h-screen">

      {/* Hero */}
      <div className="bg-melt-dark py-24 md:py-32 px-6 text-center">
        <FadeIn>
          <p className="text-melt-yellow/70 text-[11px] font-semibold tracking-[0.22em] uppercase mb-6">
            Find Us
          </p>
          <h1 className="font-display font-bold text-white leading-[0.92] tracking-tight text-[52px] md:text-[72px] lg:text-[88px]">
            Come Visit Us
          </h1>
          <p className="text-white/35 text-sm mt-6">M3M IFC · Sector 66 · Gurugram</p>
        </FadeIn>
      </div>

      {/* Info grid */}
      <div className="py-16 md:py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

          {/* Card 1 — Location */}
          <StaggerItem>
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-melt-border/60 hover:border-melt-border transition-all duration-300 h-full">
              <div className="flex items-center gap-2.5 mb-6">
                <MapPin size={15} className="text-melt-pink shrink-0" aria-hidden="true" />
                <p className="font-semibold text-melt-dark text-sm">Find Us</p>
              </div>
              <p className="font-semibold text-melt-dark text-sm mb-2">Melt House</p>
              <p className="text-melt-mid text-sm leading-[1.8]">
                M3M International Financial Centre, Ground Floor<br />
                Golf Course Ext Road, Badshahpur<br />
                Sector 66, Gurugram — 122101<br />
                Haryana, India
              </p>
              <a
                href="https://maps.google.com/?q=M3M+International+Financial+Centre+Sector+66+Gurugram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-melt-pink text-sm font-medium mt-6 inline-block hover:opacity-70 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink rounded-sm"
              >
                Open in Google Maps →
              </a>
            </div>
          </StaggerItem>

          {/* Card 2 — Hours */}
          <StaggerItem>
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-melt-border/60 hover:border-melt-border transition-all duration-300 h-full">
              <div className="flex items-center gap-2.5 mb-6">
                <Clock size={15} className="text-melt-pink shrink-0" aria-hidden="true" />
                <p className="font-semibold text-melt-dark text-sm">Opening Hours</p>
              </div>
              {[
                ['Monday – Thursday', '8:00 am – 11:00 pm'],
                ['Friday', '8:00 am – 12:00 am'],
                ['Saturday', '8:00 am – 12:00 am'],
                ['Sunday', '8:00 am – 11:00 pm'],
              ].map(([day, hours]) => (
                <div
                  key={day}
                  className="flex justify-between text-sm py-3 border-b border-melt-border/50 last:border-0"
                >
                  <span className="text-melt-dark">{day}</span>
                  <span className="text-melt-mid">{hours}</span>
                </div>
              ))}
            </div>
          </StaggerItem>

          {/* Card 3 — Reservations */}
          <StaggerItem className="md:col-span-2">
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-melt-border/60 hover:border-melt-border transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-5">
                <Phone size={15} className="text-melt-pink shrink-0" aria-hidden="true" />
                <p className="font-semibold text-melt-dark text-sm">Reserve a Table</p>
              </div>
              <p className="text-melt-mid text-sm leading-[1.75]">
                Walk-ins are always welcome. For groups of 6 or more, we recommend calling ahead.
              </p>
              <a
                href="tel:+918691990290"
                aria-label="Call us to reserve: +91 86919 90290"
                className="font-display text-4xl md:text-5xl font-bold text-melt-pink block mt-5 hover:opacity-70 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-melt-pink rounded-sm tracking-tight"
              >
                +91 86919 90290
              </a>
              <p className="text-melt-mid/50 text-xs mt-2">Available during opening hours</p>
            </div>
          </StaggerItem>

          {/* Card 4 — Getting Here */}
          <StaggerItem className="md:col-span-2">
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-melt-border/60 hover:border-melt-border transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-5">
                <Train size={15} className="text-melt-pink shrink-0" aria-hidden="true" />
                <p className="font-semibold text-melt-dark text-sm">Getting Here</p>
              </div>
              <p className="text-melt-mid text-sm leading-[1.8]">
                <span className="font-medium text-melt-dark">By Metro:</span> Alight at Sector 66, Gurugram
                station on the Delhi Metro Yellow Line to Huda City Centre. M3M IFC is a 5-minute walk.
              </p>
              <p className="text-melt-mid text-sm leading-[1.8] mt-4">
                <span className="font-medium text-melt-dark">By Road:</span> M3M IFC is on Golf Course Ext Road,
                easily accessible from Sohna Road and Badshahpur. Valet parking available.
              </p>
            </div>
          </StaggerItem>

        </StaggerGrid>
      </div>

    </div>
  );
}
