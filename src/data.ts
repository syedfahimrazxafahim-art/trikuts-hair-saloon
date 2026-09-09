import { BusinessInfo, ServiceItem, BarberProfile, GalleryItem, ReviewItem } from './types';

export const TRIKUTS_LOGO = 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984252/dsfsfsdf34234535h54t645hhhh45t4.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'TriKuts Barbershop',
  location: 'New York, New York',
  service: 'Barber Shop',
  phone: '63 995 633 9303',
  phoneFormatted: '+63 995 633 9303',
  email: 'trikutsbarber@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61577989341770',
  instagram: 'https://www.instagram.com/trikutsbarber',
};

export const RAW_IMAGES = {
  logo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984252/dsfsfsdf34234535h54t645hhhh45t4.jpg',
  img1: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984250/345678hbhd.jpg',
  img2: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984250/ja_hvdshwsdsdsd.jpg',
  img3: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984250/fewfwfewfgfdgtrjyukyl.jpg',
  img4: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984250/4365356gfhfgdfsfs.jpg',
  img5: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984250/jwhdgyw_jwhd.jpg',
  img6: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984250/1232435435353.jpg',
  img7: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984251/4353465476586976543245324.jpg',
  img8: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984251/khdushgd.jpg',
  img9: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984251/dsdwqdqdwq_bj89798.jpg',
  img10: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984251/kojihu.jpg',
  img11: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984251/dsfsdfsfsd.jpg',
  img12: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984252/fessfsafdsfwef.jpg',
  img13: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984251/rapishuh.jpg',
  img14: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984252/swqhjgesgfyuf.jpg',
  img15: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984252/snoop.jpg',
  img16: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984252/ywfeyfvytfwe_duwgd.jpg',
  img17: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788984252/wwswswbbbbbnklljho.jpg',
};

export const HERO_ASSETS = {
  heroBg: RAW_IMAGES.img4,
  heroCut: RAW_IMAGES.img14,
  logo: RAW_IMAGES.logo,
};

export const ABOUT_ASSETS = {
  primary: RAW_IMAGES.img2,
  secondary: RAW_IMAGES.img8,
  tertiary: RAW_IMAGES.img13,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'haircuts',
    name: 'Classic Haircuts',
    tagline: 'Tailored scissor work & clean tapering',
    description: 'Bespoke tailored haircut customized to your head shape, facial profile, and hair texture. Includes hot lather neck shave and refined styling.',
    duration: '45 mins',
    iconName: 'scissors',
  },
  {
    id: 'beard-trim',
    name: 'Beard Sculpt & Trim',
    tagline: 'Architectural line work & conditioning',
    description: 'Precision beard shaping, length leveling, clean straight-razor contouring along cheek lines, finished with conditioning essential oils.',
    duration: '30 mins',
    iconName: 'brush',
  },
  {
    id: 'hot-towel-shave',
    name: 'Traditional Hot Towel Shave',
    tagline: 'The timeless gentleman ritual',
    description: 'Quintessential barbershop treatment with steamed essential oil towels, warm lather massage, and ultra-close single-blade straight razor execution.',
    duration: '40 mins',
    iconName: 'razor',
  },
  {
    id: 'hair-beard-combo',
    name: 'Hair & Beard Signature Combo',
    tagline: 'Complete head-to-beard grooming',
    description: 'Our most sought-after full overhaul: tailored haircut, comprehensive beard sculpting, dual hot towel treatments, razor lineup, and styling finish.',
    duration: '60 mins',
    iconName: 'combo',
  },
  {
    id: 'premium-grooming',
    name: 'Tri Kuts VIP Grooming Ritual',
    tagline: 'The pinnacle luxury experience',
    description: 'The ultimate bespoke experience incorporating precision haircutting, hot towel straight-razor shave, face massage, neck cleanse, and styling.',
    duration: '75 mins',
    iconName: 'crown',
  },
];

export const BARBERS: BarberProfile[] = [
  {
    id: 'barber-marcus',
    name: 'Marcus Vance',
    title: 'Master Barber & Founder',
    specialty: 'Executive Scissor Work & Traditional Shaves',
    bio: 'Dedicated to vintage craftsmanship and tailored precision. Over 14 years mastering classic blade geometry, hot lather rituals, and bespoke client styling.',
    photoUrl: RAW_IMAGES.img12,
    experienceYears: 14,
  },
  {
    id: 'barber-derrick',
    name: 'Derrick "Blade" Cole',
    title: 'Senior Fade & Beard Specialist',
    specialty: 'Skin Fades, Tapers & Beard Architecture',
    bio: 'Celebrated for seamless skin-fade gradients, sharp razor lineups, and architectural beard sculpting tailored to natural bone structure.',
    photoUrl: RAW_IMAGES.img17,
    experienceYears: 9,
  },
  {
    id: 'barber-julian',
    name: 'Julian Reyes',
    title: 'Traditional Shave & Grooming Artisan',
    specialty: 'Hot Towel Straight-Razor Shaves & Classic Cuts',
    bio: 'Preserving old-world barbershop heritage through meticulous razor control, essential oil hot towel treatments, and disciplined detailing.',
    photoUrl: RAW_IMAGES.img10,
    experienceYears: 11,
  },
  {
    id: 'barber-andre',
    name: 'Andre "Snoop" King',
    title: 'VIP & Contemporary Stylist',
    specialty: 'Signature VIP Styling & Modern Freestyle Edges',
    bio: 'Renowned for high-profile client cuts and modern signature aesthetics that merge classic barbershop confidence with fresh urban refinement.',
    photoUrl: RAW_IMAGES.img15,
    experienceYears: 8,
  },
];

export const WHY_TRIKUTS = [
  {
    id: 'classic-craft',
    title: 'CLASSIC CRAFT',
    description: 'Honoring time-tested barbering heritage with straight-razor mastery, hot towel rituals, and hand-sheared precision.',
  },
  {
    id: 'clean-precise',
    title: 'CLEAN & PRECISE',
    description: 'Surgical attention to detail, razor-sharp perimeter lines, seamless fade gradients, and sterile premium equipment.',
  },
  {
    id: 'modern-confidence',
    title: 'MODERN CONFIDENCE',
    description: 'Vintage gentlemen ambiance elevated for the contemporary man who demands polished presence and effortless style.',
  },
  {
    id: 'premium-grooming',
    title: 'PREMIUM GROOMING',
    description: 'A distinguished sanctuary offering restorative grooming treatments, essential oil tonics, and unhurried craftsmanship.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Classic Taper & Scissor Part',
    category: 'cuts',
    description: 'Clean low taper fade with hand-sheared scissor texture and crisp edge finish.',
    imageUrl: RAW_IMAGES.img1,
  },
  {
    id: 'gallery-2',
    title: 'Textured Crop & Razor Outline',
    category: 'fades',
    description: 'Modern forward crop blended into a sharp mid fade with clean razor perimeter.',
    imageUrl: RAW_IMAGES.img2,
  },
  {
    id: 'gallery-3',
    title: 'Precision Scissor Silhouette',
    category: 'cuts',
    description: 'Structured scissor graduation creating natural volume and sophisticated silhouette.',
    imageUrl: RAW_IMAGES.img3,
  },
  {
    id: 'gallery-4',
    title: 'The Tri Kuts Atmosphere',
    category: 'ambiance',
    description: 'Vintage leather chairs and polished mirrors set in warm low-key ambiance.',
    imageUrl: RAW_IMAGES.img4,
  },
  {
    id: 'gallery-5',
    title: 'Beard Sculpt & Clean Jawline',
    category: 'beards',
    description: 'Defined cheek lines, tapered sideburn blend, and conditioning beard balm finish.',
    imageUrl: RAW_IMAGES.img5,
  },
  {
    id: 'gallery-6',
    title: 'Clean Low Fade & Wave Detailing',
    category: 'fades',
    description: 'Meticulously blended drop fade with crisp hairline alignment and sharp temples.',
    imageUrl: RAW_IMAGES.img6,
  },
  {
    id: 'gallery-7',
    title: 'Royal Grooming Overhaul',
    category: 'cuts',
    description: 'Complete hair and beard synchronization with revitalizing hot lather treatment.',
    imageUrl: RAW_IMAGES.img7,
  },
  {
    id: 'gallery-8',
    title: 'Artisan Blades & Station Tools',
    category: 'ambiance',
    description: 'Sterilized straight razors, Japanese stainless shears, and wooden handle combs.',
    imageUrl: RAW_IMAGES.img8,
  },
  {
    id: 'gallery-9',
    title: 'Modern Pompadour & Parting',
    category: 'cuts',
    description: 'High-volume pompadour with classic hard part and high-contrast skin fade.',
    imageUrl: RAW_IMAGES.img9,
  },
  {
    id: 'gallery-10',
    title: 'Hot Towel Ritual in Action',
    category: 'beards',
    description: 'Steamed towel prep opening pores before the velvet-smooth straight razor shave.',
    imageUrl: RAW_IMAGES.img10,
  },
  {
    id: 'gallery-11',
    title: 'The Vintage Barbershop Vault',
    category: 'ambiance',
    description: 'Deep shadows, warm incandescent lighting, and classic barbershop camaraderie.',
    imageUrl: RAW_IMAGES.img11,
  },
  {
    id: 'gallery-12',
    title: 'Master Barber Focus',
    category: 'ambiance',
    description: 'Disciplined hands crafting every perimeter with unwavering precision.',
    imageUrl: RAW_IMAGES.img12,
  },
  {
    id: 'gallery-13',
    title: 'Razor Lineup & Neck Taper',
    category: 'beards',
    description: 'Feather-light straight razor neck detailing leaving the skin smooth and clean.',
    imageUrl: RAW_IMAGES.img13,
  },
  {
    id: 'gallery-14',
    title: 'Crisp High Fade & Shape-Up',
    category: 'fades',
    description: 'Zero-gap clipper line work with seamless fade gradient and clean temple points.',
    imageUrl: RAW_IMAGES.img14,
  },
  {
    id: 'gallery-15',
    title: 'VIP Signature Cut',
    category: 'cuts',
    description: 'Distinctive celebrity grooming with refined edge geometry and timeless style.',
    imageUrl: RAW_IMAGES.img15,
  },
  {
    id: 'gallery-16',
    title: 'Tailored Taper & Beard Blend',
    category: 'beards',
    description: 'Seamless transition connecting the temple fade to a sharp sculptured beard.',
    imageUrl: RAW_IMAGES.img16,
  },
  {
    id: 'gallery-17',
    title: 'Final Detailing & Mirror Check',
    category: 'fades',
    description: 'Hand mirror inspection ensuring perfection from every angle before the client steps up.',
    imageUrl: RAW_IMAGES.img17,
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Vincent M.',
    service: 'Hair & Beard Signature Combo',
    text: 'TriKuts is hands down the premier barbershop experience. Marcus took his time understanding my hair texture, and the hot towel shave was unmatched. Left feeling like a brand new man.',
    date: '2 weeks ago',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Darius K.',
    service: 'Skin Fade & Lineup',
    text: 'Derrick gives the cleanest fades in the city. No rush, razor-sharp edges, and the classic atmosphere makes you want to relax and enjoy the craft. Highly recommended.',
    date: '1 month ago',
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'Anthony R.',
    service: 'Traditional Hot Towel Shave',
    text: 'A true throwback to authentic gentleman grooming. The straight razor shave with essential oils is therapeutic. Worth every single penny.',
    date: '3 weeks ago',
    rating: 5,
  },
  {
    id: 'rev-4',
    name: 'Julian S.',
    service: 'Classic Haircut',
    text: 'Impeccable scissor work and crisp tapering. The shop interior is classy and masculine. You immediately sense the pride these barbers take in their trade.',
    date: 'Just recently',
    rating: 5,
  },
  {
    id: 'rev-5',
    name: 'Brandon L.',
    service: 'VIP Grooming Ritual',
    text: 'The full VIP package was phenomenal. From the greeting to the final hot towel and styling, everything was executed with master precision. TriKuts has earned a client for life.',
    date: 'Last month',
    rating: 5,
  },
];
