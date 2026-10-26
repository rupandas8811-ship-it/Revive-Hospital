import React from 'react';
import { Link } from 'react-router-dom';
import { CONDITIONS, HOSPITAL_INFO, DOCTORS } from '../data/hospitalData';
import {
  ShieldCheck,
  Calendar,
  Phone,
  Activity,
  FileText,
  GitCommit,
  CircleDot,
  ShieldAlert,
  ChevronRight,
  MapPin,
  Heart,
  Clock,
  Users,
  Wallet,
  Sparkles,
  Compass,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (condition?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-5 h-5 text-[#F20D18]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#F20D18]" />;
      case 'GitCommit': return <GitCommit className="w-5 h-5 text-[#F20D18]" />;
      case 'CircleDot': return <CircleDot className="w-5 h-5 text-[#F20D18]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#F20D18]" />;
      default: return <Activity className="w-5 h-5 text-[#F20D18]" />;
    }
  };

  const getRoutePath = (id: string) => {
    switch (id) {
      case 'piles': return '/piles-treatment/';
      case 'fissure': return '/fissure-treatment/';
      case 'fistula': return '/fistula-treatment/';
      case 'gallstones': return '/gallstones-treatment/';
      case 'hernia': return '/hernia-treatment/';
      case 'appendix': return '/appendix-treatment/';
      default: return '/';
    }
  };

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_to_call', {
        event_category: 'Engagement',
        event_label: HOSPITAL_INFO.phone
      });
    }
    window.location.href = `tel:${HOSPITAL_INFO.phone.replace(/\s+/g, '')}`;
  };

  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-[#123FA8]" />,
      headline: 'Your Comfort Matters to Us',
      content: 'We understand that surgery can feel stressful. Our team will help you understand your treatment options and guide you through the next steps.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#123FA8]" />,
      headline: 'Ask About Same-Day Discharge Options',
      content: 'Some procedures allow patients to return home on the same day. Our team can explain the expected discharge time based on your treatment and medical condition.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#123FA8]" />,
      headline: 'Friendly Staff, Ready to Help',
      content: 'Have questions about your treatment or appointment? Our team can help you understand the process and get the information you need.'
    },
    {
      icon: <Wallet className="w-6 h-6 text-[#123FA8]" />,
      headline: 'Explore Treatment Options Within Your Budget',
      content: 'We understand that treatment costs matter to families. Contact our team to discuss available treatment options and expected costs before making a decision.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#123FA8]" />,
      headline: 'Modern Treatment Options, Personalised Care',
      content: 'Learn about the available treatment approaches and discuss which option may be suitable for your condition.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#123FA8]" />,
      headline: 'Know What to Expect Before Your Treatment',
      content: 'Understand your treatment process, expected recovery, and follow-up care with guidance from your healthcare team.'
    }
  ];

  return (
    <div className="bg-white text-[#202B3C]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F1F8FE] via-white to-white py-14 lg:py-20 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#123FA8] text-xs font-bold tracking-wide border border-blue-200">
                <ShieldCheck className="w-4 h-4 text-[#123FA8]" />
                <span>Revive Healthcare Hospital • Sir M.V. Layout, Bengaluru</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123FA8] tracking-tight leading-tight">
                Comfortable Surgical Care & Dedicated Specialist Guidance in <span className="text-[#F20D18]">Bengaluru</span>
              </h1>

              <p className="text-base sm:text-lg text-[#33465b] leading-relaxed font-normal">
                Speak directly to experienced surgeons for Appendix, Piles, Fissure, Fistula, Gallstones, and Hernia. Clear costs, same-day discharge options where suitable, and compassionate hospital guidance.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#3F8C67] shrink-0" />
                  <span className="text-xs font-semibold text-[#202B3C]">Senior Consultant Surgeons</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#3F8C67] shrink-0" />
                  <span className="text-xs font-semibold text-[#202B3C]">Transparent Treatment Costs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#3F8C67] shrink-0" />
                  <span className="text-xs font-semibold text-[#202B3C]">Same-Day Discharge Eligible</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3.5 rounded-xl bg-[#F20D18] text-white font-bold text-sm shadow-md shadow-red-500/20 hover:bg-[#d50c16] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
                
                <button
                  onClick={handleCallClick}
                  className="px-6 py-3.5 rounded-xl border border-[#123FA8] text-[#123FA8] font-bold text-sm bg-white hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F20D18]" />
                  <span>Call {HOSPITAL_INFO.phoneDisplay}</span>
                </button>

                <a
                  href={`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Revive Healthcare, I would like to enquire about surgical treatment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Hospital</span>
                </a>
              </div>
            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
                  <img
                    src="https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=612x612&w=0&k=20&c=ggVR5D9U8IY7irIrgvfqSmlLwA7se4vc2fRSAjV2lSs="
                    alt="Doctors comforting a patient with compassionate healthcare at Revive Healthcare Hospital"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-[#123FA8]">Surgical Care Available 24/7</span>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-[#123FA8]">Have Questions? We Are Here to Help</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Call our hospital team to enquire about your symptoms, treatment options, or consultation appointment.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Bengaluru: {HOSPITAL_INFO.area}</span>
                    <a
                      href={HOSPITAL_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#123FA8] hover:underline flex items-center gap-1"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#F20D18]" />
                      <span>View Map</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6 Dedicated Treatment Pages Grid */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#123FA8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Specialist Surgical Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123FA8] tracking-tight">
              Select Your Condition for Dedicated Information
            </h2>
            <p className="text-sm text-slate-600">
              Clear symptoms, modern minimally invasive treatment options, recovery guidance, and easy consultation booking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONDITIONS.map((cond) => (
              <div
                key={cond.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={cond.image}
                      alt={cond.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#123FA8] p-2 rounded-xl shadow-xs border border-slate-200">
                      {getIcon(cond.iconName)}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-lg font-bold text-[#123FA8]">
                      {cond.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {cond.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={getRoutePath(cond.id)}
                    className="w-full min-h-[44px] py-2.5 rounded-xl bg-[#123FA8] text-white font-bold text-[14px] shadow-xs hover:bg-[#0d2f80] transition-all flex items-center justify-center gap-1.5 active:scale-98"
                  >
                    <span>View {cond.name} Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human-Friendly Catchy Benefit Cards */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#123FA8] bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
              Why Patients Choose Revive
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123FA8]">
              Thoughtful, Reassuring Care at Every Step
            </h2>
            <p className="text-sm text-slate-600">
              We make patients and their families feel informed, comfortable, and confident from their very first enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F1F8FE] flex items-center justify-center">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#123FA8] leading-snug">
                    {b.headline}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Lead Surgeon */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123FA8]">Qualified Specialist Surgeons</h2>
            <p className="mt-2 text-sm text-slate-600">Experienced surgeons committed to patient safety and comfortable recovery in Bengaluru.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {DOCTORS.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6"
              >
                <img
                  src={doc.image || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}
                  alt={doc.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#123FA8] shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <h3 className="font-bold text-[#123FA8] text-xl">{doc.name}</h3>
                  <p className="text-xs text-[#F20D18] font-bold">{doc.qualifications}</p>
                  <p className="text-sm text-[#202B3C] font-semibold">{doc.speciality}</p>
                  <p className="text-xs text-slate-500">{doc.experience}</p>
                  <div className="pt-3 flex flex-wrap gap-2.5 justify-center sm:justify-start">
                    <button
                      onClick={() => onOpenBooking()}
                      className="min-h-[44px] px-4 py-2.5 rounded-lg bg-[#123FA8] text-white text-[14px] font-bold hover:bg-[#0d2f80] transition-colors active:scale-98"
                    >
                      Book Consultation with Surgeon
                    </button>
                    <button
                      onClick={handleCallClick}
                      className="min-h-[44px] px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-[14px] font-bold hover:bg-slate-50 transition-colors active:scale-98"
                    >
                      Call Hospital Desk
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Location & Emergency Care Hub */}
      <section className="py-14 bg-[#123FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-[#F20D18]" />
                <span>Visit Us in Bengaluru</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">{HOSPITAL_INFO.name}</h3>
              <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
                {HOSPITAL_INFO.address}. Open 24/7 for surgical evaluations and emergency triage. Friendly reception desk and fast consultation slots.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
              <button
                onClick={() => onOpenBooking()}
                className="w-full min-h-[48px] py-3 px-6 rounded-xl bg-[#F20D18] text-white font-bold text-[15px] shadow-md hover:bg-[#d50c16] transition-all text-center flex items-center justify-center active:scale-98"
              >
                Book Appointment Online
              </button>
              <button
                onClick={handleCallClick}
                className="w-full min-h-[48px] py-3 px-6 rounded-xl bg-white text-[#123FA8] font-bold text-[15px] hover:bg-blue-50 transition-all text-center flex items-center justify-center active:scale-98"
              >
                Call: {HOSPITAL_INFO.phoneDisplay}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
