# 개발자 웹 이력서 프로젝트 로드맵

## 기술 스택

- HTML5
- CSS3
- JavaScript (ES6+)
- TailwindCSS (CDN)

## 프로젝트 구조

```
/
├── index.html          # 메인 이력서 페이지
├── css/
│   └── custom.css      # 커스텀 스타일 (TailwindCSS 보완)
├── js/
│   └── main.js         # 인터랙션 및 애니메이션
└── assets/
    └── images/         # 프로필 사진 등 이미지 리소스
```

## 이력서 섹션 구성

### 1. 헤더 (Hero Section)
- 프로필 사진
- 이름, 직함 (예: 풀스택 개발자)
- 한 줄 소개
- 연락처 정보 (이메일, GitHub, LinkedIn)

### 2. 자기소개 (About Me)
- 간단한 자기소개 문단
- 개발 경력 요약

### 3. 기술 스택 (Skills)
- 프론트엔드: HTML, CSS, JavaScript, React
- 백엔드: Node.js, Python
- 데이터베이스: MySQL, MongoDB
- 도구: Git, Docker, VS Code
- 프로그레스 바 또는 태그 형태로 시각화

### 4. 경력 사항 (Experience)
- 회사명, 직책, 근무 기간
- 주요 업무 및 성과 (2~3개 항목)
- 타임라인 형태 레이아웃

### 5. 프로젝트 (Projects)
- 프로젝트명, 설명, 사용 기술
- GitHub 링크 / 데모 링크
- 카드 형태 그리드 레이아웃

### 6. 학력 (Education)
- 학교명, 전공, 졸업 연도

### 7. 연락처 (Contact)
- 이메일 폼 또는 연락처 정보
- SNS 링크 아이콘

### 8. 푸터 (Footer)
- 저작권 표시
- 맨 위로 스크롤 버튼

## 개발 단계

### Phase 1 - 기본 구조 세팅
- [ ] 프로젝트 폴더 및 파일 생성
- [ ] TailwindCSS CDN 연결
- [ ] HTML 시맨틱 구조 작성 (header, main, section, footer)
- [ ] 반응형 메타 태그 설정

### Phase 2 - 섹션별 마크업 및 스타일링
- [ ] 헤더/네비게이션 바 구현
- [ ] Hero 섹션 (프로필 영역)
- [ ] About Me 섹션
- [ ] Skills 섹션 (프로그레스 바 / 태그)
- [ ] Experience 섹션 (타임라인)
- [ ] Projects 섹션 (카드 그리드)
- [ ] Education 섹션
- [ ] Contact 섹션
- [ ] Footer 구현

### Phase 3 - 인터랙션 및 애니메이션
- [ ] 네비게이션 스무스 스크롤
- [ ] 스크롤 시 섹션 페이드인 애니메이션
- [ ] 모바일 햄버거 메뉴
- [ ] 맨 위로 가기 버튼

### Phase 4 - 반응형 및 마무리
- [ ] 모바일 반응형 레이아웃 점검
- [ ] 태블릿 반응형 레이아웃 점검
- [ ] 다크모드 토글 (선택)
- [ ] 크로스 브라우저 테스트
- [ ] 성능 최적화 (이미지 압축 등)

## 샘플 이력서 데이터

```
이름: 김개발
직함: 풀스택 웹 개발자
이메일: dev.kim@example.com
GitHub: github.com/devkim
LinkedIn: linkedin.com/in/devkim

자기소개:
3년차 풀스택 개발자로, 사용자 중심의 웹 애플리케이션 개발에 열정을 가지고 있습니다.
React와 Node.js를 활용한 프로젝트 경험이 풍부하며, 클린 코드와 효율적인 설계를 지향합니다.

경력:
- ABC 테크 | 프론트엔드 개발자 | 2023.03 ~ 현재
  - React 기반 대시보드 UI 개발
  - 성능 최적화로 로딩 시간 40% 단축

- XYZ 소프트 | 주니어 개발자 | 2021.06 ~ 2023.02
  - Node.js REST API 설계 및 개발
  - MySQL 데이터베이스 설계

프로젝트:
- 할 일 관리 앱 | React, Node.js, MongoDB
- 날씨 대시보드 | JavaScript, OpenWeather API
- 포트폴리오 웹사이트 | HTML, CSS, TailwindCSS

학력:
- OO대학교 컴퓨터공학과 졸업 (2021)
```
