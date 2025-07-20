import React from 'react';
import { CTAButton } from './CTAButton';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => (
  <div className="bg-[rgba(24,27,33,1)] border flex grow flex-col items-stretch w-full pt-[33px] pb-[101px] px-[33px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:max-w-full max-md:mt-5 max-md:pb-8 max-md:px-5 max-md:pt-6">
    <img
      src={image}
      className="aspect-[1.5] object-contain w-full rounded-[10px] max-md:max-w-full"
      alt=""
    />
    <h3 className="text-white text-2xl font-bold leading-[1.4] mt-[35px] max-md:text-[20px] max-md:mt-4 max-md:text-center">
      {title}
    </h3>
    <p className="text-[rgba(198,198,198,1)] text-[21px] font-normal leading-8 mt-[29px] max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-4 max-md:text-center">
      {description}
    </p>
  </div>
);

interface ImageCardProps {
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => (
  <div className="bg-[rgba(24,27,33,1)] border flex grow flex-col items-stretch justify-center w-full p-[17px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:mt-5">
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
      <div className="w-full max-w-[1772px] mt-[271px] max-md:max-w-full max-md:mt-10 max-md:px-4">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:space-y-5 max-md:gap-0">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <FeatureCard
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/ebddcf85d8f1e5c5fca93426ac5d6aaec3f9c32d?placeholderIfAbsent=true"
              title="Marco Zero"
              description="Sua primeira vitória: BOOTCAMP DE MONETIZAÇÃO IMEDIATA Recupere seu investimento no primeiro mês."
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/1da997adaebafe9c09071932158db018fb87d5ef?placeholderIfAbsent=true"
              title="Mentorias de ajuste de rota"
              description="Mentorias Semanais com Marçal, Aguiari e convidados especiais do ecossistema. Vamos convidar mentores conhecidos de todas as áreas para dentro da Aliança."
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/d53263506c0d0e7c2e5f345ec3f5e9d3843a8ceb?placeholderIfAbsent=true"
              title="Experiências, acessos e Networking"
              description='Quatro vezes por ano, vamos sair do digital. Pra olhar no olho. Pra trocar energia. Pra viver experiências que transformam. Esses encontros não são "eventos". São experiências, pontos de ruptura de ciclo.'
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1772px] mt-10 max-md:max-w-full max-md:px-4">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:space-y-5 max-md:gap-0">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <FeatureCard
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/e2f018d1c1e10e146cc0898c7e0f5b9b5bea1009?placeholderIfAbsent=true"
              title="Grupos de Transbordo"
              description="O que você aprende, você compartilha. E ao transbordar em outros, você se fortalece ainda mais. Grupos formados por Reinantes com o mesmo ritmo, visão e sede de crescer — onde um puxa o outro pra cima, e o conhecimento vira COLHEITA COLETIVA."
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/6691f023ea5b3612fee51f141f5a7ce1c6bee275?placeholderIfAbsent=true"
              title="Oficinas de Implementação"
              description="Seu conhecimento em prática. Aqui você não fica na teoria, nós vamos fazer as oficinas para aplicar junto com você."
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/a50c962438b611a410a253f4e8e8015a7592caf4?placeholderIfAbsent=true"
              title="Agentes de IA"
              description="Agente de IA para cada trilha, te ajudando em cada uma das etapas. As mentes do Marçal e Aguiari na palma da sua mão."
            />
          </div>
        </div>
      </div>

      <div className="w-[1260px] max-w-full mt-[296px] max-md:mt-10 max-md:px-4">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:space-y-5 max-md:gap-0">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <ImageCard image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/dccb98bfe8a8f3ad8c5be3be4779226c86055c1b?placeholderIfAbsent=true" />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <ImageCard image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/afe5fb24749d0add9b54da21850d3f5628beb101?placeholderIfAbsent=true" />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <ImageCard image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/9a088db4f49e77243a92613f11e1127d663b6664?placeholderIfAbsent=true" />
          </div>
        </div>
      </div>

      <div className="w-[1260px] max-w-full mt-10 max-md:px-4">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:space-y-5 max-md:gap-0">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <ImageCard image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/50e2d4a140f2918f7489e778f541df84db9145c4?placeholderIfAbsent=true" />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <ImageCard image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/a4aaa73dce3586a54136bb2954213eb97347fc29?placeholderIfAbsent=true" />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <ImageCard image="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/04889ac2d401a92de11c5ecfeca9280c61df3605?placeholderIfAbsent=true" />
          </div>
        </div>
      </div>

      <div className="mt-[30px] max-md:mt-8 max-md:flex max-md:justify-center max-md:px-4">
        <CTAButton variant="secondary" className="w-[472px] max-w-full max-md:max-w-[300px]">
          QUERO PROSPERAR EM TODAS ÁS ÁREAS
        </CTAButton>
      </div>
    </section>
  );
};
