import React, { useState, useEffect } from 'react';

// --- Ícones (Definidos aqui para não quebrar o código) ---
const SmsIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- Componente Header Principal ---
const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        if (!targetId) return;

        if (targetId === '#') {
             window.scrollTo({ top: 0, behavior: 'smooth' });
             return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white md:bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    
                    {/* --- LOGO AREA --- */}
                    <div className="flex-shrink-0">
                        <a href="#" onClick={handleNavClick} aria-label="Pristine Pressure Service Home">
                            {/* AQUI ESTÁ SUA LOGO APONTANDO PARA A PASTA PUBLIC */}
                            <img 
                                src="/logo/logo.png"
                                alt="Pristine Pressure Service Logo" 
                                className="h-20 w-auto md:h-24 object-contain hover:scale-105 transition-transform duration-300" 
                            />
                        </a>
                    </div>

                    {/* --- DESKTOP NAVIGATION --- */}
                    <nav className="hidden md:flex md:space-x-8">
                        <a href="#services" onClick={handleNavClick} className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">Services</a>
                        <a href="#about-us" onClick={handleNavClick} className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">About Us</a>
                        <a href="#testimonials" onClick={handleNavClick} className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">Testimonials</a>
                        <a href="#service-area" onClick={handleNavClick} className="text-gray-600 hover:text-[#0EA5E9] font-medium transition-colors">Service Area</a>
                    </nav>

                    {/* --- ACTION BUTTONS --- */}
                    <div className="flex items-center space-x-2">
                        {/* Phone Number (Visible on Desktop) */}
                        <a href="tel:+15102534469" className="hidden lg:inline-block px-4 py-2 text-sm font-semibold text-[#1F2937] hover:text-[#22C55E] transition-colors">
                            (510) 253-4469
                        </a>

                         {/* Mobile SMS Button (Abre o App de Mensagem) */}
                        <a href="sms:+15102534469?&body=Hi, I would like a free estimate for pressure washing." className="md:hidden inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#22C55E] rounded-full shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
                            <SmsIcon className="h-5 w-5" />
                            Text Us
                        </a>

                        {/* Desktop Quote Button (Rola para o formulário) */}
                        <a href="#quote-form" onClick={handleNavClick} className="hidden md:inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#22C55E] rounded-full shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
                            <CheckCircleIcon className="h-5 w-5" />
                            Get a Free Quote
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;