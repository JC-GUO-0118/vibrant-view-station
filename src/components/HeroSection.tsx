import { ArrowRight } from "lucide-react";

const heroCards = [
  {
    status: "系列进行中",
    title: "EDM 自动化从零搭建",
    tags: ["#邮件营销", "#Klaviyo"],
    bg: "bg-[hsl(270_40%_85%)]",
  },
  {
    status: "持续更新",
    title: "CRO 转化率诊断与优化",
    tags: ["#转化率", "#数据分析"],
    bg: "bg-[hsl(340_40%_82%)]",
  },
  {
    status: "已上线",
    title: "Shopify 结账流程优化",
    tags: ["#Shopify", "#结账页"],
    bg: "bg-[hsl(36_50%_80%)]",
  },
  {
    status: "即将上线",
    title: "买家旅程邮件序列",
    tags: ["#自动化", "#复购"],
    bg: "bg-[hsl(180_30%_82%)]",
  },
];

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px] gap-0 min-h-[90vh]">
          {/* Left: Big typography */}
          <div className="flex flex-col justify-center py-20 md:py-32 pr-0 md:pr-16">
            <h1 className="font-display text-[clamp(2.2rem,5.5vw,5rem)] font-black leading-[1.08] tracking-tight mb-10">
              把踩过的坑，
              <br />
              整理成可复用的
              <br />
              <span className="text-gradient-warm">增长方法</span>。
            </h1>

            <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-lg mb-10">
              围绕 Shopify 运营、邮件自动化和转化率优化，分享判断逻辑、执行顺序和真正能重复使用的动作。
            </p>

            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="#steps"
                className="inline-flex items-center gap-2 bg-foreground text-background font-body font-medium text-sm px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                开始了解
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#tutorials"
                className="inline-flex items-center font-body font-medium text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                直接看教程
              </a>
            </div>
          </div>

          {/* Right: Scrolling cards column */}
          <div className="hidden md:flex flex-col gap-3 py-6 overflow-y-auto max-h-[90vh] scrollbar-hide">
            {heroCards.map((card) => (
              <div
                key={card.title}
                className={`${card.bg} rounded-2xl p-5 min-h-[180px] flex flex-col justify-between`}
              >
                <div>
                  <span className="text-xs font-body font-semibold uppercase tracking-wider text-foreground/60">
                    • {card.status}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-3 leading-snug text-foreground/90">
                    {card.title}
                  </h3>
                </div>
                <div className="flex gap-2 mt-4">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body text-foreground/70 bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
