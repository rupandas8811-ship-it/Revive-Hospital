import React from 'react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Phone, MessageSquare } from 'lucide-react';

interface StickyFooterProps {
  onOpenBooking?: () => void;
}

export const StickyFooter: React.FC<StickyFooterProps> = () => {
  const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Revive Healthcare Hospital, I would like to enquire about consultation and treatment options.'
  )}`;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2"
      style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* Action 1: Call Hospital */}
        <a
          href={`tel:${HOSPITAL_INFO.phone}`}
          className="flex items-center justify-center gap-2 min-h-[48px] px-3 py-2 rounded-lg border border-slate-300 bg-white text-[#123FA8] hover:bg-slate-50 transition-colors active:scale-95 shadow-xs"
          aria-label="Call Hospital Helpline"
        >
          <Phone className="w-4 h-4 text-[#F20D18] shrink-0" />
          <span className="text-[14px] font-bold whitespace-nowrap">Call Hospital</span>
        </a>

        {/* Action 2: WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 min-h-[48px] px-3 py-2 rounded-lg bg-[#25D366] text-white hover:bg-emerald-600 transition-colors active:scale-95 shadow-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-white shrink-0 fill-current" />
          <span className="text-[14px] font-bold whitespace-nowrap">WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
