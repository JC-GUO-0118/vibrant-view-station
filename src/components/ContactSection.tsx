import { ArrowRight, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="relative bg-foreground rounded-2xl p-10 md:p-16 text-center overflow-hidden">
          <div className="relative z-10">
            <MessageCircle className="w-8 h-8 text-accent mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-4xl font-black text-background mb-4 tracking-tight">
              先把联系和更新收在一个地方
            </h2>
            <p className="text-background/60 font-body max-w-lg mx-auto mb-8 leading-relaxed text-lg">
              这里不再用假表单拦你留邮箱。先看教程、拿资源，再决定要不要继续跟进后续更新。
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-body font-medium text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity group"
              >
                看联系与更新
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#resources"
                className="inline-flex items-center gap-2 text-background/70 font-body font-medium text-sm hover:text-background transition-colors"
              >
                先收资源
              </a>
            </div>
          </div>
        </div>

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
