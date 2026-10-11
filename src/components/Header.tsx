import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Compass, Menu, X, ArrowRight, ShieldCheck, Heart, Sparkles, Users, MapPin } from 'lucide-react';
import { PACKAGE_CATEGORIES } from '../data/packages';
import gsap from 'gsap';

interface HeaderProps {
  onSelectPackageCategory?: (categoryId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectPackageCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItemsRef = useRef<HTMLDivElement>(null);

  // Scroll detection for header style transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for packages dropdown
  useEffect(() => {
    if (isPackagesOpen && dropdownRef.current && dropdownItemsRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10, display: 'none' },
        { opacity: 1, y: 0, display: 'block', duration: 0.28, ease: 'power2.out' }
      );
      
      const items = dropdownItemsRef.current.children;
      gsap.fromTo(
        items,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.24, ease: 'power2.out' }
      );
    } else if (!isPackagesOpen && dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -8,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          if (dropdownRef.current) {
            dropdownRef.current.style.display = 'none';
          }
        }
      });
    }
  }, [isPackagesOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsPackagesOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-[#C66B45]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#C66B45]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#C66B45]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#C66B45]" />;
      default: return <MapPin className="w-5 h-5 text-[#C66B45]" />;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#173D32]/95 backdrop-blur-md shadow-lg border-b border-[#D8B878]/20 py-3.5' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="/" 
          className="group flex items-center gap-3 focus:outline-none py-0.5"
          aria-label="GWS World Travel Home"
        >
          <img 
            src="/logo.png" 
            alt="GWS World Travel" 
            className="h-11 sm:h-14 md:h-16 w-auto object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm font-medium">
          
          <button 
            onClick={() => scrollToSection('explore')}
            className="px-3.5 py-2 text-white/90 hover:text-[#D8B878] transition-colors rounded-lg tracking-wide uppercase text-xs font-semibold"
          >
            Experiences
          </button>

          <button 
            onClick={() => scrollToSection('attractions')}
            className="px-3.5 py-2 text-white/90 hover:text-[#D8B878] transition-colors rounded-lg tracking-wide uppercase text-xs font-semibold"
          >
            Attractions
          </button>

          <button 
            onClick={() => scrollToSection('interactive-map')}
            className="px-3.5 py-2 text-white/90 hover:text-[#D8B878] transition-colors rounded-lg tracking-wide uppercase text-xs font-semibold"
          >
            Destinations & Map
          </button>

          {/* Packages with GSAP Animated Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPackagesOpen(true)}
            onMouseLeave={() => setIsPackagesOpen(false)}
          >
            <button 
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-white/90 hover:text-[#D8B878] transition-colors rounded-lg tracking-wide uppercase text-xs font-semibold"
              aria-expanded={isPackagesOpen}
            >
              <span>Packages</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isPackagesOpen ? 'rotate-180 text-[#D8B878]' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div 
              ref={dropdownRef}
              style={{ display: 'none' }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-[#0F2821] border border-[#D8B878]/30 rounded-2xl shadow-2xl p-4 overflow-hidden backdrop-blur-xl"
            >
              <div className="text-[11px] uppercase tracking-widest text-[#D8B878] font-bold px-3 pt-1 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Curated Travel Packages</span>
                <span className="text-[10px] text-white/50 font-normal">5 Specialized Collections</span>
              </div>

              <div ref={dropdownItemsRef} className="grid grid-cols-1 gap-2 pt-2">
                {PACKAGE_CATEGORIES.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => {
                      scrollToSection('packages');
                      if (onSelectPackageCategory) onSelectPackageCategory(pkg.id);
                    }}
                    className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer border border-transparent hover:border-[#D8B878]/30"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-base font-semibold text-white group-hover:text-[#D8B878] transition-colors">
                          {pkg.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#D8B878] group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-white/70 line-clamp-1 mt-0.5 font-light">
                        {pkg.description}
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <span className="text-[10px] uppercase tracking-wider text-[#D8B878]/80 font-medium">Top spots:</span>
                        <span className="text-[10px] text-white/60">{pkg.popularDestinations.slice(0, 3).join(', ')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between px-2 text-xs">
                <span className="text-white/60 text-[11px]">Bespoke tailored itineraries available</span>
                <button 
                  onClick={() => scrollToSection('packages')}
                  className="text-[#D8B878] hover:underline font-semibold text-xs flex items-center gap-1"
                >
                  View All Packages →
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => scrollToSection('packages')}
            className="px-3.5 py-2 text-white/90 hover:text-[#D8B878] transition-colors rounded-lg tracking-wide uppercase text-xs font-semibold"
          >
            All Itineraries
          </button>
        </nav>

        {/* Right Action: Enquire Now Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('enquiry')}
            className="px-6 py-2.5 rounded-full bg-[#C66B45] hover:bg-[#A95532] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 border border-[#D8B878]/40 flex items-center gap-2"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none hover:text-[#D8B878]"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0F2821] border-b border-[#D8B878]/30 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-3 text-sm font-medium">
            <button 
              onClick={() => scrollToSection('explore')}
              className="text-left py-2 text-white/90 hover:text-[#D8B878] border-b border-white/5"
            >
              Experiences & Categories
            </button>
            <button 
              onClick={() => scrollToSection('attractions')}
              className="text-left py-2 text-white/90 hover:text-[#D8B878] border-b border-white/5"
            >
              Iconic Attractions
            </button>
            <button 
              onClick={() => scrollToSection('interactive-map')}
              className="text-left py-2 text-white/90 hover:text-[#D8B878] border-b border-white/5"
            >
              Interactive India Map
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-left py-2 text-white/90 hover:text-[#D8B878] border-b border-white/5"
            >
              Curated Travel Packages
            </button>
            <button 
              onClick={() => scrollToSection('connected')}
              className="text-left py-2 text-white/90 hover:text-[#D8B878] border-b border-white/5"
            >
              Stories & Community
            </button>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => scrollToSection('enquiry')}
              className="w-full py-3 rounded-full bg-[#C66B45] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
