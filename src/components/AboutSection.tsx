import React from 'react';
import { CTAButton } from './CTAButton';

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex flex-col items-center w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Título da Seção */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Sobre a autora
          </h2>
          <div className="w-24 h-1 bg-[#F8E29A] mx-auto rounded-full"></div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://i.postimg.cc/jdJczfGr/fd5d2f6e-db5f-4307-b973-c99cbf5416d6.png"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                alt="Maria Flores"
              />
              {/* Overlay decorativo */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#F8E29A] rounded-2xl -z-10 hidden md:block"></div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#2c2c2c] text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                <strong className="text-[#1a1a1a] font-bold">Maria Flores</strong> é uma mulher que vive o que ensina — e transforma o que vive em legado. Diretora e membro do Conselho Internacional da Academia Mundial de Letras e Empreendedorismo, integra também o seleto grupo da <strong>LITERARE</strong> – Associação Internacional de Escritores e Artistas.
              </p>
              
              <p className="text-[#2c2c2c] text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                Reconhecida internacionalmente, é autora de <strong className="text-[#F8E29A] bg-[#1a1a1a] px-2 py-1 rounded">mais de 20 livros publicados</strong>, com destaque em obras lançadas em Paris, participações em projetos adaptados para o cinema, e coautoria de livros que bateram recordes no <strong>Guinness Book</strong>.
              </p>
              
              <p className="text-[#2c2c2c] text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                Maria é fundadora da <strong>Academia de Ciências, Arte e Letras de Saquarema</strong> e atua como diretora de livros na Associação Mulheres Prósperas e Feminina, reforçando diariamente seu compromisso com a literatura, o empreendedorismo feminino e o despertar de novos talentos.
              </p>
              
              <p className="text-[#2c2c2c] text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                Ao longo de sua jornada, já impactou <strong className="text-[#1a1a1a]">milhares de mulheres</strong> — muitas delas transformando suas histórias de dor em mentorias, livros, palestras e fontes reais de renda e propósito.
              </p>
              
              <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-[#F8E29A] mt-8">
                <p className="text-[#F8E29A] text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                  Agora, com a Mentoria DESPERTAR, Maria abre espaço para você caminhar ao lado dela e viver sua própria virada de chave.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <CTAButton className="w-full max-w-[400px]">
                QUERO CONHECER A MENTORIA
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Elementos Decorativos */}
        <div className="relative mt-16 sm:mt-20">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#F8E29A] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-8 right-1/3 w-3 h-3 bg-[#F8E29A] rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#F8E29A] rounded-full opacity-80 animate-pulse delay-2000"></div>
        </div>
      </div>
    </section>
  );
};