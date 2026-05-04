---
name: 자동 코드 리뷰
command: /code-review
description: 코드를 자동으로 리뷰하고 개선 사항을 제안합니다
---

# 자동 코드 리뷰 스킬

코드 파일이나 코드 스니펫을 입력하면 다음 항목들을 체계적으로 검토합니다.

## 검토 항목

### 🔒 보안 (Security)
- 입력 검증 및 sanitization
- SQL injection, XSS 등 취약점
- 암호/토큰 노출 여부
- 권한 관리 및 인증
- 의존성 보안 문제

### ⚡ 성능 (Performance)
- 불필요한 루프나 중복 코드
- 메모리 누수 가능성
- 데이터베이스 쿼리 최적화
- 캐싱 기회
- 알고리즘 효율성

### 🎯 코드 품질 (Code Quality)
- 가독성 및 명확성
- 함수/변수 네이밍
- 함수 길이 및 복잡도
- 코드 중복 (DRY 원칙)
- 주석 및 문서화

### 🔧 아키텍처 (Architecture)
- 설계 패턴 준수
- 모듈화 및 단일 책임 원칙
- 의존성 관리
- 테스트 가능성

### 🧪 테스트 (Testing)
- 단위 테스트 범위
- 엣지 케이스 처리
- 에러 핸들링
- 모킹 및 스텁 활용

### 📋 유지보수성 (Maintainability)
- 오래된 라이브러리 사용
- deprecated 함수 사용
- 기술 부채
- 마이그레이션 기회

## 사용 방법

### 1. 파일 지정
```
/code-review path/to/file.js
```

### 2. 코드 스니펫 제공
```
/code-review
[코드 붙여넣기]
```

### 3. 현재 브랜치 전체 검토
```
/code-review --branch
```

### 4. 특정 폴더 검토
```
/code-review --dir src/
```

## 출력 형식

리뷰 결과는 다음과 같이 구성됩니다:

```
## 📊 리뷰 요약
- 심각도: [낮음/중간/높음]
- 문제점: N개 발견
- 개선 추천: M개

## 🔴 [높음] 심각한 문제
- 문제: [설명]
- 위치: [파일:라인]
- 해결안: [제안]

## 🟡 [중간] 개선 권장사항
- 문제: [설명]
- 이유: [설명]
- 제안: [예시]

## 🟢 [낮음] 코드 스타일
- 제안: [설명]

## ✅ 좋은 점
- [발견된 긍정적 측면]
```

## 예시

### 입력
```javascript
function getData(user_id) {
  let data = [];
  const query = "SELECT * FROM users WHERE id = " + user_id;
  const result = db.query(query);
  
  for(let i=0; i<result.length; i++) {
    data.push(result[i]);
  }
  
  return data;
}
```

### 출력
```
## 📊 리뷰 요약
- 심각도: 높음
- 문제점: 3개 발견
- 개선 추천: 4개

## 🔴 [높음] SQL Injection 취약점
- 문제: 사용자 입력을 직접 SQL 쿼리에 연결
- 위치: 3번 라인
- 해결안: 파라미터화된 쿼리 사용
  const query = "SELECT * FROM users WHERE id = ?";
  const result = db.query(query, [user_id]);

## 🟡 [중간] 불필요한 루프
- 문제: 배열을 순회하며 같은 배열에 추가
- 이유: 성능 저하
- 제안: return result; 직접 반환 또는 map() 사용

## 🟢 [낮음] 네이밍 컨벤션
- 제안: snake_case → camelCase 사용
  user_id → userId

## ✅ 좋은 점
- 함수 목적이 명확함
- 반환 값 타입이 일관적
```

## 추가 옵션

- `--strict`: 엄격한 검토 (모든 권장사항 포함)
- `--security-only`: 보안 관련 항목만 검토
- `--performance-only`: 성능 관련 항목만 검토
- `--suggest-tests`: 테스트 코드 제안 포함
- `--format json`: JSON 형식 출력
- `--lang [언어]`: 특정 프로그래밍 언어 지정

## 지원 언어

- JavaScript/TypeScript
- Python
- Java
- Go
- Rust
- C++
- C#
- SQL
- React/Vue/Angular
- 기타 주요 언어

---

**팁**: 코드 리뷰는 코드 품질 향상의 첫 단계입니다. 리뷰 결과를 바탕으로 단계적으로 개선하세요!
