import { ArrowRight, Clock, Mail, BarChart3 } from "lucide-react";

const tutorials = [
  {
    id: "01",
    type: "EDM",
    title: "独立站什么时候该开始做 EDM？大部分人要么太早要么太晚",
    desc: "不是每个独立站都需要立刻做 EDM。但有一件事，从你有稳定访客的第一天就不能等。",
    time: "8 min",
    icon: Mail,
  },
  {
    id: "02",
    type: "CRO",
    title: "你的网站不出单，问题大概率不在流量",
    desc: "很多人觉得\u201C再多一点流量就好了\u201D。但如果你的网站转化率只有 0.5%，翻倍流量也只是翻倍浪费。",
    time: "8 min",
    icon: BarChart3,
  },
  {
    id: "03",
    type: "EDM",
    title: "你的前三条 Flow——搭完就不用天天管，它会自己赚钱",
    desc: "独立站 EDM 前期最值得投入的不是营销邮件，而是三条自动化 Flow。搭一次，跑很久。",
    time: "9 min",
    icon: Mail,
  },
  {
    id: "04",
    type: "CRO",
    title: "别急着改——先学会诊断",
    desc: "大多数 CRO 不是做少了，而是改错了地方。先判断问题卡在哪一环，再决定该改什么。",
    time: "8 min",
    icon: BarChart3,
  },
  {
    id: "05",
    type: "EDM",
    title: "弃购挽回邮件为什么没人点？",
    desc: "大多数弃购邮件的问题，不是折扣不够大，而是没有回应用户当下真正的犹豫。",
    time: "5 min",
    icon: Mail,
  },
  {
    id: "06",
    type: "CRO",
    title: "80分网站长什么样——基础设施篇",
    desc: "不管你的流量从哪来，这些基础设施不达标，转化率就不可能好。这是及格线，不是加分项。",
    time: "9 min",
    icon: BarChart3,
  },
];

const TutorialsSection = () => {
  return (
    <section id="tutorials" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-xs font-body font-semibold tracking-widest uppercase text-accent mb-4 block">
            Tutorials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black mb-3 tracking-tight">
            先看两条主线
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            EDM 和 CRO 都先从系列开头进入
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {tutorials.map((t) => (
            <a
              key={t.id}
              href="#"
              className="group bg-background p-7 hover:bg-card transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-body font-bold text-accent">{t.id}</span>
                  <span
                    className={`text-xs font-body font-medium px-2.5 py-0.5 rounded-full ${
                      t.type === "EDM"
                        ? "bg-accent/10 text-accent"
                        : "bg-foreground/5 text-foreground/70"
                    }`}
                  >
                    {t.type}
                  </span>
                </div>
                <t.icon className="w-4 h-4 text-muted-foreground" />
              </div>

              <h3 className="font-display text-base font-bold mb-2 leading-snug group-hover:text-accent transition-colors">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                {t.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <Clock className="w-3.5 h-3.5" />
                  {t.time}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground hover:text-accent transition-colors group"
          >
            全部教程
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TutorialsSection;
