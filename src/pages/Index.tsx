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

const Index = () => {
  return (
    <main className="bg-white flex flex-col items-center min-h-screen">
      <HeroSection />
      <ValuePropositionSection />
      <StorySection />
      <CrisisTimelineSection />
      <PurposeSection />
      <LifeAreasSection />
      <FeaturesSection />
      <PricingSection />
      <GuaranteeSection />
      <FooterSection />
    </main>
  );
};

export default Index;
