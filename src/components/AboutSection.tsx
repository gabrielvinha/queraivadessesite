import React from 'react';

export const AboutSection: React.FC = () => {
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
    <section className="flex flex-col items-center w-full">
      <div className="w-full">
        <img
          src="https://i.postimg.cc/Kzz4tnp7/backgourd-sobre-mim.png"
          className="w-full h-auto object-cover"
          alt="Sobre Mim"
        />
      </div>
    </section>
  );
};