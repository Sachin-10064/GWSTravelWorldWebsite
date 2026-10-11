import React, { useState } from 'react';
import { TRAVEL_PACKAGES, type TravelPackage } from '../data/packages';
import { Calendar, Clock, MapPin, Sparkles, Check, ArrowRight, Eye, ShieldCheck } from 'lucide-react';

interface PopularPackagesProps {
  onSelectPackage: (pkg: TravelPackage) => void;
  onEnquireForPackage: (pkgTitle: string) => void;
}

export const PopularPackages: React.FC<PopularPackagesProps> = ({ 
  onSelectPackage, 
  onEnquireForPackage 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Expeditions' },
    { id: 'heritage', label: 'Heritage & Palaces' },
    { id: 'adventure', label: 'Himalayan & Adventure' },
    { id: 'tropical', label: 'Tropical & Backwaters' },
    { id: 'wildlife', label: 'Wildlife & Safaris' }
  ];

  const filteredPackages = TRAVEL_PACKAGES.filter((pkg) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'heritage') return pkg.category.includes('Heritage') || pkg.category.includes('Cultural');
    if (activeCategory === 'adventure') return pkg.category.includes('Adventure');
    if (activeCategory === 'tropical') return pkg.category.includes('Tropical') || pkg.category.includes('Coastal');
    if (activeCategory === 'wildlife') return pkg.category.includes('Wildlife');
    return true;
  });

  return (
    <section 
      id="packages"
      className="py-24 sm:py-32 bg-[#F8F5EF] relative overflow-hidden"
    >
      {/* Decorative background flourishes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#DDE5D8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#D8B878]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C66B45] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C66B45]" />
            <span>EXPERTLY CURATED ITINERARIES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#173D32] leading-[1.1] tracking-tight">
            Journeys <span className="italic font-light text-[#C66B45]">Worth Taking.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#535B51] font-light leading-relaxed">
            Thoughtfully curated experiences for every kind of traveler, 
            blending private luxury, heritage stays, and unforgettable local hosts.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#173D32] text-[#D8B878] shadow-md border border-[#D8B878]/50 scale-105'
                    : 'bg-white text-[#242923] hover:bg-[#EEF3EB] border border-[#DDE5D8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#DDE5D8] flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C66B45] text-white shadow-md">
                      {pkg.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#173D32]/85 text-[#D8B878] border border-[#D8B878]/30 backdrop-blur-md">
                      {pkg.region}
                    </span>
                  </div>

                  {/* Duration on bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                    <div className="flex items-center gap-1.5 text-xs bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#D8B878]" />
                      <span>{pkg.duration}</span>
                    </div>

                    <span className="text-[11px] uppercase tracking-wider text-[#D8B878] font-bold">
                      {pkg.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#173D32] leading-tight group-hover:text-[#C66B45] transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-[#C66B45] italic font-serif mt-1">
                    "{pkg.tagline}"
                  </p>

                  <p className="text-sm text-[#535B51] font-light leading-relaxed mt-3 line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Inclusions Highlights */}
                  <div className="mt-5 pt-4 border-t border-[#DDE5D8]/80 space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#173D32] block">
                      Curated Inclusions:
                    </span>
                    {pkg.inclusions.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#535B51]">
                        <Check className="w-3.5 h-3.5 text-[#C66B45] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 bg-white border-t border-[#DDE5D8]/50 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="px-4 py-2.5 rounded-full border border-[#173D32] text-[#173D32] hover:bg-[#173D32] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Itinerary</span>
                </button>

                <button
                  onClick={() => onEnquireForPackage(pkg.title)}
                  className="px-5 py-2.5 rounded-full bg-[#C66B45] hover:bg-[#A95532] text-white transition-all text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-md flex items-center gap-1.5"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Footer Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#535B51] font-light">
            Need a completely custom private journey? We design bespoke itineraries tailored to your exact dates and pace.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('enquiry');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#173D32] hover:text-[#C66B45] transition-colors underline underline-offset-8"
          >
            <span>Request a Bespoke Travel Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
