'use client';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    period: '2026.06 — 至今',
    company: '北京中物联酒业物流管理有限公司',
    role: '大学生储备干部（实习）',
    highlights: [
      '参与酒类物流供应链行业调研，整理分析行业数据，协助撰写行业调研报告',
      '协助分会行业会议、论坛及企业对接会的筹备、执行与复盘工作',
      '负责分会品牌宣传与内容运营，撰写推文、整理素材，拓展合作资源',
      '辅助外贸业务：完成英文行业资料翻译，整理国际酒类物流行业信息',
    ],
    stats: [],
  },
  {
    period: '2024.05 — 2025.08',
    company: '广州大顺发国际物流有限公司',
    role: '国际物流运营与单证',
    highlights: [
      '独立完成订舱、制单、报关全流程，日均处理 5+ 票，单据信息准确率 100%',
      '对接 20+ 家直客，参与合同签署及运价谈判；处理 200+ 票货物动态追踪',
      '协调船司、车队及海关，处理 50+ 次延误、查验等异常事件',
      '在报关公司集中学习两周，系统掌握报关、查验、转关及许可证管理流程',
    ],
    stats: [
      { value: '100%', label: '单据准确率' },
      { value: '200+', label: '货物追踪' },
      { value: '50+', label: '异常处理' },
    ],
  },
  {
    period: '2023.07 — 2024.04',
    company: '盈峰集团',
    role: '物流运营与调度',
    highlights: [
      '基于 GPS 实时监控 50+ 辆运输车辆，动态调整排班方案，日均调度 100+ 单',
      '分析运输时效、路线油耗及装卸数据，提出 3 项改进方案，年降运输成本约 10%',
      '建立运输运营数据报告机制，月均输出 8 份精细化分析报告',
      '年均处理紧急事件 20+ 起，应急响应时间 &lt; 30 分钟',
    ],
    stats: [
      { value: '−10%', label: '运输成本' },
      { value: '+15%', label: '周转效率' },
      { value: '< 30min', label: '应急响应' },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            工作经历
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative pl-12 mb-14 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[13px] top-1 w-[13px] h-[13px] rounded-full bg-accent border-2 border-surface z-10" />

              {/* Card */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs text-accent-light font-medium">
                    {exp.period}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <Building2 size={14} className="text-text-secondary/50" />
                  <h3 className="text-lg font-medium text-white">{exp.company}</h3>
                </div>
                <p className="text-sm text-accent-light/80 mb-4 font-medium">
                  {exp.role}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-text-secondary/80 leading-relaxed">
                      <CheckCircle2 size={14} className="text-accent/60 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                {exp.stats.length > 0 && (
                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    {exp.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-lg font-medium text-accent-light">
                          {s.value}
                        </div>
                        <div className="text-[10px] text-text-secondary/40">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
