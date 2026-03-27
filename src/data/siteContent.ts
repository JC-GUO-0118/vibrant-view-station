export type FeatureCard = {
  slug: string;
  title: string;
  status: string;
  tags: string[];
  path: string;
  publishedAt: string;
  bgClass: string;
};

export type TutorialCard = {
  id: string;
  type: "EDM" | "CRO";
  title: string;
  desc: string;
  time: string;
  path: string;
};

export type ResourceCard = {
  title: string;
  desc: string;
  path: string;
  status: string;
};

export const siteOrigin = "https://www.growwithjc.com";

export const heroFeatureCards: FeatureCard[] = [
  {
    slug: "first-three-flows",
    title: "你的前三条 Flow, 搭完就不用天天管",
    status: "EDM 系列更新",
    tags: ["#邮件营销", "#自动化"],
    path: "/tutorials/first-three-flows/",
    publishedAt: "2026-03-23",
    bgClass: "bg-[hsl(270_40%_85%)]",
  },
  {
    slug: "when-to-start-edm",
    title: "独立站什么时候该开始做 EDM？",
    status: "基础判断",
    tags: ["#EDM", "#起步"],
    path: "/tutorials/when-to-start-edm/",
    publishedAt: "2026-03-22",
    bgClass: "bg-[hsl(340_40%_82%)]",
  },
  {
    slug: "traffic-is-not-the-problem",
    title: "你的网站不出单，问题大概率不在流量",
    status: "CRO 系列",
    tags: ["#转化率", "#诊断"],
    path: "/tutorials/traffic-is-not-the-problem/",
    publishedAt: "2026-03-20",
    bgClass: "bg-[hsl(36_50%_80%)]",
  },
  {
    slug: "cro-diagnosis-before-action",
    title: "别急着改，先学会诊断",
    status: "持续更新",
    tags: ["#CRO", "#决策"],
    path: "/tutorials/cro-diagnosis-before-action/",
    publishedAt: "2026-03-21",
    bgClass: "bg-[hsl(180_30%_82%)]",
  },
  {
    slug: "abandoned-cart-email-mistakes",
    title: "弃购挽回邮件为什么没人点？",
    status: "实操修复",
    tags: ["#弃购", "#邮件"],
    path: "/tutorials/abandoned-cart-email-mistakes/",
    publishedAt: "2026-03-18",
    bgClass: "bg-[hsl(32_55%_83%)]",
  },
  {
    slug: "cro-80-point-website-basics",
    title: "80 分网站长什么样，基础设施篇",
    status: "站点体检",
    tags: ["#Shopify", "#基础设施"],
    path: "/tutorials/cro-80-point-website-basics/",
    publishedAt: "2026-03-17",
    bgClass: "bg-[hsl(155_28%_84%)]",
  },
  {
    slug: "edm-data-review",
    title: "EDM 数据复盘，先看哪几个数字？",
    status: "数据分析",
    tags: ["#Klaviyo", "#复盘"],
    path: "/tutorials/edm-data-review/",
    publishedAt: "2026-03-16",
    bgClass: "bg-[hsl(220_32%_84%)]",
  },
  {
    slug: "cro-product-page-persuasion",
    title: "产品页为什么说了很多，还是没人买",
    status: "页面优化",
    tags: ["#产品页", "#说服"],
    path: "/tutorials/cro-product-page-persuasion/",
    publishedAt: "2026-03-15",
    bgClass: "bg-[hsl(12_48%_85%)]",
  },
];

export const tutorials: TutorialCard[] = [
  {
    id: "01",
    type: "EDM",
    title: "独立站什么时候该开始做 EDM？",
    desc: "不是每个独立站都需要立刻做 EDM。但有一件事，从你有稳定访客的第一天就不能等。",
    time: "8 min",
    path: "/tutorials/when-to-start-edm/",
  },
  {
    id: "02",
    type: "CRO",
    title: "你的网站不出单，问题大概率不在流量",
    desc: "很多人觉得“再多一点流量就好了”。但转化率只有 0.5%，翻倍流量也只是翻倍浪费。",
    time: "8 min",
    path: "/tutorials/traffic-is-not-the-problem/",
  },
  {
    id: "03",
    type: "EDM",
    title: "你的前三条 Flow, 搭完就不用天天管",
    desc: "独立站 EDM 前期最值得投入的不是营销邮件，而是三条自动化 Flow。搭一次，跑很久。",
    time: "9 min",
    path: "/tutorials/first-three-flows/",
  },
  {
    id: "04",
    type: "CRO",
    title: "别急着改，先学会诊断",
    desc: "大多数 CRO 不是做少了，而是改错了地方。先判断问题卡在哪一环。",
    time: "8 min",
    path: "/tutorials/cro-diagnosis-before-action/",
  },
  {
    id: "05",
    type: "EDM",
    title: "弃购挽回邮件为什么没人点？",
    desc: "大多数弃购邮件的问题，不是折扣不够大，而是没有回应用户当下真正的犹豫。",
    time: "5 min",
    path: "/tutorials/abandoned-cart-email-mistakes/",
  },
  {
    id: "06",
    type: "CRO",
    title: "80 分网站长什么样，基础设施篇",
    desc: "不管你的流量从哪来，这些基础设施不达标，转化率就不可能好。",
    time: "9 min",
    path: "/tutorials/cro-80-point-website-basics/",
  },
];

export const resources: ResourceCard[] = [
  {
    title: "CRO 优先级矩阵",
    desc: "按影响程度和修复成本拆开，先抓最值得动手的转化点。",
    path: "/resources/cro-priority-matrix/",
    status: "可查看",
  },
  {
    title: "Shopify 结账页检查 SOP",
    desc: "从运费说明到移动端体验，快速排查结账阶段掉单环节。",
    path: "/resources/shopify-checkout-sop/",
    status: "可查看",
  },
  {
    title: "买家旅程邮件序列框架",
    desc: "从欢迎、弃购到复购，把不同阶段邮件目标和节奏排清楚。",
    path: "/resources/buyer-journey-email/",
    status: "可查看",
  },
  {
    title: "站内导航速查卡",
    desc: "快速判断页面路径是不是顺、信息是不是过多。",
    path: "/resources/ux-navigation-quickref/",
    status: "可查看",
  },
  {
    title: "CRO 常用工具栈",
    desc: "热图、录屏、漏斗分析工具按用途整理。",
    path: "/resources/cro-toolkit/",
    status: "可查看",
  },
  {
    title: "A/B 测试记录模板",
    desc: "测试目标、变量、指标和复盘结论放进同一张模板。",
    path: "/resources/ab-test-template/",
    status: "可查看",
  },
];

export const contactLinks = {
  contactHub: `${siteOrigin}/subscribe/`,
  tutorials: `${siteOrigin}/tutorials/`,
  resources: `${siteOrigin}/resources/`,
};

export function toAbsoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${siteOrigin}${path}`;
}

export function getRotatedFeatureCards(referenceDate = new Date()) {
  const sorted = [...heroFeatureCards].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  if (sorted.length <= 4) {
    return sorted;
  }

  const start = Math.floor(referenceDate.getTime() / 86_400_000) % sorted.length;
  return sorted.map((_, index) => sorted[(start + index) % sorted.length]);
}
