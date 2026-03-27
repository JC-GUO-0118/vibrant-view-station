import { motion } from "framer-motion";
import { ArrowRight, FileText, CheckSquare, Layers, Map, Wrench, FlaskConical } from "lucide-react";

const resources = [
  { icon: Layers, title: "CRO 优先级矩阵", desc: "把页面问题按影响程度和修复成本拆开，帮助你先抓最值得动手的转化点。" },
  { icon: CheckSquare, title: "Shopify 结账页检查 SOP", desc: "从运费说明、信任信息到移动端输入体验，快速排查结账阶段最容易掉单的环节。" },
  { icon: FileText, title: "买家旅程邮件序列框架", desc: "从欢迎、弃购到复购，把不同阶段用户最该收到的邮件目标和节奏先排清楚。" },
  { icon: Map, title: "站内导航与路径速查卡", desc: "用一张速查卡快速判断页面之间的路径是不是顺、信息是不是过多。" },
  { icon: Wrench, title: "CRO 常用工具栈", desc: "热图、录屏、漏斗分析和实验记录工具按用途整理，快速搭起最小分析环境。" },
  { icon: FlaskConical, title: "A/B 测试记录模板", desc: "把测试目标、变量、观察指标和复盘结论放进同一张模板里。" },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-body font-medium tracking-widest uppercase text-accent mb-4 block">
            Resources
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            精选资源
          </h2>
          <p className="text-muted-foreground font-body">框架、清单与模板</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-base font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                {r.desc}
              </p>
              <span className="text-xs font-body text-accent font-medium">完整版即将开放</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground hover:text-accent transition-colors group"
          >
            进入资源页
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;
