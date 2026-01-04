import React from 'react';
import { BadgeCheckIcon, LeafIcon, StarIcon, HandshakeIcon } from './icons';

const TrustBar: React.FC = () => {
    const signals = [
        { text: "Satisfaction Guaranteed", Icon: BadgeCheckIcon, color: "text-[#0EA5E9]" },
        { text: "Eco-Friendly Solutions", Icon: LeafIcon, color: "text-green-500" },
        { text: "5-Star Rated Service", Icon: StarIcon, color: "text-yellow-500" },
        { text: "Local & Family-Owned", Icon: HandshakeIcon, color: "text-sky-500" }
    ];

    return (
        <div className="bg-[#F9FAFB] border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-6 text-center">
                    {signals.map((signal, index) => (
                        <div key={index} className="flex items-center justify-center space-x-3">
                            <signal.Icon className={`h-7 w-7 ${signal.color}`} />
                            <span className="font-semibold text-gray-700 text-sm sm:text-base">{signal.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;