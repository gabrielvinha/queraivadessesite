import React from 'react';
import { CTAButton } from './CTAButton';

export const ValuePropositionSection: React.FC = () => {
  return (
    <>
      <section className="bg-[rgba(228,228,235,1)] self-stretch z-10 flex w-full flex-col items-center text-base sm:text-lg md:text-xl lg:text-xl text-[rgba(46,46,46,1)] font-bold text-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 rounded-[40px]">
        <div className="flex w-full max-w-[822px] flex-col items-center">
          <h2 className="text-[rgba(8,9,20,1)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-normal md:leading-relaxed self-stretch">
            Você não está travada por falta de capacidade.
          </h2>
          <p className="font-normal mt-6 sm:mt-8 md:mt-10 lg:mt-11">
            Está travada por histórias antigas que você ainda carrega.
          </p>
          <p className="font-normal leading-relaxed mt-2.5">
            A mentoria O Despertar da Vida foi criada para mulheres que já entenderam que não dá mais pra adiar a própria história.{" "}
            <span className="font-bold">
              É hora de florescer com força, verdade e propósito.
            </span>
          </p>
          <div className="mt-5 sm:mt-6">
            <CTAButton className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              QUERO COMEÇAR MINHA TRANSFORMAÇÃO
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};
