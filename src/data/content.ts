import { Content } from '../types';

export const contents: Content[] = [
  {
    id: 'gathering',
    title: '채집 시스템',
    description: '여러 섬을 탐험하며 자원을 수집하세요.',
    image: '/images/gathering-system.jpg',
    features: [
      '꽃 덤불, 나무, 광석 등 다양한 자원 발견',
      '소장품 제작 및 컬렉션 완성',
      '채집, 벌목, 채광 기술 레벨 시스템',
      '레벨이 올라갈수록 희귀한 자원 획득',
      '대성공 - 가끔 2배의 보상을 얻을 수도 있습니다!'
    ],
  },
  {
    id: 'crafting',
    title: '제작 시스템',
    description: '수집한 자원으로 강력한 장비를 제작하세요.',
    image: '/images/crafting-system.jpg',
    features: [
      '다양한 장비 및 아이템 제작',
      '레시피 발견 및 조합 시스템',
      '품질 등급 시스템',
      '특수 효과 부여 가능'
    ],
  },
  {
    id: 'quests',
    title: '퀘스트 시스템',
    description: '다양한 퀘스트를 통해 모험을 경험하세요.',
    image: '/images/quest-system.jpg',
    features: [
      '메인 스토리 퀘스트',
      '일일 퀘스트 및 주간 퀘스트',
      '히든 퀘스트 발견',
      '퀘스트 보상 시스템'
    ],
  },
];
