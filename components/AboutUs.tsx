import React from 'react';

// --- ÍCONES ---
const LeafIcon = () => (
  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const GearIcon = () => (
  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const FamilyIcon = () => (
  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Responsivo: 1 coluna no mobile, 2 no Desktop (lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- COLUNA DA ESQUERDA: TEXTO --- */}
          <div className="text-left">
            {/* Título ajustado: text-3xl no mobile, 4xl no PC */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-6 leading-tight">
              Dedicated to Restoring Your Home’s Beauty
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We understand the importance of a clean and well-maintained property. Whether it's removing dirt, moss, or stains, our team is dedicated to restoring the beauty and functionality of your home with outstanding results.
            </p>

            {/* Lista de Diferenciais */}
            <div className="space-y-6">
              
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <LeafIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2937]">Eco-Friendly Solutions</h3>
                  <p className="text-gray-600 mt-1">We use biodegradable cleaning agents that are safe for your family, pets, and plants.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <GearIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2937]">High-Quality Equipment</h3>
                  <p className="text-gray-600 mt-1">Our advanced, professional-grade equipment delivers superior results efficiently and safely.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <FamilyIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F2937]">Family-Owned & Operated</h3>
                  <p className="text-gray-600 mt-1">As your local East Bay neighbors, we're committed to providing trustworthy and reliable service.</p>
                </div>
              </div>

            </div>
          </div>

          {/* --- COLUNA DA DIREITA: A FOTO NOVA --- */}
          <div className="relative mt-8 lg:mt-0">
             {/* Borda decorativa atrás da foto */}
            <div className="absolute -inset-4 bg-green-100 rounded-xl transform rotate-2"></div>
            
            <img 
              src="/about/professional-house-washing-service-berkeley-richmond.jpg" 
              alt="Pristine Pressure Service professional house washing and restoration in Berkeley and Richmond, CA" 
              className="relative rounded-xl shadow-2xl w-full h-auto object-cover transform transition-transform hover:scale-[1.01] duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;