const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center">
        <a href="#" className="font-display text-2xl font-black tracking-tight text-foreground uppercase">
          JC 的增长笔记
        </a>
      </div>
      <div className="border-b border-foreground" />
    </nav>
  );
};

export default Navbar;
