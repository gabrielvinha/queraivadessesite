import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer>
      <section className="bg-[rgba(228,228,235,1)] self-stretch flex w-full flex-col items-center text-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 rounded-[40px_40px_0px_0px]">
        <div className="flex w-full max-w-[708px] flex-col items-stretch">
          <h2 className="text-[rgba(8,9,20,1)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] self-center">
            VOCÊ PRECISA DECIDIR:
          </h2>
          <p className="text-[rgba(122,122,122,1)] text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            Se vai continuar testando sem direção e assistir a maior transferência de
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>riqueza da história acontecer…
          </p>
          <div className="flex w-full max-w-[668px] items-stretch gap-5 text-base sm:text-lg font-semibold flex-col sm:flex-row justify-between mt-6 sm:mt-8">
            <button className="bg-[rgba(219,7,15,1)] flex flex-col items-stretch text-white leading-none justify-center px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-[3px] hover:bg-[rgba(200,7,15,1)] transition-colors">
              SEM VOCÊ OU…
            </button>
            <div className="text-[rgba(122,122,122,1)] text-base sm:text-lg md:text-xl my-auto sm:my-2">
              ou
            </div>
            <button className="bg-[rgba(47,250,15,1)] flex flex-col items-stretch text-[rgba(14,14,14,1)] leading-none justify-center px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-7 rounded-[3px] hover:bg-[rgba(42,225,13,1)] transition-colors">
              ENTRAR AGORA
            </button>
          </div>
        </div>
      </section>

      <div className="border self-stretch flex w-full flex-col text-sm sm:text-base text-white font-bold text-center leading-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 border-[rgba(51,51,51,1)] border-solid">
        <img
          src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/9c462c7725cf790d0fb7902bf22e3977a1057fda?placeholderIfAbsent=true"
          className="aspect-[3.77] object-contain w-24 sm:w-32 md:w-40 lg:w-44 self-center max-w-full"
          alt="Logo"
        />
        <div className="flex w-full max-w-[1052px] items-stretch gap-5 flex-col md:flex-row justify-between items-center mt-4 sm:mt-6">
          <div className="mt-4 sm:mt-8 md:mt-12 text-xs sm:text-sm order-2 md:order-1">
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
            className="aspect-[0.94] object-contain w-16 sm:w-20 md:w-24 lg:w-28 shrink-0 max-w-full order-1 md:order-2"
            alt="QR Code"
          />
        </div>
      </div>
    </footer>
  );
};
