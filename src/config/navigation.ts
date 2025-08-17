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
    id: 'community',
    name: '커뮤니티',
    path: '/community',
  },
];

export const siteConfig = {
  name: 'Kingdom Online',
  description: '마인크래프트 RPG 서버',
  version: 'Minecraft 1.21.1',
  discordUrl: 'https://discord.gg/uEuAWez2Zb',
  serverIp: 'KDSV.KR',
};
