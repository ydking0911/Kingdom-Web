export interface Job {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  difficulty: number;
  icon: string;
  color: string;
  stats: {
    attack: number;
    mobility: number;
    defense: number;
    partySupport: number;
    crowdControl: number;
    attackRange: number;
  };
}

export interface Content {
  id: string;
  title: string;
  description: string;
  image?: string;
  images?: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  features: string[];
}

export interface NavigationItem {
  id: string;
  name: string;
  path: string;
  icon?: string;
}

export interface ServerInfo {
  name: string;
  version: string;
  description: string;
  features: string[];
}
