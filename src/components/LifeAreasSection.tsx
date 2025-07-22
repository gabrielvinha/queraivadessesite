import React from 'react';
import { CTAButton } from './CTAButton';

interface LifeAreaProps {
  icon: string;
  title: string;
  description: string;
  hasClipPath?: boolean;
}

const LifeArea: React.FC<LifeAreaProps> = ({ icon, title, description, hasClipPath = false }) => (
  <div className="bg-[rgba(16,17,31,1)] border w-full max-w-[972px] mt-5 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 rounded-[10px] border-[rgba(36,37,51,1)] border-solid mx-4">
    <div className="gap-5 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
      <div className="w-full md:w-[16%] flex justify-center md:justify-start">
        {hasClipPath ? (
          <div className="flex w-20 sm:w-24 md:w-28 lg:w-32 xl:w-[143px] shrink-0 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-[142px]" />
        ) : (
          typeof icon === 'string' && icon.startsWith('http') ? (
            <img
              src={icon}
              className="aspect-[1.01] object-contain w-20 sm:w-24 md:w-28 lg:w-32 xl:w-[143px] shrink-0 max-w-full"
              alt=""
            />
          ) : (
            <div className="flex w-20 sm:w-24 md:w-28 lg:w-32 xl:w-[143px] shrink-0 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-[142px] items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{icon}</div>
            </div>
          )
        )}
      </div>
      <div className="w-full md:w-[84%] md:ml-5 mt-4 md:mt-0">
        <div className="flex grow flex-col items-stretch">
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-[1.4]">
            {title}
          </h3>
          <p className="text-[rgba(231,231,231,1)] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed mt-3 sm:mt-4 md:mt-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const LifeAreasSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-[rgba(8,9,20,1)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-4">
        A transformação não é só interna,
        <br />é em todas as áreas da vida.
      </h2>
      <p className="text-[rgba(46,46,46,1)] text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center mt-6 sm:mt-8 px-4">
        A mentoria O Despertar da Vida foi criada para ativar sua transformação completa.
        <br />
        Floresça nas 7 áreas que realmente importam:
      </p>
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/266c121dc21b22ded50e13e48b3152bbe1f400d9?placeholderIfAbsent=true"
        title="Espiritual"
        description="Conexão com seu propósito, fé e força interior. Chega de viver desconectada do que realmente importa. Aqui, você vai reconectar com sua essência, sua missão e sua força espiritual — porque é daí que vem a verdadeira transformação."
      />
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/e7748748ed5223b581e24f18c9ace6424e6b191d?placeholderIfAbsent=true"
        title="Financeira"
        description="Independência com consciência e mentalidade de abundância. Você vai quebrar os bloqueios financeiros, desenvolver uma relação saudável com o dinheiro e criar fluxos de renda alinhados com seu propósito."
      />
      
      <div className="bg-[rgba(16,17,31,1)] border flex w-full max-w-[972px] flex-col items-stretch mt-5 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 rounded-[10px] border-[rgba(36,37,51,1)] border-solid mx-4 text-center md:text-left">
        <div>
          <div className="gap-5 flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-[16%] flex justify-center md:justify-start">
              <img
                src="https://pablomarcal.com.br/wp-content/uploads/2025/07/emotions-1-1.svg"
                className="aspect-[1.01] object-contain w-20 sm:w-24 md:w-28 lg:w-32 xl:w-[143px] shrink-0 max-w-full"
                alt=""
              />
            </div>
            <div className="w-full md:w-[84%] md:ml-5 mt-4 md:mt-0">
              <div className="flex flex-col self-stretch items-stretch">
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-[1.4]">
                  Emocional
                </h3>
                <p className="text-[rgba(231,231,231,1)] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed mt-3 sm:mt-4 md:mt-6">
                  Cura de feridas invisíveis e fortalecimento interno. Você não está travada por falta de capacidade. Está travada por bloqueios que ninguém vê — mas que sabotam cada tentativa de crescer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[rgba(231,231,231,1)] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed mt-4 sm:mt-5 md:mt-6">
          A mentoria O Despertar da Vida foi criada pra quebrar essas correntes invisíveis. Aqui, você vai desbloquear traumas, emoções reprimidas e padrões herdados que te mantêm rodando em círculos. Libertar suas emoções é a chave pra liberar seu destino. E esse desbloqueio começa AGORA.
        </p>
      </div>
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/86e7fd8a1bfa2a7b90dd611202d02e89ac7f3c04?placeholderIfAbsent=true"
        title="Profissional"
        description="Posicionamento, vendas com verdade e visibilidade. Não importa de onde você veio — importa como você se posiciona. Aqui você vai desenvolver sua presença autêntica, aprender a vender com propósito e construir uma carreira que tenha significado."
      />
      
      <div className="bg-[rgba(16,17,31,1)] border w-full max-w-[972px] mt-5 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 rounded-[10px] border-[rgba(36,37,51,1)] border-solid mx-4">
        <div className="gap-5 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="w-full md:w-[16%] flex justify-center md:justify-start">
            <img
              src="https://pablomarcal.com.br/wp-content/uploads/2025/07/familia-1-1.svg"
              className="aspect-[1.01] object-contain w-20 sm:w-24 md:w-28 lg:w-32 xl:w-[143px] shrink-0 max-w-full"
              alt=""
            />
          </div>
          <div className="w-full md:w-[84%] md:ml-5 mt-4 md:mt-0">
            <div className="flex grow flex-col items-stretch">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-[1.4]">
                Familiar
              </h3>
              <p className="text-[rgba(231,231,231,1)] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed mt-3 sm:mt-4 md:mt-6">
                Equilíbrio entre missão e relações. De que adianta conquistar o mundo e perder sua casa? Na mentoria, a transformação é completa. Você vai fortalecer o vínculo com sua família e parar de sacrificar seus relacionamentos no altar da ambição.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <LifeArea
        icon="https://pablomarcal.com.br/wp-content/uploads/2025/07/muscle.svg"
        title="Corpo"
        description="Vitalidade para sustentar o que você está construindo. Pra transformar, precisa ter energia. Chega de acordar cansada, improdutiva, ausente. Seu corpo precisa servir à sua missão — não te sabotar. Você vai aprender a se cuidar pra suportar a grandeza que quer construir."
      />
      
      <LifeArea
        icon="https://pablomarcal.com.br/wp-content/uploads/2025/07/orar-1-1.svg"
        title="Voz"
        description="Fale com clareza, coragem e autenticidade. Chega de se esconder, de ter medo de se expor, de não conseguir comunicar seu valor. Aqui você vai encontrar sua voz verdadeira e aprender a usá-la com poder e propósito."
      />
      
      <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center px-4">
        <CTAButton className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[520px]">
          QUERO PROSPERAR EM TODAS ÁS ÁREAS
        </CTAButton>
      </div>
    </section>
  );
};