import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Compass, Play, Pause, Volume2, VolumeX, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  // Cinematic backdrop scenes representing the seamless journey:
  // 1. Thar Desert Dunes -> 2. Western Ghats Forest -> 3. High Himalayas -> 4. Kerala Backwaters -> 5. Royal Palace at Dusk
  const scenes = [
    {
      title: "Thar Desert, Rajasthan",
      desc: "Golden Dunes & Silk Road Caravans",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-desert-sand-dunes-under-the-sun-41312-large.mp4"
    },
    {
      title: "Himalayan Ridge, Ladakh",
      desc: "Monasteries & Sacred High Passes",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85",
      videoUrl: ""
    },
    {
      title: "Alleppey Backwaters, Kerala",
      desc: "Emerald Lagoons & Whispering Palms",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
      videoUrl: ""
    },
    {
      title: "City Palace & Lake Pichola",
      desc: "Royal Heritage & Living Legacies",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=85",
      videoUrl: ""
    }
  ];

  // Auto-advance scenes every 6 seconds to give the feeling of traversing India
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % scenes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [scenes.length]);

  // GSAP line reveals and hero entrances
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Badge entrance
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      );

      // Headline split lines animation
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1 },
        '-=0.5'
      );

      // Subtitle reveal
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.6'
      );

      // CTA buttons staggered reveal
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8 },
          '-=0.5'
        );
      }

      // Gentle floating animation on scroll indicator
      if (scrollIndicatorRef.current) {
        gsap.to(scrollIndicatorRef.current, {
          y: 8,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: 'power1.inOut'
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToExplore = () => {
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEnquiry = () => {
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0F2821] text-white"
    >
      {/* Dynamic Background Media Layers */}
      <div className="absolute inset-0 z-0">
        {scenes.map((scene, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ transition: 'opacity 1.5s ease-in-out, transform 8s ease-out' }}
          >
            <img
              src={scene.image}
              alt={scene.title}
              className="w-full h-full object-cover object-center transform scale-105"
            />
          </div>
        ))}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2821] via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/25 to-[#0F2821]/80 pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        
        {/* Curated Journey Label */}
        <div 
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#173D32]/80 border border-[#D8B878]/50 text-[#D8B878] text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase backdrop-blur-md mb-6 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D8B878]" />
          <span>CURATED JOURNEYS ACROSS INDIA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C66B45]" />
        </div>

        {/* Oversized Headline */}
        <h1 
          ref={headlineRef}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold text-[#F8F5EF] leading-[1.08] tracking-tight max-w-4xl"
        >
          India Is Not Just a Destination. <br />
          <span className="italic font-light text-[#D8B878] font-serif">It's a Thousand Journeys.</span>
        </h1>

        {/* Supporting Editorial Text */}
        <p 
          ref={subtitleRef}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-[#F8F5EF]/90 max-w-2xl font-light leading-relaxed font-sans"
        >
          From the peaks of the Himalayas to the shores of the Indian Ocean, 
          discover the places, people, and experiences that make India unforgettable.
        </p>

        {/* Primary & Secondary CTAs */}
        <div 
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <button 
            onClick={scrollToExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C66B45] hover:bg-[#A95532] text-white font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 border border-[#D8B878]/40 flex items-center justify-center gap-3 group"
          >
            <span>Explore India</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={scrollToEnquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/30 backdrop-blur-md font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:border-[#D8B878] flex items-center justify-center gap-2.5"
          >
            <span>Plan Your Journey</span>
          </button>
        </div>

        {/* Scene Indicator Pills */}
        <div className="mt-12 flex items-center gap-2">
          {scenes.map((scene, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                activeSlide === idx ? 'w-8 bg-[#D8B878]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`View scene ${scene.title}`}
            />
          ))}
        </div>

        {/* Active Scene Caption */}
        <div className="mt-3 flex items-center gap-2 text-xs text-white/70 font-light tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C66B45]" />
          <span>{scenes[activeSlide].title}</span>
          <span className="text-white/40">•</span>
          <span className="text-[#D8B878]/90 italic">{scenes[activeSlide].desc}</span>
        </div>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        onClick={scrollToExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 group-hover:text-[#D8B878] transition-colors font-medium">
          Scroll to Begin
        </span>
        <div className="w-6 h-10 rounded-full border border-white/30 group-hover:border-[#D8B878] flex items-start justify-center p-1 transition-colors">
          <div className="w-1.5 h-2.5 rounded-full bg-[#D8B878] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
