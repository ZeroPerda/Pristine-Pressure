import React from 'react';

// --- ÍCONES PERSONALIZADOS ---
const SunIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
const HouseIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const DropIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
);
const SparklesIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
);
const BuildingIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);
const ShieldIcon = () => (
  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Solar Panel Cleaning",
      description: "Dirty panels can lose up to 25% efficiency. We use a specialized pure-water system to safely clean your panels, maximizing your energy production and savings.",
      icon: <SunIcon />,
    },
    {
      title: "Roof Soft Washing",
      description: "Safely remove black streaks (algae), moss, and lichen without damaging your shingles. Our low-pressure soft wash technique extends the life of your roof.",
      icon: <ShieldIcon />,
    },
    {
      title: "Driveway & Concrete",
      description: "Instant curb appeal! We use professional surface cleaners to remove tough oil stains, tire marks, and years of built-up grime from your driveway and walkways.",
      icon: <SparklesIcon />,
    },
    {
      title: "House Washing",
      description: "Restore your home's exterior brightness. Whether it's stucco, vinyl, or wood, we use the right pressure and eco-friendly solutions to wash away dust and mold.",
      icon: <HouseIcon />,
    },
    {
      title: "Gutter Cleaning",
      description: "Prevent water damage and protect your foundation. We clear out leaves and debris, ensuring your gutters and downspouts are flowing freely.",
      icon: <DropIcon />,
    },
    {
      title: "Commercial Services",
      description: "Keep your business looking professional. We offer storefront cleaning, sidewalk gum removal, and building washing for local businesses in the East Bay.",
      icon: <BuildingIcon />,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      {/* Container com mais margem lateral no mobile (px-6) e muito mais no PC (px-12/24) */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm md:text-base font-bold text-green-600 tracking-wide uppercase">Our Services</h2>
          {/* Título Responsivo: text-3xl no mobile, cresce para 4xl e 5xl */}
          <p className="mt-2 text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold tracking-tight text-gray-900">
            Professional Cleaning Solutions for Every Surface
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-500">
            From delicate solar panels to tough concrete stains, we have the right equipment and expertise to get the job done safely.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-b-4 border-green-500 flex flex-col"
            >
              {/* Padding Interno Ajustado: p-6 no mobile (menos apertado), p-8 no PC */}
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Final de Chamada para Ação */}
        <div className="mt-16 text-center">
          <a 
            href="#quote-form" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-green-600 hover:bg-green-700 md:text-xl transition-transform hover:scale-105 shadow-lg"
          >
            Get a Free Quote for Your Home
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;