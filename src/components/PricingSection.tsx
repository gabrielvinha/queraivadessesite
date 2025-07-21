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
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/0c19054bd118f6643aaf5b541bf5c978e83426da?placeholderIfAbsent=true"
              title="Sessões com Psicóloga Convidada"
              price="R$2.997,00"
            />
          </div>
          <div>
            <BonusItem
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/9a62666d8007ab73dc072b5a2da5db9646b348a1?placeholderIfAbsent=true"
              title="Mentorias em grupo + PDF bônus"
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
                src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/f8e356ca82ef9b5ccfcd04f32eb458777efb37b1?placeholderIfAbsent=true"
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
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/23e8b6ae03262ce29629b1099d90d2a7d9458141?placeholderIfAbsent=true"
              title="Grupo VIP no WhatsApp"
              price="R$997,00"
            />
          </div>
        </div>
      </div>

      <div className="bg-[rgba(24,27,33,1)] border flex w-full max-w-[640px] flex-col items-stretch text-white font-bold text-center mt-5 pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 rounded-[10px] border-[rgba(36,37,51,1)] border-solid mx-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/3873aa4573db8c3b8a56379ae9283ba5f7d35967?placeholderIfAbsent=true"
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

      <div className="self-stretch flex w-full flex-col items-center text-center justify-center mt-10 sm:mt-12 md:mt-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="bg-[rgba(21,24,30,1)] border flex w-full max-w-[640px] flex-col items-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-9 rounded-lg border-[rgba(255,228,191,1)] border-solid">
          <img
            src="https://i.postimg.cc/15TRnqGf/Design-sem-nome-6.png"
            className="aspect-[1.36] object-contain w-32 sm:w-40 md:w-48 lg:w-52 max-w-full"
            alt=""
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
            R$253,41
          </div>
          
          <div className="text-[rgba(170,168,161,1)] text-lg sm:text-xl md:text-2xl font-normal leading-none mt-4 sm:mt-5 md:mt-6">
            R$ 2.497,00 À VISTA
          </div>
          
          <div className="mt-6 sm:mt-8">
            <CTAButton className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
              QUERO FALAR COM A MENTORA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
