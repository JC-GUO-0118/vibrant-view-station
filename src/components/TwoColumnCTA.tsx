import { ArrowRight } from "lucide-react";
import { contactLinks } from "@/data/siteContent";

const TwoColumnCTA = () => {
  return (
    <section className="grid md:grid-cols-2">
      {/* Left: 独立站卖家 */}
      <div className="bg-[hsl(36_50%_75%)] p-10 md:p-16 min-h-[350px] flex flex-col justify-between rounded-bl-2xl md:rounded-bl-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight text-foreground/90 mb-6">
          我是独立站卖家
        </h2>
        <div>
          <p className="text-foreground/70 font-body leading-relaxed mb-8 max-w-md">
            想提升 Shopify 独立站的转化率和邮件收入？从教程开始，拿资源落地，按系列顺序走。
          </p>
          <a
            href="#tutorials"
            className="inline-flex items-center gap-2 bg-foreground text-background font-body font-medium text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            开始学习
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Right: 服务商/合作 */}
      <div className="bg-[hsl(180_25%_78%)] p-10 md:p-16 min-h-[350px] flex flex-col justify-between rounded-br-2xl md:rounded-br-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight text-foreground/90 mb-6">
          我想联系 JC
        </h2>
        <div>
          <p className="text-foreground/70 font-body leading-relaxed mb-8 max-w-md">
            如果你是从小红书或其他平台过来的，先看内容，再通过联系入口对接后续沟通。
          </p>
          <a
            href={contactLinks.contactHub}
            className="inline-flex items-center gap-2 bg-foreground/80 text-background font-body font-medium text-sm px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            查看联系入口
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnCTA;
