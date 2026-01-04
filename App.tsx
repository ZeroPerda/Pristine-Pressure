import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ImageCarousel from './components/ImageCarousel';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ServiceArea from './components/ServiceArea';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingSMSButton from './components/FloatingSMSButton';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-[#1F2937] antialiased">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ImageCarousel />
        <Services />
        <Testimonials />
        <AboutUs />
        <ServiceArea />
      </main>
      <Footer />
      <FloatingSMSButton />
    </div>
  );
};

export default App;