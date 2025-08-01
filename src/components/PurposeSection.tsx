import React from 'react';
import { CTAButton } from './CTAButton';

export const PurposeSection: React.FC = () => {
  return (
    <section className="bg-[rgba(228,228,235,1)] self-stretch flex w-full flex-col items-center font-bold text-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 rounded-[40px]">
      <div className="flex w-full max-w-[865px] flex-col items-center">
        <h2 className="text-[rgba(8,9,20,1)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
          PROPÓSITO DA MENTORIA O DESPERTAR DA VIDA
        </h2>
        <p className="text-[rgba(11,12,14,1)] text-base sm:text-lg md:text-xl font-normal self-stretch mt-6 sm:mt-8">
          Despertar sua essência feminina, ativar seu propósito e transformar sua vida em todas as áreas.
        </p>
        <div className="mt-5 sm:mt-6">
          <CTAButton 
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]"
            scrollToCheckout={true}
          >
            QUERO DESPERTAR MINHA VIDA
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
