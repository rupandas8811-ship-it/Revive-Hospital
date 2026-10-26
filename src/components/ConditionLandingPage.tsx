import React, { useState } from 'react';
import { Condition, AppointmentFormData } from '../types';
import { HOSPITAL_INFO, DOCTORS } from '../data/hospitalData';
import { MedicalAnatomyIllustration } from './MedicalAnatomyIllustration';
import {
  Phone,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Lock,
  ArrowRight,
  Activity,
  Stethoscope,
  HelpCircle,
  ChevronDown,
  MapPin,
  Clock,
  User,
  AlertCircle,
  MessageSquare,
  Award
} from 'lucide-react';

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
  const [submissionStatus, setSubmissionStatus] = useState<string>('');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.patientName.trim() || formData.patientName.trim().length < 2) {
      setError('Please enter your full name (at least 2 characters).');
      return;
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please enter a valid 10-digit Indian mobile number (starting with 6, 7, 8, or 9).');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('Preparing your consultation details...');

    // Genuine delivery handoff to WhatsApp with fully encoded message
    const messageLines = [
      `*Consultation Request — ${HOSPITAL_INFO.name}*`,
      `Patient Name: ${formData.patientName.trim()}`,
      `Mobile: ${cleanPhone}`,
      `Condition: ${condition.name}`,
      `Preferred Contact: ${formData.preferredContactMethod || 'Call'}`,
    ];

    if (formData.preferredDate) {
      messageLines.push(`Preferred Date: ${formData.preferredDate}`);
    }

    messageLines.push('', 'Please connect with me regarding consultation and treatment options.');

    const encodedText = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${encodedText}`;

    // Safely fire analytics if gtag exists with valid configuration
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'Consultation',
          event_label: condition.name
        });
      } catch (err) {
        // Analytics failure should never block patient experience
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('Redirecting to WhatsApp to complete your enquiry...');
      
      try {
        const win = window.open(whatsappUrl, '_blank');
        if (!win || win.closed || typeof win.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      } catch (err) {
        window.location.href = whatsappUrl;
      }

      onSuccess({
        ...formData,
        mobileNumber: cleanPhone
      });
    }, 400);
  };

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'contact_click', {
          contact_method: 'phone',
          condition: condition.id
        });
      } catch (e) {}
    }
    window.location.href = `tel:${HOSPITAL_INFO.phone}`;
  };

  const handleWhatsAppChat = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'contact_click', {
          contact_method: 'whatsapp',
          condition: condition.id
        });
      } catch (e) {}
    }
    const message = encodeURIComponent(
      `Hello Revive Healthcare Hospital, I would like to inquire about consultation and treatment for ${condition.name}.`
    );
    window.open(`https://wa.me/${HOSPITAL_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  const scrollToForm = () => {
    const el = document.getElementById('consultation-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getConditionFaqs = (id: string) => {
    switch (id) {
      case 'piles':
        return [
          { q: "What are the common early symptoms of piles?", response: "Piles (haemorrhoids) often present with painless bright red bleeding during bowel movements, perianal irritation, and swelling near the anal verge." },
          { q: "Do all piles patients require surgery?", response: "No. Early-stage piles are often treated effectively with medical management, high-fiber dietary counseling, and warm sitz baths. Laser and minimally invasive procedures are considered for persistent or advanced grades." },
          { q: "Is same-day discharge possible after piles laser treatment?", response: "Eligible patients undergoing modern laser haemorrhoidoplasty frequently qualify for same-day daycare discharge after specialist review." }
        ];
      case 'fissure':
        return [
          { q: "What is an anal fissure and what causes it?", response: "An anal fissure is a small tear in the lining of the anal canal, commonly triggered by passing hard stools. The intense pain is caused by internal sphincter spasms that restrict blood flow." },
          { q: "How is an anal fissure evaluated?", response: "Our specialist conducts a gentle, confidential clinical examination to determine whether the tear is acute or chronic and guide appropriate care." },
          { q: "Can anal fissures heal without surgery?", response: "Yes. Many acute fissures heal with conservative medical management, prescribed sphincter-relaxing ointments, stool softeners, and adequate hydration." }
        ];
      case 'fistula':
        return [
          { q: "What causes an anal fistula?", response: "An anal fistula is an abnormal tunnel originating from an infected anal crypt gland traversing outward to the perianal skin, often developing after a perianal abscess." },
          { q: "Why is surgical consultation necessary for a fistula?", response: "Fistulas do not resolve on their own with medicines alone. Expert surgical assessment is essential to map the tract and preserve sphincter muscle control." },
          { q: "What sphincter-preserving surgical options are available?", response: "We offer advanced sphincter-sparing procedures including FiLaC (Fistula Laser Closure) and LIFT to seal the tract while protecting continence." }
        ];
      case 'gallstones':
        return [
          { q: "What triggers gallstone pain?", response: "Gallstones can temporarily obstruct the cystic duct, causing intense upper right abdominal discomfort (biliary colic), especially following heavy or fatty meals." },
          { q: "Do all gallstones require gallbladder surgery?", response: "Asymptomatic gallstones discovered incidentally often only need observation. Symptomatic gallstones or repeated colic episodes usually warrant surgical consultation." },
          { q: "How is laparoscopic gallbladder surgery performed?", response: "Laparoscopic cholecystectomy is a minimally invasive procedure using 3 to 4 tiny keyhole incisions, allowing safe removal of the gallbladder with minimal post-op discomfort." }
        ];
      case 'hernia':
        return [
          { q: "Can a hernia heal on its own with exercise or belts?", response: "No. A hernia is a physical gap or weakness in the abdominal wall muscle that cannot heal on its own. Supportive belts may temporarily relieve heaviness but do not repair the defect." },
          { q: "Why is hernia repair recommended?", response: "Timely hernia repair prevents severe complications such as obstruction or strangulation, where intestinal tissue gets trapped and loses blood supply." },
          { q: "What is tension-free mesh hernia repair?", response: "Modern repair uses a biocompatible 3D prosthetic mesh that reinforces the muscular defect without pulling native tissues tightly, dramatically reducing recurrence risk." }
        ];
      default:
        return [
          { q: "When should I consult a specialist doctor?", response: "You should schedule a medical consultation if you experience persistent symptoms, localized pain, or discomfort that affects your daily routine." },
          { q: "How quickly can I consult a doctor at Revive Hospital?", response: "Our consultation desk is accessible every day. You can book online, message via WhatsApp, or call directly on 089510 16007." }
        ];
    }
  };

  const conditionFaqs = getConditionFaqs(condition.id);
  const surgeon = DOCTORS[0];

  return (
    <div className="bg-white text-slate-800">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#123FA8] tracking-wider uppercase">
                <span>Revive Healthcare Hospital</span>
                <span aria-hidden="true">·</span>
                <span>Bengaluru</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123FA8] tracking-tight leading-tight">
                {condition.name} Treatment &amp; Consultation in <span className="text-[#F20D18]">Bengaluru</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {condition.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#168FE5] shrink-0" />
                  <span>Experienced Surgical Care</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#168FE5] shrink-0" />
                  <span>On-Site Diagnostic Facilities</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#168FE5] shrink-0" />
                  <span>Minimally Invasive Options</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#168FE5] shrink-0" />
                  <span>Clear Information About Treatment Costs</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3 w-full">
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-xl bg-[#F20D18] text-white font-bold text-[14.5px] shadow-sm hover:bg-red-700 transition-colors active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                
                <button
                  onClick={handleCallClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-xl border border-[#123FA8] text-[#123FA8] font-bold text-[14.5px] bg-white hover:bg-blue-50 transition-colors active:scale-98"
                >
                  <Phone className="w-4 h-4 text-[#F20D18]" />
                  <span>Call: {HOSPITAL_INFO.phoneDisplay}</span>
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Confidential medical consultation in Sir M. Vishweshwaraiah Layout.</span>
              </div>
            </div>

            {/* Visual Card - Authentic Anatomical Illustration */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <MedicalAnatomyIllustration conditionId={condition.id} />
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span>Revive Healthcare Hospital</span>
                    <span>Bengaluru Surgical Desk</span>
                  </div>
                  <h3 className="text-base font-bold text-[#123FA8]">
                    Clinical Diagnosis &amp; Evaluation for {condition.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Consult qualified surgeons to discuss clinical diagnosis, daycare eligibility, and treatment planning.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Symptoms & Treatment Details */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123FA8] tracking-tight">
              Understanding {condition.name} Symptoms &amp; Options
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Accurate symptom identification helps in timely consultation and clinical recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Symptoms Card */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#F20D18] flex items-center justify-center shadow-xs border border-slate-200">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123FA8]">
                    Common Symptoms to Watch For
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {condition.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F20D18] mt-2 shrink-0" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="pt-4 mt-6 border-t border-slate-200 text-xs text-slate-500">
                Do not ignore ongoing symptoms. Prompt assessment prevents worsening conditions.
              </p>
            </div>

            {/* Treatments Card */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#123FA8] flex items-center justify-center shadow-xs border border-slate-200">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123FA8]">
                    Available Treatment Approaches
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {condition.treatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#168FE5] mt-2 shrink-0" />
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="pt-4 mt-6 border-t border-slate-200 text-xs text-slate-500">
                Treatment is tailored to each patient following an in-person clinical assessment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200 text-[#123FA8]">
              <Award className="w-12 h-12 text-[#123FA8]" />
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="inline-block text-[11px] font-bold text-[#168FE5] uppercase tracking-wider">
                Consultant Surgeon
              </div>
              <h3 className="text-xl font-bold text-slate-900">{surgeon.name}</h3>
              <p className="text-xs font-semibold text-slate-600">{surgeon.qualifications} · {surgeon.regNumber}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{surgeon.speciality} · {surgeon.experience}</p>
            </div>
            <button
              onClick={scrollToForm}
              className="px-5 py-2.5 rounded-xl bg-[#123FA8] text-white text-xs font-bold hover:bg-[#0d2f80] transition-colors whitespace-nowrap"
            >
              Consult Surgeon
            </button>
          </div>
        </div>
      </section>

      {/* Condition FAQs */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-extrabold text-[#123FA8]">
              Frequently Asked Questions About {condition.name}
            </h2>
            <p className="mt-2 text-xs text-slate-500">
              Clear answers from our clinical team at Revive Healthcare Hospital.
            </p>
          </div>

          <div className="space-y-3">
            {conditionFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[#123FA8] text-sm hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#F20D18]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
      <section id="consultation-form" className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-[#123FA8] text-white p-6 text-center">
              <h3 className="text-xl font-bold">Enquire About {condition.name} Treatment</h3>
              <p className="text-blue-100 text-xs mt-1">Submit your details to connect directly with our care coordinator.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-[#F20D18] text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {submissionStatus && (
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 text-[#123FA8] text-xs font-semibold">
                  {submissionStatus}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-patient-name" className="block text-[14px] font-bold text-slate-800 mb-1.5">
                    Patient Name <span className="text-[#F20D18]">*</span>
                  </label>
                  <input
                    id="form-patient-name"
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-base focus:border-[#123FA8] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="form-mobile-number" className="block text-[14px] font-bold text-slate-800 mb-1.5">
                    Mobile Number <span className="text-[#F20D18]">*</span>
                  </label>
                  <input
                    id="form-mobile-number"
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    maxLength={10}
                    required
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-base focus:border-[#123FA8] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-bold text-slate-800 mb-1.5">
                  Selected Condition
                </label>
                <input
                  type="text"
                  value={condition.name}
                  disabled
                  className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-slate-200 text-[#123FA8] font-bold bg-slate-50 cursor-not-allowed text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="form-preferred-date" className="block text-[14px] font-bold text-slate-800 mb-1.5">
                    Preferred Date (Optional)
                  </label>
                  <input
                    id="form-preferred-date"
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-base focus:border-[#123FA8] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="form-contact-method" className="block text-[14px] font-bold text-slate-800 mb-1.5">
                    Preferred Contact Method
                  </label>
                  <select
                    id="form-contact-method"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-slate-300 text-base bg-white"
                  >
                    <option value="Call">Phone Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 min-h-[48px] py-3 px-6 rounded-xl bg-[#F20D18] text-white font-bold text-[15px] shadow-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2 active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isSubmitting ? 'Connecting...' : 'Request Consultation'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="sm:w-auto min-h-[48px] py-3 px-5 rounded-xl border border-emerald-600 bg-emerald-50 text-emerald-800 font-bold text-[15px] hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2 active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Your inquiry is strictly confidential. Handled directly by Revive Healthcare Hospital.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Hospital Location Summary */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#123FA8]">
            <MapPin className="w-4 h-4 text-[#F20D18]" />
            <span>Hospital Location</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Revive Healthcare Hospital</h3>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">{HOSPITAL_INFO.address}</p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={handleCallClick}
              className="px-5 py-2.5 rounded-lg bg-[#123FA8] text-white text-xs font-bold hover:bg-[#0d2f80] transition-colors"
            >
              Call: {HOSPITAL_INFO.phoneDisplay}
            </button>
            <a
              href={HOSPITAL_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
