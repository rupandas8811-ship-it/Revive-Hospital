import React, { useState } from 'react';
import { Condition, AppointmentFormData } from '../types';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Phone, Calendar, CheckCircle2, ShieldCheck, Lock, ArrowRight, Activity, Stethoscope, HelpCircle, ChevronDown, MapPin, Globe, Clock, User, AlertCircle, MessageSquare } from 'lucide-react';

interface ConditionLandingPageProps {
  condition: Condition;
  onOpenBooking: () => void;
  onSuccess: (data: AppointmentFormData) => void;
}

export const ConditionLandingPage: React.FC<ConditionLandingPageProps> = ({ condition, onSuccess }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    mobileNumber: '',
    condition: condition.name,
    preferredDate: '',
    preferredContactMethod: 'Call',
    notes: ''
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.patientName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: `AW-CONVERSION_ID/${condition.id}_enquiry`,
          value: 1.0,
          currency: 'INR'
        });
      }
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', { content_name: condition.name });
      }

      onSuccess(formData);
    }, 800);
  };

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_to_call', { event_category: 'Engagement', event_label: HOSPITAL_INFO.phone });
    }
    window.location.href = `tel:${HOSPITAL_INFO.phone.replace(/\s+/g, '')}`;
  };

  const handleWhatsAppChat = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', { event_category: 'Engagement' });
    }
    const message = encodeURIComponent(
      `Hello Revive Healthcare Hospital,\nI would like to inquire about consultation and treatment for ${condition.name}.`
    );
    window.open(`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  const scrollToForm = () => {
    const el = document.getElementById('consultation-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Condition-specific FAQs
  const getConditionFaqs = (id: string) => {
    switch (id) {
      case 'piles':
        return [
          { q: "What are the common early symptoms of piles?", response: "Piles (haemorrhoids) often present with painless bright red bleeding during bowel movements, itching or irritation in the anal region, and swelling or lumps near the anus." },
          { q: "Do all piles patients require surgery?", response: "No. Early-stage piles can often be managed effectively with high-fiber diets, hydration, medications, and office-based non-surgical procedures. Surgery is reserved for advanced or symptomatic cases." },
          { q: "How long is recovery after piles treatment?", response: "Recovery depends on the severity and treatment method chosen. Modern minimally invasive techniques generally offer faster recovery and minimal discomfort." }
        ];
      case 'fissure':
        return [
          { q: "What is an anal fissure?", response: "An anal fissure is a small tear in the lining of the anal canal, typically caused by passing hard or large stools, resulting in sharp pain and bleeding." },
          { q: "How is an anal fissure evaluated?", response: "Our specialist conducts a gentle physical and clinical examination to determine the severity and recommend appropriate medical or lifestyle management." },
          { q: "Can fissures heal without surgery?", response: "Yes, many acute fissures heal with conservative care including fiber supplements, sitz baths, and prescribed topical medications." }
        ];
      case 'fistula':
        return [
          { q: "What causes an anal fistula?", response: "An anal fistula is an abnormal tunnel connecting an infected anal gland to the skin surface, frequently following an unresolved abscess." },
          { q: "Why is surgical consultation necessary for a fistula?", response: "Fistulas rarely heal on their own. Expert surgical assessment is essential to map the tract and preserve sphincter function." },
          { q: "What advanced surgical options are available?", response: "Depending on complexity, options range from fistulotomy to sphincter-sparing techniques such as laser ablation and LIFT." }
        ];
      case 'gallstones':
        return [
          { q: "What triggers gallstone pain?", response: "Gallstones can block bile ducts, triggering sudden upper right abdominal pain (biliary colic), especially after fatty meals." },
          { q: "Do asymptomatic gallstones need surgery?", response: "Not necessarily. Incidental gallstones without symptoms are often monitored, whereas symptomatic gallstones typically warrant surgical evaluation." },
          { q: "What is the standard treatment for symptomatic gallstones?", response: "Laparoscopic cholecystectomy (minimally invasive gallbladder removal) is the gold standard for symptomatic gallstones." }
        ];
      case 'hernia':
        return [
          { q: "What are the warning signs of a hernia?", response: "A visible bulge or lump in the abdomen or groin that aches or becomes more prominent when lifting, coughing, or standing." },
          { q: "Can a hernia heal on its own?", response: "No, hernias do not heal on their own and require professional clinical evaluation to prevent potential complications like incarceration." },
          { q: "How is a hernia repaired?", response: "Modern hernia repair involves minimally invasive laparoscopic surgery with mesh reinforcement for durable support and quick recovery." }
        ];
      default:
        return [
          { q: "When should I consult a specialist?", response: "Consult a specialist whenever you experience persistent symptoms or discomfort affecting your daily quality of life." },
          { q: "How do I book an appointment?", response: "You can submit our online consultation form, call our helpline, or connect via WhatsApp instantly." }
        ];
    }
  };

  const conditionFaqs = getConditionFaqs(condition.id);

  return (
    <div className="bg-white text-[#202B3C]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F1F8FE] py-12 lg:py-20 border-b border-blue-100">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-red-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#123FA8] text-xs sm:text-sm font-bold tracking-wide border border-blue-200">
                <ShieldCheck className="w-4 h-4 text-[#123FA8]" />
                <span>Revive Healthcare Hospital • Bengaluru</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123FA8] tracking-tight leading-tight">
                Specialised Care & Treatment for <span className="text-[#F20D18]">{condition.name}</span>
              </h1>

              <p className="text-base sm:text-lg text-[#202B3C] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                {condition.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#202B3C]">
                  <CheckCircle2 className="w-5 h-5 text-[#168FE5] shrink-0" />
                  <span>Experienced Specialist Doctors</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#202B3C]">
                  <CheckCircle2 className="w-5 h-5 text-[#168FE5] shrink-0" />
                  <span>Advanced Diagnostic Facilities</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#202B3C]">
                  <CheckCircle2 className="w-5 h-5 text-[#168FE5] shrink-0" />
                  <span>Minimally Invasive Options</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#202B3C]">
                  <CheckCircle2 className="w-5 h-5 text-[#168FE5] shrink-0" />
                  <span>Transparent & Ethical Care</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F20D18] text-white font-bold text-base shadow-lg shadow-[#F20D18]/30 hover:bg-red-700 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation for {condition.name}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                
                <button
                  onClick={handleCallClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-[#123FA8] text-[#123FA8] font-bold text-base bg-white hover:bg-blue-50 transition-all"
                >
                  <Phone className="w-5 h-5 text-[#F20D18]" />
                  <span>Call Hospital</span>
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-[#123FA8] pt-2">
                <Lock className="w-4 h-4 text-[#168FE5]" />
                <span>Your enquiry is handled confidentially.</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-200">
                <img
                  src={condition.image}
                  alt={condition.name}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123FA8]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                      Revive Healthcare Hospital
                    </span>
                    <h3 className="text-xl font-extrabold">
                      {condition.name} Specialist Care
                    </h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Symptoms & Treatment Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F8FE] text-[#123FA8] text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
              Clinical Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123FA8] tracking-tight">
              Understanding {condition.name}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#202B3C] font-medium">
              Recognizing symptoms early ensures timely evaluation and access to appropriate treatment options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Symptoms Card */}
            <div className="bg-[#F1F8FE] p-8 sm:p-10 rounded-3xl border border-blue-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#F20D18] flex items-center justify-center shadow-xs border border-blue-200">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#123FA8]">
                  Common Symptoms to Watch For
                </h3>
              </div>
              <ul className="space-y-4">
                {condition.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#202B3C] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#F20D18] mt-2 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-blue-200 text-xs text-[#202B3C]/80 font-medium">
                * If you experience any of these symptoms persistently, schedule an evaluation with our specialist.
              </div>
            </div>

            {/* Treatments Card */}
            <div className="bg-[#F1F8FE] p-8 sm:p-10 rounded-3xl border border-blue-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#123FA8] flex items-center justify-center shadow-xs border border-blue-200">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#123FA8]">
                  Evaluation & Treatment Options
                </h3>
              </div>
              <ul className="space-y-4">
                {condition.treatments.map((treatment, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#202B3C] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#168FE5] mt-2 shrink-0" />
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-blue-200 text-xs text-[#202B3C]/80 font-medium">
                * Treatment recommendations are personalized following thorough clinical assessment.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Revive */}
      <section className="py-16 bg-[#F1F8FE] border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#123FA8]">
              Why Choose Revive Healthcare Hospital for {condition.name}?
            </h2>
            <p className="mt-3 text-base text-[#202B3C] font-medium">
              Located in Bengaluru, our hospital offers expert medical evaluations, advanced diagnostics, and compassionate support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xs">
              <h4 className="font-bold text-[#123FA8] text-base mb-2">Experienced Specialists</h4>
              <p className="text-sm text-[#202B3C] font-medium">Seasoned general, laparoscopic, and proctology specialists dedicated to accurate diagnosis.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xs">
              <h4 className="font-bold text-[#123FA8] text-base mb-2">Advanced Diagnostics</h4>
              <p className="text-sm text-[#202B3C] font-medium">Modern imaging, laboratory, and endoscopic diagnostic tools for precise clinical evaluation.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xs">
              <h4 className="font-bold text-[#123FA8] text-base mb-2">Patient-Focused Care</h4>
              <p className="text-sm text-[#202B3C] font-medium">Transparent counseling, personalized treatment plans, and supportive post-operative care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Condition FAQs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#123FA8]">
              Frequently Asked Questions About {condition.name}
            </h2>
            <p className="mt-3 text-base text-[#202B3C] font-medium">
              Clear, medically responsible answers for patients in Bengaluru.
            </p>
          </div>

          <div className="space-y-4">
            {conditionFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="bg-[#F1F8FE] border border-blue-200 rounded-2xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#123FA8] text-base sm:text-lg hover:bg-blue-100/60 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#F20D18] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#123FA8] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#F20D18]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-[#202B3C] font-medium text-sm sm:text-base leading-relaxed border-t border-blue-200/60 bg-white">
                      {faq.response}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Appointment Booking Form */}
      <section id="consultation-form" className="py-16 lg:py-24 bg-[#F1F8FE] border-t border-blue-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-blue-200 overflow-hidden">
            <div className="bg-[#123FA8] text-white p-8 text-center relative">
              <h3 className="text-2xl font-extrabold">Book a Consultation for {condition.name}</h3>
              <p className="text-blue-100 text-sm mt-2 font-medium">Fill in your details to schedule an appointment at Revive Healthcare Hospital.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-[#F20D18] text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#123FA8] uppercase tracking-wider mb-2">
                    Patient Full Name <span className="text-[#F20D18]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-200 text-[#202B3C] font-medium bg-[#F1F8FE] focus:outline-hidden focus:ring-2 focus:ring-[#123FA8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123FA8] uppercase tracking-wider mb-2">
                    Mobile Number (10 Digits) <span className="text-[#F20D18]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="9876543210"
                      maxLength={10}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-200 text-[#202B3C] font-medium bg-[#F1F8FE] focus:outline-hidden focus:ring-2 focus:ring-[#123FA8]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123FA8] uppercase tracking-wider mb-2">
                  Selected Condition
                </label>
                <input
                  type="text"
                  value={condition.name}
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-blue-200 text-[#123FA8] font-bold bg-blue-50 cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#123FA8] uppercase tracking-wider mb-2">
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 text-[#202B3C] font-medium bg-[#F1F8FE] focus:outline-hidden focus:ring-2 focus:ring-[#123FA8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123FA8] uppercase tracking-wider mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-blue-200 text-[#202B3C] font-semibold bg-[#F1F8FE]"
                  >
                    <option value="Call">Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="SMS">SMS</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 rounded-xl bg-[#F20D18] text-white font-bold text-base shadow-lg shadow-[#F20D18]/25 hover:bg-red-750 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Submitting...' : <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Request an Appointment</span>
                  </>}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="sm:w-auto px-6 py-4 rounded-xl bg-emerald-600 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat via WhatsApp</span>
                </button>
              </div>

              <p className="text-xs text-[#202B3C]/70 text-center font-medium">
                By submitting this form, you consent to being contacted by Revive Healthcare Hospital. Data is kept strictly confidential.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Hospital Location Summary */}
      <section className="py-16 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-[#123FA8]">Revive Healthcare Hospital, Bengaluru</h3>
          <p className="text-sm font-semibold text-[#202B3C]">{HOSPITAL_INFO.address}</p>
          <div className="flex justify-center gap-4 pt-2">
            <button onClick={handleCallClick} className="px-6 py-3 rounded-xl bg-[#123FA8] text-white font-bold text-sm shadow-md hover:bg-blue-900 transition-all">
              Call: {HOSPITAL_INFO.phoneDisplay}
            </button>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(HOSPITAL_INFO.address)}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-[#F1F8FE] text-[#123FA8] font-bold text-sm border border-blue-200 hover:bg-blue-100 transition-all">
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
