import React from 'react';

export const CinematicBackgroundSection: React.FC = () => {
  return (
    <>
      {/* Seção de background cinematográfico fixo */}
      <section 
        className="feature fixed top-0 w-full z-0"
        style={{
          paddingTop: '50%',
          background: 'url(https://i.postimg.cc/cCTwwXDw/O-Brasil-est-entrando-em-colapso-e-quem-n-o-fizer-parte-da-nova-alian-a-vai-ser-engolido-N-o-somos.png) center center no-repeat',
          backgroundSize: '250%',
          boxShadow: '0 -50px 20px -20px #232323 inset',
          filter: 'blur(4px) brightness(0.7)'
        }}
      >
        {/* Overlay para escurecer */}
        <div className="opaque absolute inset-0 bg-black bg-opacity-30"></div>
      </section>

      {/* CSS customizado para responsividade */}
      <style jsx>{`
        @media only screen and (min-width: 580px) {
          .feature {
            padding-top: 35% !important;
          }
        }
      `}</style>
    </>
  );
};