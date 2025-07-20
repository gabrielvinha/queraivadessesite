import React from 'react';
import { CTAButton } from './CTAButton';

export const PurposeSection: React.FC = () => {
  return (
    <section className="bg-[rgba(228,228,235,1)] self-stretch flex w-full flex-col items-center font-bold text-center justify-center px-20 py-[74px] rounded-[40px] max-md:max-w-full max-md:px-5 max-md:py-12">
      <div className="flex w-[865px] max-w-full flex-col items-center ml-[11px] max-md:ml-0">
        <h2 className="text-[rgba(8,9,20,1)] text-5xl leading-[1.4] max-md:max-w-full max-md:text-[28px]">
          PROPÓSITO DA ALIANÇA REINANTE
        </h2>
        <p className="text-[rgba(11,12,14,1)] text-[21px] font-normal self-stretch mt-[30px] max-md:max-w-full max-md:text-[18px] max-md:mt-6">
          Ativar o seu chamado, sua vocação para você construir um celeiro financeiro e liberdade.
        </p>
        <div className="mt-[23px] max-md:mt-6">
          <CTAButton className="w-[420px] max-w-full max-md:max-w-[300px]">
            QUERO SER PARTE DA ALIANÇA
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
