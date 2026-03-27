import { ArrowRight, FileText, CheckSquare, Layers, Map, Wrench, FlaskConical } from "lucide-react";

const resources = [
  { icon: Layers, title: "CRO 优先级矩阵", desc: "按影响程度和修复成本拆开，先抓最值得动手的转化点。" },
  { icon: CheckSquare, title: "Shopify 结账页检查 SOP", desc: "从运费说明到移动端体验，快速排查结账阶段掉单环节。" },
  { icon: FileText, title: "买家旅程邮件序列框架", desc: "从欢迎、弃购到复购，把不同阶段邮件目标和节奏排清楚。" },
  { icon: Map, title: "站内导航速查卡", desc: "快速判断页面路径是不是顺、信息是不是过多。" },
  { icon: Wrench, title: "CRO 常用工具栈", desc: "热图、录屏、漏斗分析工具按用途整理。" },
  { icon: FlaskConical, title: "A/B 测试记录模板", desc: "测试目标、变量、指标和复盘结论放进同一张模板。" },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-xs font-body font-bold tracking-widest uppercase text-muted-foreground mb-4 block">
            RESOURCES
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight">
            精选资源
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r) => (
            <div
              key={r.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-foreground/20 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-5">
                <r.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-display text-base font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                {r.desc}
              </p>
              <span className="text-xs font-body text-accent font-semibold">即将开放</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
