export interface ModuleDefinition {
  id: string;
  title: string;
  tabs: string[];
  defaultTab: string;
}

export const MODULES: ModuleDefinition[] = [
  { id: 'leasing', title: 'Leasing Paths', tabs: ['Flagship', 'Pop-Up', 'F&B'], defaultTab: 'Flagship' },
  { id: 'events', title: 'Events & Venue', tabs: ['Atrium', 'Promenade', 'Plaza'], defaultTab: 'Atrium' },
  { id: 'sponsorship', title: 'Sponsorship Tiers', tabs: ['Presenting Partner', 'Category Sponsor', 'Activation Partner'], defaultTab: 'Presenting Partner' }
];
