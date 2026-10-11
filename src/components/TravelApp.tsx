import React, { useState } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { ExploreIndia } from './ExploreIndia';
import { AttractionsGallery } from './AttractionsGallery';
import { InteractiveMapSection } from './InteractiveMapSection';
import { PopularPackages } from './PopularPackages';
import { EnquirySection } from './EnquirySection';
import { StayConnected } from './StayConnected';
import { Footer } from './Footer';
import { QuickViewModal, type ModalContent } from './QuickViewModal';
import type { Attraction } from '../data/attractions';
import type { TravelPackage } from '../data/packages';
import type { StateData } from '../data/indianStates';
import type { Experience } from '../data/experiences';

export const TravelApp: React.FC = () => {
  const [modalData, setModalData] = useState<ModalContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefilledPackage, setPrefilledPackage] = useState<string>('');
  const [prefilledState, setPrefilledState] = useState<string>('');

  // Handle attraction selection (opens rich modal)
  const handleSelectAttraction = (attraction: Attraction) => {
    setModalData({
      type: 'attraction',
      title: attraction.name,
      subtitle: attraction.tagline,
      image: attraction.image,
      badge: attraction.category,
      region: attraction.region,
      description: attraction.description,
      bestTime: attraction.bestTime,
      highlights: attraction.highlights
    });
    setIsModalOpen(true);
  };

  // Handle package selection (opens modal with itinerary)
  const handleSelectPackage = (pkg: TravelPackage) => {
    setModalData({
      type: 'package',
      title: pkg.title,
      subtitle: pkg.tagline,
      image: pkg.heroImage,
      badge: pkg.badge,
      region: pkg.region,
      duration: pkg.duration,
      description: pkg.description,
      highlights: pkg.inclusions,
      itinerary: pkg.itinerary
    });
    setIsModalOpen(true);
  };

  // Handle state preview selection (opens modal with top sights)
  const handleSelectState = (stateData: StateData) => {
    setModalData({
      type: 'state',
      title: stateData.name,
      subtitle: stateData.tagline,
      image: stateData.image,
      badge: stateData.regionLabel,
      region: `Capital: ${stateData.capital}`,
      description: stateData.description,
      bestTime: stateData.bestSeason,
      highlights: stateData.topPlaces.map(p => `${p.name} (${p.type})`)
    });
    setIsModalOpen(true);
  };

  // Handle experience card selection
  const handleSelectExperience = (exp: Experience) => {
    setModalData({
      type: 'package',
      title: exp.title,
      subtitle: exp.subtitle,
      image: exp.image,
      badge: exp.tag,
      duration: exp.durationHint,
      description: exp.description,
      highlights: exp.places.map(p => `Key hotspot: ${p}`)
    });
    setIsModalOpen(true);
  };

  // Enquiry triggers
  const handleEnquireForPackage = (pkgTitle: string) => {
    setPrefilledPackage(pkgTitle);
    const el = document.getElementById('enquiry');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnquireForState = (stateName: string) => {
    setPrefilledState(stateName);
    const el = document.getElementById('enquiry');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#242923] flex flex-col font-sans selection:bg-[#C66B45] selection:text-white">
      {/* Header navigation */}
      <Header />

      <main className="flex-1 w-full">
        {/* 1. Hero Section — Fullscreen cinematic India experience */}
        <Hero />

        {/* 2. Explore India Section — 8 Asymmetrical Experience Cards */}
        <ExploreIndia onSelectExperience={handleSelectExperience} />

        {/* 3. Attractions Section — Horizontal Scroll with 3D Flip Cards */}
        <AttractionsGallery onSelectAttraction={handleSelectAttraction} />

        {/* 4. Travel by Region — Interactive Political Map of India */}
        <InteractiveMapSection 
          onOpenStateModal={handleSelectState}
          onEnquireForState={handleEnquireForState}
        />

        {/* 5. Popular Travel Packages — Curated Collections */}
        <PopularPackages 
          onSelectPackage={handleSelectPackage}
          onEnquireForPackage={handleEnquireForPackage}
        />

        {/* 6. Enquiry Section — Plan Your Journey */}
        <EnquirySection 
          prefilledPackage={prefilledPackage}
          prefilledState={prefilledState}
        />

        {/* 7. Stay Connected — Community & Stories */}
        <StayConnected />
      </main>

      {/* 8. Refined Luxury Footer */}
      <Footer />

      {/* Reusable Quick View Modal for Deep Exploration */}
      <QuickViewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalData}
        onEnquire={(title) => {
          setPrefilledPackage(title);
          const el = document.getElementById('enquiry');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
};
