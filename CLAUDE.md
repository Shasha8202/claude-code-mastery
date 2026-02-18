# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

개발자 웹 이력서 — 단일 페이지 정적 웹사이트. 빌드 도구 없이 HTML, CSS, JavaScript, TailwindCSS(CDN)만 사용한다.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 개발 환경

- 빌드 도구 없음 — `index.html`을 브라우저에서 직접 열어 확인
- TailwindCSS는 CDN(`<script src="https://cdn.tailwindcss.com">`)으로 로드
- 별도 패키지 매니저(npm 등) 사용하지 않음

## 아키텍처

단일 페이지(`index.html`) 구조로, 8개 섹션(Hero, About, Skills, Experience, Projects, Education, Contact, Footer)을 시맨틱 HTML `<section>` 태그로 구분한다. 스타일링은 TailwindCSS 유틸리티 클래스를 우선 사용하고, TailwindCSS로 표현이 어려운 커스텀 스타일만 `css/custom.css`에 작성한다. 인터랙션(스크롤 애니메이션, 모바일 메뉴 토글 등)은 `js/main.js`에서 처리한다.

## 코드 컨벤션

- TailwindCSS 유틸리티 클래스를 우선 사용하고, `custom.css`는 최소화
- JavaScript는 ES6+ 문법 사용 (화살표 함수, const/let, 템플릿 리터럴)
- 외부 라이브러리 추가 시 CDN 방식으로 로드
