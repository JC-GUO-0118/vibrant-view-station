import { ArrowRight, ExternalLink } from "lucide-react";
import { contactLinks } from "@/data/siteContent";

const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-border bg-card/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <span className="text-xs font-body font-bold tracking-widest uppercase text-muted-foreground mb-4 block">
              CONTACT
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight mb-6">
              联系与更新
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
              这版首页先承担分流入口。想系统看内容，继续去教程和资源；想联系 JC，就走现在线上已经可用的联系与更新页。
            </p>
          </div>

          <div className="rounded-[2rem] border border-border bg-background p-7 shadow-card">
            <div className="space-y-4">
              <a
                href={contactLinks.contactHub}
                className="flex items-center justify-between rounded-2xl border border-border px-5 py-4 transition-colors hover:bg-card"
              >
                <div>
                  <p className="font-body text-sm text-muted-foreground">已可用入口</p>
                  <p className="font-display text-xl font-bold">联系与更新页</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </a>

              <a
                href={contactLinks.tutorials}
                className="flex items-center justify-between rounded-2xl bg-foreground px-5 py-4 text-background transition-opacity hover:opacity-90"
              >
                <div>
                  <p className="font-body text-sm text-background/70">先从内容开始</p>
                  <p className="font-display text-xl font-bold">去教程页</p>
                </div>
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={contactLinks.resources}
                className="flex items-center justify-between rounded-2xl bg-[hsl(180_25%_78%)] px-5 py-4 text-foreground transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <p className="font-body text-sm text-foreground/60">直接拿框架</p>
                  <p className="font-display text-xl font-bold">去资源页</p>
                </div>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
