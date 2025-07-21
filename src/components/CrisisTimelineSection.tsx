import React from 'react';
import { CTAButton } from './CTAButton';

interface TimelineItemProps {
  icon: string;
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, year, title, description }) => (
  <div className="bg-[rgba(16,17,31,0.41)] border flex w-full flex-col px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-16 rounded-[10px] border-[rgba(36,37,51,1)] border-solid">
    <div className="self-stretch flex items-stretch flex-col md:flex-row">
      <img
        src={icon}
        className="aspect-[1] object-contain w-8 sm:w-10 md:w-12 lg:w-[50px] shrink-0 self-center mb-4 md:mb-0"
        alt=""
      />
      <div className="bg-white flex w-full max-w-[445px] shrink-0 h-px mt-6 hidden md:flex" />
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-[1.4] mt-4 sm:mt-6 text-center md:text-left">
      {year}{" "}
      <span className="text-white">
        {title}
      </span>
    </h3>
    <p className="text-[rgba(198,198,198,1)] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed mt-4 sm:mt-6 text-center md:text-left">
      {description}
    </p>
  </div>
);

export const CrisisTimelineSection: React.FC = () => {
  return (
    <section className="bg-[rgba(4,6,10,1)] self-stretch flex w-full flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="flex w-full max-w-[1260px] flex-col items-center">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center">
          Você sente que perdeu a conexão
          <br />
          com quem você é?
        </h2>
        <p className="text-[rgba(198,198,198,1)] text-base sm:text-lg md:text-xl font-normal text-center mt-6 sm:mt-8">
          Já cansou de tentar sozinha e não sair do lugar?
        </p>
        <div className="self-stretch mt-10 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/a1be343f6e2cdce49a1f7180df6162f1e22b9b58?placeholderIfAbsent=true"
                year=""
                title="Quer empreender com alma e verdade?"
                description="Deseja vencer o medo de vender, falar e se expor? Sabe que tem algo maior em você — mas ainda não sabe por onde começar?"
              />
            </div>
            <div>
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/eecd90f70c27ac582745f6ed671f2af3bab4572c?placeholderIfAbsent=true"
                year=""
                title="Quer transformar sua história em missão e renda?"
                description="Você não precisa mais carregar o peso de histórias que não são suas. É hora de escrever uma nova narrativa — com propósito e prosperidade."
              />
            </div>
            <div>
              <TimelineItem
                icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/f4fd2d7e39c3e3fcf0d1c3231794ec60320c7704?placeholderIfAbsent=true"
                year=""
                title="Deseja florescer em todas as áreas?"
                description="A mentoria O Despertar da Vida foi criada para mulheres que estão prontas para ativar seu potencial completo — espiritual, emocional, financeiro e profissional."
              />
            </div>
          </div>
        </div>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center mt-16 sm:mt-20 md:mt-24">
          Se você se identificou com essas perguntas,
          <br />
          você está no lugar certo.
        </h2>
        <p className="text-[rgba(231,231,231,1)] text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center mt-8 sm:mt-10 md:mt-11">
          A mentoria O Despertar da Vida
          <br />
          foi criada especialmente para você.
          <br />
          É hora de despertar
          <br />
          para quem você realmente é.
        </p>
        <div className="mt-6 sm:mt-8">
          <CTAButton className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[526px]">
            QUERO DESPERTAR MINHA VIDA
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
