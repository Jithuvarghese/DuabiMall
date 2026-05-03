export type SceneTheme = 'dark' | 'light' | 'gold';

export interface SceneDefinition {
  id: string;
  label: string;
  shortLabel: string;
  component: string;
  theme: SceneTheme;
  navAccent: string;
}

export const SCENES: SceneDefinition[] = [
  { id: 'opening', label: 'Dubai Mall', shortLabel: 'Home', component: 'OpeningScene', theme: 'dark', navAccent: '#C9A96E' },
  { id: 'why', label: 'The Opportunity', shortLabel: 'Why', component: 'WhyScene', theme: 'dark', navAccent: '#C9A96E' },
  { id: 'retail', label: 'Retail', shortLabel: 'Retail', component: 'RetailScene', theme: 'dark', navAccent: '#C9A96E' },
  { id: 'luxury', label: 'Luxury', shortLabel: 'Luxury', component: 'LuxuryScene', theme: 'gold', navAccent: '#C9A96E' },
  { id: 'dining', label: 'Dining & Lifestyle', shortLabel: 'Dining', component: 'DiningScene', theme: 'dark', navAccent: '#C9A96E' },
  { id: 'attractions', label: 'Attractions', shortLabel: 'Attractions', component: 'AttractionsScene', theme: 'dark', navAccent: '#C9A96E' },
  { id: 'events', label: 'Events & Platform', shortLabel: 'Events', component: 'EventsScene', theme: 'dark', navAccent: '#C9A96E' },
  { id: 'contact', label: 'Connect', shortLabel: 'Contact', component: 'ContactScene', theme: 'dark', navAccent: '#C9A96E' }
];
