import React, { useRef, useEffect } from 'react';
import { EXPERIENCES, type Experience } from '../data/experiences';
import { Compass } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExploreIndiaProps {
  onSelectExperience: (experience: Experience) => void;
}

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  isCompact?: boolean;
  onSelect: (exp: Experience) => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
  experience, 
  className = '', 
  isCompact = false, 
  onSelect 
}) => {
  return (
    <div
      onClick={() => onSelect(experience)}
      className={`group relative rounded-[28px] sm:rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-black/5 bg-[#0F2821] select-none ${className}`}
    >
      {/* Background Image with Zoom on Hover */}
      <img
        src={experience.image}
        alt={experience.title}
        loading="lazy"
        className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80";
        }}
      />

      {/* Layered Gradient Overlays for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 group-hover:from-black/95 transition-colors duration-300" />

      {/* Content Area Pinned at Bottom */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
        <h3 
          className={`font-sans font-extrabold text-white tracking-tight leading-tight mb-2 drop-shadow-md group-hover:text-[#F8F5EF] transition-colors ${
            isCompact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl lg:text-4xl'
          }`}
        >
          {experience.title}
        </h3>

        <p 
          className={`text-white/85 font-normal leading-relaxed line-clamp-2 max-w-xl mb-4 drop-shadow ${
            isCompact ? 'text-xs' : 'text-xs sm:text-sm'
          }`}
        >
          {experience.description}
        </p>

        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(experience);
            }}
            className="px-5 sm:px-6 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>{experience.buttonText || 'EXPLORE NOW'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const ExploreIndia: React.FC<ExploreIndiaProps> = ({ onSelectExperience }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Heading entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 88%',
              once: true
            }
          }
        );
      }

      // Staggered card entrance
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.group');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const expAdventure = EXPERIENCES.find(e => e.id === 'advanture');
  const expSpiritual = EXPERIENCES.find(e => e.id === 'spiritual');
  const expBeaches = EXPERIENCES.find(e => e.id === 'beaches');
  const expHeritage = EXPERIENCES.find(e => e.id === 'heritage-architecture');
  const expWildlife = EXPERIENCES.find(e => e.id === 'wildlife-nature');
  const expCulture = EXPERIENCES.find(e => e.id === 'culture-fastival-food');

  return (
    <section 
      id="explore"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#F8F5EF] relative overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="absolute top-12 -right-24 w-96 h-96 rounded-full bg-[#DDE5D8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -left-24 w-96 h-96 rounded-full bg-[#D8B878]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C66B45] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C66B45]" />
            <span>CATEGORIES OF EXPEDITION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#173D32] leading-[1.1] tracking-tight">
            One Country. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#C66B45]">Endless Ways to Feel Alive.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#535B51] font-light leading-relaxed">
            Find your signature expedition across India, from deep ocean coral reefs and high Himalayan peaks to royal havelis, sacred ghats, and tiger reserves.
          </p>
        </div>

        {/* Bento Grid — Direct Match to Reference Image */}
        <div ref={gridRef} className="space-y-5 sm:space-y-6">
          {/* Main 5-Card Bento Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* Left Column */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Card 1: Adventure & Scuba (Large Feature Card) */}
              {expAdventure && (
                <ExperienceCard 
                  experience={expAdventure} 
                  className="h-[380px] sm:h-[440px] lg:h-[470px]"
                  onSelect={onSelectExperience}
                />
              )}

              {/* Bottom 2 Side-by-Side Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Card 2: Island / Spiritual Heritage */}
                {expSpiritual && (
                  <ExperienceCard 
                    experience={expSpiritual} 
                    isCompact={true}
                    className="h-[250px] sm:h-[270px]"
                    onSelect={onSelectExperience}
                  />
                )}

                {/* Card 3: Pristine Beaches */}
                {expBeaches && (
                  <ExperienceCard 
                    experience={expBeaches} 
                    isCompact={true}
                    className="h-[250px] sm:h-[270px]"
                    onSelect={onSelectExperience}
                  />
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Card 4: Luxury Beach Resorts & Heritage (Wide Landscape Card) */}
              {expHeritage && (
                <ExperienceCard 
                  experience={expHeritage} 
                  className="h-[230px] sm:h-[250px]"
                  onSelect={onSelectExperience}
                />
              )}

              {/* Card 5: Active Outdoor & Wildlife (Large Feature Card) */}
              {expWildlife && (
                <ExperienceCard 
                  experience={expWildlife} 
                  className="h-[400px] sm:h-[460px] lg:h-[490px]"
                  onSelect={onSelectExperience}
                />
              )}
            </div>
          </div>

          {/* Card 6: Culture, Festivals & Culinary Trails (Panoramic Full-Width Card) */}
          {expCulture && (
            <ExperienceCard 
              experience={expCulture} 
              className="h-[260px] sm:h-[300px] w-full"
              onSelect={onSelectExperience}
            />
          )}
        </div>
      </div>
    </section>
  );
};
