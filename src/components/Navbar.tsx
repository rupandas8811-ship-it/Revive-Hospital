import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Phone, Menu, X, Calendar, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (condition?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Piles Care', to: '/piles-treatment/' },
    { label: 'Anal Fissure', to: '/fissure-treatment/' },
    { label: 'Anal Fistula', to: '/fistula-treatment/' },
    { label: 'Gallstones', to: '/gallstones-treatment/' },
    { label: 'Hernia Repair', to: '/hernia-treatment/' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3 shrink-0 text-decoration-none group">
            <img
              src="https://i.pinimg.com/736x/57/84/1d/57841dbf83e9a0f6991435f5d6551023.jpg"
              alt="Revive Healthcare Hospital Logo"
              className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-blue-900/10"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#123FA8] leading-none">
                Revive
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                Healthcare Hospital
              </span>
            </div>
          </Link>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="whitespace-nowrap shrink-0 hover:text-[#123FA8] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Phone CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#123FA8] hover:text-[#0d2f80] transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-[#F20D18]" />
              <span>{HOSPITAL_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-lg bg-[#F20D18] text-white text-xs font-bold shadow-sm hover:bg-red-700 transition-colors whitespace-nowrap shrink-0"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-[#F20D18] hover:bg-slate-100 rounded-lg sm:hidden"
              aria-label="Call Hospital"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3.5 py-2.5 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center px-3.5 py-2.5 text-[15px] font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="w-full min-h-[48px] px-4 rounded-lg bg-blue-50 text-[#123FA8] text-[15px] font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#F20D18]" />
              <span>Call Helpline: {HOSPITAL_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Revive Healthcare Hospital, I would like to enquire about consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] px-4 rounded-lg bg-emerald-50 text-emerald-800 text-[15px] font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full min-h-[48px] px-4 rounded-lg bg-[#F20D18] text-white text-[15px] font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
