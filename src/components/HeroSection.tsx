import { ArrowRight } from "lucide-react";
import { getRotatedFeatureCards, toAbsoluteUrl } from "@/data/siteContent";

const HeroSection = () => {
  const featureCards = getRotatedFeatureCards();
  const scrollingCards = [...featureCards, ...featureCards];

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
          <div className="hidden md:block py-6">
            <div className="hero-sidebar-mask relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/35 p-3 shadow-card">
              <div className="animate-vertical-marquee flex flex-col gap-3 will-change-transform motion-reduce:animate-none">
                {scrollingCards.map((card, index) => (
                  <a
                    key={`${card.slug}-${index}`}
                    href={toAbsoluteUrl(card.path)}
                    className={`${card.bgClass} rounded-2xl p-5 min-h-[184px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1`}
                  >
                    <div>
                      <span className="text-xs font-body font-semibold uppercase tracking-wider text-foreground/60">
                        • {card.status}
                      </span>
                      <h3 className="font-display text-lg font-bold mt-3 leading-snug text-foreground/90">
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-body text-foreground/70 bg-background/45 backdrop-blur-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
