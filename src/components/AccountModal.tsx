import React, { useState } from 'react';
import { X, User, Package, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, showToast } = useStore();
  const [tab, setTab] = useState<'login' | 'register' | 'track'>('login');

  // Track order state
  const [trackInput, setTrackInput] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isAccountOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoggedIn(true);
    showToast(`Welcome back, ${email.split('@')[0]}!`);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackInput.trim()) return;
    setTrackingResult(`Order #${trackInput.trim().toUpperCase()} is in transit: Out for scheduled white-glove delivery on Friday.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF9F6] border border-[#E7E3DD] rounded-[10px] max-w-md w-full shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E7E3DD] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#17241C]" />
            <h3 className="font-serif text-[19px] text-[#17241C] font-medium">
              Customer Account
            </h3>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            className="p-1.5 text-[#77736D] hover:text-[#17241C]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[#E7E3DD] bg-white text-xs">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-3 font-semibold uppercase tracking-wider transition-colors ${tab === 'login' ? 'text-[#17241C] border-b-2 border-[#17241C]' : 'text-[#77736D] hover:text-[#17241C]'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-3 font-semibold uppercase tracking-wider transition-colors ${tab === 'register' ? 'text-[#17241C] border-b-2 border-[#17241C]' : 'text-[#77736D] hover:text-[#17241C]'}`}
          >
            Register
          </button>
          <button
            onClick={() => setTab('track')}
            className={`flex-1 py-3 font-semibold uppercase tracking-wider transition-colors ${tab === 'track' ? 'text-[#17241C] border-b-2 border-[#17241C]' : 'text-[#77736D] hover:text-[#17241C]'}`}
          >
            Track Order
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {tab === 'track' ? (
            <form onSubmit={handleTrack} className="space-y-4">
              <p className="text-xs text-[#77736D]">
                Enter your NOVA Furniture order reference (e.g., NV-482910) to review live shipment milestone updates.
              </p>
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#17241C] block mb-1">
                  Order Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. NV-591240"
                  value={trackInput}
                  onChange={(e) => setTrackInput(e.target.value)}
                  className="w-full bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#17241C] hover:bg-[#283d2f] text-white text-xs uppercase font-semibold tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <Package className="w-3.5 h-3.5" />
                <span>Track Shipment</span>
              </button>

              {trackingResult && (
                <div className="p-3.5 bg-white border border-[#E7E3DD] rounded text-xs text-[#17241C] space-y-1 mt-3">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Order Active</span>
                  </div>
                  <p className="text-[#77736D]">{trackingResult}</p>
                </div>
              )}
            </form>
          ) : isLoggedIn ? (
            <div className="text-center py-6 space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#B29A78] mx-auto" />
              <h4 className="font-serif text-[20px] text-[#17241C]">Signed in as {email || 'Member'}</h4>
              <p className="text-xs text-[#77736D]">
                Your design consultations and purchase history are active.
              </p>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs text-[#B29A78] underline"
              >
                Sign out
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#17241C] block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-semibold text-[#17241C] block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-[#E7E3DD] rounded px-3 py-2 text-xs text-[#242522] focus:border-[#17241C] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#77736D]">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-[#17241C]" />
                  <span>Remember me</span>
                </label>
                <a href="#reset" className="hover:text-[#17241C] underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#17241C] hover:bg-[#283d2f] text-white text-xs uppercase font-semibold tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{tab === 'login' ? 'Sign In' : 'Create Account'}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
