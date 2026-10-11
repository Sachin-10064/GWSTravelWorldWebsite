import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F2821] text-[#F8F5EF] pt-20 pb-12 relative overflow-hidden border-t border-[#D8B878]/30">
      
      {/* Decorative top motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between pb-12 border-b border-white/10">
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-white">
              The Journey of a Lifetime Awaits
            </span>
            <p className="text-xs text-[#D8B878] mt-1 font-light tracking-wide uppercase">
              Handcrafted in India • Recognized by Ministry of Tourism • Sustainable Luxury Partner
            </p>
          </div>
          
          <button
            onClick={() => scrollTo('enquiry')}
            className="px-6 py-3 rounded-full bg-[#C66B45] hover:bg-[#A95532] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-lg"
          >
            Start Planning
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <a href="/" className="inline-block group focus:outline-none" aria-label="GWS World Travel Home">
                <img 
                  src="/logo.png" 
                  alt="GWS World Travel" 
                  className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105" 
                />
              </a>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              GWS World Travel crafts transformative, bespoke expeditions across the length and breadth of India. 
              We reveal royal havelis, sacred Himalayan high passes, and pristine coastal waterways through respectful, immersive travel.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#C66B45] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#C66B45] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-[#C66B45] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8B878] block">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => scrollTo('interactive-map')} className="hover:text-white transition-colors">
                  All Indian States
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('explore')} className="hover:text-white transition-colors">
                  Travel Experiences
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('attractions')} className="hover:text-white transition-colors">
                  Iconic Attractions
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('interactive-map')} className="hover:text-white transition-colors">
                  Interactive India Map
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('connected')} className="hover:text-white transition-colors">
                  The India Dispatch
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Travel Packages */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8B878] block">
              Travel Packages
            </span>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors">
                  Solo Trips
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors">
                  Family Holidays
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors">
                  Couple Getaways
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors">
                  Honeymoon Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('packages')} className="hover:text-white transition-colors">
                  Group Expeditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Ateliers */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D8B878] block">
              Concierge Desks
            </span>
            <ul className="space-y-3 text-xs text-white/70 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C66B45] flex-shrink-0 mt-0.5" />
                <span>
                  <strong>New Delhi:</strong> 14 Barakhamba Road, Connaught Place
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C66B45] flex-shrink-0 mt-0.5" />
                <span>+91 (011) 4820-9900</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C66B45] flex-shrink-0 mt-0.5" />
                <span>concierge@atulyajourneys.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 font-light">
          <p>© {currentYear} Atulya Journeys Ltd. All rights reserved. Crafted with devotion for travelers across the world.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#disclaimer" className="hover:text-white transition-colors">Traveler Safety Charter</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
