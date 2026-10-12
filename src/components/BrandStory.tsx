import React from 'react';
import { ArrowRight, Leaf, Shield, Award } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const BrandStory: React.FC = () => {
  const { navigateTo } = useStore();

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-[#E9E2DA]/35 border-t border-[#E7E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Atmospheric Photography Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[8px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#FAF9F6] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85"
                alt="NOVA Furniture craftsmanship and timeless living room architecture"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Inset Secondary Image for Depth */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-44 rounded-[6px] overflow-hidden border-4 border-[#FAF9F6] shadow-md bg-white">
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=85"
                alt="Natural wood craftsmanship details"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Editorial Brand Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#B29A78]" />
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#77736D]">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[42px] leading-[1.12] text-[#17241C] font-normal">
              Thoughtful Design. <br />
              <span className="italic font-light">Lasting Comfort.</span>
            </h2>

            <p className="text-[14px] sm:text-[15.5px] text-[#242522]/80 leading-relaxed font-sans">
              At NOVA FURNITURE, we believe homes should be quiet sanctuaries. We reject the cycle of disposable furnishings in favor of intentional proportions, FSC-certified hardwoods, non-toxic finishes, and time-honored joinery methods that improve with age.
            </p>

            {/* Craft Pill Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#17241C] font-semibold text-[13px]">
                  <Leaf className="w-3.5 h-3.5 text-[#B29A78]" />
                  <span>Sustainably Sourced</span>
                </div>
                <p className="text-[11.5px] text-[#77736D]">100% certified European oak & birch.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#17241C] font-semibold text-[13px]">
                  <Shield className="w-3.5 h-3.5 text-[#B29A78]" />
                  <span>Built for Generations</span>
                </div>
                <p className="text-[11.5px] text-[#77736D]">10-year structural frame warranty.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#17241C] font-semibold text-[13px]">
                  <Award className="w-3.5 h-3.5 text-[#B29A78]" />
                  <span>Ethical Studios</span>
                </div>
                <p className="text-[11.5px] text-[#77736D]">Direct artisan family workshops.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('about')}
                className="inline-flex items-center gap-2 text-[12.5px] sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#17241C] border-b-2 border-[#17241C] pb-1 hover:text-[#B29A78] hover:border-[#B29A78] transition-colors cursor-pointer"
              >
                <span>READ OUR BRAND STORY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
