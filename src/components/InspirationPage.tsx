import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const InspirationPage: React.FC = () => {
  const { navigateTo } = useStore();

  const articles = [
    {
      id: 'art-1',
      title: 'The Philosophy of Warm Minimalism',
      category: 'Design Theory',
      date: 'Fall / Winter 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      excerpt: 'Why eliminating unnecessary visual clutter while introducing rich organic textures like bouclé and travertine leads to a calmer, more restorative living environment.'
    },
    {
      id: 'art-2',
      title: 'Proportions & Scale: Sizing Your Dining Table',
      category: 'Interior Guide',
      date: 'Seasonal Issue',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85',
      excerpt: 'How to calculate clearance dimensions around chairs, credenzas, and pendant lamps for effortless hosting and dinner gatherings.'
    },
    {
      id: 'art-3',
      title: 'Heirloom Care: Living with Natural White Oak',
      category: 'Material Care',
      date: 'Studio Journal',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=85',
      excerpt: 'Everything you need to know about seasonal humidity, natural wax treatments, and the developing golden patina of solid European timber.'
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B29A78] block">
            THE NOVA JOURNAL
          </span>
          <h1 className="font-serif text-[34px] sm:text-[46px] text-[#17241C] font-normal leading-tight">
            Design Inspiration & Living
          </h1>
          <p className="text-[14px] sm:text-[15px] text-[#77736D]">
            Essays on architectural proportion, material longevity, and the subtle art of peaceful home curations.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-[#E7E3DD] rounded-[8px] overflow-hidden flex flex-col justify-between group shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E2DA]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF9F6]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-[#17241C]">
                    {art.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-[#77736D]">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif text-[20px] text-[#17241C] font-medium leading-snug group-hover:text-[#B29A78] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-[13px] text-[#77736D] leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => navigateTo('shop')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#17241C] group-hover:text-[#B29A78] transition-colors"
                >
                  <span>Explore Furniture in Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
