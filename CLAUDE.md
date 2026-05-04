# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

이 저장소는 두 개의 독립적인 웹 애플리케이션으로 구성되어 있습니다:

1. **쇼핑 리스트 앱** (`index.html`) - 사용자가 구매할 물품을 추가, 완료 표시, 삭제할 수 있는 웹 앱
2. **AI 트렌드 프레젠테이션 생성 도구** (`create_ai_trends.js`) - Node.js 스크립트로 AI 트렌드 PowerPoint 프레젠테이션을 생성

## 쇼핑 리스트 앱 (index.html)

### 작동 원리
- **순수 HTML/CSS/JavaScript**로 구성 (빌드 프로세스 불필요)
- `localStorage`를 사용하여 로컬에서 데이터 저장 (서버 불필요)
- 반응형 디자인으로 모바일/데스크톱 모두 지원

### 핵심 기능
- 아이템 추가: `addItem()` 함수로 입력값 검증 후 저장
- 완료 표시: 체크박스로 `items[index].completed` 토글
- 아이템 삭제: `deleteItem()` 함수로 배열에서 제거
- XSS 방지: `escapeHtml()` 함수로 HTML 태그 이스케이프

### 실행 방법
```bash
# 브라우저에서 직접 열기
open index.html
# 또는 간단한 HTTP 서버로 실행
python3 -m http.server 8000
```

### 데이터 구조
localStorage의 `shoppingItems` 키에 JSON 배열 저장:
```javascript
[
  { text: "아이템 텍스트", completed: false },
  { text: "완료된 아이템", completed: true }
]
```

## AI 트렌드 프레젠테이션 생성 도구 (create_ai_trends.js)

### 작동 원리
- `pptxgenjs` 라이브러리를 사용하여 PowerPoint 파일 생성
- 5개의 AI 트렌드 카드를 한 슬라이드에 레이아웃
- 한국어 설명과 함께 색상, 아이콘, 테두리로 시각화

### 실행 방법
```bash
npm install
node create_ai_trends.js
# 출력: AI_Trends_2025-2026.pptx
```

### 주요 구조
- **색상 팔레트**: `colors` 객체에 모든 색상 정의
- **트렌드 데이터**: `trends` 배열에 각 트렌드의 제목, 설명, 색상, 아이콘 저장
- **레이아웃 계산**: `cardWidth`, `cardHeight`, `spacing` 변수로 카드 배치

### 수정 포인트
- 트렌드 추가/수정: `trends` 배열 수정
- 색상 변경: `colors` 객체 또는 `trend.color` 수정
- 슬라이드 레이아웃: `startX`, `startY`, `cardWidth`, `cardHeight`, `spacing` 값 조정

## 개발 환경

### 필수 설치
```bash
npm install
```

### 의존성
- `pptxgenjs`: PowerPoint 파일 생성 라이브러리

## 주요 고려사항

### 보안
- 쇼핑 리스트 앱: `escapeHtml()` 함수로 XSS 공격 방지
- localStorage는 클라이언트 전용이므로 민감한 데이터 저장 금지

### 성능
- 쇼핑 리스트: DOM 업데이트 시 전체 리스트 재렌더링 (대규모 데이터셋에서는 개선 필요)
- 프레젠테이션 생성: 일회성 스크립트로 매번 처음부터 생성

### 브라우저 호환성
- 모던 브라우저 (Chrome, Firefox, Safari, Edge)
- IE 미지원 (localStorage, flexbox, CSS Grid 사용)
