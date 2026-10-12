import React from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toast } = useStore();

  if (!toast || !toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-3 duration-200">
      <div className="bg-[#17241C] text-white px-4 py-3 rounded-[6px] shadow-xl border border-white/10 flex items-center gap-2.5 text-xs font-medium">
        <CheckCircle className="w-4 h-4 text-[#B29A78] shrink-0" />
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
