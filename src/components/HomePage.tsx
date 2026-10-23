import React from 'react';
import { Link } from 'react-router-dom';
import { CONDITIONS, HOSPITAL_INFO, DOCTORS } from '../data/hospitalData';
import { ShieldCheck, Calendar, Phone, Activity, FileText, GitCommit, CircleDot, ShieldAlert, ChevronRight, Award, MapPin } from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (condition?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6 text-[#F20D18]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#F20D18]" />;
      case 'GitCommit': return <GitCommit className="w-6 h-6 text-[#F20D18]" />;
      case 'CircleDot': return <CircleDot className="w-6 h-6 text-[#F20D18]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#F20D18]" />;
      default: return <Activity className="w-6 h-6 text-[#F20D18]" />;
    }
  };

  const getRoutePath = (id: string) => {
    switch (id) {
      case 'piles': return '/piles-treatment/';
      case 'fissure': return '/fissure-treatment/';
      case 'fistula': return '/fistula-treatment/';
      case 'gallstones': return '/gallstones-treatment/';
      case 'hernia': return '/hernia-treatment/';
      default: return '/';
    }
  };

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_to_call', { event_category: 'Engagement', event_label: HOSPITAL_INFO.phone });
    }
    window.location.href = `tel:${HOSPITAL_INFO.phone.replace(/\s+/g, '')}`;
  };

  return (
    <div className="bg-white text-[#202B3C]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F1F8FE] py-16 lg:py-24 border-b border-blue-100">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#123FA8] text-xs sm:text-sm font-bold tracking-wide border border-blue-200">
              <ShieldCheck className="w-4 h-4 text-[#123FA8]" />
              <span>Revive Healthcare Hospital • Bengaluru</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#123FA8] tracking-tight leading-tight">
              Advanced Surgical & Specialist Care in <span className="text-[#F20D18]">Bengaluru</span>
            </h1>

            <p className="text-base sm:text-lg text-[#202B3C] leading-relaxed font-medium">
              Explore our dedicated condition-specific specialist landing pages for Piles, Anal Fissure, Anal Fistula, Gallstones, and Hernia treatments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F20D18] text-white font-bold text-base shadow-lg shadow-[#F20D18]/30 hover:bg-red-700 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Hospital Consultation</span>
              </button>
              
              <button
                onClick={handleCallClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-[#123FA8] text-[#123FA8] font-bold text-base bg-white hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#F20D18]" />
                <span>Call: {HOSPITAL_INFO.phoneDisplay}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Dedicated Landing Pages Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F8FE] text-[#123FA8] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
              Dedicated Condition Pages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123FA8] tracking-tight">
              Select a Condition to View Dedicated Page
            </h2>
            <p className="mt-3 text-base text-[#202B3C] font-medium">
              Each dedicated page provides specialized symptom breakdowns, treatment options, FAQs, and direct appointment booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONDITIONS.map((cond) => (
              <div
                key={cond.id}
                className="bg-[#F1F8FE] border border-blue-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-blue-100">
                    <img
                      src={cond.image}
                      alt={cond.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#123FA8] p-2 rounded-xl shadow-xs border border-blue-200">
                      {getIcon(cond.iconName)}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-[#123FA8]">
                      {cond.name}
                    </h3>
                    <p className="text-sm text-[#202B3C] font-medium leading-relaxed">
                      {cond.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={getRoutePath(cond.id)}
                    className="w-full py-3 rounded-xl bg-[#123FA8] text-white font-bold text-sm shadow-md hover:bg-blue-900 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Visit Dedicated {cond.name} Page</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}

            {/* General Hospital Hub Card */}
            <div className="bg-[#123FA8] text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6 text-[#F20D18]" />
                </div>
                <h3 className="text-2xl font-bold">Revive Healthcare Hospital</h3>
                <p className="text-blue-100 text-sm font-medium leading-relaxed">
                  {HOSPITAL_INFO.address}. Open 24/7 for emergency and multispeciality care in Bengaluru.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 rounded-xl bg-[#F20D18] text-white font-bold text-sm shadow-md hover:bg-red-700 transition-all"
                >
                  Book General Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Specialists Preview */}
      <section className="py-16 bg-[#F1F8FE] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#123FA8]">Our Medical Specialists in Bengaluru</h2>
            <p className="mt-3 text-base text-[#202B3C] font-medium">Experienced physicians and surgeons dedicated to your health and recovery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS.slice(0, 3).map((doc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xs flex items-center gap-4">
                <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#123FA8]" />
                <div>
                  <h4 className="font-bold text-[#123FA8] text-base">{doc.name}</h4>
                  <p className="text-xs text-[#F20D18] font-bold">{doc.qualification}</p>
                  <p className="text-xs text-[#202B3C] font-medium mt-0.5">{doc.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
