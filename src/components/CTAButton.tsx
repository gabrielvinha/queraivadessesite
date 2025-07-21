import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  onClick 
}) => {
  const baseClasses = "flex items-stretch overflow-hidden text-[22px] font-bold text-center leading-none rounded-[100px] border-solid transition-all duration-200 hover:scale-105 max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px]";
  
  const variantClasses = variant === 'primary' 
    ? "bg-[rgba(39,253,1,1)] border text-black border-[rgba(103,166,1,1)] hover:bg-[rgba(35,230,1,1)]"
    : "border text-white border-white hover:bg-white hover:text-black";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action: open WhatsApp
      const phoneNumber = "5519993401563";
      const message = "Olá, eu vi sua página e quero saber mais!";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className} text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
      onClick={handleClick}
    >
      <div className="z-10 grow shrink basis-auto my-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-3 sm:py-4 md:py-5">
        {children}
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/505b5319db853ee62869f92a9d71903ed9ace4bf?placeholderIfAbsent=true"
        className="aspect-[0.98] object-contain w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10 shrink-0"
        alt=""
      />
    </button>
  );
};
