import React from 'react';
import { CTAButton } from './CTAButton';

interface TimelineItemProps {
  icon: string;
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, year, title, description }) => (
  <div className="bg-[rgba(16,17,31,0.41)] border flex w-full flex-col pl-8 pt-[49px] pb-[85px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-lg:px-6 max-lg:pt-8 max-lg:pb-12 max-md:max-w-full max-md:px-5 max-md:pt-6 max-md:pb-8">
    <div className="self-stretch flex items-stretch max-lg:flex-col max-md:flex-col">
      <img
        src={icon}
        className="aspect-[1] object-contain w-[50px] shrink-0 max-lg:w-[45px] max-lg:self-center max-lg:mb-4 max-md:w-[40px] max-md:self-center max-md:mb-4"
        alt=""
      />
      <div className="bg-white flex w-[445px] shrink-0 max-w-full h-px mt-[27px] max-lg:hidden max-md:hidden" />
    </div>
    <h3 className="text-2xl font-bold leading-[1.4] mt-[27px] max-lg:text-[22px] max-lg:mt-4 max-lg:text-center max-md:text-[20px] max-md:mt-4 max-md:text-center">
      {year}{" "}
      <span className="text-white">
        {title}
      </span>
    </h3>
    <p className="text-[rgba(198,198,198,1)] text-[21px] font-normal leading-8 mt-[31px] max-lg:text-[18px] max-lg:leading-7 max-lg:mt-4 max-lg:text-center max-md:text-[16px] max-md:leading-6 max-md:mt-4 max-md:text-center">
      {description}
    </p>
  </div>
);

export const CrisisTimelineSection: React.FC = () => {
  return (
    <section className="bg-[rgba(4,6,10,1)] self-stretch flex w-full flex-col items-center justify-center px-20 py-[109px] max-lg:px-10 max-lg:py-20 max-md:max-w-full max-md:px-5 max-md:py-16">
      <div className="flex w-[1260px] max-w-full flex-col items-center -mb-5 max-lg:px-4 max-md:mb-2.5">
        <h2 className="text-white text-5xl font-bold leading-[67px] text-center max-lg:text-4xl max-lg:leading-[50px] max-md:max-w-full max-md:text-[28px] max-md:leading-[35px]">
          Você sente que perdeu a conexão
          <br />
          com quem você é?
        </h2>
        <p className="text-[rgba(198,198,198,1)] text-[21px] font-normal text-center ml-[11px] mt-[29px] max-lg:text-[19px] max-lg:ml-0 max-lg:mt-6 max-md:max-w-full max-md:text-[18px] max-md:ml-0 max-md:mt-6">
          Já cansou de tentar sozinha e não sair do lugar?
        </p>
        <div className="self-stretch mt-[54px] max-lg:mt-10 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-lg:flex-col max-lg:items-stretch max-md:flex-col max-md:items-stretch">
            <div className="w-[33%] max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/a1be343f6e2cdce49a1f7180df6162f1e22b9b58?placeholderIfAbsent=true"
                year=""
                title="Quer empreender com alma e verdade?"
                description="Deseja vencer o medo de vender, falar e se expor? Sabe que tem algo maior em você — mas ainda não sabe por onde começar?"
              />
            </div>
            <div className="w-[33%] ml-5 max-lg:w-full max-lg:ml-0 max-lg:mt-5 max-md:w-full max-md:ml-0">
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/eecd90f70c27ac582745f6ed671f2af3bab4572c?placeholderIfAbsent=true"
                year=""
                title="Quer transformar sua história em missão e renda?"
                description="Você não precisa mais carregar o peso de histórias que não são suas. É hora de escrever uma nova narrativa — com propósito e prosperidade."
              />
            </div>
            <div className="w-[33%] ml-5 max-lg:w-full max-lg:ml-0 max-lg:mt-5 max-md:w-full max-md:ml-0">
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/f4fd2d7e39c3e3fcf0d1c3231794ec60320c7704?placeholderIfAbsent=true"
                year=""
                title="Deseja florescer em todas as áreas?"
                description="A mentoria O Despertar da Vida foi criada para mulheres que estão prontas para ativar seu potencial completo — espiritual, emocional, financeiro e profissional."
              />
            </div>
          </div>
        </div>
        <h2 className="text-white text-5xl font-bold leading-[58px] text-center mt-[78px] max-lg:text-4xl max-lg:leading-[48px] max-lg:mt-16 max-md:max-w-full max-md:text-[28px] max-md:leading-[35px] max-md:mt-10">
          Se você se identificou com essas perguntas,
          <br />
          você está no lugar certo.
        </h2>
        <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 text-center mt-11 max-lg:text-[19px] max-lg:mt-8 max-md:mt-8 max-md:text-[18px] max-md:leading-7">
          A mentoria O Despertar da Vida
          <br />
          foi criada especialmente para você.
          <br />
          É hora de despertar
          <br />
          para quem você realmente é.
        </p>
        <div className="mt-[29px] max-lg:mt-6 max-md:mt-6">
          <CTAButton className="w-[526px] max-w-full max-lg:max-w-[400px] max-md:max-w-[320px] max-sm:max-w-[280px]">
            QUERO DESPERTAR MINHA VIDA
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
