import { Content } from '../types';

export const contents: Content[] = [
    {
    id: 'field',
    title: '필드 시스템',
    description: '1~9채널까지의 쾌적한 필드에서 필드별 몬스터를 사냥하여 성장하세요',
    image: '/images/field-system.png',
    features: [
        '<span class="text-minecraft-yellow font-semibold">1~9채널</span>까지의 쾌적하고 안정적인 필드 환경 제공',
        '<span class="text-minecraft-yellow font-semibold">레벨별 필드 해금 시스템</span>으로 지속적인 도전 의식 유발',
        '<span class="text-minecraft-yellow font-semibold">지형별로 차별화된 몬스터</span> 출몰로 다양한 전투 경험',
        '<span class="text-minecraft-yellow font-semibold">필드 보스 시스템</span>을 통한 대형 보상 획득 기회',
        '<span class="text-minecraft-yellow font-semibold">재화 수급 및 레벨업</span>을 위한 핵심 콘텐츠'
      ],
  },
    {
    id: 'dungeon-raid',
    title: '던전/레이드 보스',
    description: '던전 보스는 10레벨 단위로 파티를 맺어 입장할 수 있으며, 솔로 플레이도 지원합니다',
    images: [
      { src: '/images/dungeon-boss.png', alt: '던전 보스', label: '던전 보스' },
      { src: '/images/raid-boss.png', alt: '레이드 보스', label: '레이드 보스' }
    ],
    features: [
      '<span class="text-minecraft-yellow font-semibold">던전 보스</span>: <span class="text-blue-400 font-medium">10레벨 단위</span>로 체계적인 입장 시스템 운영',
      '<span class="text-minecraft-yellow font-semibold">파티 플레이 및 솔로 플레이</span>를 모두 지원하는 유연한 시스템',
      '<span class="text-minecraft-yellow font-semibold">던전 보스 처치</span>를 통한 대형 보상 획득',
      '<span class="text-minecraft-yellow font-semibold">레이드 보스</span>: <span class="text-red-400 font-medium">45레벨부터</span> 입장 가능한 고난이도 콘텐츠',
      '<span class="text-minecraft-yellow font-semibold">Kingdom Online만의 독창적인 기믹과 패턴</span> 시스템',
      '<span class="text-red-400 font-semibold">최상급 난이도</span>의 보스 몬스터로 클리어 시 <span class="text-minecraft-yellow font-bold">차원이 다른 보상</span> 제공'
    ],
  },
    {
    id: 'lifestyle',
    title: '생활 시스템',
    description: '시간이 지날때마다 축적되는 NP 스탯을 소모하여 다양한 생활 콘텐츠를 체험하세요',
    image: '/images/lifestyle-system.png',
    features: [
        '<span class="text-minecraft-yellow font-semibold">시간 기반 NP 스탯 축적 시스템</span>으로 지속적인 플레이 유도',
        '<span class="text-minecraft-yellow font-semibold">광산/채집/낚시</span>로 세분화된 전문적인 생활 분야',
        '<span class="text-minecraft-yellow font-semibold">각 분야별 차별화된 보상 아이템</span>으로 전략적 선택의 기회',
        '<span class="text-minecraft-yellow font-semibold">NP 스탯의 효율적 활용</span>을 통한 최적화된 생활 플레이',
        '<span class="text-minecraft-yellow font-semibold">다양한 아이템 수집 및 경제 시스템</span>을 통한 부가 가치 창출'
      ],
  },
    {
    id: 'enhancement',
    title: '강화 시스템',
    description: '필드 및 생활을 통해 획득한 아이템들로 무기 및 방어구를 체계적으로 강화하세요',
    image: '/images/enhancement-system.png',
    features: [
        '<span class="text-minecraft-yellow font-semibold">무기 및 방어구</span>를 위한 전문적인 강화 시스템',
        '<span class="text-minecraft-yellow font-semibold">단계별 강화</span>를 통한 <span class="text-green-400 font-bold">+10강</span>까지의 체계적 성장',
        '<span class="text-green-400 font-bold">+10강 달성</span> 시 활성화되는 <span class="text-minecraft-yellow font-semibold">혁신적인 계승 시스템</span>',
        '<span class="text-blue-400 font-medium">0차부터 5차</span>까지의 단계별 아이템 등급 시스템',
        '<span class="text-minecraft-yellow font-semibold">아이템 계승</span>을 통한 고급 전투 스킬 및 보상 획득',
        '<span class="text-minecraft-yellow font-semibold">지속적인 성장과 발전</span>을 위한 핵심 메커니즘'
      ],
  },
    {
    id: 'cube',
    title: '큐브 시스템',
    description: '던전 보스 및 레이드 보스 처치 시 획득하는 큐브로 장신구 및 보석을 전략적으로 강화하세요',
    image: '/images/cube-system.png',
    features: [
        '<span class="text-minecraft-yellow font-semibold">보스 처치</span>를 통한 <span class="text-purple-400 font-semibold">큐브 획득</span>으로 추가 보상 시스템 제공',
        '<span class="text-minecraft-yellow font-semibold">장신구 및 보석</span>을 위한 전문적인 강화 시스템',
        '<span class="text-minecraft-yellow font-semibold">전투 능력 향상</span>을 위한 핵심적인 성장 요소',
        '<span class="text-minecraft-yellow font-semibold">보스 처치의 부가 가치</span>를 극대화하는 보상 시스템',
        '<span class="text-minecraft-yellow font-semibold">전략적인 큐브 활용</span>을 통한 체계적인 캐릭터 성장'
      ],
  },
    {
    id: 'collection',
    title: '수집 시스템',
    description: '몬스터 카드 수집 및 낚시 도감 시스템을 통해 완벽한 수집가의 꿈을 실현하세요',
    images: [
      { src: '/images/monster-card-collection.png', alt: '몬스터 카드 도감', label: '몬스터 카드 도감' },
      { src: '/images/fishing-collection.png', alt: '낚시 도감', label: '낚시 도감' }
    ],
    features: [
      '<span class="text-minecraft-yellow font-semibold">보스 처치</span> 시 확률적으로 획득하는 <span class="text-purple-400 font-semibold">프리미엄 카드팩</span> 시스템',
      '<span class="text-minecraft-yellow font-semibold">다양한 종류의 몬스터 카드</span>를 통한 수집의 재미',
      '<span class="text-minecraft-yellow font-semibold">생활 시스템의 낚시</span>를 통한 <span class="text-blue-400 font-medium">지형별 특화 물고기</span> 수집',
      '<span class="text-minecraft-yellow font-semibold">자동화된 도감 수집 시스템</span>으로 편의성 극대화',
      '<span class="text-minecraft-yellow font-semibold">완벽한 수집가</span>를 위한 도전 과제 및 성취감 제공',
      '<span class="text-minecraft-yellow font-semibold">서버 내 상세한 튜토리얼</span>을 통한 완벽한 가이드 제공'
    ],
  },
];
