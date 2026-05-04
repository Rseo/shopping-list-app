const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AI Analysis";
pres.title = "AI Technology Trends 2025-2026";

// 색상 팔레트
const colors = {
  primary: "0D9488",      // Teal
  secondary: "14B8A6",    // Seafoam
  accent: "2F3C7E",       // Navy
  lightBg: "F8FAFC",      // Light gray
  darkText: "1E293B",     // Dark slate
  white: "FFFFFF",
  trend1: "06B6D4",       // Cyan
  trend2: "8B5CF6",       // Violet
  trend3: "EC4899",       // Pink
  trend4: "F97316",       // Orange
  trend5: "22C55E"        // Green
};

let slide = pres.addSlide();
slide.background = { color: colors.lightBg };

// 상단 헤더 배경
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0,
  y: 0,
  w: 10,
  h: 1.2,
  fill: { color: colors.primary },
  line: { type: "none" }
});

// 제목
slide.addText("AI Technology Trends 2025-2026", {
  x: 0.5,
  y: 0.25,
  w: 9,
  h: 0.7,
  fontSize: 40,
  bold: true,
  color: colors.white,
  fontFace: "Arial",
  align: "left",
  valign: "middle",
  margin: 0
});

// 부제목
slide.addText("Key Developments Shaping the AI Landscape", {
  x: 0.5,
  y: 1.4,
  w: 9,
  h: 0.35,
  fontSize: 16,
  color: colors.accent,
  fontFace: "Arial",
  align: "left",
  italic: true
});

// 5개 트렌드 정의
const trends = [
  {
    title: "Advanced LLMs",
    desc: "더 강력하고 효율적인 대형언어모델",
    color: colors.trend1,
    icon: "🔧"
  },
  {
    title: "Multimodal AI",
    desc: "텍스트, 이미지, 음성 통합 처리",
    color: colors.trend2,
    icon: "🎨"
  },
  {
    title: "AI Agents",
    desc: "자율적으로 작동하는 지능형 에이전트",
    color: colors.trend3,
    icon: "🤖"
  },
  {
    title: "Generative AI",
    desc: "콘텐츠 생성형 AI의 활용 확대",
    color: colors.trend4,
    icon: "✨"
  },
  {
    title: "Edge AI",
    desc: "기기 내에서 동작하는 경량 AI",
    color: colors.trend5,
    icon: "⚡"
  }
];

// 트렌드 카드 배치
const cardWidth = 1.8;
const cardHeight = 2.8;
const startX = 0.4;
const startY = 2.0;
const spacing = 0.15;

trends.forEach((trend, index) => {
  const x = startX + index * (cardWidth + spacing);

  // 카드 배경
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x,
    y: startY,
    w: cardWidth,
    h: cardHeight,
    fill: { color: colors.white },
    line: { color: trend.color, width: 3 },
    rectRadius: 0.15,
    shadow: {
      type: "outer",
      color: "000000",
      blur: 4,
      offset: 2,
      angle: 135,
      opacity: 0.08
    }
  });

  // 상단 컬러 바
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x,
    y: startY,
    w: cardWidth,
    h: 0.35,
    fill: { color: trend.color },
    line: { type: "none" }
  });

  // 아이콘
  slide.addText(trend.icon, {
    x: x,
    y: startY + 0.5,
    w: cardWidth,
    h: 0.6,
    fontSize: 32,
    align: "center",
    valign: "middle",
    margin: 0
  });

  // 트렌드 제목
  slide.addText(trend.title, {
    x: x + 0.1,
    y: startY + 1.15,
    w: cardWidth - 0.2,
    h: 0.55,
    fontSize: 13,
    bold: true,
    color: colors.darkText,
    align: "center",
    valign: "middle",
    fontFace: "Arial",
    margin: 0
  });

  // 설명 텍스트
  slide.addText(trend.desc, {
    x: x + 0.1,
    y: startY + 1.75,
    w: cardWidth - 0.2,
    h: 0.9,
    fontSize: 11,
    color: "64748B",
    align: "center",
    valign: "middle",
    fontFace: "Arial",
    margin: 0
  });
});

// 하단 요약 텍스트
slide.addText(
  [
    {
      text: "AI는 기술 혁신의 중심축",
      options: { bold: true, breakLine: true }
    },
    {
      text:
        " • 각 영역에서 새로운 기능과 활용처 확대  • 조직의 경쟁력 향상을 위한 핵심 전략  • 지속적인 학습과 적응이 필수",
      options: { fontSize: 10, color: "64748B" }
    }
  ],
  {
    x: 0.5,
    y: 5.15,
    w: 9,
    h: 0.4,
    fontSize: 11,
    color: colors.darkText,
    align: "left",
    valign: "top",
    fontFace: "Arial",
    margin: 0
  }
);

pres.writeFile({ fileName: "/Users/seohee/claude/study-06/AI_Trends_2025-2026.pptx" });
console.log("✅ AI Trends 프레젠테이션이 생성되었습니다.");
