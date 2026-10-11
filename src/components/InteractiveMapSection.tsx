import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';
import { REGIONS } from '../data/regions';
import { INDIAN_STATES, type StateData } from '../data/indianStates';
import { DETAILED_INDIAN_STATES, type DetailedStateData } from '../data/indianDetailedMapData';
import { MapPin, Sparkles, Compass, Calendar, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

interface InteractiveMapSectionProps {
  onOpenStateModal?: (stateData: StateData) => void;
  onEnquireForState?: (stateName: string) => void;
}

export const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({ 
  onOpenStateModal,
  onEnquireForState 
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedStateCode, setSelectedStateCode] = useState<string>('RJ'); // Default to Rajasthan
  const [hoveredStateCode, setHoveredStateCode] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{
    x: number;
    y: number;
    isTopHalf: boolean;
    alignClass: string;
    arrowClass: string;
  } | null>(null);

  const svgRef = useRef<SVGSVGElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Active state detailed data
  const selectedDetailedState: DetailedStateData = useMemo(() => {
    return DETAILED_INDIAN_STATES.find(s => s.code === selectedStateCode) 
      || DETAILED_INDIAN_STATES.find(s => s.code === 'RJ')!;
  }, [selectedStateCode]);

  // Active state data: prioritize enriched INDIAN_STATES data, fall back to detailed map data
  const activeStateData: StateData = useMemo(() => {
    const lookupCode = selectedStateCode === 'OR' ? 'OD' : selectedStateCode;
    if (INDIAN_STATES[lookupCode]) {
      return INDIAN_STATES[lookupCode];
    }
    if (INDIAN_STATES[selectedStateCode]) {
      return INDIAN_STATES[selectedStateCode];
    }

    // Comprehensive fallback generated from DETAILED_INDIAN_STATES
    return {
      id: selectedDetailedState.code.toLowerCase(),
      name: selectedDetailedState.name,
      region: selectedDetailedState.region.toLowerCase() as any,
      regionLabel: `${selectedDetailedState.region} India`,
      capital: selectedDetailedState.capital,
      tagline: selectedDetailedState.tagline,
      description: `${selectedDetailedState.name} welcomes travelers with ${selectedDetailedState.tagline.toLowerCase()}. Discover ancient landmarks, serene landscapes, and genuine regional hospitality.`,
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80',
      topPlaces: selectedDetailedState.topHighlights.map(h => ({ name: h, type: 'Iconic Highlight' })),
      bestSeason: 'October to March',
      specialty: `${selectedDetailedState.name} heritage, cuisine, and local arts`
    };
  }, [selectedStateCode, selectedDetailedState]);

  // Hovered state detailed data
  const hoveredDetailedState: DetailedStateData | null = useMemo(() => {
    if (!hoveredStateCode) return null;
    return DETAILED_INDIAN_STATES.find(s => s.code === hoveredStateCode) || null;
  }, [hoveredStateCode]);

  // Filter and decorate state paths based on region selection
  const filteredStatePaths = useMemo(() => {
    return DETAILED_INDIAN_STATES.map((state) => {
      const isRegionMatch = selectedRegion === 'all' || state.region.toLowerCase() === selectedRegion.toLowerCase();
      const isSelected = selectedStateCode === state.code;
      const isHovered = hoveredStateCode === state.code;

      return {
        ...state,
        isRegionMatch,
        isSelected,
        isHovered
      };
    });
  }, [selectedRegion, selectedStateCode, hoveredStateCode]);

  const handleStateClick = (code: string) => {
    setSelectedStateCode(code);
  };

  const updateTooltipPosition = useCallback((code: string | null) => {
    if (!code || !svgRef.current || !mapContainerRef.current) {
      setTooltipPos(null);
      return;
    }

    const state = DETAILED_INDIAN_STATES.find(s => s.code === code);
    if (!state) {
      setTooltipPos(null);
      return;
    }

    const svg = svgRef.current;
    const container = mapContainerRef.current;

    let x = 0;
    let y = 0;
    const containerRect = container.getBoundingClientRect();

    try {
      const pt = svg.createSVGPoint();
      pt.x = state.center.cx;
      pt.y = state.center.cy;
      const screenPt = pt.matrixTransform(svg.getScreenCTM()!);
      x = screenPt.x - containerRect.left;
      y = screenPt.y - containerRect.top;
    } catch {
      const svgRect = svg.getBoundingClientRect();
      const scaleX = svgRect.width / 615;
      const scaleY = svgRect.height / 710;
      x = (svgRect.left - containerRect.left) + state.center.cx * scaleX;
      y = (svgRect.top - containerRect.top) + state.center.cy * scaleY;
    }

    const isTopHalf = state.center.cy < 160;
    let alignClass = "-translate-x-1/2";
    let arrowClass = "left-1/2 -translate-x-1/2";

    if (x < 130) {
      alignClass = "-translate-x-[15%]";
      arrowClass = "left-[15%]";
    } else if (containerRect.width && x > containerRect.width - 130) {
      alignClass = "-translate-x-[85%]";
      arrowClass = "left-[85%]";
    }

    setTooltipPos({
      x,
      y,
      isTopHalf,
      alignClass,
      arrowClass
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (hoveredStateCode) {
        updateTooltipPosition(hoveredStateCode);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hoveredStateCode, updateTooltipPosition]);

  return (
    <section 
      id="interactive-map"
      className="py-24 sm:py-32 bg-[#F8F5EF] relative overflow-hidden"
    >
      {/* Decorative background accents */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#173D32]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#D8B878]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C66B45] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#C66B45]" />
            <span>SIGNATURE GEOGRAPHIC EXPLORATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#173D32] leading-[1.1] tracking-tight">
            Where Will <span className="italic font-light text-[#C66B45]">India Take You?</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#535B51] font-light leading-relaxed">
            Every state has its own rhythm, flavors, landscapes, and stories. 
            Choose a region and discover where your next journey begins.
          </p>
        </div>

        {/* Region Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {REGIONS.map((region) => {
            const isActive = selectedRegion === region.id;
            return (
              <button
                key={region.id}
                onClick={() => {
                  setSelectedRegion(region.id);
                  // Auto-select first state in this region if current is not in region
                  if (region.id !== 'all') {
                    const firstMatch = DETAILED_INDIAN_STATES.find(
                      p => p.region.toLowerCase() === region.id.toLowerCase()
                    );
                    if (firstMatch) setSelectedStateCode(firstMatch.code);
                  }
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#173D32] text-[#D8B878] shadow-md border border-[#D8B878]/50 scale-105'
                    : 'bg-[#DDE5D8]/60 text-[#242923] hover:bg-[#DDE5D8] hover:text-[#173D32]'
                }`}
              >
                {region.name}
              </button>
            );
          })}
        </div>

        {/* Two-Column Grid: Map on Left, Selected State Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Interactive India Map using DETAILED_INDIAN_STATES */}
          <div className="lg:col-span-6 bg-white p-4 sm:p-8 rounded-3xl shadow-xl border border-[#DDE5D8] relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DDE5D8]/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C66B45] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#173D32]">
                  Interactive Political Map of India
                </span>
              </div>
              <span className="text-[11px] text-[#535B51] font-light italic">
                Hover or click any state
              </span>
            </div>

            {/* SVG Map Container */}
            <div 
              ref={mapContainerRef}
              className="relative w-full aspect-[4/4.5] flex items-center justify-center"
            >
              <svg
                ref={svgRef}
                viewBox="0 0 615 710"
                className="w-full h-full max-h-[580px] drop-shadow-md select-none"
                xmlns="http://www.w3.org/2000/svg"
                onMouseLeave={() => {
                  setHoveredStateCode(null);
                  setTooltipPos(null);
                }}
              >
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#C66B45" floodOpacity="0.4" />
                  </filter>
                  <linearGradient id="selectedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C66B45" />
                    <stop offset="100%" stopColor="#A95532" />
                  </linearGradient>
                </defs>

                {/* State Paths from DETAILED_INDIAN_STATES */}
                {filteredStatePaths.map((state) => {
                  let fillColor = '#DDE5D8'; // Default muted sage/ivory
                  let strokeColor = '#BCC9B6';
                  let strokeWidth = '1.2';
                  let opacity = state.isRegionMatch ? 1 : 0.35;

                  if (state.isSelected) {
                    fillColor = 'url(#selectedGrad)';
                    strokeColor = '#D8B878';
                    strokeWidth = '2.2';
                    opacity = 1;
                  } else if (state.isHovered) {
                    fillColor = '#173D32';
                    strokeColor = '#D8B878';
                    strokeWidth = '2';
                    opacity = 1;
                  } else if (state.isRegionMatch && selectedRegion !== 'all') {
                    fillColor = '#C5D6BF';
                    strokeColor = '#173D32';
                    strokeWidth = '1.4';
                  }

                  return (
                    <g key={state.id}>
                      <path
                        d={state.d}
                        fill={fillColor}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        strokeLinejoin="round"
                        opacity={opacity}
                        style={{ outline: 'none' }}
                        className="cursor-pointer transition-all duration-300 ease-out hover:filter hover:drop-shadow-lg outline-none focus:outline-none focus:ring-0"
                        onClick={() => handleStateClick(state.code)}
                        onMouseEnter={() => {
                          setHoveredStateCode(state.code);
                          updateTooltipPosition(state.code);
                        }}
                        onMouseLeave={() => {
                          setHoveredStateCode(null);
                          setTooltipPos(null);
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`Select state ${state.name}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            handleStateClick(state.code);
                          }
                        }}
                      />

                      {/* Active State Pin Indicator */}
                      {state.isSelected && (
                        <g transform={`translate(${state.center.cx}, ${state.center.cy})`} className="pointer-events-none">
                          <circle r="12" fill="#C66B45" opacity="0.35" className="animate-ping" />
                          <circle r="6" fill="#F8F5EF" stroke="#C66B45" strokeWidth="2.5" />
                          <circle r="2.5" fill="#C66B45" />
                        </g>
                      )}

                      {/* Hovered State Pin Indicator */}
                      {state.isHovered && !state.isSelected && (
                        <g transform={`translate(${state.center.cx}, ${state.center.cy})`} className="pointer-events-none">
                          <circle r="12" fill="#D8B878" opacity="0.4" className="animate-ping" />
                          <circle r="6" fill="#173D32" stroke="#D8B878" strokeWidth="2" />
                          <circle r="2.5" fill="#D8B878" />
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Pinned Tooltip when hovering over a state */}
              {hoveredDetailedState && tooltipPos && (
                <div 
                  className={`pointer-events-none absolute z-30 bg-[#0F2821]/95 text-white px-5 py-3.5 rounded-2xl shadow-2xl border-2 border-[#D8B878] min-w-[220px] max-w-[320px] backdrop-blur-xl transition-all duration-200 animate-fade-in ${
                    tooltipPos.alignClass
                  } ${
                    tooltipPos.isTopHalf ? 'translate-y-4' : '-translate-y-[calc(100%+14px)]'
                  }`}
                  style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className="text-[11px] text-[#D8B878] font-bold tracking-widest uppercase bg-white/10 px-2.5 py-0.5 rounded-full border border-[#D8B878]/30">
                      {hoveredDetailedState.region} India
                    </span>
                    <span className="text-[11px] text-white/60">
                      Cap: {hoveredDetailedState.capital}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-[#F8F5EF] leading-snug">
                    {hoveredDetailedState.name}
                  </h4>
                  {hoveredDetailedState.tagline && (
                    <p className="text-xs text-white/80 font-light italic mt-1 line-clamp-1 border-t border-white/10 pt-1">
                      "{hoveredDetailedState.tagline}"
                    </p>
                  )}
                  <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/70">
                    <span>Click to view details</span>
                    <span className="text-[#D8B878] font-semibold flex items-center gap-0.5">Explore &rarr;</span>
                  </div>

                  {/* Pointer Arrow pinned directly to state pin */}
                  {tooltipPos.isTopHalf ? (
                    <div className={`absolute bottom-full ${tooltipPos.arrowClass} mb-[-1px] border-solid border-b-[#0F2821] border-b-8 border-x-transparent border-x-8 border-t-0`} />
                  ) : (
                    <div className={`absolute top-full ${tooltipPos.arrowClass} -mt-[1px] border-solid border-t-[#0F2821] border-t-8 border-x-transparent border-x-8 border-b-0`} />
                  )}
                </div>
              )}
            </div>

            {/* Quick helper legend */}
            <div className="mt-4 pt-3 border-t border-[#DDE5D8]/80 flex flex-wrap items-center justify-between text-xs text-[#535B51]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#C66B45]" />
                  <span>Selected State</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#173D32]" />
                  <span>Hovered State</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#DDE5D8]" />
                  <span>Region States</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#173D32]">
                Active: {activeStateData.name}
              </span>
            </div>
          </div>

          {/* RIGHT: Selected Destination Preview Panel */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-xl overflow-hidden border border-[#DDE5D8] flex flex-col">
            
            {/* Header Image Bar */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={activeStateData.image}
                alt={activeStateData.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2821] via-black/30 to-transparent" />

              {/* State badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C66B45] text-white shadow-md">
                  {activeStateData.regionLabel}
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#173D32]/90 text-[#D8B878] border border-[#D8B878]/30 backdrop-blur-md">
                  Capital: {activeStateData.capital}
                </span>
              </div>

              {/* State Name & Tagline */}
              <div className="absolute bottom-5 left-6 right-6 text-white z-10">
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F8F5EF] leading-tight">
                  {activeStateData.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#D8B878] italic font-serif mt-0.5">
                  "{activeStateData.tagline}"
                </p>
              </div>
            </div>

            {/* Description & Curated Experiences */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#173D32] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C66B45]" />
                  <span>The Soul of the Land</span>
                </h4>
                <p className="text-sm sm:text-base text-[#535B51] font-light leading-relaxed">
                  {activeStateData.description}
                </p>
              </div>

              {/* Notable Places */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#173D32] mb-3">
                  Signature Destinations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {activeStateData.topPlaces.map((place, idx) => (
                    <div key={idx} className="bg-[#EEF3EB] p-3 rounded-xl border border-[#DDE5D8]">
                      <span className="text-xs font-bold text-[#173D32] block leading-snug">
                        {place.name}
                      </span>
                      <span className="text-[10px] text-[#535B51] mt-1 block">
                        {place.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Season & Cultural Specialty */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#F8F5EF] p-3.5 rounded-xl border border-[#DDE5D8] flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#C66B45] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#535B51] block">Best Season</span>
                    <span className="text-xs font-semibold text-[#242923]">{activeStateData.bestSeason}</span>
                  </div>
                </div>

                <div className="bg-[#F8F5EF] p-3.5 rounded-xl border border-[#DDE5D8] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#173D32] flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#535B51] block">Regional Specialty</span>
                    <span className="text-xs font-semibold text-[#242923] line-clamp-1">{activeStateData.specialty}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#DDE5D8] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    if (onOpenStateModal) {
                      onOpenStateModal(activeStateData);
                    }
                  }}
                  className="px-5 py-2.5 rounded-full border border-[#173D32] text-[#173D32] hover:bg-[#173D32] hover:text-white transition-all duration-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Explore {activeStateData.name}</span>
                </button>

                <button
                  onClick={() => {
                    if (onEnquireForState) {
                      onEnquireForState(activeStateData.name);
                    } else {
                      const el = document.getElementById('enquiry');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#C66B45] hover:bg-[#A95532] text-white transition-all duration-300 text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>Plan a Journey Here</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
