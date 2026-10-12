import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const NewsletterSection: React.FC = () => {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      showToast('Thank you for subscribing! Your welcome gift code is NOVA10');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-14 sm:py-18 bg-[#17241C] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Monogram Icon */}
        <div className="w-10 h-10 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-5 text-[#B29A78]">
          <Mail className="w-5 h-5" />
        </div>

        {/* Heading */}
        <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[40px] text-white font-normal mb-3">
          A Little Inspiration, Delivered
        </h2>

        {/* Description */}
        <p className="text-[14px] sm:text-[15.5px] text-white/75 font-sans max-w-lg mx-auto mb-8 leading-relaxed">
          Get new arrivals, architectural design journals, and exclusive seasonal offers delivered directly to your inbox.
        </p>

        {/* Form */}
        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 rounded-[8px] p-6 max-w-md mx-auto text-center space-y-2 animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-7 h-7 text-[#B29A78] mx-auto" />
            <h3 className="font-serif text-[18px] text-white">You're on the list!</h3>
            <p className="text-xs text-white/80">
              Check your inbox for our seasonal interior lookbook. Use code <span className="font-mono text-[#B29A78] font-bold">NOVA10</span> for 10% off your first piece.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border border-white/20 focus:border-[#B29A78] focus:bg-white/15 px-4 py-3.5 text-sm text-white placeholder-white/45 rounded-[4px] focus:outline-none transition-colors"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 bg-[#B29A78] hover:bg-[#a18a6a] text-[#17241C] text-[12px] sm:text-[12.5px] font-bold uppercase tracking-[0.16em] rounded-[4px] transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{status === 'loading' ? 'JOINING...' : 'SUBSCRIBE'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-300 mt-2 text-left font-medium">
                {errorMessage}
              </p>
            )}

            <p className="text-[11px] text-white/50 mt-3">
              We respect your privacy. Unsubscribe at any time with one click.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};
