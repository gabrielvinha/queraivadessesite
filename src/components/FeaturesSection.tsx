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
      <div className="w-full max-w-[1772px] mt-[271px] max-lg:mt-20 max-lg:px-6 max-md:max-w-full max-md:mt-10 max-md:px-4">
        <div className="gap-5 flex max-lg:flex-col max-lg:items-stretch max-lg:space-y-5 max-lg:gap-0 max-md:flex-col max-md:items-stretch max-md:space-y-5 max-md:gap-0">
          <div className="w-[33%] max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="🌟"
              title="Espiritualidade e Despertar Feminino"
              description="Reconecte com sua essência feminina sagrada e desperte a força interior que sempre esteve em você."
            />
          </div>
          <div className="w-[33%] ml-5 max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="🧠"
              title="Psicologia da Autossabotagem"
              description="Identifique e quebre os padrões inconscientes que sabotam seu crescimento e impedem sua evolução."
            />
          </div>
          <div className="w-[33%] ml-5 max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="🎯"
              title="Comunicação Autêntica e Oratória"
              description="Desenvolva sua voz única, comunique com clareza e impacto, e se torne uma líder inspiradora em sua área."
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1772px] mt-10 max-lg:px-6 max-md:max-w-full max-md:px-4">
        <div className="gap-5 flex max-lg:flex-col max-lg:items-stretch max-lg:space-y-5 max-lg:gap-0 max-md:flex-col max-md:items-stretch max-md:space-y-5 max-md:gap-0">
          <div className="w-[33%] max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="💰"
              title="Consciência Financeira e Mentalidade"
              description="Transforme sua relação com o dinheiro, desenvolva mentalidade de abundância e crie estratégias sustentáveis de prosperidade."
            />
          </div>
          <div className="w-[33%] ml-5 max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="🤝"
              title="Vendas com Propósito"
              description="Aprenda a vender de forma autêntica e alinhada com seus valores, sem manipulação ou pressão."
            />
          </div>
          <div className="w-[33%] ml-5 max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
            <FeatureCard
              image="📱"
              title="Visibilidade Online com Estratégia"
              description="Construa uma presença digital autêntica e estratégica que atraia seu público ideal e gere resultados consistentes."
            />
          </div>
        </div>
      </div>

      {/* Nova seção DESPERTAR */}
      <section className="bg-black self-stretch flex w-full flex-col items-center justify-center mt-[296px] px-20 py-24 max-lg:px-10 max-lg:py-16 max-lg:mt-20 max-md:max-w-full max-md:px-5 max-md:py-12 max-md:mt-10">
        <div className="flex w-[1200px] max-w-full flex-col items-center">
          <h2 className="text-[rgba(255,215,0,1)] text-5xl font-bold leading-[1.4] text-center max-lg:text-4xl max-md:text-[28px]">
            Cada letra é um passo. Cada passo é um despertar.
          </h2>
          <p className="text-[rgba(200,200,200,1)] text-[21px] font-normal text-center mt-6 max-lg:text-[19px] max-lg:mt-4 max-md:text-[18px] max-md:mt-4">
            Descubra o significado profundo por trás da jornada que vai transformar sua vida.
          </p>
          
          <div className="w-full mt-16 max-lg:mt-12 max-md:mt-10">
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-lg:gap-6 max-md:grid-cols-1 max-md:gap-5">
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">D</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Decisão</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Tudo muda quando você decide. É o início da sua virada.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">E</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Essência</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Voltar pra quem você é de verdade. Sem máscaras, sem culpa.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">S</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Sabedoria</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Escolher com consciência e maturidade o que te expande.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">P</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Propósito</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Viver com sentido, sabendo exatamente o porquê do que faz.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">E</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Espiritualidade</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Reconectar com a força que te criou e te sustenta.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">R</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Resiliência</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Levantar mesmo quando a vida tenta te calar.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">T</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Transbordo</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Compartilhar sua luz com o mundo — sem medo de brilhar.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">A</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Amor</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Curar com amor, escolher com amor, viver com amor.
                </p>
              </div>
              
              <div className="bg-[rgba(20,20,20,1)] border border-[rgba(255,215,0,0.3)] flex flex-col items-center text-center p-8 rounded-lg max-lg:p-6 max-md:p-5 max-lg:col-span-2 max-lg:mx-auto max-lg:max-w-md max-md:col-span-1">
                <div className="text-[rgba(255,215,0,1)] text-6xl font-bold mb-4 max-lg:text-5xl max-md:text-4xl">R</div>
                <h3 className="text-white text-2xl font-bold mb-3 max-lg:text-xl max-md:text-lg">Realização</h3>
                <p className="text-[rgba(200,200,200,1)] text-lg leading-relaxed max-lg:text-base max-md:text-sm">
                  Materializar seus sonhos com leveza e presença.
                </p>
              </div>
              
            </div>
          </div>
          
          <div className="mt-16 max-lg:mt-12 max-md:mt-10">
            <CTAButton className="w-[520px] max-w-full max-lg:max-w-[400px] max-md:max-w-[300px] max-sm:max-w-[280px]">
              QUERO VIVER MEU DESPERTAR
            </CTAButton>
          </div>
        </div>
      </section>
    </section>
  );
};
