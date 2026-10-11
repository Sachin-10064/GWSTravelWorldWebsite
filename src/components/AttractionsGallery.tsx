import React, { useRef, useState } from 'react';
import { ATTRACTIONS, type Attraction } from '../data/attractions';
import { ChevronLeft, ChevronRight, MapPin, Sparkles, Calendar, ArrowRight, Eye, RefreshCw } from 'lucide-react';

interface AttractionsGalleryProps {
  onSelectAttraction: (attraction: Attraction) => void;
}

export const AttractionsGallery: React.FC<AttractionsGalleryProps> = ({ onSelectAttraction }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const toggleFlip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <section 
      id="attractions"
      className="py-24 sm:py-32 bg-[#173D32] text-white relative overflow-hidden"
    >
      {/* Decorative background radial effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#C66B45]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-[#D8B878]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#D8B878] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B878]" />
              <span>A CINEMATIC HORIZONTAL JOURNEY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F8F5EF] leading-[1.1] tracking-tight">
              Places That <br className="hidden sm:inline" />
              <span className="italic font-light text-[#D8B878]">Stay With You.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#F8F5EF]/80 font-light leading-relaxed">
              Explore the landmarks, hidden corners, and unforgettable landscapes that define the spirit of India.
              Hover or tap any card to reveal historical secrets.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#C66B45] hover:border-[#C66B45] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-[#C66B45] hover:border-[#C66B45] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery Strip */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 px-4 sm:px-6 lg:px-8 max-w-full no-scrollbar scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ATTRACTIONS.map((attraction) => {
          const isFlipped = flippedCardId === attraction.id;

          return (
            <div
              key={attraction.id}
              className="w-[310px] sm:w-[360px] h-[520px] flex-shrink-0 snap-center perspective-1000 group cursor-pointer"
              onMouseEnter={() => setFlippedCardId(attraction.id)}
              onMouseLeave={() => setFlippedCardId(null)}
              onClick={(e) => toggleFlip(attraction.id, e)}
            >
              {/* Inner 3D Flipping Card Container */}
              <div 
                className={`relative w-full h-full duration-700 transform-style-3d transition-transform rounded-2xl shadow-2xl ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden border border-white/15 bg-[#0F2821]">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2821] via-[#0F2821]/30 to-black/40" />

                  {/* Top badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#173D32]/90 border border-[#D8B878]/40 text-[#D8B878] backdrop-blur-sm">
                      {attraction.region}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-black/40 backdrop-blur-xs text-white/90">
                      {attraction.category}
                    </span>
                  </div>

                  {/* Front Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-center gap-1.5 text-xs text-[#D8B878] mb-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#C66B45]" />
                      <span>{attraction.location}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8F5EF] leading-tight">
                      {attraction.name}
                    </h3>

                    <p className="text-xs text-white/70 italic mt-1 font-serif line-clamp-1">
                      "{attraction.tagline}"
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                      <span className="text-[11px] text-[#D8B878]">Hover/Tap to flip card</span>
                      <RefreshCw className="w-3.5 h-3.5 text-[#D8B878] animate-spin-slow" />
                    </div>
                  </div>
                </div>

                {/* BACK FACE (Flipped 180 degrees in 3D) */}
                <div className="absolute inset-0 w-full h-full rounded-2xl p-6 sm:p-7 backface-hidden rotate-y-180 bg-gradient-to-br from-[#0F2821] via-[#173D32] to-[#245244] border-2 border-[#D8B878]/50 flex flex-col justify-between shadow-2xl">
                  
                  <div>
                    {/* Header in Back */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/15">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#D8B878]">
                        {attraction.region}
                      </span>
                      <span className="text-xs font-serif italic text-white/60">
                        {attraction.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#F8F5EF] mt-3">
                      {attraction.name}
                    </h3>
                    
                    <p className="text-xs text-[#D8B878] italic font-serif mt-0.5">
                      {attraction.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light mt-3">
                      {attraction.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 space-y-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-[#D8B878] font-bold block">
                        Signature Sights:
                      </span>
                      {attraction.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C66B45]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Back Actions */}
                  <div className="pt-4 border-t border-white/15">
                    <div className="flex items-center justify-between text-xs text-white/70 mb-3">
                      <span className="flex items-center gap-1 text-[11px]">
                        <Calendar className="w-3.5 h-3.5 text-[#D8B878]" />
                        {attraction.bestTime}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectAttraction(attraction);
                      }}
                      className="w-full py-2.5 rounded-full bg-[#C66B45] hover:bg-[#A95532] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
