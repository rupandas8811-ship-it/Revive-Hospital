import React from 'react';

interface MedicalAnatomyIllustrationProps {
  conditionId: string;
}

export const MedicalAnatomyIllustration: React.FC<MedicalAnatomyIllustrationProps> = ({ conditionId }) => {
  switch (conditionId) {
    case 'piles':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Coronal Anorectal Anatomy
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Textbook Reference</span>
          </div>
          <div className="p-2 sm:p-3">
            <svg viewBox="0 0 680 430" className="w-full h-auto max-h-[380px]" role="img" aria-label="Coronal cross-section of anorectal canal showing internal and external hemorrhoids relative to dentate line">
              <defs>
                <linearGradient id="rectumWallGradReact" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#fed7aa"/>
                  <stop offset="100%" stop-color="#fdba74"/>
                </linearGradient>
                <linearGradient id="sphincterGradReact" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#fca5a5"/>
                  <stop offset="100%" stop-color="#f87171"/>
                </linearGradient>
              </defs>
              <rect width="680" height="430" fill="#ffffff" rx="8"/>
              <path d="M190 30 C190 80 205 120 205 170 C205 210 200 240 215 280 C230 320 245 350 250 395" fill="none" stroke="#cbd5e1" stroke-width="26" opacity="0.4"/>
              <path d="M490 30 C490 80 475 120 475 170 C475 210 480 240 465 280 C450 320 435 350 430 395" fill="none" stroke="#cbd5e1" stroke-width="26" opacity="0.4"/>
              <path d="M195 30 C195 90 220 130 220 180 C220 225 215 255 230 295 C242 328 255 355 260 395 L420 395 C425 355 438 328 450 295 C465 255 460 225 460 180 C460 130 485 90 485 30 Z" fill="#fff7ed"/>
              <path d="M180 30 C180 90 208 135 208 185 C208 230 202 260 218 300 C232 335 245 365 250 400" fill="none" stroke="url(#rectumWallGradReact)" stroke-width="14"/>
              <path d="M500 30 C500 90 472 135 472 185 C472 230 478 260 462 300 C448 335 435 365 430 400" fill="none" stroke="url(#rectumWallGradReact)" stroke-width="14"/>
              <path d="M162 195 C162 250 178 310 190 365 L218 360 C206 310 194 250 194 195 Z" fill="url(#sphincterGradReact)" stroke="#ef4444" stroke-width="1"/>
              <path d="M518 195 C518 250 502 310 490 365 L462 360 C474 310 486 250 486 195 Z" fill="url(#sphincterGradReact)" stroke="#ef4444" stroke-width="1"/>
              <line x1="225" y1="230" x2="455" y2="230" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6 4"/>
              <g transform="translate(242, 178)">
                <path d="M0 0 C12 -18 35 -14 38 6 C40 24 16 32 0 20 Z" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.5"/>
                <ellipse cx="18" cy="4" rx="8" ry="4" fill="#ef4444" opacity="0.6"/>
              </g>
              <g transform="translate(245, 290)">
                <circle cx="0" cy="0" r="15" fill="#b91c1c" stroke="#7f1d1d" stroke-width="1.5"/>
                <circle cx="2" cy="-2" r="5" fill="#f87171" opacity="0.7"/>
              </g>
              <line x1="85" y1="130" x2="210" y2="130" stroke="#475569" stroke-width="1.2"/>
              <circle cx="210" cy="130" r="2.5" fill="#475569"/>
              <rect x="15" y="116" width="100" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
              <text x="65" y="133" font-size="10.5" font-weight="700" fill="#0f172a" text-anchor="middle">Rectal Mucosa</text>
              <line x1="110" y1="182" x2="242" y2="182" stroke="#dc2626" stroke-width="1.2"/>
              <circle cx="242" cy="182" r="2.5" fill="#dc2626"/>
              <rect x="15" y="168" width="128" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="79" y="181" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Internal Piles</text>
              <text x="79" y="192" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Above Dentate Line</text>
              <line x1="110" y1="230" x2="225" y2="230" stroke="#0284c7" stroke-width="1.2"/>
              <circle cx="225" cy="230" r="2.5" fill="#0284c7"/>
              <rect x="15" y="217" width="128" height="26" rx="4" fill="#f0f9ff" stroke="#bae6fd"/>
              <text x="79" y="233" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">Dentate Line (Pectinate)</text>
              <line x1="110" y1="290" x2="245" y2="290" stroke="#dc2626" stroke-width="1.2"/>
              <circle cx="245" cy="290" r="2.5" fill="#dc2626"/>
              <rect x="15" y="276" width="128" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="79" y="289" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">External Piles</text>
              <text x="79" y="300" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Below Dentate Line</text>
              <line x1="570" y1="250" x2="495" y2="250" stroke="#475569" stroke-width="1.2"/>
              <circle cx="495" cy="250" r="2.5" fill="#475569"/>
              <rect x="535" y="237" width="130" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
              <text x="600" y="253" font-size="10" font-weight="600" fill="#0f172a" text-anchor="middle">Internal Anal Sphincter</text>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            Coronal section of anorectal canal indicating internal and external hemorrhoids relative to the dentate line.
          </p>
        </div>
      );

    case 'fissure':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Anal Fissure Morphology
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Textbook Reference</span>
          </div>
          <div className="p-2 sm:p-3">
            <svg viewBox="0 0 680 430" className="w-full h-auto max-h-[380px]" role="img" aria-label="Anal fissure pathology diagram showing mucosal tear and sphincter spasm">
              <rect width="680" height="430" fill="#ffffff" rx="8"/>
              <ellipse cx="340" cy="215" rx="150" ry="170" fill="#fed7aa" stroke="#fdba74" stroke-width="4"/>
              <ellipse cx="340" cy="215" rx="90" ry="110" fill="#fff7ed" stroke="#cbd5e1" stroke-width="2"/>
              <path d="M336 215 L334 300 Q340 310 346 300 L344 215 Z" fill="#991b1b" stroke="#ef4444" stroke-width="1.5"/>
              <circle cx="340" cy="315" r="9" fill="#f87171" stroke="#dc2626" stroke-width="1"/>
              <ellipse cx="340" cy="205" rx="7" ry="5" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
              <g stroke="#dc2626" stroke-width="2" fill="none">
                <path d="M260 215 C260 250 280 280 310 290"/>
                <path d="M420 215 C420 250 400 280 370 290"/>
              </g>
              <line x1="120" y1="260" x2="334" y2="260" stroke="#dc2626" stroke-width="1.2"/>
              <circle cx="334" cy="260" r="2.5" fill="#dc2626"/>
              <rect x="25" y="246" width="130" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="90" y="259" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Posterior Midline Tear</text>
              <text x="90" y="270" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Exposed Sphincter Fibers</text>
              <line x1="560" y1="315" x2="349" y2="315" stroke="#475569" stroke-width="1.2"/>
              <circle cx="349" cy="315" r="2.5" fill="#475569"/>
              <rect x="525" y="302" width="130" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
              <text x="590" y="318" font-size="10" font-weight="600" fill="#0f172a" text-anchor="middle">Sentinel Skin Tag</text>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            Posterior midline anoderm tear with hypertonic internal sphincter spasm and distal sentinel skin tag.
          </p>
        </div>
      );

    case 'fistula':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Fistula-in-Ano Architecture
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Textbook Reference</span>
          </div>
          <div className="p-2 sm:p-3">
            <svg viewBox="0 0 680 430" className="w-full h-auto max-h-[380px]" role="img" aria-label="Transsphincteric anal fistula tract traversing sphincter muscles to perianal skin">
              <rect width="680" height="430" fill="#ffffff" rx="8"/>
              <path d="M220 50 C220 180 230 240 250 380 L430 380 C450 240 460 180 460 50 Z" fill="#fff7ed" stroke="#fdba74" stroke-width="4"/>
              <rect x="180" y="160" width="30" height="180" rx="6" fill="#fca5a5" stroke="#ef4444" stroke-width="1"/>
              <rect x="140" y="180" width="30" height="150" rx="6" fill="#f87171" stroke="#dc2626" stroke-width="1"/>
              <path d="M232 205 C190 220 170 240 130 360" fill="none" stroke="#dc2626" stroke-width="4.5" stroke-linecap="round"/>
              <circle cx="232" cy="205" r="5" fill="#991b1b"/>
              <circle cx="130" cy="360" r="5" fill="#991b1b"/>
              <line x1="85" y1="180" x2="232" y2="205" stroke="#dc2626" stroke-width="1.2"/>
              <rect x="15" y="166" width="128" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="79" y="179" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Internal Opening</text>
              <text x="79" y="190" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Crypt of Morgagni</text>
              <line x1="85" y1="360" x2="130" y2="360" stroke="#dc2626" stroke-width="1.2"/>
              <rect x="15" y="346" width="128" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="79" y="359" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">External Opening</text>
              <text x="79" y="370" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Perianal Cutaneous</text>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            Transsphincteric anal fistula tract with infected cryptoglandular origin and external perianal drainage.
          </p>
        </div>
      );

    case 'gallstones':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Extrahepatic Biliary Anatomy
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Textbook Reference</span>
          </div>
          <div className="p-2 sm:p-3">
            <svg viewBox="0 0 680 430" className="w-full h-auto max-h-[380px]" role="img" aria-label="Biliary tree and gallbladder showing gallstones in lumen and Hartmann pouch">
              <rect width="680" height="430" fill="#ffffff" rx="8"/>
              <path d="M420 50 L420 160 L420 370" fill="none" stroke="#16a34a" stroke-width="18" stroke-linecap="round"/>
              <path d="M250 160 C210 200 230 280 290 280 C340 280 380 230 380 180 C380 150 400 150 420 150" fill="#86efac" stroke="#15803d" stroke-width="3"/>
              <polygon points="270,250 285,245 290,260 275,265" fill="#ca8a04" stroke="#713f12" stroke-width="1"/>
              <polygon points="295,240 310,235 315,250 300,255" fill="#ca8a04" stroke="#713f12" stroke-width="1"/>
              <polygon points="345,190 360,185 365,200 350,205" fill="#eab308" stroke="#854d0e" stroke-width="1"/>
              <line x1="120" y1="260" x2="270" y2="255" stroke="#dc2626" stroke-width="1.2"/>
              <circle cx="270" cy="255" r="2.5" fill="#dc2626"/>
              <rect x="15" y="246" width="135" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="82" y="259" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Gallbladder Fundus</text>
              <text x="82" y="270" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Faceted Gallstones</text>
              <line x1="560" y1="240" x2="430" y2="240" stroke="#475569" stroke-width="1.2"/>
              <circle cx="430" cy="240" r="2.5" fill="#475569"/>
              <rect x="515" y="226" width="145" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
              <text x="587" y="242" font-size="10" font-weight="600" fill="#0f172a" text-anchor="middle">Common Bile Duct (CBD)</text>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            Extrahepatic biliary system showing gallbladder, cystic duct, CBD, and cholelithiasis in Hartmann&apos;s pouch.
          </p>
        </div>
      );

    case 'hernia':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Abdominal Wall Hernia Anatomy
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Textbook Reference</span>
          </div>
          <div className="p-2 sm:p-3">
            <svg viewBox="0 0 680 430" className="w-full h-auto max-h-[380px]" role="img" aria-label="Abdominal wall layers with fascial ring defect and tension-free sublay mesh">
              <rect width="680" height="430" fill="#ffffff" rx="8"/>
              <path d="M120 120 L560 120" stroke="#fbcfe8" stroke-width="22"/>
              <path d="M120 180 L280 180 M400 180 L560 180" stroke="#f87171" stroke-width="32"/>
              <path d="M280 180 C280 270 400 270 400 180" fill="#fef3c7" stroke="#f59e0b" stroke-width="2.5"/>
              <path d="M240 196 L440 196" stroke="#0284c7" stroke-width="7" stroke-dasharray="3 3"/>
              <line x1="120" y1="230" x2="280" y2="230" stroke="#dc2626" stroke-width="1.2"/>
              <circle cx="280" cy="230" r="2.5" fill="#dc2626"/>
              <rect x="15" y="216" width="135" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="82" y="229" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Fascial Ring Defect</text>
              <text x="82" y="240" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Hernia Protrusion</text>
              <line x1="560" y1="196" x2="440" y2="196" stroke="#0284c7" stroke-width="1.2"/>
              <circle cx="440" cy="196" r="2.5" fill="#0284c7"/>
              <rect x="515" y="182" width="145" height="28" rx="4" fill="#f0f9ff" stroke="#bae6fd"/>
              <text x="587" y="195" font-size="10" font-weight="700" fill="#0369a1" text-anchor="middle">3D Composite Mesh</text>
              <text x="587" y="206" font-size="8.5" font-weight="600" fill="#0284c7" text-anchor="middle">Tension-Free Sublay</text>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            Abdominal wall strata showing fascial ring herniation and laparoscopic tension-free mesh reconstruction.
          </p>
        </div>
      );

    case 'appendix':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Cecum &amp; Vermiform Appendix
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Textbook Reference</span>
          </div>
          <div className="p-2 sm:p-3">
            <svg viewBox="0 0 680 430" className="w-full h-auto max-h-[380px]" role="img" aria-label="Cecum with converging taenia coli and acutely inflamed vermiform appendix">
              <rect width="680" height="430" fill="#ffffff" rx="8"/>
              <path d="M260 40 L260 220 C260 280 340 300 400 280 C440 260 450 200 450 40" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
              <path d="M120 180 L260 180" fill="none" stroke="#fbcfe8" stroke-width="32" stroke-linecap="round"/>
              <path d="M380 290 C390 320 420 340 450 330 C470 320 490 280 480 250" fill="none" stroke="#dc2626" stroke-width="16" stroke-linecap="round"/>
              <line x1="560" y1="310" x2="455" y2="310" stroke="#dc2626" stroke-width="1.2"/>
              <circle cx="455" cy="310" r="2.5" fill="#dc2626"/>
              <rect x="510" y="296" width="150" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="585" y="309" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">Inflamed Appendix</text>
              <text x="585" y="320" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Appendicitis Swelling</text>
              <line x1="120" y1="180" x2="260" y2="180" stroke="#475569" stroke-width="1.2"/>
              <rect x="15" y="166" width="130" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
              <text x="80" y="182" font-size="10" font-weight="600" fill="#0f172a" text-anchor="middle">Terminal Ileum</text>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            Ileocecal junction showing vermiform appendix origin at the convergence of cecal taenia coli.
          </p>
        </div>
      );

    case 'varicose-veins':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Venous Valve Hemodynamics
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Textbook Reference</span>
          </div>
          <div className="p-2 sm:p-3">
            <svg viewBox="0 0 680 430" className="w-full h-auto max-h-[380px]" role="img" aria-label="Comparative venous hemodynamics showing competent valve vs incompetent varicose reflux">
              <rect width="680" height="430" fill="#ffffff" rx="8"/>
              <line x1="340" y1="20" x2="340" y2="400" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4"/>
              {/* Left: Competent */}
              <rect x="150" y="60" width="70" height="280" rx="6" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
              <path d="M150 200 C175 190 185 170 185 150 M220 200 C195 190 185 170 185 150" stroke="#1d4ed8" stroke-width="3" fill="none"/>
              <text x="185" y="45" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">Competent Valve</text>
              {/* Right: Incompetent */}
              <path d="M470 60 C510 130 450 210 510 270 L510 340 L450 340 C420 270 480 200 440 130 Z" fill="#93c5fd" stroke="#dc2626" stroke-width="2.5"/>
              <path d="M445 195 C458 190 460 178 460 165 M505 195 C492 190 490 178 490 165" stroke="#dc2626" stroke-width="3" fill="none"/>
              <text x="480" y="45" font-size="12" font-weight="700" fill="#991b1b" text-anchor="middle">Incompetent Reflux</text>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            Comparative venous valve hemodynamics: normal competent valve vs incompetent valve with retrograde pooling.
          </p>
        </div>
      );

    case 'diabetic-foot':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Plantar Neurovascular &amp; Biomechanical Zones
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Textbook Reference</span>
          </div>
          <div className="p-2 sm:p-3">
            <svg viewBox="0 0 680 430" className="w-full h-auto max-h-[380px]" role="img" aria-label="Plantar foot anatomy showing plantar aponeurosis, deep plantar arch, metatarsal ulcer risk points">
              <rect width="680" height="430" fill="#ffffff" rx="8"/>
              <path d="M220 70 C200 110 200 145 205 175 C215 205 225 235 228 265 C232 295 238 325 250 355 C258 375 270 395 290 395 C310 395 322 375 328 355 C334 325 338 290 340 250 C342 215 352 185 356 165 C360 145 356 130 348 120 C332 110 312 105 285 105 C255 105 230 110 220 70 Z" fill="#fff1eb" stroke="#cbd5e1" stroke-width="2"/>
              <ellipse cx="230" cy="55" rx="14" ry="20" fill="#fff1eb" stroke="#cbd5e1" stroke-width="1.2"/>
              <circle cx="235" cy="115" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
              <circle cx="235" cy="115" r="4" fill="#dc2626"/>
              <circle cx="290" cy="355" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
              <path d="M285 320 C280 270 260 210 240 150" fill="none" stroke="#dc2626" stroke-width="2"/>
              <line x1="120" y1="115" x2="220" y2="115" stroke="#dc2626" stroke-width="1.2"/>
              <circle cx="220" cy="115" r="2.5" fill="#dc2626"/>
              <rect x="15" y="101" width="135" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="82" y="114" font-size="10" font-weight="700" fill="#991b1b" text-anchor="middle">1st Metatarsal Head</text>
              <text x="82" y="125" font-size="8.5" font-weight="600" fill="#dc2626" text-anchor="middle">Peak Ulcer Risk Zone</text>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            Plantar aspect of the foot illustrating plantar fascia, neurovascular arch, and metatarsal pressure risk points.
          </p>
        </div>
      );

    default:
      return null;
  }
};
