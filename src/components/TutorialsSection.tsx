import { ArrowRight, Clock, Mail, BarChart3 } from "lucide-react";

const tutorials = [
  {
    id: "01",
    type: "EDM",
    title: "独立站什么时候该开始做 EDM？",
    desc: "不是每个独立站都需要立刻做 EDM。但有一件事，从你有稳定访客的第一天就不能等。",
    time: "8 min",
  },
  {
    id: "02",
    type: "CRO",
    title: "你的网站不出单，问题大概率不在流量",
    desc: "很多人觉得\u201C再多一点流量就好了\u201D。但转化率只有 0.5%，翻倍流量也只是翻倍浪费。",
    time: "8 min",
  },
  {
    id: "03",
    type: "EDM",
    title: "你的前三条 Flow——搭完就不用天天管",
    desc: "独立站 EDM 前期最值得投入的不是营销邮件，而是三条自动化 Flow。搭一次，跑很久。",
    time: "9 min",
  },
  {
    id: "04",
    type: "CRO",
    title: "别急着改——先学会诊断",
    desc: "大多数 CRO 不是做少了，而是改错了地方。先判断问题卡在哪一环。",
    time: "8 min",
  },
  {
    id: "05",
    type: "EDM",
    title: "弃购挽回邮件为什么没人点？",
    desc: "大多数弃购邮件的问题，不是折扣不够大，而是没有回应用户当下真正的犹豫。",
    time: "5 min",
  },
  {
    id: "06",
    type: "CRO",
    title: "80分网站长什么样——基础设施篇",
    desc: "不管你的流量从哪来，这些基础设施不达标，转化率就不可能好。",
    time: "9 min",
  },
];

const TutorialsSection = () => {
  return (
    <section id="tutorials" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-xs font-body font-bold tracking-widest uppercase text-muted-foreground mb-4 block">
            TUTORIALS
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight">
            先看两条主线
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {tutorials.map((t) => (
            <a
              key={t.id}
              href="#"
              className="group bg-background p-7 hover:bg-card transition-colors duration-200 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-body font-bold text-foreground/40">{t.id}</span>
                <span className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded-full ${
                  t.type === "EDM" ? "bg-[hsl(270_40%_85%)] text-foreground/70" : "bg-[hsl(36_50%_80%)] text-foreground/70"
                }`}>
                  {t.type}
                </span>
              </div>

              <h3 className="font-display text-base font-bold mb-2 leading-snug group-hover:text-accent transition-colors flex-grow">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                {t.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <Clock className="w-3.5 h-3.5" />
                  {t.time}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;
