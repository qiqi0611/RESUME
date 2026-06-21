'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Link2, Brain, Globe, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import { useRef, useCallback, useState } from 'react';

/* ── 3D 倾斜头像卡片 ── */
function TiltAvatar() {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // 最大倾斜 ±12°，比较克制
    setRotateX(((y - centerY) / centerY) * -12);
    setRotateY(((x - centerX) / centerX) * 12);
    setShinePos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }, []);

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShinePos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className="flex-shrink-0"
      style={{ perspective: '800px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-40 sm:w-48 rounded-2xl overflow-hidden aspect-[3/4]"
        style={{
          transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
          boxShadow: `
            0 20px 40px rgba(99,102,241,${Math.abs(rotateX + rotateY) / 30}),
            0 0 0 1px rgba(255,255,255,0.08)
          `,
        }}
      >
        {/* 玻璃反光层 */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${shinePos.x}% ${shinePos.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
        {/* 图片 */}
        <Image
          src="/avatar.jpg"
          alt="吴琦"
          fill
          className="object-contain"
          priority
        />
        {/* 底部渐变遮罩 */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

/* ── 渐变描边标签 ── */
function AnimatedTag({ text, icon: Icon }) {
  return (
    <span
      className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-text-secondary overflow-hidden group cursor-default"
    >
      {/* 渐变描边 - hover 时流动 */}
      <span className="absolute inset-0 rounded-full p-[1px]">
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/50 via-purple-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
      </span>
      <Icon size={12} className="relative text-accent-light/70 group-hover:text-accent-light transition-colors" />
      <span className="relative">{text}</span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* 内容层 */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* 左侧：文字信息 */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-6"
          >
            <p className="text-accent-light text-sm font-medium tracking-widest uppercase">
              Logistics Engineering &amp; Management
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6"
          >
            <span className="text-white">吴琦</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-text-secondary max-w-xl mb-4"
          >
            物流工程与管理硕士
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap gap-2 mb-8 md:justify-start justify-center"
          >
            {[
              { text: '供应链优化', icon: Link2 },
              { text: '运筹建模', icon: Brain },
              { text: '国际物流', icon: Globe },
              { text: '数据分析', icon: BarChart3 },
            ].map((tag) => (
              <AnimatedTag key={tag.text} text={tag.text} icon={tag.icon} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="mb-10"
          >
            <p className="text-sm text-text-secondary/80 leading-relaxed">
              MEM硕士，兼具物流运营实操经验、运筹建模研究能力与行业协会工作背景。研究生阶段主攻中欧班列公铁竞争博弈模型，具备复杂系统建模、优化求解与数据驱动的决策分析能力，熟练运用 Python 进行科学计算。熟悉国际物流全流程（订舱—报关—在途跟踪），擅长行业调研报告撰写。英语六级水平，具备商务英语翻译与国际行业信息整理能力。在校期间任学生会主席，积累了扎实的沟通协调与团队管理经验。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap gap-4 md:justify-start justify-center"
          >
            {/* 主按钮：发光效果 */}
            <a
              href="mailto:19986281712@163.com"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm transition-all duration-300 hover:scale-105"
            >
              <Mail size={16} />
              联系我
              <span className="hidden sm:inline text-white/60 text-xs ml-1">19986281712@163.com</span>
              {/* 发光层 */}
              <span className="absolute inset-0 rounded-xl bg-accent blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
            </a>
            {/* 次按钮：边框发光 */}
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-text-primary font-medium text-sm transition-all duration-300 hover:scale-105 border-white/10 bg-white/5 hover:border-accent/50"
            >
              <Download size={16} />
              下载简历
              {/* 边框发光 */}
              <span className="absolute inset-0 rounded-xl shadow-sm shadow-accent/0 group-hover:shadow-accent/20 transition-shadow duration-300" />
            </a>
          </motion.div>
        </div>

        {/* 右侧：3D 倾斜头像 */}
        <TiltAvatar />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-text-secondary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
