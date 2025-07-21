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
        <div className="flex w-[822px] max-w-full flex-col items-center max-lg:px-4">
          <h2 className="text-[rgba(8,9,20,1)] text-5xl leading-[58px] self-stretch max-lg:text-4xl max-lg:leading-[48px] max-md:max-w-full max-md:text-[28px] max-md:leading-[35px]">
            Você não está travada por falta de capacidade.
          </h2>
          <p className="font-normal mt-11 max-lg:text-[19px] max-lg:mt-8 max-md:max-w-full max-md:mt-8 max-md:text-[18px]">
            Está travada por histórias antigas que você ainda carrega.
          </p>
          <p className="font-normal leading-8 mt-2.5 max-lg:text-[19px] max-lg:leading-7 max-md:max-w-full max-md:text-[18px] max-md:leading-7">
            A mentoria O Despertar da Vida foi criada para mulheres que já entenderam que não dá mais pra adiar a própria história.{" "}
            <span className="font-bold">
              É hora de florescer com força, verdade e propósito.
            </span>
          </p>
          <div className="mt-6 max-lg:mt-5 max-md:mt-5">
            <CTAButton className="w-[420px] max-w-full max-lg:max-w-[350px] max-md:max-w-[300px] max-sm:max-w-[280px]">
              QUERO COMEÇAR MINHA TRANSFORMAÇÃO
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};
