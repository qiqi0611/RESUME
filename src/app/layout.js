import '@/app/globals.css';

export const metadata = {
  title: '吴琦 — 物流工程与管理 · 个人简历',
  description: '北京交通大学物流工程与管理硕士，专注供应链优化、运筹建模与国际物流',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="bg-surface text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
