import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, Send } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, FacebookIcon } from './SocialIcons';

export const StayConnected: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const photoStrip = [
    {
      title: 'Sunrise over Ganges',
      location: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Dunes under Midnight',
      location: 'Jaisalmer',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Brahmaputra Rhinos',
      location: 'Kaziranga',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Morning Houseboat Calm',
      location: 'Alleppey',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Granite Boulders at Sunset',
      location: 'Hampi',
      image: 'https://images.unsplash.com/photo-1600100397608-f010f444f434?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Pristine Turquoise Shore',
      location: 'Andaman',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <section 
      id="connected"
      className="py-20 sm:py-28 bg-[#EEF3EB] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C66B45] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C66B45]" />
              <span>COMMUNITY & CHRONICLES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#173D32] leading-tight tracking-tight">
              Follow the Road <span className="italic font-light text-[#C66B45]">Less Ordinary.</span>
            </h2>

            <p className="mt-3 text-base text-[#535B51] font-light leading-relaxed">
              Discover new places, seasonal dispatch stories, and intimate cultural chronicles from across India.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border border-[#DDE5D8] hover:bg-[#C66B45] hover:text-white text-[#173D32] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border border-[#DDE5D8] hover:bg-[#C66B45] hover:text-white text-[#173D32] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              aria-label="YouTube"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white border border-[#DDE5D8] hover:bg-[#C66B45] hover:text-white text-[#173D32] flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Newsletter Subscription Bar */}
        <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl border border-[#DDE5D8] shadow-md max-w-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="font-serif text-xl font-bold text-[#173D32]">
                Subscribe to The India Dispatch
              </h3>
              <p className="text-xs text-[#535B51] mt-1 font-light">
                Receive our monthly private journal with secret havelis, tribal festivals, and private villa retreats.
              </p>
            </div>

            {isSubscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-[#173D32] bg-[#DDE5D8] px-4 py-2.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#C66B45]" />
                <span>You're subscribed! Welcome to the circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex-1 max-w-sm">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-full bg-[#F8F5EF] border border-[#DDE5D8] text-xs text-[#242923] focus:outline-none focus:border-[#C66B45]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#173D32] hover:bg-[#C66B45] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

      </div>

      {/* Editorial Photo Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 px-4 sm:px-6">
        {photoStrip.map((item, idx) => (
          <div
            key={idx}
            className="group relative h-48 sm:h-60 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D8B878]">
                {item.location}
              </span>
              <span className="text-xs font-serif font-semibold">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
