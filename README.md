# Kingdom Online RPG

마인크래프트 RPG 서버 **Kingdom Online**의 공식 웹사이트입니다.

## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + PostCSS
- **Routing**: React Router DOM
- **Deployment**: Vercel/Netlify (정적 호스팅)

## 📁 프로젝트 구조

```
kingdom-web/
├─ public/                    # 정적 파일
│  ├─ images/                # 이미지 파일
│  │  ├─ character/          # 캐릭터 애니메이션 (slime.gif)
│  │  ├─ jobs/               # 직업별 이미지
│  │  ├─ logo.png            # 로고
│  │  └─ kingdom-castle-bg.jpg # 메인 배경
├─ src/
│  ├─ components/            # 재사용 컴포넌트
│  │  ├─ Header.tsx         # 네비게이션 헤더
│  │  ├─ Button.tsx         # 버튼 컴포넌트
│  │  ├─ HexagonChart.tsx   # 직업 스탯 육각형 차트
│  │  └─ ScrollToTop.tsx    # 페이지 이동 시 스크롤 상단 이동
│  ├─ pages/                 # 페이지 컴포넌트
│  │  ├─ Home.tsx           # 메인 페이지 (슬라임 애니메이션 포함)
│  │  ├─ Jobs.tsx           # 직업 정보 페이지
│  │  ├─ Content.tsx        # 게임 콘텐츠 페이지
│  │  └─ Community.tsx      # 커뮤니티 페이지 (실시간 서버 상태)
│  ├─ hooks/                 # 커스텀 훅
│  │  ├─ useScrollAnimation.ts # 스크롤 애니메이션
│  │  └─ useServerStatus.ts  # 마인크래프트 서버 상태 API
│  ├─ styles/                # 전역 CSS
│  │  └─ globals.css        # Tailwind + 커스텀 스타일
│  ├─ types/                 # TypeScript 타입 정의
│  ├─ data/                  # 정적 데이터
│  │  ├─ jobs.ts            # 직업 정보 데이터
│  │  └─ content.ts         # 게임 콘텐츠 데이터
│  ├─ config/                # 사이트 설정
│  │  └─ navigation.ts      # 네비게이션 및 사이트 설정
│  ├─ main.tsx
│  └─ App.tsx
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.ts
```

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행 (포트 3000)
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🎮 주요 기능

### 🏠 메인 페이지 (Home)
- **Kingdom Online** 브랜딩 및 소개
- **서버주소 복사하기** 버튼 (클립보드 자동 복사)
- **토스트 메시지** 시스템 (부드러운 애니메이션)
- **슬라임 애니메이션** (5개 캐릭터가 다양한 속도로 움직임)
- **서버 정보** 카드 (IP, 버전, 디스코드 링크)

### 👥 직업 정보 (Jobs)
- **10개 직업** 상세 정보 (어쌔신, 아처, 워리어, 화염술사, 바드, 윈더, 거너, 무투가, 드래곤워리어, 프로스트)
- **육각형 스탯 차트** (공격력, 기동성, 방어력, 파티지원, 저지력, 공격범위)
- **직업별 난이도** 및 **개발자 오피셜** 코멘트
- **직업별 이미지** 표시

### 🎯 게임 콘텐츠 (Content)
- **6개 게임 시스템** 상세 설명
  - 필드 시스템
  - 던전/레이드 보스
  - 생활 시스템
  - 강화 시스템
  - 큐브 시스템
  - 수집 시스템
- **이미지 갤러리** (단일/다중 이미지 지원)

### 🌐 커뮤니티 (Community)
- **디스코드 커뮤니티** 정보
- **커뮤니티 이벤트** (일일/주간 퀘스트, 핫타임, 레이드 챌린지)
- **실시간 서버 상태** (MCSrvStat.us API 연동)
  - 온라인/오프라인 상태
  - 플레이어 수
  - 서버 버전
  - MOTD (Message of the Day)

### 🎨 UI/UX 특징
- **중세 고딕 테마** (Kingdom Online 브랜딩)
- **노란색 계열** 컬러 스킴
- **스크롤 애니메이션** (fade-in, slide, scale 효과)
- **반응형 디자인** (모바일/데스크톱 지원)
- **고정 헤더** (스크롤 시 반투명 효과)

## 🔧 기술적 특징

### 애니메이션 시스템
- **CSS 애니메이션**: 슬라임 캐릭터 움직임
- **스크롤 애니메이션**: IntersectionObserver API 활용
- **토스트 메시지**: 부드러운 등장/사라짐 효과

### API 연동
- **MCSrvStat.us**: 마인크래프트 서버 상태 실시간 조회
- **자동 새로고침**: 30초마다 서버 상태 업데이트

### 성능 최적화
- **코드 스플리팅**: React Router 기반 라우트 분할
- **이미지 최적화**: WebP 지원 및 fallback 처리
- **CSS 최적화**: Tailwind JIT 컴파일

## 🚀 배포

정적 호스팅 서비스를 통해 배포됩니다:
- **Vercel**: 자동 배포 및 CDN
- **Netlify**: 자동 배포 및 폼 처리

## 🤝 기여하기

1. 이슈를 생성하거나 기존 이슈를 확인하세요
2. 새로운 기능 브랜치를 생성하세요 (`feature/기능명`)
3. 변경사항을 커밋하고 푸시하세요
4. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

**Kingdom Online** - 정교한 클래스, 잔혹한 레이드 🏰⚔️