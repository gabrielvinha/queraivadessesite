import React from 'react';

export const AboutSection: React.FC = () => {
  return ( 
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