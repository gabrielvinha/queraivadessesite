import React from 'react';
import { CTAButton } from './CTAButton';

interface LifeAreaProps {
  icon: string;
  title: string;
  description: string;
  hasClipPath?: boolean;
}

const LifeArea: React.FC<LifeAreaProps> = ({ icon, title, description, hasClipPath = false }) => (
  <div className="bg-[rgba(16,17,31,1)] border w-[972px] max-w-full mt-5 px-[37px] py-[43px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:px-5 max-md:py-6 max-md:w-[95%]">
    <div className="gap-5 flex max-md:flex-col max-md:items-center max-md:text-center">
      <div className="w-[16%] max-md:w-full max-md:ml-0">
        {hasClipPath ? (
          <div className="flex w-[143px] shrink-0 h-[142px] max-md:w-[100px] max-md:h-[100px] max-md:mx-auto" />
        ) : (
          <img
            src={icon}
            className="aspect-[1.01] object-contain w-[143px] shrink-0 max-w-full self-stretch my-auto max-md:w-[100px] max-md:mx-auto max-md:mt-0"
            alt=""
          />
        )}
      </div>
      <div className="w-[84%] ml-5 max-md:w-full max-md:ml-0">
        <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-4">
          <h3 className="text-white text-[32px] font-bold leading-[1.4] max-md:text-[24px]">
            {title}
          </h3>
          <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 mt-[23px] max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-3">
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
      <h2 className="text-white text-[57px] font-bold leading-[58px] text-center mt-[101px] max-md:max-w-full max-md:text-[28px] max-md:leading-[35px] max-md:mt-10 max-md:px-4">
        A ascensão não é só financeira,
        <br />é em todas as áreas da vida.
      </h2>
      <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 text-center mt-[35px] max-md:max-w-full max-md:text-[18px] max-md:leading-7 max-md:mt-6 max-md:px-4">
        A Aliança Reinante foi criada para ativar a sua ascensão completa.
        <br />
        Governe nas 7 áreas que realmente importam:
      </p>
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/266c121dc21b22ded50e13e48b3152bbe1f400d9?placeholderIfAbsent=true"
        title="Mental"
        description="Chega de viver travado por pensamentos pequenos. Aqui, você vai quebrar os ciclos de escassez, medo e comparação — e assumir o controle da mente que SABE pra onde está indo. Quem governa por dentro, ninguém governa por fora."
      />
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/e7748748ed5223b581e24f18c9ace6424e6b191d?placeholderIfAbsent=true"
        title="Financeira"
        description="Dentro da Aliança, você vai aprender a lucrar com as novas profissões digitais, construir um celeiro financeiro e garantir liberdade real pra sua casa. Você junto com a gente fazer parte da maior transferência de riqueza da história."
      />
      
      <div className="bg-[rgba(16,17,31,1)] border flex w-[972px] max-w-full flex-col items-stretch mt-5 px-[25px] py-[35px] rounded-[10px] border-[rgba(36,37,51,1)] border-solid max-md:px-5 max-md:py-6 max-md:w-[95%] max-md:text-center">
        <div className="max-md:max-w-full max-md:mr-0">
          <div className="gap-5 flex max-md:flex-col max-md:items-center">
            <div className="w-[16%] max-md:w-full max-md:ml-0">
              <div className="flex w-[143px] shrink-0 h-[142px] max-md:w-[100px] max-md:h-[100px] max-md:mx-auto" />
            </div>
            <div className="w-[84%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-4">
                <h3 className="text-white text-[32px] font-bold leading-[1.4] max-md:text-[24px]">
                  Emocional
                </h3>
                <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 mt-[23px] max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-3">
                  Você não está travado por falta de capacidade. Está travado por bloqueios que ninguém vê — mas que sabotam cada tentativa de crescer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[rgba(231,231,231,1)] text-[21px] font-normal leading-8 mt-[18px] max-md:max-w-full max-md:text-[16px] max-md:leading-6 max-md:mt-4">
          A Aliança Reinante foi criada pra quebrar essas correntes invisíveis. Aqui, você vai desbloquear traumas, emoções reprimidas e padrões herdados que te mantêm rodando em círculos. Libertar suas emoções é a chave pra liberar seu destino. E esse desbloqueio começa AGORA. Dentro da Aliança.
        </p>
      </div>
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/86e7fd8a1bfa2a7b90dd611202d02e89ac7f3c04?placeholderIfAbsent=true"
        title="Profissional"
        description="Não importa de onde você veio — importa como você se posiciona. A Aliança vai te entregar ferramentas, IA, trilhas práticas e mentorias táticas pra você construir riqueza com estratégia. Você pode aparecer no palco… ou vencer nos bastidores. O que importa é que você tenha resultado."
      />
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/78d3c6f9a1adc3840928369c81ffb33f91f61eaf?placeholderIfAbsent=true"
        title="Espiritual"
        description="Sem propósito, qualquer dinheiro vira vaidade. Aqui, você vai reconectar com sua origem, com sua fé e com o chamado que você já sente no espírito — mas ainda não sabia como ativar. Porque um reinado sem alicerce espiritual, desaba."
      />
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/aad98d21271a4c7e4ccf6d58a8b0b6ba77f79f5f?placeholderIfAbsent=true"
        title="Física"
        description="Pra reinar, precisa ter energia. Chega de acordar cansado, improdutivo, ausente. Seu corpo precisa servir à sua missão — não te sabotar. Você vai aprender a se cuidar pra suportar a grandeza que quer construir."
      />
      
      <LifeArea
        icon="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/309c245deb18f3337327a22717a57651b2c5068c?placeholderIfAbsent=true"
        title="Familiar"
        description="De que adianta conquistar o mundo e perder sua casa? Na Aliança, a vitória é completa. Você vai fortalecer o vínculo com seu cônjuge, com seus filhos e parar de sacrificar sua família no altar da ambição. O novo ciclo começa com você."
      />
      
      <div className="mt-[52px] max-md:mt-10 max-md:flex max-md:justify-center">
        <CTAButton className="w-[520px] max-w-full max-md:max-w-[300px]">
          QUERO PROSPERAR EM TODAS ÁS ÁREAS
        </CTAButton>
      </div>
    </section>
  );
};
