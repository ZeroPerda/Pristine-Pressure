import React, { useState } from 'react';

// --- ÍCONE DE LOCALIZAÇÃO ---
const MapMarkerIcon = () => (
  <svg className="w-10 h-10 text-[#3B82F6] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ServiceArea: React.FC = () => {
  // Estado do Formulário
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'Pressure Washing (Driveway/Patio)' 
  });

  // Função que envia para o WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I would like a free estimate.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Address:* ${formData.address}%0A*Service:* ${formData.service}`;
    window.open(`https://wa.me/15102534469?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="quote-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- PARTE 1: ÁREA DE COBERTURA (TEXTO APENAS) --- */}
        <div className="text-center mb-12">
          <MapMarkerIcon />
          <h2 className="text-3xl font-extrabold text-[#1F2937] mb-4">
            Proudly Serving the Bay Area
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
    While our home base is <span className="font-semibold text-gray-800">Richmond</span>, our commitment to excellence reaches every corner of the Bay Area. We pride ourselves on being a neighborhood-focused business with the scale to handle diverse projects across the region, providing meticulous <span className="text-[#22C55E] font-medium">roof, solar, and masonry care</span> that reflects the high standards of our California communities.
  </p>
        </div>

        {/* --- PARTE 2: FORMULÁRIO DE ORÇAMENTO --- */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#1F2937]">Get Your Free Estimate</h3>
              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below, and we'll get back to you with a fast, free, and no-obligation quote for your property today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    placeholder="(510) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address (City/Zip Code)</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="123 Main St, Richmond"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option>Pressure Washing (Driveway/Patio)</option>
                  <option>Solar Panel Cleaning</option>
                  <option>Roof Soft Wash</option>
                  <option>House Washing (Siding)</option>
                  <option>Gutter Cleaning</option>
                  <option>Commercial Cleaning</option>
                  <option>Other / Multiple Services</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-md text-lg font-bold text-white bg-[#22C55E] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-[1.02]"
                >
                  Send Request via WhatsApp
                </button>
                <p className="mt-3 text-center text-xs text-gray-400">
                  By clicking Send, you will be redirected to WhatsApp to send your details instantly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;