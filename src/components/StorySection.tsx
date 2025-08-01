import React from 'react';
import { CTAButton } from './CTAButton';

export const StorySection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1500px] mt-0 sm:mt-[-20px] md:mt-[-39px] w-full items-center text-base sm:text-lg md:text-xl font-normal justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-24 md:py-32 lg:py-48 xl:py-56">
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/dbe7fd4f2a1af7e0fe12b70a43b1a375f675e0c9?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <article className="relative bg-[rgba(5,7,11,1)] border flex mb-0 sm:mb-[-20px] md:mb-[-43px] w-full max-w-[95%] sm:max-w-[90%] md:max-w-[768px] flex-col items-stretch px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 rounded-[10px] border-[rgba(36,37,51,1)] border-solid">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-center md:text-left">
          NÃO FAZ SENTIDO VOCÊ
          <br />
          CAMINHAR SOZINHA
        </h2>
        <p className="text-[rgba(215,215,215,1)] leading-relaxed mt-6 sm:mt-8 md:mt-10 text-center md:text-left">
          Você tentou sozinha.
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>Tentou calar o chamado.
        </p>
        <p className="text-[rgba(215,215,215,1)] mt-6 sm:mt-8 md:mt-10 text-center md:text-left">
          Tentou fazer dar certo com a força do braço — mas agora percebe que precisa de mais.
        </p>
        <p className="text-[rgba(215,215,215,1)] leading-relaxed mt-6 sm:mt-8 md:mt-10 text-center md:text-left">
          Essa mentoria é mais do que um curso.
          <br />É um reencontro.
          <br />É um caminho estruturado pra você se libertar do que te trava e ativar tudo que já está em você.<br className="max-md:hidden" />
          <span className="max-md:inline"> </span>Com acolhimento, clareza, fé e técnica.
        </p>
        <div className="mt-6 sm:mt-8">
          <CTAButton 
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] mx-auto md:mx-0"
            scrollToCheckout={true}
          >
            EU QUERO DESPERTAR
          </CTAButton>
        </div>
      </article>
    </section>
  );
};
