'use client';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    period: '2025.09 — 2027.06',
    school: '北京交通大学',
    degree: '物流工程与管理 硕士（全日制）',
    note: '211 工程',
    courses: ['最优化方法', '集装箱多式联运', '供应链建模与优化', '物流与供应链管理'],
  },
  {
    period: '2019.09 — 2023.06',
    school: '武汉科技大学',
    degree: '物流工程 本科（全日制）',
    note: '国际贸易 第二学位',
    courses: ['物流系统设计', '运筹学', '国际贸易实务', '国际物流'],
  },
];

export default function EducationSection() {
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
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            教育背景
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {education.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start mb-12 md:mb-16 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[21px] md:left-1/2 w-[13px] h-[13px] rounded-full bg-accent border-2 border-surface md:-translate-x-1/2 mt-1.5 z-10" />

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-32px)] ${
                  i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}
              >
                <div className={`inline-flex items-center gap-2 mb-1 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <GraduationCap size={14} className="text-accent-light shrink-0" />
                  <span className="text-xs text-accent-light font-medium">{item.period}</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-1">{item.school}</h3>
                <p className="text-sm text-text-secondary mb-1">{item.degree}</p>
                {item.note && (
                  <p className="text-xs text-accent-light/70 mb-3">{item.note}</p>
                )}

                {/* Course tags */}
                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {item.courses.map((course) => (
                    <span
                      key={course}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-text-secondary/70"
                    >
                      <BookOpen size={10} />
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
