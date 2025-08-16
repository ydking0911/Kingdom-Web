# Kingdom Online RPG

마인크래프트 RPG 서버 **Kingdom Online**의 공식 웹사이트입니다.

## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Deployment**: Vercel/Netlify (정적 호스팅)

## 📁 프로젝트 구조

```
kingdom-web/
├─ public/               # 정적 파일(favicon, og 이미지)
├─ src/
│  ├─ assets/            # 이미지/아이콘
│  ├─ components/        # 재사용 컴포넌트
│  ├─ pages/             # 페이지 단위
│  ├─ hooks/             # 커스텀 훅
│  ├─ lib/               # 유틸, fetch 래퍼 등
│  ├─ styles/            # 전역/유틸 CSS
│  ├─ types/             # 전역 TS 타입
│  ├─ data/              # 정적 JSON/MD(콘텐츠)
│  ├─ config/            # 사이트 메타/네비/테마 토큰
│  ├─ main.tsx
│  └─ App.tsx
├─ .editorconfig
├─ .eslintrc.cjs         # 린트
├─ .prettierrc           # 포매터
├─ tsconfig.json
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

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📝 주요 기능

- 🏰 서버 정보 및 소개
- 👥 플레이어 가이드
- 🎮 게임 규칙 및 시스템
- 📊 서버 통계
- 🔗 커뮤니티 링크

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

**Kingdom Online RPG** - 마인크래프트에서 새로운 모험을 시작하세요! 🎮✨