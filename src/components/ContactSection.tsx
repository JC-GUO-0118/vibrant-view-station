import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-dark rounded-2xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-accent/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <MessageCircle className="w-8 h-8 text-accent mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              先把联系和更新收在一个地方
            </h2>
            <p className="text-primary-foreground/70 font-body max-w-lg mx-auto mb-8 leading-relaxed">
              这里不再用假表单拦你留邮箱。先看教程、拿资源，再决定要不要继续跟进后续更新。
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gradient-warm text-accent-foreground font-body font-medium text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity group"
              >
                看联系与更新
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#resources"
                className="inline-flex items-center gap-2 text-primary-foreground/80 font-body font-medium text-sm px-6 py-3 rounded-full border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors"
              >
                先收资源
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm font-bold text-foreground">JC 的增长笔记</span>
          <p className="text-xs text-muted-foreground font-body">
            如果你是从小红书或其他社媒过来的，现阶段最直接的方式仍然是回到你看到内容的平台私信我。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
