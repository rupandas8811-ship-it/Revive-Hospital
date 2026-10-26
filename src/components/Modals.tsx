import React, { useEffect } from 'react';
import { AppointmentFormData } from '../types';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { CheckCircle2, X, Phone, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';

interface SuccessModalProps {
  data: AppointmentFormData | null;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (data) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 id="success-modal-title" className="text-xl font-bold text-slate-900">
            Consultation Request Received
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            Thank you, <strong>{data.patientName}</strong>. Our hospital care coordinator will contact you at <strong>{data.mobileNumber}</strong> regarding your inquiry for <strong>{data.condition}</strong>.
          </p>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Revive Healthcare Hospital</span>
            </div>
            <p>Sir M. Vishweshwaraiah Layout 5th Block, Bengaluru</p>
            <p>Our desk will reach out via {data.preferredContactMethod || 'phone'}.</p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex-1 min-h-[44px] py-2.5 px-4 rounded-xl bg-blue-50 text-[#123FA8] text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors active:scale-98"
            >
              <Phone className="w-4 h-4 text-[#F20D18]" />
              <span>Call: {HOSPITAL_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={onClose}
              className="min-h-[44px] py-2.5 px-5 rounded-xl bg-[#123FA8] text-white text-[14px] font-bold hover:bg-[#0d2f80] transition-colors active:scale-98"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <h3 id="privacy-modal-title" className="text-xl font-bold text-slate-900">
            Patient Privacy &amp; Data Notice
          </h3>

          <div className="text-xs text-slate-600 leading-relaxed space-y-3">
            <p>
              <strong>Revive Healthcare Hospital</strong> is committed to protecting patient confidentiality and data privacy in accordance with Indian healthcare privacy standards and the Digital Personal Data Protection Act.
            </p>
            <h4 className="font-bold text-slate-800 text-sm pt-2">How Information is Used:</h4>
            <p>
              Details submitted through our website appointment and inquiry forms (name, mobile number, condition, preferred date) are used strictly by our hospital coordination staff to facilitate your consultation and provide treatment guidance.
            </p>
            <h4 className="font-bold text-slate-800 text-sm pt-2">No Third-Party Sharing:</h4>
            <p>
              We do not sell, rent, or distribute personal health inquiries or contact details to third-party commercial marketing entities.
            </p>
            <h4 className="font-bold text-slate-800 text-sm pt-2">Medical Disclaimer:</h4>
            <p>
              Content published across this website is intended solely for educational orientation and does not substitute for clinical examination or diagnosis by a qualified medical practitioner. In emergency conditions, call 108 immediately or visit our 24/7 hospital desk.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 text-right">
            <button
              onClick={onClose}
              className="min-h-[44px] py-2.5 px-6 rounded-lg bg-[#123FA8] text-white text-[14px] font-bold hover:bg-[#0d2f80] transition-colors active:scale-98"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
