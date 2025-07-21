import React from 'react';
import { CTAButton } from './CTAButton';

interface LifeAreaProps {
  icon: string;
  title: string;
  description: string;
  hasClipPath?: boolean;
}

const LifeArea: React.FC<LifeAreaProps> = ({ icon, title, description, hasClipPath = false }) => (
  <div className="bg-[rgba(16,17,31,1)] border w-[972px] max-w-full mt-5 px-[37px] py-[43px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-lg:px-6 max-lg:py-8 max-lg:w-[90%] max-md:px-5 max-md:py-6 max-md:w-[95%]">
    <div className="gap-5 flex max-lg:flex-col max-lg:items-center max-lg:text-center max-md:flex-col max-md:items-center max-md:text-center">
      <div className="w-[16%] max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
        {hasClipPath ? (
          <div className="flex w-[143px] shrink-0 h-[142px] max-lg:w-[120px] max-lg:h-[120px] max-lg:mx-auto max-md:w-[100px] max-md:h-[100px] max-md:mx-auto" />
        ) : (
          typeof icon === 'string' && icon.startsWith('http') ? (
            <img
              src={icon}
              className="aspect-[1.01] object-contain w-[143px] shrink-0 max-w-full self-stretch my-auto max-lg:w-[120px] max-lg:mx-auto max-lg:mt-0 max-md:w-[100px] max-md:mx-auto max-md:mt-0"
              alt=""
            />
          ) : (
            <div className="flex w-[143px] shrink-0 h-[142px] max-lg:w-[120px] max-lg:h-[120px] max-lg:mx-auto max-md:w-[100px] max-md:h-[100px] max-md:mx-auto items-center justify-center">
              <div className="text-6xl max-lg:text-5xl max-md:text-4xl">{icon}</div>
            </div>
          )
        )}
      </div>
      <div className="w-[84%] ml-5 max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
        <div className="flex grow flex-col items-stretch max-lg:max-w-full max-lg:mt-4 max-md:max-w-full max-md:mt-4">
          <h3 className="text-white text-[32px] font-bold leading-[1.4] max-lg:text-[28px] max-md:text-[24px]">
            {title}
          </h3>
          <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 mt-[23px] max-lg:text-[18px] max-lg:leading-7 max-lg:mt-4 max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-3">
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
      <h2 className="text-[rgba(8,9,20,1)] text-[57px] font-bold leading-[58px] text-center mt-[101px] max-lg:text-[42px] max-lg:leading-[48px] max-lg:mt-16 max-lg:px-4 max-md:max-w-full max-md:text-[28px] max-md:leading-[35px] max-md:mt-10 max-md:px-4">
        A transformação não é só interna,
        <br />é em todas as áreas da vida.
      </h2>
      <p className="text-[rgba(46,46,46,1)] text-[21px] font-normal leading-8 text-center mt-[35px] max-lg:text-[19px] max-lg:mt-6 max-lg:px-4 max-md:max-w-full max-md:text-[18px] max-md:leading-7 max-md:mt-6 max-md:px-4">
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
      
      <div className="bg-[rgba(16,17,31,1)] border flex w-[972px] max-w-full flex-col items-stretch mt-5 px-[25px] py-[35px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-lg:px-6 max-lg:py-8 max-lg:w-[90%] max-lg:text-center max-md:px-5 max-md:py-6 max-md:w-[95%] max-md:text-center">
        <div className="max-lg:max-w-full max-lg:mr-0 max-md:max-w-full max-md:mr-0">
          <div className="gap-5 flex max-lg:flex-col max-lg:items-center max-md:flex-col max-md:items-center">
            <div className="w-[16%] max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
              <div className="flex w-[143px] shrink-0 h-[142px] max-lg:w-[120px] max-lg:h-[120px] max-lg:mx-auto max-md:w-[100px] max-md:h-[100px] max-md:mx-auto items-center justify-center">
                <div className="text-6xl max-lg:text-5xl max-md:text-4xl">💝</div>
              </div>
            </div>
            <div className="w-[84%] ml-5 max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
              <div className="flex flex-col self-stretch items-stretch my-auto max-lg:max-w-full max-lg:mt-4 max-md:max-w-full max-md:mt-4">
                <h3 className="text-white text-[32px] font-bold leading-[1.4] max-lg:text-[28px] max-md:text-[24px]">
                  Emocional
                </h3>
                <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 mt-[23px] max-lg:text-[18px] max-lg:leading-7 max-lg:mt-4 max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-3">
                  Cura de feridas invisíveis e fortalecimento interno. Você não está travada por falta de capacidade. Está travada por bloqueios que ninguém vê — mas que sabotam cada tentativa de crescer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 mt-[18px] max-lg:text-[18px] max-lg:leading-7 max-lg:mt-4 max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-4">
          A mentoria O Despertar da Vida foi criada pra quebrar essas correntes invisíveis. Aqui, você vai desbloquear traumas, emoções reprimidas e padrões herdados que te mantêm rodando em círculos. Libertar suas emoções é a chave pra liberar seu destino. E esse desbloqueio começa AGORA.
        </p>
      </div>
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/86e7fd8a1bfa2a7b90dd611202d02e89ac7f3c04?placeholderIfAbsent=true"
        title="Profissional"
        description="Posicionamento, vendas com verdade e visibilidade. Não importa de onde você veio — importa como você se posiciona. Aqui você vai desenvolver sua presença autêntica, aprender a vender com propósito e construir uma carreira que tenha significado."
      />
      
      <div className="bg-[rgba(16,17,31,1)] border w-[972px] max-w-full mt-5 px-[37px] py-[43px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-lg:px-6 max-lg:py-8 max-lg:w-[90%] max-md:px-5 max-md:py-6 max-md:w-[95%]">
        <div className="gap-5 flex max-lg:flex-col max-lg:items-center max-lg:text-center max-md:flex-col max-md:items-center max-md:text-center">
          <div className="w-[16%] max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
            <div className="flex w-[143px] shrink-0 h-[142px] max-lg:w-[120px] max-lg:h-[120px] max-lg:mx-auto max-md:w-[100px] max-md:h-[100px] max-md:mx-auto items-center justify-center">
              <div className="text-6xl max-lg:text-5xl max-md:text-4xl">👨‍👩‍👧‍👦</div>
            </div>
          </div>
          <div className="w-[84%] ml-5 max-lg:w-full max-lg:ml-0 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-lg:max-w-full max-lg:mt-4 max-md:max-w-full max-md:mt-4">
              <h3 className="text-white text-[32px] font-bold leading-[1.4] max-lg:text-[28px] max-md:text-[24px]">
                Familiar
              </h3>
              <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 mt-[23px] max-lg:text-[18px] max-lg:leading-7 max-lg:mt-4 max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-3">
                Equilíbrio entre missão e relações. De que adianta conquistar o mundo e perder sua casa? Na mentoria, a transformação é completa. Você vai fortalecer o vínculo com sua família e parar de sacrificar seus relacionamentos no altar da ambição.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <LifeArea
        icon="💪"
        title="Corpo"
        description="Vitalidade para sustentar o que você está construindo. Pra transformar, precisa ter energia. Chega de acordar cansada, improdutiva, ausente. Seu corpo precisa servir à sua missão — não te sabotar. Você vai aprender a se cuidar pra suportar a grandeza que quer construir."
      />
      
      <LifeArea
        icon="🎤"
        title="Voz"
        description="Fale com clareza, coragem e autenticidade. Chega de se esconder, de ter medo de se expor, de não conseguir comunicar seu valor. Aqui você vai encontrar sua voz verdadeira e aprender a usá-la com poder e propósito."
      />
      
      <div className="mt-[52px] max-lg:mt-10 max-lg:flex max-lg:justify-center max-md:mt-10 max-md:flex max-md:justify-center">
        <CTAButton className="w-[520px] max-w-full max-lg:max-w-[400px] max-md:max-w-[300px] max-sm:max-w-[280px]">
          QUERO PROSPERAR EM TODAS ÁS ÁREAS
        </CTAButton>
      </div>
    </section>
  );
};
