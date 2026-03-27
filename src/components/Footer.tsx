import { contactLinks } from "@/data/siteContent";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h4 className="text-xs font-body font-bold tracking-widest uppercase text-muted-foreground mb-4">
              关于
            </h4>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              JC 的增长笔记是一个围绕 Shopify 独立站增长的内容站，记录 EDM、CRO 和运营上的实战经验。
            </p>
          </div>

          {/* 内容导航 */}
          <div>
            <h4 className="text-xs font-body font-bold tracking-widest uppercase text-muted-foreground mb-4">
              内容导航
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#tutorials" className="text-sm font-body text-foreground hover:text-accent transition-colors">教程</a>
              <a href="#resources" className="text-sm font-body text-foreground hover:text-accent transition-colors">资源</a>
              <a href="#steps" className="text-sm font-body text-foreground hover:text-accent transition-colors">怎么用这个站</a>
            </div>
          </div>

          {/* 联系 */}
          <div>
            <h4 className="text-xs font-body font-bold tracking-widest uppercase text-muted-foreground mb-4">
              联系
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href={contactLinks.contactHub} className="text-sm font-body text-foreground hover:text-accent transition-colors">联系与更新</a>
              <a href={contactLinks.resources} className="text-sm font-body text-foreground hover:text-accent transition-colors">资源入口</a>
            </div>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <span className="font-display text-2xl font-black tracking-tight text-foreground uppercase">
              JC 的增长笔记
            </span>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs font-body text-muted-foreground">
            © 2026 JC 的增长笔记
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
