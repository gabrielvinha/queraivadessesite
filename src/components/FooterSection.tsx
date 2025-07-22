import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer>
      <section 
        id="checkout" 
        className="self-stretch flex w-full flex-col items-center text-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 rounded-[40px_40px_0px_0px] relative"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay para melhorar legibilidade */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[40px_40px_0px_0px]"></div>
        
        <div className="flex w-full max-w-[708px] flex-col items-stretch">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] self-center relative z-10">
            VOCÊ PRECISA DECIDIR:
          </h2>
          <p className="text-[rgba(255,255,255,0.8)] text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-8 sm:mt-10 md:mt-12 lg:mt-16 relative z-10">
            Se vai continuar testando sem direção e assistir a maior transferência de
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>riqueza da história acontecer…
          </p>
          <div className="flex w-full max-w-[668px] items-stretch gap-5 text-base sm:text-lg font-semibold flex-col sm:flex-row justify-between mt-6 sm:mt-8 relative z-10">
            <button 
              className="bg-[rgba(219,7,15,1)] flex flex-col items-stretch text-white leading-none justify-center px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-[3px] hover:bg-[rgba(200,7,15,1)] transition-colors"
              onClick={() => {
                document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              SEM VOCÊ OU…
            </button>
            <div className="text-[rgba(255,255,255,0.6)] text-base sm:text-lg md:text-xl my-auto sm:my-2">
              ou
            </div>
            <button 
              className="bg-[rgba(47,250,15,1)] flex flex-col items-stretch text-[rgba(14,14,14,1)] leading-none justify-center px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-7 rounded-[3px] hover:bg-[rgba(42,225,13,1)] transition-colors"
              onClick={() => {
                document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ENTRAR AGORA
            </button>
          </div>
        </div>
      </section>

      <div className="border self-stretch flex w-full flex-col text-sm sm:text-base text-white font-bold text-center leading-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 border-[rgba(51,51,51,1)] border-solid">
       
        
  );
};
