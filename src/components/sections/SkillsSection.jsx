'use client';
import { motion } from 'framer-motion';
import { Brain, Truck, Languages } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: '运筹与算法',
    skills: [
      'Stackelberg 博弈',
      'Logit 离散选择',
      '遗传算法 (GA)',
      '差分进化 (DE)',
      'Python 科学计算',
      '大模型辅助编程',
      'AI 工作流应用',
    ],
  },
  {
    icon: Truck,
    title: '物流与系统',
    skills: [
      'ERP / WMS 实操',
      '物流系统建模',
      '调度与路径规划',
      'SLP 系统布置法',
      '多式联运方案',
    ],
  },
  {
    icon: Languages,
    title: '语言与其他',
    skills: [
      'CET-6',
      '商务英语读写译',
      '英文单证处理',
      'C1 驾驶证',
    ],
  },
];

const tools = ['Excel', 'Word', 'PPT', '数据可视化', '调研报告撰写'];

export default function SkillsSection() {
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
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            专业技能
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <category.icon size={18} className="text-accent-light" />
                <h3 className="text-sm font-medium text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-text-secondary/70 hover:border-accent/30 hover:text-accent-light transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部工具栏 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xs text-text-secondary/40 mr-1">基础工具</span>
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 rounded-md text-xs text-text-secondary/50 bg-white/[0.02] border border-white/5"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
