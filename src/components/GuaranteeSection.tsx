import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-4">
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/67949353a2fde1f5e9b73ff04e89d20dcb6199eb?placeholderIfAbsent=true"
        className="aspect-[1.25] object-contain w-[188px] max-w-full mt-2.5 max-lg:w-[150px] max-md:w-[120px]"
        alt="Guarantee badge"
      />
      <h2 className="text-white text-5xl font-bold leading-[1.4] text-center mt-[47px] max-lg:text-4xl max-lg:mt-8 max-md:max-w-full max-md:text-[28px] max-md:mt-8 max-md:px-4">
        Garantia incondicional de 15 dias
      </h2>
      <p className="text-[rgba(223,223,223,1)] text-[21px] font-normal text-center ml-3.5 mt-10 max-lg:text-[19px] max-lg:ml-0 max-lg:mt-8 max-md:max-w-full max-md:text-[18px] max-md:ml-0 max-md:mt-6 max-md:px-4">
        Você tem 15 dias de garantia incondicional.
      </p>
      <p className="text-[rgba(223,223,223,1)] text-[21px] font-normal leading-8 text-center mt-2.5 max-lg:text-[19px] max-lg:leading-7 max-md:max-w-full max-md:text-[18px] max-md:leading-7 max-md:px-4">
        Se por qualquer motivo sentir que não é o seu momento, devolvemos 100% do valor sem questionamentos.{" "}
        <span className="font-bold">
          Você entra com confiança — e decide com liberdade.
        </span>
      </p>
    </section>
  );
};
