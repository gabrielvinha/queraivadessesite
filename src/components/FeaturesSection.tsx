import React from 'react';
import { CTAButton } from './CTAButton';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => (
  <div className="bg-[rgba(24,27,33,1)] border flex grow flex-col items-stretch w-full pt-[33px] pb-[101px] px-[33px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-lg:pt-6 max-lg:pb-12 max-lg:px-6 max-lg:mt-5 max-md:max-w-full max-md:mt-5 max-md:pb-8 max-md:px-5 max-md:pt-6">
    <div className="aspect-[1.5] w-full rounded-[10px] max-md:max-w-full flex items-center justify-center bg-[rgba(36,37,51,0.3)]">
      <div className="text-8xl max-lg:text-7xl max-md:text-6xl">{image}</div>
    </div>
    <h3 className="text-white text-2xl font-bold leading-[1.4] mt-[35px] max-lg:text-[22px] max-lg:mt-6 max-lg:text-center max-md:text-[20px] max-md:mt-4 max-md:text-center">
      {title}
    </h3>
    <p className="text-[rgba(198,198,198,1)] text-[21px] font-normal leading-8 mt-[29px] max-lg:text-[18px] max-lg:leading-7 max-lg:mt-4 max-lg:text-center max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-4 max-md:text-center">
      {description}
    </p>
  </div>
);

interface ImageCardProps {
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div className="bg-[rgba(24,27,33,1)] border flex grow flex-col items-stretch justify-center w-full p-[17px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-lg:mt-5 max-md:mt-5">
    <img
      src={image}
      className="aspect-[0.66] object-contain w-full rounded-[15px]"
      alt=""
    />
  </div>
);

export const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      {/* Seção DESPERTAR */}
      <section className="bg-black self-stretch flex w-full flex-col items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24">
        <div className="flex w-full max-w-[1200px] flex-col items-center">
          <h2 className="text-[rgba(255,215,0,1)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] text-center">
            Cada letra é um passo. Cada passo é um despertar.
          </h2>
          <p className="text-[rgba(200,200,200,1)] text-base sm:text-lg md:text-xl font-normal text-center mt-4 sm:mt-6">
            Descubra o significado profundo por trás da jornada que vai transformar sua vida.
          </p>
          
          <div className="w-full mt-10 sm:mt-12 md:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">D</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Decisão</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Tudo muda quando você decide. É o início da sua virada.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">E</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Essência</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Voltar pra quem você é de verdade. Sem máscaras, sem culpa.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">S</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Sabedoria</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Escolher com consciência e maturidade o que te expande.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">P</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Propósito</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Viver com sentido, sabendo exatamente o porquê do que faz.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">E</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Espiritualidade</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Reconectar com a força que te criou e te sustenta.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">R</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Resiliência</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Levantar mesmo quando a vida tenta te calar.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">T</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Transbordo</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Compartilhar sua luz com o mundo — sem medo de brilhar.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">A</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Amor</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Curar com amor, escolher com amor, viver com amor.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-5 sm:p-6 md:p-8 rounded-lg sm:col-span-2 lg:col-span-1 sm:mx-auto sm:max-w-md lg:mx-0 lg:max-w-none">
                <div className="text-[rgba(255,215,0,1)] text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">R</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Realização</h3>
                <p className="text-[rgba(200,200,200,1)] text-sm sm:text-base md:text-lg leading-relaxed">
                  Materializar seus sonhos com leveza e presença.
                </p>
              </div>
              
            </div>
          </div>
          
          <div className="mt-10 sm:mt-12 md:mt-16">
            <CTAButton className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[520px]">
              QUERO VIVER MEU DESPERTAR
            </CTAButton>
          </div>
        </div>
      </section>
    </section>
  );
};
