import { FileText, CheckSquare, Layers, Map, Wrench, FlaskConical } from "lucide-react";
import { resources, toAbsoluteUrl } from "@/data/siteContent";

const iconMap = {
  "CRO 优先级矩阵": Layers,
  "Shopify 结账页检查 SOP": CheckSquare,
  "买家旅程邮件序列框架": FileText,
  "站内导航速查卡": Map,
  "CRO 常用工具栈": Wrench,
  "A/B 测试记录模板": FlaskConical,
};

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
            <a
              key={r.title}
              href={toAbsoluteUrl(r.path)}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-foreground/20 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-5">
                {(() => {
                  const Icon = iconMap[r.title as keyof typeof iconMap] ?? FileText;
                  return <Icon className="w-5 h-5 text-muted-foreground" />;
                })()}
              </div>
              <h3 className="font-display text-base font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                {r.desc}
              </p>
              <span className="text-xs font-body text-accent font-semibold">{r.status}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
