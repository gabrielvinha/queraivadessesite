import React from 'react';
import { CTAButton } from './CTAButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-screen w-full justify-center px-20 py-20 max-lg:px-10 max-lg:py-16 max-md:px-5 max-md:py-12 overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src="https://i.postimg.cc/PqMv276C/O-Brasil-est-entrando-em-colapso-e-quem-n-o-fizer-parte-da-nova-alian-a-vai-ser-engolido-N-o-somos.png"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      
      {/* Elementos decorativos dourados */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-[rgba(248,226,154,0.2)] opacity-60 max-lg:w-24 max-lg:h-24 max-lg:top-16 max-lg:right-16 max-md:w-16 max-md:h-16 max-md:top-10 max-md:right-10"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full border border-[rgba(248,226,154,0.15)] opacity-40 max-lg:w-20 max-lg:h-20 max-lg:bottom-24 max-lg:left-12 max-md:w-12 max-md:h-12 max-md:bottom-16 max-md:left-8"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[rgba(248,226,154,0.6)] rounded-full animate-pulse max-md:hidden"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[rgba(248,226,154,0.4)] rounded-full animate-pulse max-md:hidden"></div>
      
      {/* Conteúdo principal */}
      <div className="relative flex w-full max-w-[1200px] mx-auto flex-col items-start max-lg:items-center max-md:items-center">
        {/* Selo no topo */}
        <div className="text-[rgba(255,255,255,0.7)] text-[20px] font-medium mb-8 max-lg:text-center max-lg:text-[18px] max-md:text-center max-md:text-[16px] max-md:mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Mentoria Exclusiva para Mulheres que Querem Prosperar com Propósito
        </div>
        
        {/* Título principal */}
        <h1 
          className="text-[#F8E29A] text-[48px] font-extrabold leading-[1.2] mb-6 max-lg:text-center max-lg:text-[40px] max-md:text-center max-md:text-[32px] max-md:mb-4"
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
          className="text-[rgba(255,255,255,0.7)] text-[20px] font-medium leading-[1.5] mb-10 max-w-[60%] max-lg:text-center max-lg:max-w-[80%] max-lg:text-[18px] max-md:text-center max-md:max-w-[100%] max-md:text-[16px] max-md:mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Transforme sua essência, destrave seus bloqueios e construa uma vida próspera em todas as áreas.
        </p>
        
        {/* Botão principal */}
        <button 
          className="bg-[#F8E29A] text-[#1A1A1A] font-semibold text-[18px] px-10 py-5 rounded-[40px] flex items-center gap-3 hover:bg-[#F5D982] transition-all duration-300 hover:scale-105 max-lg:text-[16px] max-lg:px-8 max-lg:py-4 max-md:text-[14px] max-md:px-6 max-md:py-3"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          onClick={() => {
            const phoneNumber = "5519993401563";
            const message = "Olá, eu vi sua página e quero saber mais sobre O Despertar da Vida!";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
        >
          QUERO VIVER ESSA TRANSFORMAÇÃO
          <span className="text-[14px] max-md:text-[12px]">↗</span>
        </button>
      </div>
    </section>
  );
};