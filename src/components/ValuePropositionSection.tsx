import React from 'react';
import { CTAButton } from './CTAButton';

export const ValuePropositionSection: React.FC = () => {
  return (
    <>
      <section className="bg-[rgba(1,1,2,1)] self-stretch z-10 mt-[-50px] w-full max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/56d23cdfc3992d51931dd69b870d4a0897cabcb2?placeholderIfAbsent=true"
          className="aspect-[0.96] object-contain w-full max-md:max-w-full"
          alt="Transition"
        />
      </section>
      <section className="bg-[rgba(228,228,235,1)] self-stretch z-10 flex w-full flex-col items-center text-[21px] text-[rgba(46,46,46,1)] font-bold text-center justify-center px-20 py-[85px] rounded-[40px] max-md:max-w-full max-md:px-5 max-md:py-12">
        <div className="flex w-[822px] max-w-full flex-col items-center">
          <h2 className="text-[rgba(8,9,20,1)] text-5xl leading-[58px] self-stretch max-md:max-w-full max-md:text-[28px] max-md:leading-[35px]">
            O Brasil está entrando em colapso, e<br className="max-md:hidden" />
            <span className="max-md:inline"> </span>quem não fizer parte da nova aliança
            <br className="max-md:hidden" />
            <span className="max-md:inline"> </span>vai ser engolido
          </h2>
          <p className="font-normal mt-11 max-md:max-w-full max-md:mt-8 max-md:text-[18px]">
            Se você tá satisfeito onde está… Se você ainda quer "esperar mais um
          </p>
          <p className="font-normal leading-8 mt-2.5 max-md:max-w-full max-md:text-[18px] max-md:leading-7">
            pouco"…{" "}
            <span className="font-bold">
              então não clique. Não entre. Não venha.
            </span>{" "}
            Porque a Aliança é pra
            <br className="max-md:hidden" />
            <span className="max-md:inline"> </span>quem já decidiu que não vai ficar na média.
          </p>
          <div className="mt-6 max-md:mt-5">
            <CTAButton className="w-[420px] max-w-full max-md:max-w-[300px]">
              QUERO SER PARTE DA ALIANÇA
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};
