import { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  {
    id: 'main',
    name: '메인',
    path: '/',
  },
  {
    id: 'jobs',
    name: '직업 정보',
    path: '/jobs',
  },
  {
    id: 'content',
    name: '콘텐츠',
    path: '/content',
  },
  {
    id: 'discord',
    name: '디스코드',
    path: '/discord',
  },
];

export const siteConfig = {
  name: 'Kingdom Online',
  description: '마인크래프트 RPG 서버',
  version: 'Minecraft: Java Edition 1.21.1',
  discordUrl: 'https://discord.gg/uEuAWez2Zb',
  serverIp: 'KDSV.KR',
};
