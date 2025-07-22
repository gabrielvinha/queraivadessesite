import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-50 sm:px-60 md:px-80">
       
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] text-center mt-8 sm:mt-10 md:mt-12">
        Garantia incondicional de 15 dias
      </h2>
      <p className="text-[rgba(223,223,223,1)] text-base sm:text-lg md:text-xl font-normal text-center mt-6 sm:mt-8 md:mt-10">
        Você tem 15 dias de garantia incondicional.
      </p>
      <p className="text-[rgba(223,223,223,1)] text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center mt-2.5">
        Se por qualquer motivo sentir que não é o seu momento, devolvemos 100% do valor sem questionamentos.{" "}
        <span className="font-bold">
          Você entra com confiança — e decide com liberdade.
        </span>
      </p>
    </section>
  );
};
