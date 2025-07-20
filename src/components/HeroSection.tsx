import React from 'react';
import { CTAButton } from './CTAButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[950px] w-full font-bold pt-[82px] pb-[181px] px-20 max-md:min-h-[700px] max-md:pt-10 max-md:pb-[100px] max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/fd0eedbb4566fe3f4e02bfb7b7ce763198cea270?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <div className="relative flex w-[537px] max-w-full flex-col items-stretch -mb-9 max-md:mb-2.5 max-md:w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/944423aebc5c667095405fc555736cdafd323eec?placeholderIfAbsent=true"
          className="aspect-[0.8] object-contain w-[194px] max-w-full ml-4 rounded-[605px] max-md:ml-2.5 max-md:w-[120px] max-md:self-center max-md:ml-0"
          alt="Profile"
        />
        <h1 className="text-white text-5xl leading-[53px] max-md:max-w-full max-md:text-[28px] max-md:leading-[35px] max-md:text-center">
          O Brasil está entrando
          <br className="max-md:hidden" />
          <span className="max-md:inline"> </span>em colapso, e quem não
          <br className="max-md:hidden" />
          <span className="max-md:inline"> </span>fizer parte da nova
          <br className="max-md:hidden" />
          <span className="max-md:inline"> </span>aliança vai ser engolido
        </h1>
        <p className="text-[21px] leading-8 mt-[21px] max-md:max-w-full max-md:mr-0.5 max-md:text-[18px] max-md:leading-7 max-md:text-center max-md:mt-5">
          Não somos poucos, só estávamos separados…
          <span className="font-normal text-[rgba(198,198,198,1)]">
            {" "}
            Gente
          </span>
          <br />
          <span className="font-normal text-[rgba(198,198,198,1)]">
            como você, com fome de mudança. Mentores que já
          </span>
          <br />
          <span className="font-normal text-[rgba(198,198,198,1)]">
            chegaram onde você quer chegar. E uma tropa que te
          </span>
          <br />
          <span className="font-normal text-[rgba(198,198,198,1)]">
            levanta quando o mundo tenta te derrubar.{" "}
          </span>
          Na Aliança,
          <br />
          você nunca mais anda sozinho.
        </p>
        <div className="mt-[54px] max-md:mt-8 max-md:flex max-md:justify-center">
          <CTAButton className="w-full max-w-[420px] max-md:max-w-[340px]">
            QUERO SER PARTE DA ALIANÇA
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
