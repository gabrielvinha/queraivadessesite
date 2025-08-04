import React from 'react';
import { CTAButton } from './CTAButton';

interface BonusItemProps {
  image: string;
  title: string;
  price?: string;
}

const BonusItem: React.FC<BonusItemProps> = ({ image, title, price }) => (
  <div className="bg-[rgba(24,27,33,1)] border flex w-full flex-col items-stretch text-white font-bold text-center pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 rounded-[10px] border-[rgba(36,37,51,1)] border-solid">
    <img
      src={image}
      className="aspect-[1.51] object-contain w-full rounded-[10px] max-md:max-w-full"
      alt=""
    />
    <div className="flex items-stretch gap-[3px] mt-4 sm:mt-6 md:mt-8 justify-center flex-col sm:flex-row sm:gap-2">
      <div className="text-base sm:text-lg md:text-xl leading-[1.4]">
        {title}
      </div>
      {price && (
        <div className="text-lg sm:text-xl md:text-2xl leading-none line-through">
          {price}
        </div>
      )}
    </div>
  </div>
);

export const PricingSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-[1280px] mt-16 sm:mt-20 md:mt-32 lg:mt-44 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <BonusItem
              image="https://i.postimg.cc/hv5WFnp7/como-montar-sua-palestra.png"
              title="Como montar a sua palestra"
              price="R$2.997,00"
            />
          </div>
          <div>
            <BonusItem
              image="https://i.postimg.cc/Pf8BJg3K/aula-de-comunicacao.png"
              title="Aula de comunicação"
              price="R$997,00"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1280px] mt-5 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="bg-[rgba(24,27,33,1)] border flex grow flex-col items-stretch text-base sm:text-lg md:text-xl text-white font-bold text-center leading-[1.4] w-full pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 rounded-[10px] border-[rgba(36,37,51,1)] border-solid">
              <img
                src="https://i.postimg.cc/7YrYZMVG/aula-sobre-trafego.png"
                className="aspect-[1.5] object-contain w-full rounded-[10px] max-md:max-w-full"
                alt=""
              />
              <div className="mt-4 sm:mt-6 md:mt-8">
                Aula de Tráfego Pago (bônus)
              </div>
            </div>
          </div>
          <div>
            <BonusItem
              image="https://i.postimg.cc/wMvMc61t/aula-de-oratoria.png"
              title="Aula de oratória"
              price="R$997,00"
            />
          </div>
        </div>
      </div>

      <div className="bg-[rgba(24,27,33,1)] border flex w-full max-w-[640px] flex-col items-stretch text-white font-bold text-center mt-5 pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 rounded-[10px] border-[rgba(36,37,51,1)] border-solid mx-4">
        <img
          src="https://i.postimg.cc/3wkHBd1Q/accesso-vitalicio-ao-material.png"
          className="aspect-[1.51] object-contain w-full rounded-[10px] max-md:max-w-full"
          alt=""
        />
        <div className="flex items-stretch gap-px mt-4 sm:mt-6 md:mt-8 justify-center flex-col sm:flex-row sm:gap-2">
          <div className="text-base sm:text-lg md:text-xl leading-[1.4]">
            Acesso vitalício ao material
          </div>
          <div className="text-lg sm:text-xl md:text-2xl leading-none line-through">
            R$ INCALCULÁVEL
          </div>
        </div>
      </div>

      <div 
        className="self-stretch flex w-full flex-col items-center text-center justify-center mt-10 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/originals/44/6e/3b/446e3b79395a287ca32f7977dd83b290.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',
          backgroundAttachment: 'scroll',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Fireflies CSS Styles */}
        <style jsx>{`
          .checkout-firefly {
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
          
          @keyframes checkoutFirefly1 {
            0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(15vw, -10vh) scale(1); opacity: 0; }
          }
          
          @keyframes checkoutFirefly2 {
            0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { transform: translate(-20vw, -15vh) scale(1); opacity: 0; }
          }
          
          @keyframes checkoutFirefly3 {
            0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translate(25vw, -20vh) scale(1); opacity: 0; }
          }
          
          @keyframes checkoutFirefly4 {
            0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
            25% { opacity: 1; }
            75% { opacity: 1; }
            100% { transform: translate(-10vw, -25vh) scale(1); opacity: 0; }
          }
          
          @keyframes checkoutFirefly5 {
            0% { transform: translate(0, 100vh) scale(0); opacity: 0; }
            30% { opacity: 1; }
            70% { opacity: 1; }
            100% { transform: translate(30vw, -30vh) scale(1); opacity: 0; }
          }
          
          @keyframes checkoutGlow {
            0%, 100% { box-shadow: 0 0 6px #F8E29A, 0 0 12px #F8E29A, 0 0 18px #F8E29A; }
            50% { box-shadow: 0 0 12px #F8E29A, 0 0 24px #F8E29A, 0 0 36px #F8E29A; }
          }
          
          .checkout-firefly:nth-child(1) {
            left: 10%;
            animation: checkoutFirefly1 8s linear infinite, checkoutGlow 2s ease-in-out infinite alternate;
            animation-delay: 0s, 0s;
          }
          
          .checkout-firefly:nth-child(2) {
            left: 20%;
            animation: checkoutFirefly2 9s linear infinite, checkoutGlow 2.5s ease-in-out infinite alternate;
            animation-delay: 1s, 0.5s;
          }
          
          .checkout-firefly:nth-child(3) {
            left: 30%;
            animation: checkoutFirefly3 7s linear infinite, checkoutGlow 3s ease-in-out infinite alternate;
            animation-delay: 2s, 1s;
          }
          
          .checkout-firefly:nth-child(4) {
            left: 40%;
            animation: checkoutFirefly4 10s linear infinite, checkoutGlow 2.2s ease-in-out infinite alternate;
            animation-delay: 3s, 1.5s;
          }
          
          .checkout-firefly:nth-child(5) {
            left: 50%;
            animation: checkoutFirefly5 8.5s linear infinite, checkoutGlow 2.8s ease-in-out infinite alternate;
            animation-delay: 4s, 2s;
          }
          
          .checkout-firefly:nth-child(6) {
            left: 60%;
            animation: checkoutFirefly1 9.5s linear infinite, checkoutGlow 2.3s ease-in-out infinite alternate;
            animation-delay: 5s, 2.5s;
          }
          
          .checkout-firefly:nth-child(7) {
            left: 70%;
            animation: checkoutFirefly2 7.5s linear infinite, checkoutGlow 3.2s ease-in-out infinite alternate;
            animation-delay: 6s, 3s;
          }
          
          .checkout-firefly:nth-child(8) {
            left: 80%;
            animation: checkoutFirefly3 8.8s linear infinite, checkoutGlow 2.6s ease-in-out infinite alternate;
            animation-delay: 7s, 3.5s;
          }
          
          .checkout-firefly:nth-child(9) {
            left: 15%;
            animation: checkoutFirefly4 9.2s linear infinite, checkoutGlow 2.9s ease-in-out infinite alternate;
            animation-delay: 1.5s, 0.8s;
          }
          
          .checkout-firefly:nth-child(10) {
            left: 25%;
            animation: checkoutFirefly5 7.8s linear infinite, checkoutGlow 2.4s ease-in-out infinite alternate;
            animation-delay: 2.5s, 1.2s;
          }
          
          .checkout-firefly:nth-child(11) {
            left: 35%;
            animation: checkoutFirefly1 8.3s linear infinite, checkoutGlow 3.1s ease-in-out infinite alternate;
            animation-delay: 3.5s, 1.8s;
          }
          
          .checkout-firefly:nth-child(12) {
            left: 45%;
            animation: checkoutFirefly2 9.8s linear infinite, checkoutGlow 2.7s ease-in-out infinite alternate;
            animation-delay: 4.5s, 2.2s;
          }
          
          .checkout-firefly:nth-child(13) {
            left: 55%;
            animation: checkoutFirefly3 7.2s linear infinite, checkoutGlow 2.1s ease-in-out infinite alternate;
            animation-delay: 5.5s, 2.8s;
          }
          
          .checkout-firefly:nth-child(14) {
            left: 65%;
            animation: checkoutFirefly4 8.7s linear infinite, checkoutGlow 3.3s ease-in-out infinite alternate;
            animation-delay: 6.5s, 3.2s;
          }
          
          .checkout-firefly:nth-child(15) {
            left: 75%;
            animation: checkoutFirefly5 9.3s linear infinite, checkoutGlow 2.5s ease-in-out infinite alternate;
            animation-delay: 7.5s, 3.8s;
          }
        `}</style>
        
        {/* Fireflies Elements */}
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        <div className="checkout-firefly"></div>
        
        {/* Overlay para melhorar legibilidade */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        
        <div className="bg-[rgba(21,24,30,1)] border flex w-full max-w-[640px] flex-col items-center px-4 sm:px-6 md:px-8 py-2 sm:py-4 md:py-5 rounded-lg border-[rgba(255,228,191,1)] border-solid">
          <img
  src="https://i.postimg.cc/C5h57p55/a58cfaf5-e5d1-4568-ba32-f067a979dc7b.png"
  className="aspect-[2.36] object-contain w-54 sm:w-68 md:w-82 lg:w-88 max-w-full mb-0"
/>
          
          <div className="border self-stretch flex w-full flex-col items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 rounded-[173px] border-[rgba(49,49,49,0.42)] border-solid">
            <div className="flex w-full max-w-[241px] items-stretch gap-0.5 flex-col sm:flex-row sm:gap-1">
              <div className="text-[rgba(196,196,196,1)] text-sm sm:text-base font-normal leading-none grow">
                TODOS OS BÔNUS
              </div>
              <div className="text-[rgba(255,205,138,1)] text-base sm:text-lg font-bold leading-none grow shrink">
                | R$ 5.988,00
              </div>
            </div>
          </div>
          
          <div className="border self-stretch flex w-full flex-col items-center justify-center mt-3 px-4 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 rounded-[173px] border-[rgba(49,49,49,0.42)] border-solid">
            <div className="flex w-full max-w-[262px] items-stretch gap-[3px] flex-col sm:flex-row sm:gap-1">
              <div className="text-[rgba(196,196,196,1)] text-sm sm:text-base font-normal leading-none grow">
                Mentoria O Despertar da Vida
              </div>
              <div className="text-[rgba(255,205,138,1)] text-base sm:text-lg font-bold leading-none grow shrink">
                | R$ 3.497,00
              </div>
            </div>
          </div>
          
          <div className="border self-stretch flex w-full flex-col items-center justify-center mt-5 px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 rounded-[173px] border-[rgba(49,49,49,0.42)] border-solid">
            <div className="flex w-full max-w-[298px] items-stretch gap-1.5 flex-col sm:flex-row sm:gap-1">
              <div className="text-[rgba(196,196,196,1)] text-2xl sm:text-3xl md:text-4xl font-normal leading-none">
                De
              </div>
              <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none line-through grow shrink basis-auto">
                R$ 9.485,00
              </div>
            </div>
          </div>
          
          <div className="text-[rgba(170,168,161,1)] text-lg sm:text-xl md:text-2xl font-normal leading-none uppercase mt-4 sm:mt-5 md:mt-6">
            Por 12x de
          </div>
          
          <div className="text-[rgba(255,205,138,1)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mt-1.5">
            R$390,00
          </div>
          
          <div className="text-[rgba(170,168,161,1)] text-lg sm:text-xl md:text-2xl font-normal leading-none mt-4 sm:mt-5 md:mt-6">
            R$ 3.900,00 À VISTA
          </div>
          
          <div className="mt-6 sm:mt-8">
            <CTAButton className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] relative z-10">
              QUERO FALAR COM A MENTORA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
