export interface Job {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  difficulty: number;
  icon: string;
  stats: {
    health: number;
    mana: number;
    attack: number;
    defense: number;
  };
}

export interface Content {
  id: string;
  title: string;
  description: string;
  image: string;
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
