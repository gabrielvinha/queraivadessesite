import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/67949353a2fde1f5e9b73ff04e89d20dcb6199eb?placeholderIfAbsent=true"
        className="aspect-[1.25] object-contain w-[188px] max-w-full mt-2.5 max-md:w-[120px]"
        alt="Guarantee badge"
      />
      <h2 className="text-white text-5xl font-bold leading-[1.4] text-center mt-[47px] max-md:max-w-full max-md:text-[28px] max-md:mt-8 max-md:px-4">
        Garantia incondicional de 15 dias
      </h2>
      <p className="text-[rgba(223,223,223,1)] text-[21px] font-normal text-center ml-3.5 mt-10 max-md:max-w-full max-md:text-[18px] max-md:ml-0 max-md:mt-6 max-md:px-4">
        Se em 15 dias você sentir que não é pra você, te devolvemos 100% do valor. Sem
      </p>
      <p className="text-[rgba(223,223,223,1)] text-[21px] font-normal leading-8 text-center mt-2.5 max-md:max-w-full max-md:text-[18px] max-md:leading-7 max-md:px-4">
        letra miúda. Sem questionamento.{" "}
        <span className="font-bold">
          Você entra com confiança. E se não sentir
        </span>
        <br className="max-md:hidden" />
        <span className="max-md:inline"> </span><span className="font-bold">que é pra você — sai sem prejuízo</span>
      </p>
    </section>
  );
};
