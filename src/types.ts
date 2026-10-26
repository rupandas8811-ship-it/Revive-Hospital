export interface Condition {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  symptoms: string[];
  treatments: string[];
  image: string;
  iconName?: string;
}

export interface AppointmentFormData {
  patientName: string;
  mobileNumber: string;
  condition: string;
  preferredDate?: string;
  preferredContactMethod?: 'Call' | 'WhatsApp' | 'SMS';
  notes?: string;
}

export interface Doctor {
  name: string;
  qualifications: string;
  speciality: string;
  experience: string;
  role: string;
  regNumber?: string;
  image?: string;
}

export interface HospitalInfo {
  name: string;
  brandSub: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  address: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapsUrl: string;
  officialWebsite: string;
}
