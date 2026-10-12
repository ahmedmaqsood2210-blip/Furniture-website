import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

export const ServiceBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $199'
    },
    {
      icon: RotateCcw,
      title: '30-Day Returns',
      description: 'Hassle-free returns'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments',
      description: '100% protected checkout'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: "We're here to help"
    }
  ];

  return (
    <div className="bg-[#FAF9F6] border-b border-[#E7E3DD] py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 sm:gap-4 py-1.5 px-2 group transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E9E2DA]/50 flex items-center justify-center shrink-0 text-[#17241C] group-hover:bg-[#E9E2DA] transition-colors">
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[1.6]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12.5px] sm:text-[13.5px] font-semibold text-[#17241C] tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] sm:text-[12px] text-[#77736D] leading-tight mt-0.5">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
