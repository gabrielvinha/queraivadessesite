import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 md:px-8">
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/67949353a2fde1f5e9b73ff04e89d20dcb6199eb?placeholderIfAbsent=true"
        className="aspect-[1.25] object-contain w-24 sm:w-32 md:w-40 lg:w-48 max-w-full mt-2.5"
        alt="Guarantee badge"
      />
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
