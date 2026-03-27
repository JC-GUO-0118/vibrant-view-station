const items = [
  "Shopify 运营",
  "EDM 自动化",
  "转化率优化",
  "弃购挽回",
  "A/B 测试",
  "Klaviyo",
  "结账页优化",
  "邮件序列",
  "数据分析",
  "用户旅程",
];

const MarqueeSection = () => {
  const doubled = [...items, ...items];

  return (
    <div className="w-full bg-[hsl(340_40%_85%)] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-6 text-sm font-body font-medium text-foreground/70">
            {item}
            <span className="ml-6 text-foreground/30">——</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
