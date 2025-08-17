import { Content } from '../types';

export const contents: Content[] = [
  {
    id: 'field',
    title: '필드 시스템',
    description: '1~9채널까지의 쾌적한 필드에서 필드별 몬스터를 사냥해서 강해짐',
    image: '/images/field-system.jpg',
    features: [
      '1~9채널까지의 쾌적한 필드 환경',
      '레벨별로 필드가 해금되며 지형별로 각기 다른 몬스터 출몰',
      '필드 보스 존재 - 처치 시 큰 보상 획득',
      '재화 수급 및 레벨업의 핵심 시스템',
      '다양한 지형과 몬스터로 지루함 없는 사냥'
    ],
  },
  {
    id: 'dungeon-raid',
    title: '던전/레이드 보스',
    description: '던전 보스는 10레벨 단위로 파티를 맺어 들어갈 수 있으며, 솔로 플레잉도 가능함',
    image: '/images/dungeon-boss.jpg',
    features: [
      '던전 보스: 10레벨 단위로 입장 가능',
      '파티 플레이 및 솔로 플레이 모두 지원',
      '던전 보스 처치 시 큰 보상 획득',
      '레이드 보스: 45레벨부터 입장 가능',
      'Kingdom Online의 자랑인 다양한 기믹과 패턴',
      '난이도 최상의 보스 몬스터 - 클리어 시 차원이 다른 보상'
    ],
  },
  {
    id: 'lifestyle',
    title: '생활 시스템',
    description: '생활은 시간이 지날때마다 차는 NP 스탯을 소모하여 입장할 수 있음',
    image: '/images/lifestyle-system.jpg',
    features: [
      '시간이 지날때마다 차는 NP 스탯 소모',
      '광산/채집/낚시로 나뉘어진 생활 분야',
      '각 분야마다 보상으로 얻는 아이템이 다름',
      'NP를 소중히 사용하여 효율적인 생활 플레이',
      '다양한 아이템 수집 및 경제 시스템'
    ],
  },
  {
    id: 'enhancement',
    title: '강화 시스템',
    description: '필드 및 생활로 얻은 아이템들로 무기 및 방어구를 강화할 수 있음',
    image: '/images/enhancement-system.jpg',
    features: [
      '무기 및 방어구 강화 시스템',
      '한 아이템을 +10강까지 강화 가능',
      '+10강 달성 시 계승 시스템 활성화',
      '0차 아이템부터 5차 아이템까지 존재',
      '아이템 계승을 통해 더 높은 전투 스킬과 보상',
      '지속적인 성장과 발전의 핵심'
    ],
  },
  {
    id: 'cube',
    title: '큐브 시스템',
    description: '던전보스 및 레이드보스 처치 시 획득할 수 있는 큐브로 장신구 및 보석을 강화',
    image: '/images/cube-system.jpg',
    features: [
      '던전보스 및 레이드보스 처치 시 큐브 획득',
      '장신구 및 보석 강화 시스템',
      '전투 능력 향상을 위한 핵심 시스템',
      '보스 처치의 추가 보상',
      '전략적인 큐브 활용으로 캐릭터 성장'
    ],
  },
  {
    id: 'collection',
    title: '수집 시스템',
    description: '몬스터 카드 수집 및 낚시 도감 시스템으로 완벽한 수집가가 되어보세요',
    image: '/images/collection-system.jpg',
    features: [
      '던전보스 및 레이드보스 처치 시 확률적으로 카드팩 획득',
      '다양한 종류의 몬스터 카드 수집',
      '생활 - 낚시를 하며 얻은 지형별 물고기들',
      '자동으로 도감에 수집되는 시스템',
      '완벽한 수집가를 위한 도전 과제',
      '서버 내 튜토리얼에서 자세한 정보 확인 가능'
    ],
  },
];
