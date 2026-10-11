import React, { useState, useEffect } from 'react';
import { ALL_INDIAN_STATES_LIST } from '../data/indianStates';
import { Send, CheckCircle2, AlertCircle, Shield, Sparkles, User, Phone, Mail, MapPin, Users, MessageSquare } from 'lucide-react';

interface EnquirySectionProps {
  prefilledPackage?: string;
  prefilledState?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ 
  prefilledPackage, 
  prefilledState 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    packageType: 'Family Holiday',
    destinationState: 'Rajasthan',
    travelers: 2,
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update form if prefilled props change
  useEffect(() => {
    if (prefilledPackage) {
      setFormData(prev => ({
        ...prev,
        description: prev.description 
          ? prev.description 
          : `Interested in: ${prefilledPackage}`
      }));
    }
    if (prefilledState) {
      setFormData(prev => ({
        ...prev,
        destinationState: prefilledState
      }));
    }
  }, [prefilledPackage, prefilledState]);

  const packageTypes = [
    'Solo Trip',
    'Family Holiday',
    'Couple Getaway',
    'Honeymoon',
    'Group Tour',
    'Adventure Trip',
    'Heritage & Culture',
    'Spiritual Journey',
    'Other'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.';
    }

    // Validate Phone Number
    const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +91 98765 43210).';
    }

    // Validate Email if provided
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    // Validate Travelers
    if (formData.travelers < 1 || formData.travelers > 50) {
      newErrors.travelers = 'Number of travelers must be between 1 and 50.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate API submission to travel concierge CRM
      await new Promise(resolve => setTimeout(resolve, 1400));
      
      const generatedRef = `ATU-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedRef);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission failed', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      packageType: 'Family Holiday',
      destinationState: 'Rajasthan',
      travelers: 2,
      description: ''
    });
    setErrors({});
  };

  return (
    <section 
      id="enquiry"
      className="py-24 sm:py-32 bg-[#173D32] text-white relative overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C66B45]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D8B878]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#D8B878] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B878]" />
            <span>BESPOKE CONCIERGE PLANNING</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F8F5EF] leading-[1.1] tracking-tight">
            Your Next Story <span className="italic font-light text-[#D8B878]">Starts Here.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#F8F5EF]/80 font-light leading-relaxed">
            Tell us what you're dreaming of. We'll help you turn it into a journey worth remembering.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#0F2821] border border-[#D8B878]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {isSubmitted ? (
            /* Success Confirmation State */
            <div className="text-center py-10 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#C66B45]/20 border border-[#C66B45] text-[#D8B878] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#D8B878]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D8B878] block">
                  Enquiry Registered Successfully
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#F8F5EF] mt-1">
                  Thank You, {formData.fullName}.
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto mt-2 font-light">
                  Our private India travel designer will contact you within 24 hours to craft your tailored itinerary.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between text-white/60">
                  <span>Reference Dossier:</span>
                  <span className="text-[#D8B878] font-bold font-mono">{referenceId}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Destination Focus:</span>
                  <span className="text-white font-medium">{formData.destinationState}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Expedition Style:</span>
                  <span className="text-white font-medium">{formData.packageType}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Travelers:</span>
                  <span className="text-white font-medium">{formData.travelers} Persons</span>
                </div>
              </div>

              {/* API Integration Boundary Notice */}
              <div className="text-[11px] text-[#D8B878]/80 max-w-md mx-auto border-t border-white/10 pt-4">
                ℹ️ Integration Boundary: Ready to dispatch to CRM/Webhook endpoint (`/api/enquiries`).
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Plan Another Trip
              </button>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8B878] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Maharaja Vikramaditya / Elena Rostova"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${
                      errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#D8B878]'
                    } text-white placeholder-white/30 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8B878] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210 / +1 (555) 019-2834"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${
                      errors.phone ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#D8B878]'
                    } text-white placeholder-white/30 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Address (Optional) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D8B878]" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="concierge@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/5 border ${
                      errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/15 focus:border-[#D8B878]'
                    } text-white placeholder-white/30 text-sm focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Package Type Dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8B878] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Package Type</span>
                  </label>
                  <select
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#173D32] border border-white/15 text-white text-sm focus:border-[#D8B878] focus:outline-none transition-colors"
                  >
                    {packageTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0F2821] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination State Dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8B878] mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Destination State / Region</span>
                  </label>
                  <select
                    value={formData.destinationState}
                    onChange={(e) => setFormData({ ...formData, destinationState: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#173D32] border border-white/15 text-white text-sm focus:border-[#D8B878] focus:outline-none transition-colors"
                  >
                    {ALL_INDIAN_STATES_LIST.map((state) => (
                      <option key={state} value={state} className="bg-[#0F2821] text-white">
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Number of Travelers */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D8B878] mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Number of Travelers</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, travelers: Math.max(1, formData.travelers - 1) })}
                      className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg flex items-center justify-center transition-colors border border-white/10"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) || 1 })}
                      className="w-full text-center px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-sm focus:border-[#D8B878] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, travelers: Math.min(50, formData.travelers + 1) })}
                      className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-lg flex items-center justify-center transition-colors border border-white/10"
                    >
                      +
                    </button>
                  </div>
                  {errors.travelers && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.travelers}</p>
                  )}
                </div>

              </div>

              {/* Travel Description / Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#D8B878]" />
                  <span>Travel Dreams, Preferred Dates, or Special Requests</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your timeline, special occasions (anniversaries, private safaris), pace of travel, or dietary preferences..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm focus:border-[#D8B878] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#C66B45] hover:bg-[#A95532] text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] border border-[#D8B878]/40 flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Connecting with Travel Concierge...
                    </span>
                  ) : (
                    <>
                      <span>Start Planning My Trip</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Reassurance */}
              <div className="flex items-center justify-center gap-2 text-xs text-white/60 text-center font-light pt-2">
                <Shield className="w-3.5 h-3.5 text-[#D8B878]" />
                <span>Your information is held in strict confidentiality. Zero spam, ever.</span>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
