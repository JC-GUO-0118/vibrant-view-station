import { ArrowRight, Clock } from "lucide-react";
import { toAbsoluteUrl, tutorials } from "@/data/siteContent";

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
              href={toAbsoluteUrl(t.path)}
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
