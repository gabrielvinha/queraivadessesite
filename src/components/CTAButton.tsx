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
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
    >
      <div className="z-10 grow shrink basis-auto my-auto px-8 py-5 max-lg:px-7 max-lg:py-4 max-md:px-6 max-md:py-4 max-sm:px-5 max-sm:py-3">
        {children}
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/95a0d65e6e664f9083220b6878574efe/505b5319db853ee62869f92a9d71903ed9ace4bf?placeholderIfAbsent=true"
        className="aspect-[0.98] object-contain w-[43px] shrink-0 max-lg:w-[38px] max-md:w-[35px] max-sm:w-[30px]"
        alt=""
      />
    </button>
  );
};
