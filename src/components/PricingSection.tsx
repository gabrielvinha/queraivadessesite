import React from 'react';
import { CTAButton } from './CTAButton';

interface BonusItemProps {
  image: string;
  title: string;
  price?: string;
}

const BonusItem: React.FC<BonusItemProps> = ({ image, title, price }) => (
  <div className="bg-[rgba(24,27,33,1)] border flex w-full flex-col items-stretch text-white font-bold text-center pt-[33px] pb-[55px] px-[33px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:max-w-full max-md:px-5 max-md:pt-6 max-md:pb-8">
    <img
      src={image}
      className="aspect-[1.51] object-contain w-full rounded-[10px] max-md:max-w-full"
      alt=""
    />
    <div className="flex items-stretch gap-[3px] mt-[30px] justify-center max-md:flex-col max-md:gap-2 max-md:mt-4">
      <div className="text-[21px] leading-[1.4] max-md:text-[18px]">
        {title}
      </div>
      {price && (
        <div className="text-[25px] leading-none line-through max-md:text-[20px]">
          {price}
        </div>
      )}
    </div>
  </div>
);

export const PricingSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[1280px] max-w-full mt-44 max-md:mt-10 max-md:px-4">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:space-y-5 max-md:gap-0">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <BonusItem
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/0c19054bd118f6643aaf5b541bf5c978e83426da?placeholderIfAbsent=true"
              title="Sessões com Psicóloga Convidada"
              price="R$2.997,00"
            />
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <BonusItem
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/9a62666d8007ab73dc072b5a2da5db9646b348a1?placeholderIfAbsent=true"
              title="Mentorias em grupo + PDF bônus"
              price="R$997,00"
            />
          </div>
        </div>
      </div>

      <div className="w-[1280px] max-w-full mt-5 max-md:px-4">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:space-y-5 max-md:gap-0">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(24,27,33,1)] border flex grow flex-col items-stretch text-[21px] text-white font-bold text-center leading-[1.4] w-full pt-[33px] pb-[53px] px-[33px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:max-w-full max-md:px-5 max-md:pt-6 max-md:pb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/f8e356ca82ef9b5ccfcd04f32eb458777efb37b1?placeholderIfAbsent=true"
                className="aspect-[1.5] object-contain w-full rounded-[10px] max-md:max-w-full"
                alt=""
              />
              <div className="ml-[43px] mt-[31px] max-md:ml-0 max-md:mt-4 max-md:text-[18px]">
                Aula de Tráfego Pago (bônus)
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <BonusItem
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/23e8b6ae03262ce29629b1099d90d2a7d9458141?placeholderIfAbsent=true"
              title="Grupo VIP no WhatsApp"
              price="R$997,00"
            />
          </div>
        </div>
      </div>

      <div className="bg-[rgba(24,27,33,1)] border flex w-[640px] max-w-full flex-col items-stretch text-white font-bold text-center mt-5 pt-[33px] pb-[55px] px-[33px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:px-5 max-md:pt-6 max-md:pb-8 max-md:mx-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/3873aa4573db8c3b8a56379ae9283ba5f7d35967?placeholderIfAbsent=true"
          className="aspect-[1.51] object-contain w-full rounded-[10px] max-md:max-w-full"
          alt=""
        />
        <div className="flex items-stretch gap-px mt-[27px] justify-center max-md:flex-col max-md:gap-2 max-md:mt-4">
          <div className="text-[21px] leading-[1.4] max-md:text-[18px]">
            Acesso vitalício ao material
          </div>
          <div className="text-[25px] leading-none line-through max-md:text-[20px]">
            R$ INCALCULÁVEL
          </div>
        </div>
      </div>

      <div className="self-stretch flex w-full flex-col items-center text-center justify-center mt-16 px-20 py-24 max-md:max-w-full max-md:mt-10 max-md:px-5 max-md:py-12">
        <div className="bg-[rgba(21,24,30,1)] border flex w-[640px] max-w-full flex-col items-center px-[33px] py-9 rounded-lg border-[rgba(255,228,191,1)] border-solid max-md:px-5 max-md:py-6">
          <img
            src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/1f2f5c2cf04bf1862ab5857dd4216fd0a4f77d76?placeholderIfAbsent=true"
            className="aspect-[1.36] object-contain w-[202px] max-w-full max-md:w-[150px]"
            alt=""
          />
          
          <div className="border self-stretch flex w-full flex-col items-center justify-center mt-[155px] px-16 py-5 rounded-[173px] border-[rgba(49,49,49,0.42)] border-solid max-md:max-w-full max-md:mt-8 max-md:px-4 max-md:py-3">
            <div className="flex w-[241px] max-w-full items-stretch gap-0.5 max-md:flex-col max-md:gap-1">
              <div className="text-[rgba(196,196,196,1)] text-base font-normal leading-none grow max-md:text-[14px]">
                TODOS OS BÔNUS
              </div>
              <div className="text-[rgba(255,205,138,1)] text-lg font-bold leading-none grow shrink w-[86px] max-md:text-[16px]">
                | R$ 5.988,00
              </div>
            </div>
          </div>
          
          <div className="border self-stretch flex w-full flex-col items-center justify-center mt-3 px-16 py-[19px] rounded-[173px] border-[rgba(49,49,49,0.42)] border-solid max-md:max-w-full max-md:px-4 max-md:py-3">
            <div className="flex w-[262px] max-w-full items-stretch gap-[3px] max-md:flex-col max-md:gap-1">
              <div className="text-[rgba(196,196,196,1)] text-base font-normal leading-none grow max-md:text-[14px]">
                Mentoria O Despertar da Vida
              </div>
              <div className="text-[rgba(255,205,138,1)] text-lg font-bold leading-none grow shrink w-[83px] max-md:text-[16px]">
                | R$ 3.497,00
              </div>
            </div>
          </div>
          
          <div className="border self-stretch flex w-full flex-col items-center justify-center mt-5 px-16 py-6 rounded-[173px] border-[rgba(49,49,49,0.42)] border-solid max-md:max-w-full max-md:px-4 max-md:py-4">
            <div className="flex w-[298px] max-w-full items-stretch gap-1.5 max-md:flex-col max-md:gap-1">
              <div className="text-[rgba(196,196,196,1)] text-[37px] font-normal leading-none max-md:text-[24px]">
                De
              </div>
              <div className="text-white text-[44px] font-bold leading-none line-through grow shrink w-[245px] basis-auto max-md:text-[28px]">
                R$ 9.485,00
              </div>
            </div>
          </div>
          
          <div className="text-[rgba(170,168,161,1)] text-2xl font-normal leading-none uppercase mt-[27px] max-md:text-[18px] max-md:mt-4">
            Por 12x de
          </div>
          
          <div className="text-[rgba(255,205,138,1)] text-[109px] font-bold leading-[1.3] mt-1.5 max-md:max-w-full max-md:text-[48px] max-md:leading-none">
            R$253,41
          </div>
          
          <div className="text-[rgba(170,168,161,1)] text-2xl font-normal leading-none mt-[25px] max-md:text-[18px] max-md:mt-4">
            R$ 2.497,00 À VISTA
          </div>
          
          <div className="mt-[27px] max-md:mt-6">
            <CTAButton className="w-[420px] max-w-full max-md:max-w-[300px]">
              QUERO FALAR COM A MENTORA
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
