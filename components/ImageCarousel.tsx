import React, { useState, useEffect } from 'react';

// --- Ícones das Setas ---
const ChevronLeft = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ImageCarousel: React.FC = () => {
  // Configuração dos Slides com as legendas atualizadas
  const slides = [
    {
      url: '/portfolio/carrossel-1.jpg', 
      title: 'Outdoor Furniture Restoration',
      description: 'We bring your wooden furniture back to life, removing years of weathering and graying.'
    },
    {
      url: '/portfolio/carrossel-2.jpg', 
      title: 'Entrance & Walkway Renewal',
      description: 'Make a great first impression. We deep clean stone paths and entryways to look brand new.'
    },
    {
      url: '/portfolio/carrossel-3.jpg', 
      title: 'Solar Panel Efficiency Boost',
      description: 'See the difference! Removing heavy dirt and pollen restores your panels to maximum energy production.'
    },
    {
      url: '/portfolio/carrossel-4.jpg', 
      title: 'Spotless Solar Maintenance',
      description: 'Protect your investment. Our pure-water cleaning leaves no residue, just crystal clear glass.'
    },
    {
      url: '/portfolio/carrossel-5.jpg', 
      title: 'Deck Restoration Results',
      description: 'The contrast is clear. We safely remove buildup to reveal the beautiful fresh wood underneath.'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para o próximo slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Função para voltar o slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Mudar slide clicando na bolinha
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-Play (Passa sozinho a cada 5 segundos)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#1F2937]">See Our Work in Action</h2>
          <p className="mt-4 text-gray-600">
            A clean property is a happy property. Check out some of our recent transformations in the East Bay.
          </p>
        </div>

        {/* --- O CARROSSEL --- */}
        <div className="max-w-5xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full m-auto py-4 px-0 relative group">
          
          {/* Imagem de Fundo */}
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ease-out shadow-2xl relative overflow-hidden"
          >
            {/* Gradiente Escuro na parte de baixo para ler o texto */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-10 pt-20">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
                {slides[currentIndex].title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-lg max-w-2xl drop-shadow-md">
                {slides[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Seta Esquerda */}
          <div 
            onClick={prevSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition"
          >
            <ChevronLeft />
          </div>

          {/* Seta Direita */}
          <div 
            onClick={nextSlide}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition"
          >
            <ChevronRight />
          </div>

          {/* Bolinhas (Dots) de Navegação */}
          <div className="flex absolute bottom-4 left-0 right-0 justify-center gap-2">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`cursor-pointer transition-all duration-300 h-3 w-3 rounded-full ${
                  currentIndex === slideIndex ? 'bg-green-500 w-6' : 'bg-white/50 hover:bg-white'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;