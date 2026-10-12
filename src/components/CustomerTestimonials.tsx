import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6] border-t border-[#E7E3DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#77736D] block mb-2">
            HONEST VOICES
          </span>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] text-[#17241C] font-normal mb-3">
            Loved in Over 15,000 Homes
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#77736D]">
            Read unfiltered impressions from architects, interior stylists, and design enthusiasts who live with NOVA pieces daily.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E7E3DD] rounded-[8px] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#D5CFC9] transition-colors"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#B29A78] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B29A78]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[13.5px] sm:text-[14.5px] text-[#242522] leading-relaxed font-sans italic mb-6">
                  “{t.quote}”
                </blockquote>
              </div>

              {/* Author & Product */}
              <div className="pt-4 border-t border-[#F5F2EC] flex flex-col">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[13px] font-semibold text-[#17241C] block">
                      {t.name}
                    </span>
                    <span className="text-[11px] text-[#77736D] block">
                      {t.role} · {t.city}
                    </span>
                  </div>

                  {t.verified && (
                    <div className="flex items-center gap-1 text-[10.5px] text-[#3B6649] font-medium bg-[#E8F1EB] px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                <div className="mt-2.5 text-[11px] text-[#B29A78] font-medium uppercase tracking-wider">
                  Purchased: {t.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
