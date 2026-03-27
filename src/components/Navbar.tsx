const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-black tracking-tight text-foreground">
          JC 的增长笔记
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "教程", href: "#tutorials" },
            { label: "资源", href: "#resources" },
            { label: "关于", href: "#about" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-b border-foreground" />
    </nav>
  );
};

export default Navbar;
