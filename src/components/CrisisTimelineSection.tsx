import React from 'react';
import { CTAButton } from './CTAButton';

interface TimelineItemProps {
  icon: string;
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, year, title, description }) => (
  <div className="bg-[rgba(16,17,31,0.41)] border flex w-full flex-col pl-8 pt-[49px] pb-[85px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:max-w-full max-md:px-5 max-md:pt-6 max-md:pb-8">
    <div className="self-stretch flex items-stretch max-md:flex-col">
      <img
        src={icon}
        className="aspect-[1] object-contain w-[50px] shrink-0 max-md:w-[40px] max-md:self-center max-md:mb-4"
        alt=""
      />
      <div className="bg-white flex w-[445px] shrink-0 max-w-full h-px mt-[27px] max-md:hidden" />
    </div>
    <h3 className="text-2xl font-bold leading-[1.4] mt-[27px] max-md:text-[20px] max-md:mt-4 max-md:text-center">
      {year}{" "}
      <span className="text-white">
        {title}
      </span>
    </h3>
    <p className="text-[rgba(198,198,198,1)] text-[21px] font-normal leading-8 mt-[31px] max-md:text-[16px] max-md:leading-6 max-md:mt-4 max-md:text-center">
      {description}
    </p>
  </div>
);

export const CrisisTimelineSection: React.FC = () => {
  return (
    <section className="bg-[rgba(4,6,10,1)] self-stretch flex w-full flex-col items-center justify-center px-20 py-[109px] max-md:max-w-full max-md:px-5 max-md:py-16">
      <div className="flex w-[1260px] max-w-full flex-col items-center -mb-5 max-md:mb-2.5">
        <h2 className="text-white text-5xl font-bold leading-[67px] text-center max-md:max-w-full max-md:text-[28px] max-md:leading-[35px]">
          Toda crise escondeu uma grande
          <br />
          transferência de riqueza
        </h2>
        <p className="text-[rgba(198,198,198,1)] text-[21px] font-normal text-center ml-[11px] mt-[29px] max-md:max-w-full max-md:text-[18px] max-md:ml-0 max-md:mt-6">
          E quem soube enxergar ANTES… ficou RICO enquanto o mundo entrava em pânico.
        </p>
        <div className="self-stretch mt-[54px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[33%] max-md:w-full max-md:ml-0">
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/a1be343f6e2cdce49a1f7180df6162f1e22b9b58?placeholderIfAbsent=true"
                year="2000"
                title="- Bolha da Internet"
                description='A maioria riu da ideia de "empresas digitais". Google, Amazon, PayPal... foram construídas enquanto todo mundo fugia.'
              />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/eecd90f70c27ac582745f6ed671f2af3bab4572c?placeholderIfAbsent=true"
                year="2008"
                title="- Crise Imobiliária:"
                description="O sistema financeiro quebrou, o mundo tremeu. Os fundos como Blackstone e JP Morgan compraram bairros inteiros a preço de banana."
              />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/f4fd2d7e39c3e3fcf0d1c3231794ec60320c7704?placeholderIfAbsent=true"
                year="2020"
                title="- Pandemia Global:"
                description="Enquanto o mundo parava, quem já estava no digital multiplicou faturamento, construiu impérios em casa — e virou elite da nova era."
              />
            </div>
          </div>
        </div>
        <h2 className="text-white text-5xl font-bold leading-[58px] text-center mt-[78px] max-md:max-w-full max-md:text-[28px] max-md:leading-[35px] max-md:mt-10">
          E agora, 2025... A crise voltou.
          <br />
          Só que MAIOR.
        </h2>
        <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 text-center mt-11 max-md:mt-8 max-md:text-[18px] max-md:leading-7">
          Quem não vê o padrão…
          <br />
          vira estatística.
          <br />
          Quem vê…
          <br />
          transforma adversidade em COLHEITA.
        </p>
        <div className="mt-[29px] max-md:mt-6">
          <CTAButton className="w-[526px] max-w-full max-md:max-w-[320px]">
            VOU TRANSFORMAR A CRISE EM RIQUEZA
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
