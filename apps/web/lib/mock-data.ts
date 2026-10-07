export type Video = {
  id: string;
  title: string;
  description: string;
  channel: string;
  creator: string;
  views: string;
  duration: string;
  image: string;
  tags: string[];
  premium: boolean;
  likes: number;
  comments: number;
};

export const videos: Video[] = [
  {
    id: 'af-tech-001',
    title: 'The Future of African Tech',
    description: 'How young founders across the continent are building the next wave of digital products.',
    channel: 'Africa Square',
    creator: 'Amina K.',
    views: '1.2M views',
    duration: '18:42',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tags: ['Tech', 'Innovation', 'Startup'],
    premium: false,
    likes: 24500,
    comments: 2200,
  },
  {
    id: 'lagos-food-002',
    title: 'Street Food Stories in Lagos',
    description: 'A food journey across local favourites, hidden gems, and the culture behind Lagos street food.',
    channel: 'Naija Eats',
    creator: 'Kelechi O.',
    views: '870K views',
    duration: '11:08',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Food', 'Culture', 'Travel'],
    premium: false,
    likes: 19800,
    comments: 1600,
  },
  {
    id: 'creative-nairobi-003',
    title: 'Creative Entrepreneurship in Nairobi',
    description: 'Creators, designers, and founders unpacking how to build sustainable creative businesses.',
    channel: 'EastRise',
    creator: 'Lina T.',
    views: '540K views',
    duration: '22:17',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Business', 'Creator', 'Nairobi'],
    premium: true,
    likes: 14500,
    comments: 930,
  },
  {
    id: 'goalpulse-004',
    title: 'Sports Highlights: West Africa Finals',
    description: 'The energy, the goals, and the tactical stories behind the final week of the regional tournament.',
    channel: 'GoalPulse',
    creator: 'Esi D.',
    views: '2.4M views',
    duration: '09:55',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sports', 'Football', 'Africa'],
    premium: false,
    likes: 54000,
    comments: 3200,
  },
  {
    id: 'momo-creator-005',
    title: 'How to Monetize Your Voice as a Creator',
    description: 'A practical breakdown of how African creators are turning audience trust into sustainable income.',
    channel: 'Creator Playbook',
    creator: 'Tariq M.',
    views: '320K views',
    duration: '15:25',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    tags: ['Creators', 'Monetization', 'Business'],
    premium: true,
    likes: 12800,
    comments: 1450,
  },
  {
    id: 'accra-fashion-006',
    title: 'Fashion from Accra to Cape Town',
    description: 'A behind-the-scenes look at style, identity, and local design culture across the continent.',
    channel: 'Culture Frame',
    creator: 'Nia A.',
    views: '640K views',
    duration: '12:14',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    tags: ['Fashion', 'Culture', 'Lifestyle'],
    premium: false,
    likes: 16600,
    comments: 1180,
  },
];

export const shorts = [
  { id: 'short-01', title: 'Quick job tips for creators', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80' },
  { id: 'short-02', title: 'Fashion from Accra to Cape Town', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
  { id: 'short-03', title: 'Monetize your voice', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80' },
  { id: 'short-04', title: 'African music culture', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80' },
];

export const creators = [
  { name: 'Amina K.', followers: '925K', niche: 'Culture & stories' },
  { name: 'Kwame D.', followers: '780K', niche: 'Business + innovation' },
  { name: 'Lina T.', followers: '541K', niche: 'Lifestyle & food' },
  { name: 'Nairobi Crew', followers: '1.3M', niche: 'News & entertainment' },
];

export const subscriptionPlans = [
  {
    id: 'free',
    name: 'Free',
    amount: 0,
    currency: 'NGN',
    description: 'Watch videos with ads',
    perks: ['Watch content', 'Standard quality', 'Ad-supported experience'],
  },
  {
    id: 'premium',
    name: 'Premium',
    amount: 3500,
    currency: 'NGN',
    description: 'Ad-free experience and more features',
    perks: ['Ad-free viewing', 'HD playback', 'Offline downloads', 'Support African creators'],
  },
  {
    id: 'family',
    name: 'Family',
    amount: 8900,
    currency: 'NGN',
    description: 'For multiple users in one household',
    perks: ['5 premium accounts', 'Priority access', 'Higher streaming quality'],
  },
];
