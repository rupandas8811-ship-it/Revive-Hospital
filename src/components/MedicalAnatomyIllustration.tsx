import React from 'react';

interface MedicalAnatomyIllustrationProps {
  conditionId: string;
}

export const MedicalAnatomyIllustration: React.FC<MedicalAnatomyIllustrationProps> = ({ conditionId }) => {
  switch (conditionId) {
    case 'piles':
      return (
        <div className="w-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#123FA8] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Figure 1 · Coronal Section of Anal Canal · Vascular &amp; Sphincter Anatomy
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Clinical Reference</span>
          </div>
          <div className="p-2 sm:p-3 bg-white">
            <svg viewBox="0 0 690 435" className="w-full h-auto max-h-[420px]" role="img" aria-label="Medically accurate coronal cross-section of rectum and anal canal showing internal and external haemorrhoids, dentate line, anal columns of Morgagni, internal and external sphincters, and anal verge">
              <defs>
                <linearGradient id="rectalWallGradPiles" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f5cec7"/>
                  <stop offset="50%" stopColor="#eeaba1"/>
                  <stop offset="100%" stopColor="#e38c7f"/>
                </linearGradient>
                <linearGradient id="intSphincterGradPiles" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e8988a"/>
                  <stop offset="100%" stopColor="#d67b6c"/>
                </linearGradient>
                <linearGradient id="extSphincterGradPiles" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#c9584d"/>
                  <stop offset="100%" stopColor="#a83c32"/>
                </linearGradient>
                <linearGradient id="submucosaGradPiles" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#faeee9"/>
                  <stop offset="100%" stopColor="#f2dad2"/>
                </linearGradient>
                <linearGradient id="veinGradPiles" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5b8bb8"/>
                  <stop offset="100%" stopColor="#2a5278"/>
                </linearGradient>
                <linearGradient id="arteryGradPiles" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#d94b41"/>
                  <stop offset="100%" stopColor="#a62820"/>
                </linearGradient>
                <pattern id="muscleHatchPiles" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#ffffff" strokeWidth="0.8" opacity="0.35"/>
                </pattern>
              </defs>

              <rect width="690" height="435" fill="#ffffff" rx="8"/>

              {/* Pelvic Floor / Levator Ani */}
              <path d="M125 70 C165 90 205 120 235 160 L250 150 C220 110 180 80 140 60 Z" fill="#b94e44" opacity="0.75"/>
              <path d="M565 70 C525 90 485 120 455 160 L440 150 C470 110 510 80 550 60 Z" fill="#b94e44" opacity="0.75"/>

              {/* Rectal Wall */}
              <path d="M215 20 C220 60 225 110 230 155 C227 220 220 285 205 350 L225 355 C243 290 250 220 253 155 C248 110 243 60 237 20 Z" fill="url(#rectalWallGradPiles)" stroke="#c26f63" strokeWidth="1"/>
              <path d="M475 20 C470 60 465 110 460 155 C463 220 470 285 485 350 L465 355 C447 290 440 220 437 155 C442 110 447 60 453 20 Z" fill="url(#rectalWallGradPiles)" stroke="#c26f63" strokeWidth="1"/>

              {/* External Anal Sphincter (EAS) */}
              <path d="M180 165 C190 160 225 175 230 210 C235 250 233 300 220 365 C200 368 185 360 180 345 C175 310 173 250 175 200 C175 180 177 170 180 165 Z" fill="url(#extSphincterGradPiles)" stroke="#8e2b22" strokeWidth="1.2"/>
              <path d="M180 165 C190 160 225 175 230 210 C235 250 233 300 220 365 C200 368 185 360 180 345 C175 310 173 250 175 200 C175 180 177 170 180 165 Z" fill="url(#muscleHatchPiles)"/>
              
              <path d="M510 165 C500 160 465 175 460 210 C455 250 457 300 470 365 C490 368 505 360 510 345 C515 310 517 250 515 200 C515 180 513 170 510 165 Z" fill="url(#extSphincterGradPiles)" stroke="#8e2b22" strokeWidth="1.2"/>
              <path d="M510 165 C500 160 465 175 460 210 C455 250 457 300 470 365 C490 368 505 360 510 345 C515 310 517 250 515 200 C515 180 513 170 510 165 Z" fill="url(#muscleHatchPiles)"/>

              {/* Internal Anal Sphincter (IAS) */}
              <path d="M237 170 C245 170 253 190 253 225 C253 265 247 305 240 345 C233 348 227 344 225 338 C231 295 235 255 233 220 C231 195 231 178 237 170 Z" fill="url(#intSphincterGradPiles)" stroke="#af5445" strokeWidth="1"/>
              <path d="M453 170 C445 170 437 190 437 225 C437 265 443 305 450 345 C457 348 463 344 465 338 C459 295 455 255 457 220 C459 195 459 178 453 170 Z" fill="url(#intSphincterGradPiles)" stroke="#af5445" strokeWidth="1"/>

              {/* Intersphincteric Space */}
              <path d="M229 185 C233 235 231 290 225 340" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" fill="none"/>
              <path d="M461 185 C457 235 459 290 465 340" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" fill="none"/>

              {/* Submucosa & Rectal Mucosa */}
              <path d="M247 20 C253 70 261 120 267 165 C270 190 275 215 277 245 C280 285 275 325 260 365 L280 372 C297 330 300 285 297 245 C293 215 287 190 283 165 C277 120 270 70 263 20 Z" fill="url(#submucosaGradPiles)" opacity="0.6"/>
              <path d="M443 20 C437 70 429 120 423 165 C420 190 415 215 413 245 C410 285 415 325 430 365 L410 372 C393 330 390 285 393 245 C397 215 403 190 407 165 C413 120 420 70 427 20 Z" fill="url(#submucosaGradPiles)" opacity="0.6"/>

              {/* Anal Canal Center Lumen */}
              <path d="M260 20 Q345 30 430 20 L423 165 C420 195 413 215 411 245 C407 290 413 330 425 365 C385 375 305 375 265 365 C277 330 283 290 279 245 C277 215 270 195 267 165 Z" fill="#fff5f2" opacity="0.4"/>

              {/* Vertical Anal Columns of Morgagni */}
              <g id="analColumnsGroupReact">
                <path d="M300 95 C303 125 305 155 301 185" stroke="#db8f82" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M323 90 C325 125 327 158 325 188" stroke="#db8f82" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M345 88 C345 125 345 160 345 188" stroke="#db8f82" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M367 90 C365 125 363 158 365 188" stroke="#db8f82" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M390 95 C387 125 385 155 389 185" stroke="#db8f82" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </g>

              {/* Anal Valves & Crypts */}
              <path d="M285 188 Q295 196 305 188 Q315 196 325 188 Q335 196 345 188 Q355 196 365 188 Q375 196 385 188 Q395 196 405 188" fill="none" stroke="#cf6e5f" strokeWidth="2"/>

              {/* DENTATE / PECTINATE LINE */}
              <path d="M265 192 Q285 185 305 192 T345 192 T385 192 T425 192" fill="none" stroke="#2563eb" strokeWidth="2.2" strokeDasharray="4 3"/>

              {/* INTERNAL HAEMORRHOID */}
              <g id="internalHaemorrhoidReact">
                <path d="M265 122 C252 133 248 153 254 172 C260 188 276 195 296 192 C316 188 323 168 318 148 C314 130 295 118 265 122 Z" fill="#eb988d" stroke="#bd5245" strokeWidth="1.4"/>
                <path d="M266 140 C272 133 282 134 286 142 C290 150 284 158 276 160 C269 162 262 150 266 140 Z" fill="url(#veinGradPiles)" stroke="#1e3a8a" strokeWidth="0.8"/>
                <path d="M284 146 C290 140 300 142 304 150 C308 158 302 168 292 170 C284 172 278 162 284 146 Z" fill="url(#veinGradPiles)" stroke="#1e3a8a" strokeWidth="0.8"/>
                <path d="M269 160 C274 154 284 156 288 164 C292 172 286 182 278 184 C270 186 264 176 269 160 Z" fill="url(#veinGradPiles)" stroke="#1e3a8a" strokeWidth="0.8"/>
                <path d="M294 158 C299 153 308 154 312 162 C316 170 310 180 302 182 C294 184 289 174 294 158 Z" fill="url(#veinGradPiles)" stroke="#1e3a8a" strokeWidth="0.8"/>
                <path d="M260 102 C265 116 272 126 279 140" stroke="url(#arteryGradPiles)" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                <path d="M279 140 C284 148 289 154 292 161" stroke="url(#arteryGradPiles)" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
              </g>

              {/* EXTERNAL HAEMORRHOID */}
              <g id="externalHaemorrhoidReact">
                <path d="M415 318 C430 313 448 320 454 336 C461 353 451 371 438 376 C423 380 410 368 407 350 C405 334 409 322 415 318 Z" fill="#e89d92" stroke="#b04b3e" strokeWidth="1.4"/>
                <ellipse cx="430" cy="340" rx="12" ry="9" fill="url(#veinGradPiles)" stroke="#1e3a8a" strokeWidth="0.8"/>
                <ellipse cx="439" cy="354" rx="10" ry="8" fill="url(#veinGradPiles)" stroke="#1e3a8a" strokeWidth="0.8"/>
                <ellipse cx="423" cy="357" rx="9" ry="7" fill="url(#veinGradPiles)" stroke="#1e3a8a" strokeWidth="0.8"/>
                <path d="M453 346 C465 348 477 353 490 358" stroke="#2a5278" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </g>

              {/* Normal Contralateral Cushion */}
              <path d="M405 145 C399 152 395 165 399 175 C403 182 413 185 420 182 C425 178 427 165 423 155 C420 148 411 142 405 145 Z" fill="#eb988d" stroke="#bd5245" strokeWidth="1" opacity="0.65"/>
              <ellipse cx="411" cy="165" rx="6" ry="8" fill="#5b8bb8" opacity="0.5"/>

              {/* Normal Left Verge */}
              <path d="M265 365 C255 372 243 376 230 375" stroke="#cf7e72" strokeWidth="2" fill="none"/>

              {/* LEFT SIDE LABELS */}
              {/* 1. Anal Columns (Columns of Morgagni) */}
              <line x1="315" y1="120" x2="202" y2="76" stroke="#475569" strokeWidth="1.2"/>
              <circle cx="315" cy="120" r="2.8" fill="#0f172a"/>
              <g transform="translate(14, 55)">
                <rect width="188" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
                <text x="10" y="17" fontSize="10.5" fontWeight="700" fill="#0f172a" fontFamily="system-ui, sans-serif">Anal Columns (Columns of Morgagni)</text>
                <text x="10" y="32" fontSize="9.5" fill="#64748b" fontFamily="system-ui, sans-serif">Longitudinal mucosal folds</text>
              </g>

              {/* 2. Internal Haemorrhoid */}
              <line x1="285" y1="158" x2="202" y2="166" stroke="#475569" strokeWidth="1.2"/>
              <circle cx="285" cy="158" r="2.8" fill="#0f172a"/>
              <g transform="translate(14, 145)">
                <rect width="188" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
                <text x="10" y="17" fontSize="11" fontWeight="700" fill="#0f172a" fontFamily="system-ui, sans-serif">Internal Haemorrhoid</text>
                <text x="10" y="32" fontSize="9" fill="#64748b" fontFamily="system-ui, sans-serif">Above dentate line · Mucosal vascular cushion</text>
              </g>

              {/* 3. Internal Anal Sphincter */}
              <line x1="235" y1="260" x2="202" y2="256" stroke="#475569" strokeWidth="1.2"/>
              <circle cx="235" cy="260" r="2.8" fill="#0f172a"/>
              <g transform="translate(14, 235)">
                <rect width="188" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
                <text x="10" y="17" fontSize="11" fontWeight="700" fill="#0f172a" fontFamily="system-ui, sans-serif">Internal Anal Sphincter</text>
                <text x="10" y="32" fontSize="9.5" fill="#64748b" fontFamily="system-ui, sans-serif">Involuntary circular smooth muscle</text>
              </g>

              {/* 4. External Anal Sphincter */}
              <line x1="198" y1="310" x2="202" y2="346" stroke="#475569" strokeWidth="1.2"/>
              <circle cx="198" cy="310" r="2.8" fill="#0f172a"/>
              <g transform="translate(14, 325)">
                <rect width="188" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
                <text x="10" y="17" fontSize="11" fontWeight="700" fill="#0f172a" fontFamily="system-ui, sans-serif">External Anal Sphincter</text>
                <text x="10" y="32" fontSize="9.5" fill="#64748b" fontFamily="system-ui, sans-serif">Voluntary striated skeletal muscle</text>
              </g>

              {/* RIGHT SIDE LABELS */}
              {/* 5. Dentate / Pectinate Line */}
              <line x1="420" y1="192" x2="488" y2="186" stroke="#2563eb" strokeWidth="1.4"/>
              <circle cx="420" cy="192" r="3" fill="#2563eb"/>
              <g transform="translate(488, 165)">
                <rect width="188" height="42" rx="6" fill="#ffffff" stroke="#93c5fd" strokeWidth="1.2"/>
                <text x="10" y="17" fontSize="11" fontWeight="700" fill="#1e3a8a" fontFamily="system-ui, sans-serif">Dentate (Pectinate) Line</text>
                <text x="10" y="32" fontSize="9.5" fill="#2563eb" fontFamily="system-ui, sans-serif">Mucocutaneous transition junction</text>
              </g>

              {/* 6. External Haemorrhoid */}
              <line x1="440" y1="345" x2="488" y2="296" stroke="#475569" strokeWidth="1.2"/>
              <circle cx="440" cy="345" r="2.8" fill="#0f172a"/>
              <g transform="translate(488, 275)">
                <rect width="188" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
                <text x="10" y="17" fontSize="11" fontWeight="700" fill="#0f172a" fontFamily="system-ui, sans-serif">External Haemorrhoid</text>
                <text x="10" y="32" fontSize="9" fill="#64748b" fontFamily="system-ui, sans-serif">Below dentate line · Sensitive anoderm</text>
              </g>

              {/* 7. Anal Verge */}
              <line x1="420" y1="375" x2="488" y2="386" stroke="#475569" strokeWidth="1.2"/>
              <circle cx="420" cy="375" r="2.8" fill="#0f172a"/>
              <g transform="translate(488, 365)">
                <rect width="188" height="42" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
                <text x="10" y="17" fontSize="11" fontWeight="700" fill="#0f172a" fontFamily="system-ui, sans-serif">Anal Verge</text>
                <text x="10" y="32" fontSize="9.5" fill="#64748b" fontFamily="system-ui, sans-serif">Anal canal to perianal skin junction</text>
              </g>
            </svg>
          </div>
          <p className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
            <strong>Figure 1: Coronal clinical section of the human anal canal.</strong> Demonstrates the vascular anatomy of haemorrhoidal cushions relative to the dentate (pectinate) line, anal columns of Morgagni, internal sphincter (involuntary circular smooth muscle), external sphincter (voluntary striated skeletal muscle), and anal verge.
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
              <ellipse cx="340" cy="215" rx="150" ry="170" fill="#fed7aa" stroke="#fdba74" strokeWidth="4"/>
              <ellipse cx="340" cy="215" rx="90" ry="110" fill="#fff7ed" stroke="#cbd5e1" strokeWidth="2"/>
              <path d="M336 215 L334 300 Q340 310 346 300 L344 215 Z" fill="#991b1b" stroke="#ef4444" strokeWidth="1.5"/>
              <circle cx="340" cy="315" r="9" fill="#f87171" stroke="#dc2626" strokeWidth="1"/>
              <ellipse cx="340" cy="205" rx="7" ry="5" fill="#fca5a5" stroke="#dc2626" strokeWidth="1"/>
              <g stroke="#dc2626" strokeWidth="2" fill="none">
                <path d="M260 215 C260 250 280 280 310 290"/>
                <path d="M420 215 C420 250 400 280 370 290"/>
              </g>
              <line x1="120" y1="260" x2="334" y2="260" stroke="#dc2626" strokeWidth="1.2"/>
              <circle cx="334" cy="260" r="2.5" fill="#dc2626"/>
              <rect x="25" y="246" width="130" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="90" y="259" fontSize="10" fontWeight="700" fill="#991b1b" textAnchor="middle">Posterior Midline Tear</text>
              <text x="90" y="270" fontSize="8.5" fontWeight="600" fill="#dc2626" textAnchor="middle">Exposed Sphincter Fibers</text>
              <line x1="560" y1="315" x2="349" y2="315" stroke="#475569" strokeWidth="1.2"/>
              <circle cx="349" cy="315" r="2.5" fill="#475569"/>
              <rect x="525" y="302" width="130" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
              <text x="590" y="318" fontSize="10" fontWeight="600" fill="#0f172a" textAnchor="middle">Sentinel Skin Tag</text>
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
              <path d="M220 50 C220 180 230 240 250 380 L430 380 C450 240 460 180 460 50 Z" fill="#fff7ed" stroke="#fdba74" strokeWidth="4"/>
              <rect x="180" y="160" width="30" height="180" rx="6" fill="#fca5a5" stroke="#ef4444" strokeWidth="1"/>
              <rect x="140" y="180" width="30" height="150" rx="6" fill="#f87171" stroke="#dc2626" strokeWidth="1"/>
              <path d="M232 205 C190 220 170 240 130 360" fill="none" stroke="#dc2626" strokeWidth="4.5" strokeLinecap="round"/>
              <circle cx="232" cy="205" r="5" fill="#991b1b"/>
              <circle cx="130" cy="360" r="5" fill="#991b1b"/>
              <line x1="85" y1="180" x2="232" y2="205" stroke="#dc2626" strokeWidth="1.2"/>
              <rect x="15" y="166" width="128" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="79" y="179" fontSize="10" fontWeight="700" fill="#991b1b" textAnchor="middle">Internal Opening</text>
              <text x="79" y="190" fontSize="8.5" fontWeight="600" fill="#dc2626" textAnchor="middle">Crypt of Morgagni</text>
              <line x1="85" y1="360" x2="130" y2="360" stroke="#dc2626" strokeWidth="1.2"/>
              <rect x="15" y="346" width="128" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="79" y="359" fontSize="10" fontWeight="700" fill="#991b1b" textAnchor="middle">External Opening</text>
              <text x="79" y="370" fontSize="8.5" fontWeight="600" fill="#dc2626" textAnchor="middle">Perianal Cutaneous</text>
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
              <path d="M420 50 L420 160 L420 370" fill="none" stroke="#16a34a" strokeWidth="18" strokeLinecap="round"/>
              <path d="M250 160 C210 200 230 280 290 280 C340 280 380 230 380 180 C380 150 400 150 420 150" fill="#86efac" stroke="#15803d" strokeWidth="3"/>
              <polygon points="270,250 285,245 290,260 275,265" fill="#ca8a04" stroke="#713f12" strokeWidth="1"/>
              <polygon points="295,240 310,235 315,250 300,255" fill="#ca8a04" stroke="#713f12" strokeWidth="1"/>
              <polygon points="345,190 360,185 365,200 350,205" fill="#eab308" stroke="#854d0e" strokeWidth="1"/>
              <line x1="120" y1="260" x2="270" y2="255" stroke="#dc2626" strokeWidth="1.2"/>
              <circle cx="270" cy="255" r="2.5" fill="#dc2626"/>
              <rect x="15" y="246" width="135" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="82" y="259" fontSize="10" fontWeight="700" fill="#991b1b" textAnchor="middle">Gallbladder Fundus</text>
              <text x="82" y="270" fontSize="8.5" fontWeight="600" fill="#dc2626" textAnchor="middle">Faceted Gallstones</text>
              <line x1="560" y1="240" x2="430" y2="240" stroke="#475569" strokeWidth="1.2"/>
              <circle cx="430" cy="240" r="2.5" fill="#475569"/>
              <rect x="515" y="226" width="145" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
              <text x="587" y="242" fontSize="10" fontWeight="600" fill="#0f172a" textAnchor="middle">Common Bile Duct (CBD)</text>
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
              <path d="M120 120 L560 120" stroke="#fbcfe8" strokeWidth="22"/>
              <path d="M120 180 L280 180 M400 180 L560 180" stroke="#f87171" strokeWidth="32"/>
              <path d="M280 180 C280 270 400 270 400 180" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2.5"/>
              <path d="M240 196 L440 196" stroke="#0284c7" strokeWidth="7" strokeDasharray="3 3"/>
              <line x1="120" y1="230" x2="280" y2="230" stroke="#dc2626" strokeWidth="1.2"/>
              <circle cx="280" cy="230" r="2.5" fill="#dc2626"/>
              <rect x="15" y="216" width="135" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="82" y="229" fontSize="10" fontWeight="700" fill="#991b1b" textAnchor="middle">Fascial Ring Defect</text>
              <text x="82" y="240" fontSize="8.5" fontWeight="600" fill="#dc2626" textAnchor="middle">Hernia Protrusion</text>
              <line x1="560" y1="196" x2="440" y2="196" stroke="#0284c7" strokeWidth="1.2"/>
              <circle cx="440" cy="196" r="2.5" fill="#0284c7"/>
              <rect x="515" y="182" width="145" height="28" rx="4" fill="#f0f9ff" stroke="#bae6fd"/>
              <text x="587" y="195" fontSize="10" fontWeight="700" fill="#0369a1" textAnchor="middle">3D Composite Mesh</text>
              <text x="587" y="206" fontSize="8.5" fontWeight="600" fill="#0284c7" textAnchor="middle">Tension-Free Sublay</text>
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
              <path d="M260 40 L260 220 C260 280 340 300 400 280 C440 260 450 200 450 40" fill="#fed7aa" stroke="#ea580c" strokeWidth="3"/>
              <path d="M120 180 L260 180" fill="none" stroke="#fbcfe8" strokeWidth="32" strokeLinecap="round"/>
              <path d="M380 290 C390 320 420 340 450 330 C470 320 490 280 480 250" fill="none" stroke="#dc2626" strokeWidth="16" strokeLinecap="round"/>
              <line x1="560" y1="310" x2="455" y2="310" stroke="#dc2626" strokeWidth="1.2"/>
              <circle cx="455" cy="310" r="2.5" fill="#dc2626"/>
              <rect x="510" y="296" width="150" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="585" y="309" fontSize="10" fontWeight="700" fill="#991b1b" textAnchor="middle">Inflamed Appendix</text>
              <text x="585" y="320" fontSize="8.5" fontWeight="600" fill="#dc2626" textAnchor="middle">Appendicitis Swelling</text>
              <line x1="120" y1="180" x2="260" y2="180" stroke="#475569" strokeWidth="1.2"/>
              <rect x="15" y="166" width="130" height="26" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
              <text x="80" y="182" fontSize="10" fontWeight="600" fill="#0f172a" textAnchor="middle">Terminal Ileum</text>
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
              <line x1="340" y1="20" x2="340" y2="400" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 4"/>
              {/* Left: Competent */}
              <rect x="150" y="60" width="70" height="280" rx="6" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2"/>
              <path d="M150 200 C175 190 185 170 185 150 M220 200 C195 190 185 170 185 150" stroke="#1d4ed8" strokeWidth="3" fill="none"/>
              <text x="185" y="45" fontSize="12" fontWeight="700" fill="#1e3a8a" textAnchor="middle">Competent Valve</text>
              {/* Right: Incompetent */}
              <path d="M470 60 C510 130 450 210 510 270 L510 340 L450 340 C420 270 480 200 440 130 Z" fill="#93c5fd" stroke="#dc2626" strokeWidth="2.5"/>
              <path d="M445 195 C458 190 460 178 460 165 M505 195 C492 190 490 178 490 165" stroke="#dc2626" strokeWidth="3" fill="none"/>
              <text x="480" y="45" fontSize="12" fontWeight="700" fill="#991b1b" textAnchor="middle">Incompetent Reflux</text>
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
              <path d="M220 70 C200 110 200 145 205 175 C215 205 225 235 228 265 C232 295 238 325 250 355 C258 375 270 395 290 395 C310 395 322 375 328 355 C334 325 338 290 340 250 C342 215 352 185 356 165 C360 145 356 130 348 120 C332 110 312 105 285 105 C255 105 230 110 220 70 Z" fill="#fff1eb" stroke="#cbd5e1" strokeWidth="2"/>
              <ellipse cx="230" cy="55" rx="14" ry="20" fill="#fff1eb" stroke="#cbd5e1" strokeWidth="1.2"/>
              <circle cx="235" cy="115" r="14" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
              <circle cx="235" cy="115" r="4" fill="#dc2626"/>
              <circle cx="290" cy="355" r="18" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
              <path d="M285 320 C280 270 260 210 240 150" fill="none" stroke="#dc2626" strokeWidth="2"/>
              <line x1="120" y1="115" x2="220" y2="115" stroke="#dc2626" strokeWidth="1.2"/>
              <circle cx="220" cy="115" r="2.5" fill="#dc2626"/>
              <rect x="15" y="101" width="135" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5"/>
              <text x="82" y="114" fontSize="10" fontWeight="700" fill="#991b1b" textAnchor="middle">1st Metatarsal Head</text>
              <text x="82" y="125" fontSize="8.5" fontWeight="600" fill="#dc2626" textAnchor="middle">Peak Ulcer Risk Zone</text>
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
