
import { Stat, Colors } from './types';

export const COLORS: Colors = {
  primary: '#FF4D30',
  background: '#000000',
  cardBg: 'rgba(15, 15, 15, 0.6)',
  textMuted: '#999999',
};

export const STATS: Stat[] = [
  { id: '1', value: '5+', label: 'Years Experience' },
  { id: '2', value: '200+', label: 'Projects Delivered' },
  { id: '3', value: '50+', label: 'Happy Clients' },
  { id: '4', value: '98%', label: 'Satisfaction Rate' },
];

export const VALUES = [
  {
    id: 'excellence',
    title: 'Excellence',
    description: 'We strive for perfection in every project we undertake.',
    icon: 'excellence'
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'Working closely with clients to achieve shared goals.',
    icon: 'collaboration'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Embracing new technologies and creative approaches.',
    icon: 'innovation'
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description: 'Honest communication and transparent processes.',
    icon: 'integrity'
  }
];

export const MISSION_VISION = [
  {
    id: 'mission',
    title: 'Our Mission',
    description: 'To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful impact.',
    icon: 'target',
    points: [
      'Deliver exceptional quality',
      'Foster innovation',
      'Build lasting relationships',
      'Drive measurable results'
    ]
  },
  {
    id: 'vision',
    title: 'Our Vision',
    description: 'To be the leading digital partner for businesses worldwide, recognized for our innovation, excellence, and transformative impact.',
    icon: 'eye',
    points: [
      'Global recognition',
      'Industry leadership',
      'Continuous innovation',
      'Sustainable growth'
    ]
  }
];

export const JOURNEY = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Started with a vision to transform digital experiences',
    icon: 'rocket'
  },
  {
    year: '2020',
    title: 'First Major Project',
    description: 'Delivered enterprise solution for Fortune 500 company',
    icon: 'star'
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew to 20+ experts across multiple domains',
    icon: 'users'
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Established strategic presence in international markets',
    icon: 'globe'
  },
  {
    year: '2023',
    title: 'AI Transformation',
    description: 'Pioneered AI-integrated solutions for modern brands',
    icon: 'cpu'
  }
];
