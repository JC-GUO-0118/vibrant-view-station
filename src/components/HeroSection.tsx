import { ArrowRight } from "lucide-react";

const tags = [
  { label: "Shopify 运营", color: "bg-accent/15 text-accent-foreground" },
  { label: "EDM 自动化", color: "bg-secondary text-secondary-foreground" },
  { label: "转化率优化", color: "bg-muted text-muted-foreground" },
];

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full py-20 md:py-32">
        <div className="grid md:grid-cols-[1fr_380px] gap-16 items-start">
          {/* Left: Big typography */}
          <div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[1.05] tracking-tight mb-8">
              把踩过的坑，
              <br />
              整理成可复用的
              <span className="text-gradient-warm">增长方法</span>。
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-xl mb-10">
              围绕 Shopify 运营、邮件自动化和转化率优化，分享判断逻辑、执行顺序和真正能重复使用的动作。
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#tutorials"
                className="inline-flex items-center gap-2 bg-foreground text-background font-body font-medium text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity group"
              >
                先看教程
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#resources"
                className="inline-flex items-center gap-2 text-foreground font-body font-medium text-sm hover:text-accent transition-colors"
              >
                进入资源库
              </a>
            </div>
          </div>

          {/* Right: Content cards stack */}
          <div className="hidden md:flex flex-col gap-3 pt-4">
            {[
              {
                status: "系列进行中",
                statusColor: "text-accent",
                title: "EDM 自动化从零搭建",
                tags: ["#邮件营销", "#Klaviyo"],
                bg: "bg-accent/8",
              },
              {
                status: "持续更新",
                statusColor: "text-foreground/60",
                title: "CRO 转化率诊断与优化",
                tags: ["#转化率", "#数据分析"],
                bg: "bg-secondary",
              },
              {
                status: "即将上线",
                statusColor: "text-muted-foreground",
                title: "Shopify 结账流程优化",
                tags: ["#Shopify", "#结账页"],
                bg: "bg-card",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`${card.bg} rounded-xl p-5 border border-border/50`}
              >
                <span className={`text-xs font-body font-semibold uppercase tracking-wider ${card.statusColor}`}>
                  • {card.status}
                </span>
                <h3 className="font-display text-sm font-bold mt-2 mb-3 leading-snug">
                  {card.title}
                </h3>
                <div className="flex gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body text-muted-foreground bg-background/60 px-2.5 py-1 rounded-md"
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
