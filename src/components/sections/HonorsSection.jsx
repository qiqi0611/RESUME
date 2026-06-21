'use client';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

const honors = [
  {
    icon: Award,
    title: '三好研究生',
    year: '2026.06',
    desc: '北京交通大学',
  },
  {
    icon: Award,
    title: '一等学业奖学金',
    year: '2025.12',
    desc: '北京交通大学',
  },
  {
    icon: Trophy,
    title: '物流仿真设计大赛',
    year: '2021.10 — 12',
    desc: '校级一等奖',
  },
  {
    icon: Trophy,
    title: '智慧供应链创新创业挑战赛',
    year: '2021.02 — 05',
    desc: '全国二等奖',
  },
];

export default function HonorsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3">
            Honors
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            荣誉奖项
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {honors.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/20 hover:bg-accent/[0.04] transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={22} className="text-accent-light" />
              </div>
              <span className="text-[10px] text-accent-light/60 font-medium uppercase tracking-wider">
                {item.year}
              </span>
              <h3 className="text-sm font-medium text-white mt-1 mb-2 leading-snug">{item.title}</h3>
              <p className="text-xs text-text-secondary/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
