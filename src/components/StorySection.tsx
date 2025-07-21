import React from 'react';
import { CTAButton } from './CTAButton';

export const StorySection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[1500px] mt-[-39px] w-full items-center text-[21px] font-normal justify-center px-20 py-[217px] max-lg:px-10 max-lg:py-32 max-lg:min-h-[1000px] max-md:max-w-full max-md:px-5 max-md:py-16 max-md:min-h-[800px] max-md:mt-0">
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/dbe7fd4f2a1af7e0fe12b70a43b1a375f675e0c9?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <article className="relative bg-[rgba(5,7,11,1)] border flex mb-[-43px] w-[768px] max-w-full flex-col items-stretch px-16 py-[105px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-lg:px-8 max-lg:py-16 max-lg:w-[90%] max-md:mb-2.5 max-md:px-5 max-md:py-12 max-md:w-[95%]">
        <h2 className="text-white text-[56px] font-bold leading-[67px] max-lg:text-[42px] max-lg:leading-[52px] max-lg:text-center max-md:max-w-full max-md:text-[28px] max-md:leading-[35px] max-md:mr-2.5 max-md:text-center">
          NÃO FAZ SENTIDO VOCÊ
          <br />
          CAMINHAR SOZINHO
        </h2>
        <p className="text-[rgba(215,215,215,1)] leading-8 mt-[37px] max-lg:text-[19px] max-lg:text-center max-lg:mt-6 max-md:max-w-full max-md:text-[18px] max-md:leading-7 max-md:mt-6 max-md:text-center">
          Você tentou sozinha.
          <br className="max-md:hidden" />
          <span className="max-md:inline"> </span>Tentou calar o chamado.
        </p>
        <p className="text-[rgba(215,215,215,1)] mt-[43px] max-lg:text-[19px] max-lg:text-center max-lg:mt-6 max-md:max-w-full max-md:mt-6 max-md:text-[18px] max-md:text-center">
          Tentou fazer dar certo com a força do braço — mas agora percebe que precisa de mais.
        </p>
        <p className="text-[rgba(215,215,215,1)] leading-8 mr-[53px] mt-[42px] max-lg:text-[19px] max-lg:text-center max-lg:mr-0 max-lg:mt-6 max-md:max-w-full max-md:mr-0 max-md:mt-6 max-md:text-[18px] max-md:leading-7 max-md:text-center">
          Essa mentoria é mais do que um curso.
          <br />É um reencontro.
          <br />É um caminho estruturado pra você se libertar do que te trava e ativar tudo que já está em você.<br className="max-md:hidden" />
          <span className="max-md:inline"> </span>Com acolhimento, clareza, fé e técnica.
        </p>
        <div className="mt-[30px] max-lg:mt-6 max-md:mt-6">
          <CTAButton className="w-full max-lg:max-w-[350px] max-lg:mx-auto max-md:max-w-[300px] max-md:mx-auto max-sm:max-w-[280px]">
            EU QUERO DESPERTAR
          </CTAButton>
        </div>
      </article>
    </section>
  );
};
