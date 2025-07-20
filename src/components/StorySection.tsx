import React from 'react';
import { CTAButton } from './CTAButton';

export const StorySection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[1500px] mt-[-39px] w-full items-center text-[21px] font-normal justify-center px-20 py-[217px] max-md:max-w-full max-md:px-5 max-md:py-16 max-md:min-h-[800px] max-md:mt-0">
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/dbe7fd4f2a1af7e0fe12b70a43b1a375f675e0c9?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <article className="relative bg-[rgba(5,7,11,1)] border flex mb-[-43px] w-[768px] max-w-full flex-col items-stretch px-16 py-[105px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:mb-2.5 max-md:px-5 max-md:py-12 max-md:w-[95%]">
        <h2 className="text-white text-[56px] font-bold leading-[67px] max-md:max-w-full max-md:text-[28px] max-md:leading-[35px] max-md:mr-2.5 max-md:text-center">
          NÃO FAZ SENTIDO VOCÊ
          <br />
          CAMINHAR SOZINHO
        </h2>
        <p className="text-[rgba(215,215,215,1)] leading-8 mt-[37px] max-md:max-w-full max-md:text-[18px] max-md:leading-7 max-md:mt-6 max-md:text-center">
          Você passou tempo demais tentando acertar no escuro. Tentando
          <br className="max-md:hidden" />
          <span className="max-md:inline"> </span>sozinho. Carregando tudo nas costas.
        </p>
        <p className="text-[rgba(215,215,215,1)] mt-[43px] max-md:max-w-full max-md:mt-6 max-md:text-[18px] max-md:text-center">
          Chegou a hora de fazer parte de algo MAIOR.
        </p>
        <p className="text-[rgba(215,215,215,1)] leading-8 mr-[53px] mt-[42px] max-md:max-w-full max-md:mr-0 max-md:mt-6 max-md:text-[18px] max-md:leading-7 max-md:text-center">
          A Aliança Reinante é mais que um ecossistema digital.
          <br />É um lar pra quem nunca teve lugar.
          <br />É a base dos que foram desacreditados — mas se recusam a<br className="max-md:hidden" />
          <span className="max-md:inline"> </span>ser apagados.
        </p>
        <p className="text-[rgba(215,215,215,1)] mr-[23px] mt-[39px] max-md:max-w-full max-md:mr-0 max-md:mt-6 max-md:text-[18px] max-md:text-center">
          Não é só sobre ganhar dinheiro. É sobre não lutar mais sozinho.
        </p>
        <p className="font-bold leading-8 mt-[38px] max-md:max-w-full max-md:mt-6 max-md:text-[18px] max-md:leading-7 max-md:text-center">
          É sobre entrar para uma aliança que vai te impulsionar em
          <br className="max-md:hidden" />
          <span className="max-md:inline"> </span>todas as áreas da vida.
        </p>
        <p className="text-[rgba(215,215,215,1)] mt-12 max-md:max-w-full max-md:mt-6 max-md:text-[18px] max-md:text-center">
          Espiritual, mental, financeira, emocional, familiar...
        </p>
        <p className="text-[rgba(215,215,215,1)] leading-8 mr-[50px] mt-[42px] max-md:max-w-full max-md:mr-0 max-md:mt-6 max-md:text-[18px] max-md:leading-7 max-md:text-center">
          Um movimento dos improváveis que não se dobram — e não
          <br className="max-md:hidden" />
          <span className="max-md:inline"> </span>andam mais sozinhos.
        </p>
        <div className="mt-[30px] max-md:mt-6">
          <CTAButton className="w-full max-md:max-w-[300px] max-md:mx-auto">
            QUERO SER PARTE DA ALIANÇA
          </CTAButton>
        </div>
      </article>
    </section>
  );
};
