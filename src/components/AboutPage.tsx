import React from 'react';
import { Leaf, Award, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useStore();

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B29A78] block">
            ABOUT NOVA FURNITURE
          </span>
          <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[54px] leading-tight text-[#17241C] font-normal">
            Furniture That Feels Like Home
          </h1>
          <p className="text-[15px] sm:text-[17px] text-[#77736D] leading-relaxed">
            Founded with a singular commitment: to restore quiet permanence to the modern home through sustainable hardwoods, architectural simplicity, and heirloom craftsmanship.
          </p>
        </div>

        {/* Big Editorial Image */}
        <div className="rounded-[10px] overflow-hidden aspect-[16/9] shadow-sm bg-[#E9E2DA]">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
            alt="NOVA Furniture Studio Interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Narrative & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#77736D]">
              OUR ORIGIN
            </span>
            <h2 className="font-serif text-[28px] sm:text-[34px] text-[#17241C] font-normal">
              Slow Design in a Fast World
            </h2>
            <p className="text-[14px] text-[#242522]/80 leading-relaxed">
              We observed that most contemporary furniture is engineered for obsolescence—disposable veneers, synthetic adhesives, and flimsy joints that buckle within seasons.
            </p>
            <p className="text-[14px] text-[#242522]/80 leading-relaxed">
              NOVA was born in 2021 as a counter-movement. We partner directly with multigenerational woodworking ateliers in Northern Europe and North America, selecting only FSC-certified oak, ash, and natural limestone slabs that age with dignity.
            </p>
          </div>

          <div className="bg-white border border-[#E7E3DD] rounded-[8px] p-8 space-y-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E9E2DA]/60 flex items-center justify-center shrink-0 text-[#17241C]">
                <Leaf className="w-5 h-5 text-[#B29A78]" />
              </div>
              <div>
                <h3 className="font-serif text-[17px] text-[#17241C] font-medium">100% Certified Hardwoods</h3>
                <p className="text-xs text-[#77736D] mt-1 leading-relaxed">
                  Every plank is traced back to sustainably managed forests replanted for future generations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E9E2DA]/60 flex items-center justify-center shrink-0 text-[#17241C]">
                <Award className="w-5 h-5 text-[#B29A78]" />
              </div>
              <div>
                <h3 className="font-serif text-[17px] text-[#17241C] font-medium">Zero-VOC Finishes</h3>
                <p className="text-xs text-[#77736D] mt-1 leading-relaxed">
                  Natural plant-based oils and waterborne topcoats ensure pure, emission-free indoor air quality for your family.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#E9E2DA]/60 flex items-center justify-center shrink-0 text-[#17241C]">
                <ShieldCheck className="w-5 h-5 text-[#B29A78]" />
              </div>
              <div>
                <h3 className="font-serif text-[17px] text-[#17241C] font-medium">10-Year Guarantee</h3>
                <p className="text-xs text-[#77736D] mt-1 leading-relaxed">
                  Our joinery is tested for over 100,000 cycles. We stand behind our solid frames with a comprehensive 10-year warranty.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-[#17241C] text-white rounded-[10px] p-8 sm:p-12 text-center space-y-4">
          <h2 className="font-serif text-[28px] sm:text-[34px]">Experience Timeless Comfort</h2>
          <p className="text-xs sm:text-sm text-white/75 max-w-md mx-auto">
            Discover our complete living room, dining, and bedroom catalog with complimentary white-glove shipping on orders over $199.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('shop')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#B29A78] hover:bg-[#a18a6a] text-[#17241C] text-xs font-bold uppercase tracking-[0.16em] rounded transition-colors"
            >
              <span>EXPLORE ALL FURNITURE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
