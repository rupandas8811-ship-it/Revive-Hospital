import React from 'react';
import { Link } from 'react-router-dom';
import { HOSPITAL_INFO, CONDITIONS } from '../data/hospitalData';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-10">
          
          {/* Col 1: Hospital Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pinimg.com/736x/57/84/1d/57841dbf83e9a0f6991435f5d6551023.jpg"
                alt="Revive Healthcare Hospital"
                className="w-10 h-10 aspect-square rounded-full object-cover shadow-sm bg-white p-0.5 shrink-0"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">
                  Revive
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
                  Healthcare Hospital
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-xs text-slate-400 leading-relaxed max-w-prose">
              Specialist medical and surgical care center in Sir M. Vishweshwaraiah Layout, Bengaluru. Focused on patient comfort, advanced diagnostics, and minimally invasive procedures.
            </p>

            <div className="pt-2 text-sm sm:text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Hospital Facilities</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>24/7 Emergency Evaluation Desk</span>
              </div>
            </div>
          </div>

          {/* Col 2: Treatment Pages */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Specialized Care
            </h4>
            <ul className="space-y-1 text-sm sm:text-xs">
              {CONDITIONS.map((cond) => (
                <li key={cond.id}>
                  <Link
                    to={`/${cond.id}-treatment/`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center min-h-[38px] py-1 border-b border-slate-800/40 md:border-b-0"
                  >
                    {cond.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Contact Hospital
            </h4>
            
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="flex items-center gap-2.5 min-h-[44px] text-sm sm:text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F20D18] shrink-0" />
              <span>
                <strong>Helpline:</strong> {HOSPITAL_INFO.phoneDisplay}
              </span>
            </a>

            <a
              href={`mailto:${HOSPITAL_INFO.email}`}
              className="flex items-center gap-2.5 min-h-[44px] text-sm sm:text-xs text-slate-300 hover:text-white transition-colors break-all sm:break-normal"
            >
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{HOSPITAL_INFO.email}</span>
            </a>

            <div className="flex items-start gap-2.5 text-sm sm:text-xs text-slate-400 py-1">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{HOSPITAL_INFO.address}</span>
            </div>

            <div className="pt-1">
              <a
                href={HOSPITAL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[40px] text-sm sm:text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium"
              >
                <span>View Hospital on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          {/* Col 4: Ethical & Legal Notice */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Patient Care Notice
            </h4>
            <p className="text-sm sm:text-xs text-slate-400 leading-relaxed">
              Medical information provided on this website is for educational purposes and does not replace in-person clinical diagnosis or medical assessment by a qualified doctor.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenPrivacy}
                className="text-left min-h-[38px] flex items-center text-sm sm:text-xs text-sky-400 hover:underline"
              >
                Patient Privacy &amp; Data Notice
              </button>
              <a
                href={HOSPITAL_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[38px] text-sm sm:text-xs text-slate-400 hover:text-white transition-colors"
              >
                <span>Official Hospital Portal</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Revive Healthcare Hospital. All rights reserved.</p>
          <p>Bengaluru, Karnataka, India • Emergency Ambulance: 108</p>
        </div>
      </div>
    </footer>
  );
};
