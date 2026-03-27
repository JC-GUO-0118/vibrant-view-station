import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      {/* Decorative elements */}
      <div className="absolute top-32 right-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-24 left-8 w-48 h-48 rounded-full bg-accent/5 blur-2xl" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            {["Shopify", "EDM", "Conversion"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-body font-medium tracking-widest uppercase text-muted-foreground border border-border px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display text-5xl md:text-7xl font-black leading-tight tracking-tight mb-4"
          >
            跨境电商
            <br />
            <span className="text-gradient-warm">增长</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display text-xl md:text-2xl font-semibold text-foreground/80 mb-6"
          >
            把踩过的坑，整理成可复用的方法
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-xl mb-10"
          >
            围绕 Shopify 运营、邮件自动化和转化率优化，分享判断逻辑、执行顺序和真正能重复使用的动作。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <a
              href="#tutorials"
              className="inline-flex items-center gap-2 bg-foreground text-background font-body font-medium text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity group"
            >
              先看教程
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#resources"
              className="inline-flex items-center gap-2 text-foreground font-body font-medium text-sm px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              进入资源库
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
