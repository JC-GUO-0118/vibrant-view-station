import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-body font-medium tracking-widest uppercase text-accent mb-4 block">
              About
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              我是 JC
            </h2>
            <p className="font-display text-lg text-foreground/80 font-semibold mb-4">
              做 Shopify 独立站增长运营
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              这个站记录我在 EDM、CRO 和 Shopify 运营上的实战经验，只写自己验证过的方法。
              教程负责拆问题，资源负责给框架，联系与更新页负责把后续入口统一收起来。
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground hover:text-accent transition-colors group"
            >
              了解更多关于我
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-display text-lg font-bold mb-5">你可以在这里找到什么？</h3>
              <div className="space-y-4">
                {[
                  { label: "教程", desc: "拆解 EDM 和 CRO 的执行逻辑" },
                  { label: "资源", desc: "可直接复用的框架和模板" },
                  { label: "联系", desc: "统一收好后续入口" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-body font-semibold text-foreground">{item.label}</span>
                      <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -z-10 inset-0 bg-accent/5 rounded-2xl blur-xl scale-105" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
