import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    {/* 1. Logo e Nome */}
                    <div className="flex items-center gap-3">
                        <img 
                            src="/logo/logo.png" 
                            alt="Pristine Pressure Service Logo" 
                            className="h-10 w-auto object-contain" 
                        />
                        <span className="font-bold text-xl text-[#1F2937]">
                            Pristine Pressure Service
                        </span>
                    </div>

                    {/* 2. Links Rápidos de Navegação */}
                    <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
                        <a href="#" className="hover:text-[#22C55E] transition-colors">Home</a>
                        <a href="#services" className="hover:text-[#22C55E] transition-colors">Services</a>
                        <a href="#about-us" className="hover:text-[#22C55E] transition-colors">About Us</a>
                        <a href="#testimonials" className="hover:text-[#22C55E] transition-colors">Reviews</a>
                    </nav>

                    {/* 3. Contato Rápido */}
                    <div className="text-center md:text-right">
                        <a href="tel:+15102534469" className="block text-lg font-bold text-[#1F2937] hover:text-[#22C55E] transition-colors">
                            (510) 253-4469
                        </a>
                        <span className="text-sm text-gray-500">Richmond, CA</span>
                    </div>
                </div>

                {/* 4. Linha de Copyright e SEO */}
                <div className="border-t border-gray-100 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>
                        &copy; {currentYear} Pristine Pressure Service. All rights reserved.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Proudly Serving the Greater East Bay Area
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;