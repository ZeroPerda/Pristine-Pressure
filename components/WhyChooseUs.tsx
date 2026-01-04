import React from 'react';

// --- ICONS ---
const TrustIcon = () => (
  <svg className="w-12 h-12 text-[#22C55E] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const FamilyIcon = () => (
  <svg className="w-12 h-12 text-[#22C55E] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ResultsIcon = () => (
  <svg className="w-12 h-12 text-[#22C55E] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Family Owned & Locally Operated",
      description: "Based in Richmond, we treat every home like it's our own. You'll deal directly with the owners who care about our Bay Area community.",
      icon: <FamilyIcon />
    },
    {
      title: "Licensed, Insured & Eco-Friendly",
      description: "We use professional-grade, biodegradable cleaners that are safe for your family, pets, and landscaping. Fully insured for your peace of mind.",
      icon: <TrustIcon />
    },
    {
      title: "Pristine Results, Guaranteed",
      description: "From soft-wash roof restoration to solar efficiency, we don't leave until your property shines. Our reputation is built on attention to detail.",
      icon: <ResultsIcon />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] mb-4">
            The Pristine Difference
          </h2>
          <div className="w-24 h-1 bg-[#22C55E] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
              {feature.icon}
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;