import React from 'react';
import { CTAButton } from './CTAButton';

export const HeroSection: React.FC = () => {
  const [isNotDesktop, setIsNotDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkDevice = () => {
      // Considera "não-desktop" qualquer dispositivo com largura menor que 1024px
      // Isso inclui tablets, celulares e telas pequenas
      setIsNotDesktop(window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const backgroundImage = isNotDesktop 
    ? 'url(https://i.postimg.cc/gJd49NB6/O-Brasil-est-entrando-em-colapso-e-quem-n-o-fizer-parte-da-nova-alian-a-vai-ser-engolido-N-o-somos.png)'
    : 'url(https://i.postimg.cc/cCTwwXDw/O-Brasil-est-entrando-em-colapso-e-quem-n-o-fizer-parte-da-nova-alian-a-vai-ser-engolido-N-o-somos.png)';

  return (
    <section 
      className="flex flex-col relative min-h-screen w-screen justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        margin: '0',
        padding: '0'
      }}
    >
      {/* Fireflies CSS Styles */}
      <style jsx>{`
        .firefly {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #F8E29A;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          box-shadow: 0 0 6px #F8E29A, 0 0 12px #F8E29A, 0 0 18px #F8E29A;
        }
        
        @keyframes firefly1 {
          0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(15vw, -10vh) scale(1); opacity: 0; }
        }
        
        @keyframes firefly2 {
          0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translate(-20vw, -15vh) scale(1); opacity: 0; }
        }
        
        @keyframes firefly3 {
          0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(25vw, -20vh) scale(1); opacity: 0; }
        }
        
        @keyframes firefly4 {
          0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translate(-10vw, -25vh) scale(1); opacity: 0; }
        }
        
        @keyframes firefly5 {
          0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translate(30vw, -30vh) scale(1); opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 6px #F8E29A, 0 0 12px #F8E29A, 0 0 18px #F8E29A; }
          50% { box-shadow: 0 0 12px #F8E29A, 0 0 24px #F8E29A, 0 0 36px #F8E29A; }
        }
        
        .firefly:nth-child(1) {
          left: 10%;
          animation: firefly1 8s linear infinite, glow 2s ease-in-out infinite alternate;
          animation-delay: 0s, 0s;
        }
        
        .firefly:nth-child(2) {
          left: 20%;
          animation: firefly2 9s linear infinite, glow 2.5s ease-in-out infinite alternate;
          animation-delay: 1s, 0.5s;
        }
        
        .firefly:nth-child(3) {
          left: 30%;
          animation: firefly3 7s linear infinite, glow 3s ease-in-out infinite alternate;
          animation-delay: 2s, 1s;
        }
        
        .firefly:nth-child(4) {
          left: 40%;
          animation: firefly4 10s linear infinite, glow 2.2s ease-in-out infinite alternate;
          animation-delay: 3s, 1.5s;
        }
        
        .firefly:nth-child(5) {
          left: 50%;
          animation: firefly5 8.5s linear infinite, glow 2.8s ease-in-out infinite alternate;
          animation-delay: 4s, 2s;
        }
        
        .firefly:nth-child(6) {
          left: 60%;
          animation: firefly1 9.5s linear infinite, glow 2.3s ease-in-out infinite alternate;
          animation-delay: 5s, 2.5s;
        }
        
        .firefly:nth-child(7) {
          left: 70%;
          animation: firefly2 7.5s linear infinite, glow 3.2s ease-in-out infinite alternate;
          animation-delay: 6s, 3s;
        }
        
        .firefly:nth-child(8) {
          left: 80%;
          animation: firefly3 8.8s linear infinite, glow 2.6s ease-in-out infinite alternate;
          animation-delay: 7s, 3.5s;
        }
        
        .firefly:nth-child(9) {
          left: 15%;
          animation: firefly4 9.2s linear infinite, glow 2.9s ease-in-out infinite alternate;
          animation-delay: 1.5s, 0.8s;
        }
        
        .firefly:nth-child(10) {
          left: 25%;
          animation: firefly5 7.8s linear infinite, glow 2.4s ease-in-out infinite alternate;
          animation-delay: 2.5s, 1.2s;
        }
        
        .firefly:nth-child(11) {
          left: 35%;
          animation: firefly1 8.3s linear infinite, glow 3.1s ease-in-out infinite alternate;
          animation-delay: 3.5s, 1.8s;
        }
        
        .firefly:nth-child(12) {
          left: 45%;
          animation: firefly2 9.8s linear infinite, glow 2.7s ease-in-out infinite alternate;
          animation-delay: 4.5s, 2.2s;
        }
        
        .firefly:nth-child(13) {
          left: 55%;
          animation: firefly3 7.2s linear infinite, glow 2.1s ease-in-out infinite alternate;
          animation-delay: 5.5s, 2.8s;
        }
        
        .firefly:nth-child(14) {
          left: 65%;
          animation: firefly4 8.7s linear infinite, glow 3.3s ease-in-out infinite alternate;
          animation-delay: 6.5s, 3.2s;
        }
        
        .firefly:nth-child(15) {
          left: 75%;
          animation: firefly5 9.3s linear infinite, glow 2.5s ease-in-out infinite alternate;
          animation-delay: 7.5s, 3.8s;
        }
      `}</style>
      
      {/* Fireflies Elements */}
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      
      {/* Elementos decorativos dourados */}
      <div className="absolute top-12 sm:top-16 md:top-20 right-8 sm:right-12 md:right-16 lg:right-20 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border border-[rgba(248,226,154,0.2)] opacity-60"></div>
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 left-8 sm:left-12 md:left-16 lg:left-20 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border border-[rgba(248,226,154,0.15)] opacity-40"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[rgba(248,226,154,0.6)] rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[rgba(248,226,154,0.4)] rounded-full animate-pulse hidden md:block"></div>
      
      {/* Conteúdo principal */}
      <div className="relative flex w-full max-w-[1200px] mx-auto flex-col items-start md:items-start items-center text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20">
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
          className="bg-[#F8E29A] text-[#1A1A1A] font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-[20px] flex items-center gap-2 sm:gap-3 hover:bg-[#F5D982] transition-all duration-300 hover:scale-105"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          onClick={() => {
            const targetElement = document.getElementById('quero-falar-com-a-mentora');
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          QUERO VIVER ESSA TRANSFORMAÇÃO
          <span className="text-xs sm:text-sm">↗</span>
        </button>
      </div>
    </section>
  );
};