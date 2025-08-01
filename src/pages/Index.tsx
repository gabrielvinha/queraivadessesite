import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ValuePropositionSection } from '@/components/ValuePropositionSection';
import { StorySection } from '@/components/StorySection';
import { CrisisTimelineSection } from '@/components/CrisisTimelineSection';
import { PurposeSection } from '@/components/PurposeSection';
import { LifeAreasSection } from '@/components/LifeAreasSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PricingSection } from '@/components/PricingSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { FooterSection } from '@/components/FooterSection';
import { AboutSection } from '@/components/AboutSection';

const Index = () => {
  return (
    <main className="bg-white flex flex-col min-h-screen w-full overflow-x-hidden" style={{ margin: 0, padding: 0 }}>
      <HeroSection />
      <div className="w-full flex flex-col items-center">
        <ValuePropositionSection />
        <StorySection />
        <CrisisTimelineSection />
        <PurposeSection />
        <LifeAreasSection />
        <AboutSection />
        <FeaturesSection />
        <PricingSection />
        <GuaranteeSection />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
