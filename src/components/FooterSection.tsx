import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer>
      <section className="bg-[rgba(228,228,235,1)] self-stretch flex w-full flex-col items-center text-center justify-center mt-[110px] px-20 py-[86px] rounded-[40px_40px_0px_0px] max-lg:px-10 max-lg:py-16 max-lg:mt-20 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-12">
        <div className="flex w-[708px] max-w-full flex-col items-stretch max-lg:px-4">
          <h2 className="text-[rgba(8,9,20,1)] text-5xl font-bold leading-[1.4] self-center max-lg:text-4xl max-md:max-w-full max-md:text-[28px]">
            VOCÊ PRECISA DECIDIR:
          </h2>
          <p className="text-[rgba(122,122,122,1)] text-[21px] font-normal leading-8 mt-[60px] max-lg:text-[19px] max-lg:mt-10 max-md:max-w-full max-md:mt-8 max-md:text-[18px] max-md:leading-7">
            Se vai continuar testando sem direção e assistir a maior transferência de
            <br className="max-md:hidden" />
            <span className="max-md:inline"> </span>riqueza da história acontecer…
          </p>
          <div className="flex w-[668px] max-w-full items-stretch gap-5 text-lg font-semibold flex-wrap justify-between ml-3 mt-[34px] max-lg:flex-col max-lg:ml-0 max-lg:gap-4 max-lg:mt-6 max-md:flex-col max-md:ml-0 max-md:gap-4 max-md:mt-6">
            <button className="bg-[rgba(219,7,15,1)] flex flex-col items-stretch text-white leading-none justify-center px-[61px] py-[26px] rounded-[3px] max-lg:px-8 max-lg:py-5 max-lg:text-[17px] max-md:px-5 max-md:text-[16px] max-md:py-4 hover:bg-[rgba(200,7,15,1)] transition-colors">
              SEM VOCÊ OU…
            </button>
            <div className="text-[rgba(122,122,122,1)] text-[21px] my-auto max-lg:text-[19px] max-lg:my-2 max-md:text-[18px] max-md:my-2">
              ou
            </div>
            <button className="bg-[rgba(47,250,15,1)] flex flex-col items-stretch text-[rgba(14,14,14,1)] leading-none justify-center px-[61px] py-7 rounded-[3px] max-lg:px-8 max-lg:py-5 max-lg:text-[17px] max-md:px-5 max-md:text-[16px] max-md:py-4 hover:bg-[rgba(42,225,13,1)] transition-colors">
              ENTRAR AGORA
            </button>
          </div>
        </div>
      </section>

      <div className="border self-stretch flex w-full flex-col text-[15px] text-white font-bold text-center leading-6 px-20 py-[31px] border-[rgba(51,51,51,1)] border-solid max-lg:px-10 max-lg:py-6 max-md:max-w-full max-md:px-5 max-md:py-6">
        <img
          src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/9c462c7725cf790d0fb7902bf22e3977a1057fda?placeholderIfAbsent=true"
          className="aspect-[3.77] object-contain w-[166px] self-center max-w-full max-lg:w-[140px] max-md:w-[120px]"
          alt="Logo"
        />
        <div className="flex w-[1052px] max-w-full items-stretch gap-5 flex-wrap justify-between mt-[25px] max-lg:flex-col max-lg:items-center max-lg:gap-4 max-lg:mt-4 max-md:flex-col max-md:items-center max-md:gap-4 max-md:mt-4">
          <div className="mt-[58px] max-lg:mt-4 max-lg:text-[14px] max-lg:order-2 max-md:mt-4 max-md:text-[13px] max-md:order-2">
            <strong>Pablo Marçal 2025</strong>
            <span className="font-normal">
              {" "}
              | Todos os direitos reservados
            </span>
            <br />
            <span className="font-normal">CNPJ: 37676810/0001-72</span>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/f0983e7be6c251ba6effd251b74f6c450ada9401?placeholderIfAbsent=true"
            className="aspect-[0.94] object-contain w-[100px] shrink-0 max-w-full max-lg:w-[90px] max-lg:order-1 max-md:w-[80px] max-md:order-1"
            alt="QR Code"
          />
        </div>
      </div>
    </footer>
  );
};
