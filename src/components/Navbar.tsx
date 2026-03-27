const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
        <a href="/" className="font-display text-2xl font-black tracking-tight text-foreground uppercase">
          JC 的增长笔记
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-body text-muted-foreground">
          <a href="#steps" className="hover:text-foreground transition-colors">
            如何使用
          </a>
          <a href="#tutorials" className="hover:text-foreground transition-colors">
            教程
          </a>
          <a href="#resources" className="hover:text-foreground transition-colors">
            资源
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            联系
          </a>
        </div>
      </div>
      <div className="border-b border-foreground" />
    </nav>
  );
};

export default Navbar;
