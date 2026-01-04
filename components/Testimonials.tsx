import React from 'react';
import { BadgeCheckIcon, StarIcon } from './icons';

const testimonialsData = [
    {
        name: "Karmela R.",
        review: "Came same day and gave a fair estimate. And did the job the next day. Removed all the moss and mud from our brick front yard.",
    },
    {
        name: "Flavia M.",
        review: "Pro showed up early, did more work than I expected, very thorough, excellent value, very personable! I will recommend him to my friends! No before photo but my deck, stairs & house were covered with moss. My bench was aged redwood. He did an excellent job!",
    },
    {
        name: "Icaro S.",
        review: "Extremely high-quality work, I never imagined my yard could be so clean. Punctual, dedicated team, and a family-owned business on top of that. Simply wonderful. The price was very comfortable for my budget. I’ll definitely hire them again. Thank you, Pristine Pressure Service!",
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937]">
                        Trusted by Your Neighbors in the East Bay
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our commitment to quality and customer satisfaction speaks for itself. Here's what our clients have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8 flex flex-col shadow-sm transition-shadow hover:shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-[#1F2937]">{testimonial.name}</h3>
                                    <div className="flex items-center text-sm text-[#22C55E] font-semibold">
                                        <BadgeCheckIcon className="h-5 w-5 mr-1" />
                                        <span>Verified Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                                ))}
                            </div>
                            <blockquote className="text-gray-700 italic">
                                <p>"{testimonial.review}"</p>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;