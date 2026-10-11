import React from 'react';
import { X, Calendar, MapPin, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export interface ModalContent {
  type: 'package' | 'attraction' | 'state';
  title: string;
  subtitle?: string;
  image: string;
  badge?: string;
  region?: string;
  description: string;
  duration?: string;
  bestTime?: string;
  highlights?: string[];
  itinerary?: { day: string; title: string; desc: string }[];
}

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ModalContent | null;
  onEnquire?: (title: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ isOpen, onClose, data, onEnquire }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F2821]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#F8F5EF] rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col border border-[#D8B878]/30">
        
        {/* Header Image Bar */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173D32] via-[#173D32]/40 to-transparent" />
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-[#C66B45] text-white flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges & Title in Banner */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {data.badge && (
                <span className="px-3 py-1 text-xs tracking-wider uppercase font-semibold bg-[#C66B45] text-white rounded-full">
                  {data.badge}
                </span>
              )}
              {data.region && (
                <span className="px-3 py-1 text-xs tracking-wider uppercase bg-[#173D32]/80 backdrop-blur-sm border border-[#D8B878]/40 text-[#D8B878] rounded-full">
                  {data.region}
                </span>
              )}
              {data.duration && (
                <span className="px-3 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {data.duration}
                </span>
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8F5EF] leading-tight">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-[#D8B878] text-sm sm:text-base font-light italic mt-1">
                {data.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#242923]">
          
          <div>
            <h3 className="text-xs tracking-widest uppercase font-semibold text-[#C66B45] mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Overview & Essence
            </h3>
            <p className="text-base sm:text-lg text-[#535B51] leading-relaxed font-light">
              {data.description}
            </p>
          </div>

          {/* Best Time To Visit */}
          {data.bestTime && (
            <div className="bg-[#DDE5D8]/40 p-4 rounded-xl border border-[#DDE5D8] flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#173D32]" />
              <div>
                <span className="text-xs uppercase tracking-wider text-[#173D32] font-semibold block">Ideal Travel Season</span>
                <span className="text-sm font-medium text-[#242923]">{data.bestTime}</span>
              </div>
            </div>
          )}

          {/* Highlights */}
          {data.highlights && data.highlights.length > 0 && (
            <div>
              <h3 className="text-xs tracking-widest uppercase font-semibold text-[#173D32] mb-3">
                Key Experiences & Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {data.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm bg-white p-3 rounded-lg border border-[#DDE5D8]/80 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#C66B45] flex-shrink-0 mt-0.5" />
                    <span className="text-[#242923] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Itinerary Preview if available */}
          {data.itinerary && data.itinerary.length > 0 && (
            <div>
              <h3 className="text-xs tracking-widest uppercase font-semibold text-[#173D32] mb-4">
                Curated Itinerary Outline
              </h3>
              <div className="space-y-3 border-l-2 border-[#D8B878]/50 ml-2 pl-4">
                {data.itinerary.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#C66B45] border-2 border-[#F8F5EF]" />
                    <span className="text-xs font-bold text-[#C66B45] uppercase tracking-wider block">{step.day}: {step.title}</span>
                    <p className="text-sm text-[#535B51] mt-0.5">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-[#EEF3EB] border-t border-[#DDE5D8] flex flex-wrap items-center justify-between gap-4">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-[#535B51] hover:text-[#242923] transition-colors"
          >
            Back to Catalog
          </button>

          <button
            onClick={() => {
              onClose();
              if (onEnquire) {
                onEnquire(data.title);
              } else {
                const el = document.getElementById('enquiry');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-[#C66B45] hover:bg-[#A95532] rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            Enquire About This Journey
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
