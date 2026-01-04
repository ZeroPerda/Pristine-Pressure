import React from 'react';
import { SmsIcon } from './icons';

const FloatingSMSButton: React.FC = () => {
    return (
        <a
            href="sms:+15102534469?&body=Hi, I would like a free estimate for pressure washing."
            className="fixed bottom-5 right-5 z-50 md:hidden bg-[#22C55E] hover:bg-green-700 text-white font-bold py-3 px-5 rounded-full inline-flex items-center gap-2 shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            aria-label="Text us for a free quote"
        >
            <SmsIcon className="h-6 w-6" />
            <span className="text-sm">Text for a Quote</span>
        </a>
    );
};

export default FloatingSMSButton;