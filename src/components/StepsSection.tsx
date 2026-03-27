import { useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    label: "STEP 1 • 看教程",
    title: "先搞清楚判断逻辑",
    desc: "教程不教操作，教你判断：什么时候该做 EDM、先改哪个页面、测试怎么排优先级。按系列顺序看，比单篇零散收藏有用。",
    quote: "看完前三篇 EDM 教程，我才发现自己之前的自动化 Flow 全搭反了。",
    quoter: "Shopify 卖家",
    quoteRole: "月销 $20k+",
  },
  {
    label: "STEP 2 • 拿资源",
    title: "用框架落地执行",
    desc: "每篇教程对应的框架、检查清单和模板都整理在资源库。拿走直接用，不用从零开始搭。",
    quote: "CRO 优先级矩阵帮我在两周内找到了转化率最大的瓶颈。",
    quoter: "DTC 品牌运营",
    quoteRole: "负责独立站增长",
  },
  {
    label: "STEP 3 • 实操验证",
    title: "在自己的站上跑一遍",
    desc: "方法看完、资源拿到，下一步就是在你自己的 Shopify 站上实操。遇到问题回来翻教程，或者直接联系我。",
    quote: "弃购邮件改完第二天，挽回率从 3% 涨到 11%。",
    quoter: "独立站创业者",
    quoteRole: "刚起步 3 个月",
  },
  {
    label: "STEP 4 • 持续跟进",
    title: "后续更新和联系入口",
    desc: "新教程、新资源会持续更新。如果你想跟进后续内容或直接沟通，联系入口统一收在一个地方。",
    quote: "终于有一个地方能系统地跟着学 Shopify 增长了。",
    quoter: "跨境电商新手",
    quoteRole: "准备开第一个站",
  },
];

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="steps" className="border-t border-foreground">
      <div className="max-w-[1400px] mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="border-b border-border">
            {/* Accordion header */}
            <button
              onClick={() => setActiveStep(i === activeStep ? -1 : i)}
              className="w-full text-left px-6 md:px-12 py-5 font-body text-sm font-bold tracking-wide uppercase hover:bg-card/50 transition-colors"
            >
              {step.label}
            </button>

            {/* Accordion content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeStep === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 md:px-12 pb-12 pt-4">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Left: Text */}
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-black tracking-tight mb-5">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed mb-8 text-base">
                      {step.desc}
                    </p>

                    {/* Quote */}
                    <div className="bg-card rounded-lg p-4 mb-5 border border-border">
                      <p className="text-sm font-body text-foreground/80 italic leading-relaxed">
                        "{step.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-xs font-body font-bold text-muted-foreground">
                          {step.quoter[0]}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-body font-medium text-foreground">{step.quoter}</p>
                        <p className="text-xs font-body text-muted-foreground">{step.quoteRole}</p>
                      </div>
                      <a
                        href="#tutorials"
                        className="ml-auto inline-flex items-center gap-2 bg-foreground text-background font-body font-medium text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                      >
                        开始
                      </a>
                    </div>
                  </div>

                  {/* Right: Decorative card */}
                  <div className={`rounded-2xl p-6 min-h-[280px] flex flex-col justify-between ${
                    i === 0 ? "bg-[hsl(270_40%_85%)]" :
                    i === 1 ? "bg-[hsl(340_40%_82%)]" :
                    i === 2 ? "bg-[hsl(36_50%_80%)]" :
                    "bg-[hsl(180_30%_82%)]"
                  }`}>
                    <div>
                      <span className="text-xs font-body font-semibold uppercase tracking-wider text-foreground/50">
                        • {i === 0 ? "教程系列" : i === 1 ? "资源库" : i === 2 ? "实操阶段" : "持续更新"}
                      </span>
                      <h4 className="font-display text-xl font-bold mt-4 text-foreground/80">
                        {step.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {(i === 0 ? ["EDM 系列", "CRO 系列"] :
                        i === 1 ? ["框架", "模板", "清单"] :
                        i === 2 ? ["Shopify", "优化"] :
                        ["联系入口", "更新通知"]
                      ).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-body text-foreground/60 bg-background/40 px-3 py-1.5 rounded-full border border-foreground/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
