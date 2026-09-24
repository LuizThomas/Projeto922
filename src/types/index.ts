export interface Virtue {
  id: number;
  name: string;
  latinName?: string;
  summary: string;
  description: string;
  practicalReflection: string;
  iconName: string;
  candleNumber: number;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface HistoryEvent {
  year: string;
  dateStr?: string;
  title: string;
  description: string;
  details: string;
  tag: string;
}

export interface LeadershipOfficer {
  name: string;
  role: string;
  tier: 'executive' | 'advisory' | 'officer';
  term: string;
  description: string;
  photoUrl?: string;
  symbol: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'social' | 'community' | 'mothers' | 'integration';
  categoryLabel: string;
  description: string;
  impact: string;
  date: string;
  location: string;
  imageUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cerimonia' | 'social' | 'lideranca' | 'familia';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  aspectRatio?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
