import React, { useState, useEffect } from 'react';

// --- ÍCONES ---
const SmsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
);
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const StarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);
const BadgeCheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const HandshakeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

const Hero: React.FC = () => {
    // Estado para verificar se é Desktop
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Verifica o tamanho da tela ao carregar
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768); // 768px é o padrão 'md' do Tailwind
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        if (!targetId) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Lógica do Link Inteligente
    const contactLink = isDesktop 
        ? "https://wa.me/15102534469?text=Hi,%20I%20saw%20your%20website%20and%20would%20like%20a%20free%20estimate." // Link WhatsApp (Desktop)
        : "sms:+15102534469?&body=Hi, I would like a free estimate for pressure washing."; // Link SMS (Mobile)

    return (
        <section className="relative text-white h-screen min-h-[600px] flex items-center">
            
            {/* --- IMAGEM DE FUNDO OFICIAL --- */}
            <img 
                src="/hero/pristine-pressure-washing-east-bay-hero.jpg" 
                alt="Pristine Pressure Washing and Soft Wash services in East Bay, CA"
                className="absolute inset-0 w-full h-full object-cover" 
            />
            
            {/* --- CAMADA ESCURA (OVERLAY) --- */}
            {/* Se achar muito escuro, mude de bg-black/60 para bg-black/50 ou bg-black/40 */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    
                    {/* --- TÍTULO OTIMIZADO PARA MOBILE --- */}
                    {/* Alterado para text-3xl no mobile para evitar quebra excessiva */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
                        East Bay’s Trusted Experts in Soft Wash & Exterior Cleaning
                    </h1>
                    
                    <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-sm font-medium">
                        Safely restoring roofs, maximizing solar panel efficiency, and renewing driveways. Eco-friendly, serving Richmond, Berkeley, and surrounding areas.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 text-gray-200">
                        <div className="flex items-center gap-2">
                            <StarIcon className="h-5 w-5 text-yellow-400" />
                            <span className="font-semibold text-sm tracking-wide">5-Star Rated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BadgeCheckIcon className="h-5 w-5 text-green-400" />
                            <span className="font-semibold text-sm tracking-wide">Satisfaction Guaranteed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HandshakeIcon className="h-5 w-5 text-sky-400" />
                            <span className="font-semibold text-sm tracking-wide">Family Owned Local Business</span>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        
                        {/* --- BOTÃO ÚNICO INTELIGENTE (TEXT/WHATSAPP) --- */}
                        <a 
                            href={contactLink}
                            target={isDesktop ? "_blank" : "_self"} // Abre nova aba só se for WhatsApp
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 text-lg font-bold text-white bg-[#22C55E] rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105"
                        >
                            <SmsIcon className="h-6 w-6" />
                            Text for a Quote
                        </a>

                        {/* BOTÃO SECUNDÁRIO (FORMULÁRIO) */}
                        <a 
                            href="#quote-form" 
                            onClick={handleNavClick} 
                            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 text-lg font-bold text-[#1F2937] bg-white rounded-lg shadow-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors"
                        >
                            <CheckCircleIcon className="h-6 w-6 text-[#1F2937]" />
                            Get a Free Quote
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;