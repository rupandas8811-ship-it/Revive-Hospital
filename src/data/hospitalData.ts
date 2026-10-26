import { Condition, HospitalInfo, Doctor } from '../types';

export const HOSPITAL_INFO: HospitalInfo = {
  name: 'Revive Healthcare Hospital',
  brandSub: 'Surgical & Specialist Hospital',
  tagline: 'Specialist Surgical & Medical Care in Bengaluru',
  phone: '+918951016007',
  phoneDisplay: '089510 16007',
  whatsappNumber: '919429690479',
  email: 'info@revivehealthcare.com',
  address: '496, near KLE Law College, Sir M. Vishweshwaraiah Layout 5th Block, Bengaluru, Karnataka 560091',
  area: 'Sir M. Vishweshwaraiah Layout 5th Block',
  city: 'Bengaluru',
  state: 'Karnataka',
  pincode: '560091',
  coordinates: {
    lat: 12.9698,
    lng: 77.4987
  },
  mapsUrl: 'https://maps.app.goo.gl/z4ZbbSXu9AphCkNp7',
  officialWebsite: 'https://www.revivehealthcarehospital.in/'
};

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Abhilash G',
    qualifications: 'MS (General Surgery), FMAS',
    speciality: 'General, Laparoscopic & Proctology Surgeon',
    experience: '12+ Years Clinical & Operative Experience',
    role: 'Senior Consultant Surgeon',
    regNumber: 'KMC 94812',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
  }
];

export const CONDITIONS: Condition[] = [
  {
    id: 'piles',
    name: 'Piles (Haemorrhoids)',
    shortDescription: 'Minimally invasive proctology care with laser ablation and comfortable recovery options.',
    fullDescription: 'Get clear information about piles treatment in Bangalore. Our proctology team offers gentle clinical examinations, laser therapy, and comfortable daycare recovery for suitable patients.',
    symptoms: [
      'Painless bright red bleeding during bowel movements',
      'Itching, irritation, or persistent discomfort around the anus',
      'Swelling, lumps, or prolapsing tissue during defecation',
      'Mucus discharge and difficulty maintaining perianal cleanliness'
    ],
    treatments: [
      'Specialist clinical proctology examination',
      'Prescription ointments, dietary fiber guidance & sitz baths',
      'Laser haemorrhoidoplasty (LHP) minimally invasive procedure',
      'Same-day discharge options for eligible patients'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    iconName: 'Activity'
  },
  {
    id: 'fissure',
    name: 'Anal Fissure',
    shortDescription: 'Gentle clinical assessment, rapid internal sphincter spasm relief, and laser care.',
    fullDescription: 'Do not ignore ongoing discomfort. Speak to a healthcare professional about suitable treatment options for anal fissure in Bangalore, from soothing medical ointments to sphincter-preserving laser release.',
    symptoms: [
      'Sharp, cutting or burning pain during bowel movements',
      'Pain lasting for hours after passing stools',
      'Bright red streaks of blood on stool or tissue paper',
      'Visible small mucosal tear or painful skin tag at the anal verge'
    ],
    treatments: [
      'Gentle clinical evaluation with strict patient privacy',
      'Prescription calcium-channel blocker muscle-relaxing ointments',
      'Warm water sitz baths and dietary bowel retraining',
      'Minimally invasive laser internal sphincterotomy for chronic non-healing tears'
    ],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    iconName: 'FileText'
  },
  {
    id: 'fistula',
    name: 'Anal Fistula',
    shortDescription: 'Precise tract mapping and sphincter-preserving FiLaC laser closure.',
    fullDescription: 'Learn about available treatment options and get guidance on the consultation and recovery process. Fistula treatment in Bangalore with experienced colorectal surgeons prioritizing complete sphincter preservation.',
    symptoms: [
      'Recurrent perianal discharge of pus, blood, or serous fluid',
      'Persistent throbbing pain and swelling around the anal area',
      'Skin irritation and redness due to ongoing fluid drainage',
      'Recurrent perianal boils or fever from blocked crypt glands'
    ],
    treatments: [
      'Diagnostic fistula mapping and ultrasound evaluation',
      'FiLaC (Fistula Laser Closure) 360-degree radial laser therapy',
      'LIFT (Ligation of Intersphincteric Fistula Tract) sphincter-saving surgery',
      'Comprehensive post-procedure dressing and hygiene guidance'
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    iconName: 'GitCommit'
  },
  {
    id: 'gallstones',
    name: 'Gallstones (Cholelithiasis)',
    shortDescription: 'High-definition ultrasound diagnosis and 3-port keyhole laparoscopic cholecystectomy.',
    fullDescription: 'Speak to our hospital team to understand gallstone treatment options, including laparoscopic surgery where suitable. Experienced gastrointestinal surgeons, keyhole accuracy, and rapid post-op recovery in Bangalore.',
    symptoms: [
      'Sudden, intense cramping pain in the upper right abdomen',
      'Pain radiating to the right shoulder blade or back',
      'Nausea, indigestion, and bloating after fatty meals',
      'Biliary colic episodes lasting from 30 minutes to several hours'
    ],
    treatments: [
      'High-resolution abdominal ultrasound and liver function profile',
      'Dietary management for asymptomatic or uncomplicated stones',
      'Laparoscopic cholecystectomy (3-port keyhole gallbladder removal)',
      'Same-day or next-day discharge guidance with transition diet plan'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    iconName: 'CircleDot'
  },
  {
    id: 'hernia',
    name: 'Hernia Repair',
    shortDescription: 'Modern tension-free 3D mesh reconstruction via minimally invasive laparoscopy.',
    fullDescription: 'Understand your hernia treatment options and learn what to expect from consultation to recovery. Hernia diagnosis and tension-free keyhole mesh repair in Bangalore with experienced surgical care.',
    symptoms: [
      'Visible bulge or lump in the groin, scrotum, or abdominal wall',
      'Dull aching discomfort or heaviness that worsens when standing or lifting',
      'Bulge that disappears when lying flat and reappears when straining',
      'Discomfort while coughing, bending, or performing physical work'
    ],
    treatments: [
      'Comprehensive physical and ultrasonography evaluation',
      'Laparoscopic TEP / TAPP keyhole hernia repair',
      'Open tension-free mesh hernioplasty for selected cases',
      'Structured post-surgical recovery guidance and safe lifting protocols'
    ],
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldAlert'
  },
  {
    id: 'appendix',
    name: 'Appendix Treatment (Appendicitis)',
    shortDescription: 'Emergency diagnostic evaluation and 24/7 keyhole laparoscopic appendectomy.',
    fullDescription: 'Sudden or worsening abdominal pain needs urgent medical assessment. Seek urgent care if you suspect appendicitis. Dedicated surgical desk, on-site diagnostics, and experienced laparoscopic surgeons in Bangalore.',
    symptoms: [
      'Sudden sharp or dull pain beginning near the navel and shifting to the lower right abdomen',
      'Pain that intensifies when walking, coughing, or pressing the stomach',
      'Low-grade fever, nausea, loss of appetite, and vomiting',
      'Abdominal swelling or tenderness requiring prompt clinical assessment'
    ],
    treatments: [
      '24/7 emergency diagnostic ultrasound and surgical triage',
      '3-port minimally invasive keyhole laparoscopic appendectomy',
      'Immediate medical intervention to prevent rupture and peritonitis',
      'Same-day mobilization and rapid recovery protocol'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Activity'
  },
  {
    id: 'varicose-veins',
    name: 'Varicose Veins',
    shortDescription: 'Minimally invasive EVLA laser & RFA radiofrequency ablation with no surgical cuts.',
    fullDescription: 'Get expert assessment and walk-in, walk-out treatment for varicose veins in Bangalore. Advanced endovenous laser ablation (EVLA) and radiofrequency therapy for pain relief and cosmetic restoration.',
    symptoms: [
      'Twisted, bulging, bluish rope-like veins on legs or calves',
      'Throbbing pain, heaviness, and restlessness after standing',
      'Swelling in the ankles and lower legs towards the evening',
      'Skin discoloration, itching, or non-healing stasis ulcers'
    ],
    treatments: [
      'Comprehensive Doppler venous reflux duplex ultrasound mapping',
      'Endovenous Laser Ablation (EVLA) precision vein sealing',
      'Radiofrequency Ablation (RFA) gentle catheter therapy',
      'Daycare discharge with zero surgical stitches or visible scars'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    iconName: 'Activity'
  },
  {
    id: 'diabetic-foot',
    name: 'Diabetic Foot & Ulcer Care',
    shortDescription: 'Advanced podiatric limb salvage, biomechanical offloading, and angiosome revascularization.',
    fullDescription: 'Specialist diabetic foot ulcer evaluation, neurovascular testing, and limb salvage protocols in Bangalore. Comprehensive wound care and pressure offloading to prevent amputations.',
    symptoms: [
      'Non-healing sores, blisters, or calluses on the foot sole or toes',
      'Numbness, burning sensation, or complete loss of pain perception',
      'Redness, warmth, swelling, or foul-smelling drainage from a wound',
      'Skin color changes, black necrotic tissue, or cold lower extremity'
    ],
    treatments: [
      'Semmes-Weinstein 10g monofilament sensory neuropathy testing',
      'Arterial Doppler ultrasound & ABI (Ankle-Brachial Index) profiling',
      'Total Contact Cast (TCC) and custom biomechanical offloading',
      'Specialist surgical debridement and angiosome revascularization'
    ],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShieldAlert'
  }
];
