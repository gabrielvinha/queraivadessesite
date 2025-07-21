import React from 'react';
import { CTAButton } from './CTAButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-screen w-full justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="https://i.postimg.cc/PqMv276C/O-Brasil-est-entrando-em-colapso-e-quem-n-o-fizer-parte-da-nova-alian-a-vai-ser-engolido-N-o-somos.png"
        className="absolute h-full w-full object-cover inset-0 hidden md:block"
        alt="Background"
      />
      
      {/* Imagem de fundo para mobile */}
      <img
        src="https://i.postimg.cc/br3dW1T0/O-Brasil-est-entrando-em-colapso-e-quem-n-o-fizer-parte-da-nova-alian-a-vai-ser-engolido-N-o-somos.png"
        className="absolute h-full w-full object-cover inset-0 block md:hidden"
        alt="Background Mobile"
      />
      
      {/* Elementos decorativos dourados */}
      <div className="absolute top-12 sm:top-16 md:top-20 right-4 sm:right-8 md:right-16 lg:right-20 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border border-[rgba(248,226,154,0.2)] opacity-60"></div>
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 left-4 sm:left-8 md:left-12 lg:left-16 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border border-[rgba(248,226,154,0.15)] opacity-40"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[rgba(248,226,154,0.6)] rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[rgba(248,226,154,0.4)] rounded-full animate-pulse hidden md:block"></div>
      
      {/* Conteúdo principal */}
      <div className="relative flex w-full max-w-[1200px] mx-auto flex-col items-start md:items-start items-center text-center md:text-left">
        {/* Selo no topo */}
        <div className="text-[rgba(255,255,255,0.7)] text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-4 sm:mb-6 md:mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Mentoria Exclusiva para Mulheres que Querem Prosperar com Propósito
        </div>
        
        {/* Título principal */}
        <h1 
          className="text-[#F8E29A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.2] mb-4 sm:mb-6"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '-0.5px',
            maxWidth: '100%'
          }}
        >
          O Despertar da Vida
        </h1>
        
        {/* Subheadline */}
        <p 
          className="text-[rgba(255,255,255,0.7)] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-[1.5] mb-6 sm:mb-8 md:mb-10 max-w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Transforme sua essência, destrave seus bloqueios e construa uma vida próspera em todas as áreas.
        </p>
        
        {/* Botão principal */}
        <button 
          className="bg-[#F8E29A] text-[#1A1A1A] font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-[40px] flex items-center gap-2 sm:gap-3 hover:bg-[#F5D982] transition-all duration-300 hover:scale-105"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          onClick={() => {
            const phoneNumber = "5519993401563";
            const message = "Olá, eu vi sua página e quero saber mais sobre O Despertar da Vida!";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
        >
          QUERO VIVER ESSA TRANSFORMAÇÃO
          <span className="text-xs sm:text-sm">↗</span>
        </button>
      </div>
    </section>
  );
};