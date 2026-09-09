export interface BusinessInfo {
  name: string;
  location: string;
  service: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  facebook: string;
  instagram: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  iconName: 'scissors' | 'brush' | 'razor' | 'combo' | 'crown';
}

export interface BarberProfile {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  photoUrl: string;
  experienceYears: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'fades' | 'beards' | 'cuts' | 'ambiance';
  description: string;
  imageUrl: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  service: string;
  text: string;
  date: string;
  rating: number;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  barber: string;
  notes: string;
}
