'use client';
import { motion } from 'framer-motion';
import { Code, GitBranch, Database, Box, Users, Trophy, Warehouse, UserCheck, BarChart3 } from 'lucide-react';

const project1Steps = [
  {
    icon: GitBranch,
    title: '混合博弈模型',
    desc: 'Stackelberg-Logit 框架刻画铁路运营商与货代群体（高/低时间价值）间的定价-选择交互',
    color: 'border-violet-500/30 bg-violet-500/5',
  },
  {
    icon: Code,
    title: '双算法求解框架',
    desc: '遗传算法（GA）与差分进化（DE）协同求解，实现双层规划的自适应迭代',
    color: 'border-blue-500/30 bg-blue-500/5',
  },
  {
    icon: Database,
    title: '企业数据校准',
    desc: '基于广州—满洲里—莫斯科走廊一手运营数据，完成参数校准与算例验证',
    color: 'border-emerald-500/30 bg-emerald-500/5',
  },
];

const project1Tech = ['Stackelberg 博弈', 'Logit 模型', '遗传算法', '差分进化', 'Python', '双层规划'];

const project2Steps = [
  {
    icon: Warehouse,
    title: '仓储布局与流程优化',
    desc: '针对物流中心布局混乱、拣货效率低等痛点，基于专业物流仿真软件设计运行模型，结合 SLP 系统布置法重构仓储布局，实现仓内拣货效率提升 18%、设备闲置成本降低 12%',
    color: 'border-teal-500/30 bg-teal-500/5',
  },
  {
    icon: UserCheck,
    title: '团队统筹与管理',
    desc: '作为负责人主导 3 人跨学科团队，运用甘特图拆解赛事三大核心模块，统筹模型设计、技术落地与展示汇报全流程，精细化管理确保各阶段高效交付',
    color: 'border-indigo-500/30 bg-indigo-500/5',
  },
  {
    icon: BarChart3,
    title: '技术成果输出与汇报',
    desc: '撰写物流中心优化技术白皮书，设计"问题痛点—数据推演—价值闭环"汇报逻辑，完成 15 分钟全动态 PPT 路演',
    color: 'border-pink-500/30 bg-pink-500/5',
  },
];

const project2Tech = ['物流仿真', 'SLP 系统布置法', '甘特图管理', '数据可视化'];

const project3Steps = [
  {
    icon: Box,
    title: '仿真运营决策',
    desc: '扮演制造商角色，基于市场数据分析制定生产与库存策略，通过需求预测实现原材料周转率提升 15%，有效控制库存成本',
    color: 'border-amber-500/30 bg-amber-500/5',
  },
  {
    icon: Users,
    title: '多角色协同',
    desc: '与分销商、零售商建立高效协同机制，动态调整采购与配送计划，优化整条供应链响应速度，经营利润排名前 10%',
    color: 'border-rose-500/30 bg-rose-500/5',
  },
  {
    icon: Trophy,
    title: '数据复盘与展示',
    desc: '基于运营数据复盘分析，用可视化工具呈现结果并完成方案讲解',
    color: 'border-cyan-500/30 bg-cyan-500/5',
  },
];

const project3Tech = ['供应链仿真', '库存管理', '数据分析', '团队协作'];

export default function ProjectSection() {
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
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            项目经历
          </h2>
        </motion.div>

        {/* ── 项目一：中俄班列 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="text-xs font-mono text-accent-light/60 px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
            01
          </span>
          <span className="text-sm text-text-secondary/50">硕士课题 | 2025.10 — 至今</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
        >
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 leading-snug">
            中俄班列公铁竞争策略优化研究
          </h3>
          <p className="text-text-secondary/70 text-sm leading-relaxed max-w-2xl">
            建立 Stackelberg-Logit 混合博弈模型，刻画铁路运营商与异质性货代群体间的定价—选择交互机制；
            设计 GA 与 DE 双算法求解框架；基于企业一手数据完成参数校准与算例验证，
            交付可复用的双层规划自适应求解器。
          </p>
        </motion.div>

        {/* 项目一 步骤 */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {project1Steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border ${step.color}`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <step.icon size={18} className="text-accent-light" />
              </div>
              <h4 className="text-base font-medium text-white mb-2">{step.title}</h4>
              <p className="text-sm text-text-secondary/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 项目一 技术标签 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-20"
        >
          {project1Tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-text-secondary/70 hover:border-accent/30 hover:text-accent-light transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* ── 项目二：物流仿真大赛（新增）── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="text-xs font-mono text-teal-400/60 px-2 py-0.5 rounded bg-teal-400/10 border border-teal-400/20">
            02
          </span>
          <span className="text-sm text-text-secondary/50">项目负责人 | 2021.10 — 2021.12</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-8 rounded-3xl bg-gradient-to-br from-teal-400/10 to-teal-400/5 border border-teal-400/20"
        >
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 leading-snug">
            全国大学生物流仿真设计大赛
          </h3>
          <p className="text-text-secondary/70 text-sm leading-relaxed max-w-2xl">
            针对物流中心布局混乱、拣货效率低等实际痛点，基于专业物流仿真软件构建运行模型，
            结合 SLP 系统布置法完成仓储布局重构；作为负责人统筹 3 人跨学科团队，
            从建模到汇报全流程管理，最终获校级一等奖。
          </p>
        </motion.div>

        {/* 项目二 步骤 */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {project2Steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border ${step.color}`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <step.icon size={18} className="text-accent-light" />
              </div>
              <h4 className="text-base font-medium text-white mb-2">{step.title}</h4>
              <p className="text-sm text-text-secondary/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 项目二 技术标签 + 成果 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center gap-2 mb-20"
        >
          {project2Tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-text-secondary/70 hover:border-teal-400/30 hover:text-teal-400 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-400/10 border border-teal-400/20 text-xs text-teal-400/80">
            <Trophy size={13} />
            校级一等奖
          </span>
        </motion.div>

        {/* ── 项目三：供应链竞赛（原项目二）── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="text-xs font-mono text-amber-400/60 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
            03
          </span>
          <span className="text-sm text-text-secondary/50">队员（核心成员）| 2021.02 — 2021.05</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-8 rounded-3xl bg-gradient-to-br from-amber-400/10 to-amber-400/5 border border-amber-400/20"
        >
          <h3 className="text-2xl sm:text-3xl font-medium text-white mb-4 leading-snug">
            全国大学生智慧供应链创新创业挑战赛
          </h3>
          <p className="text-text-secondary/70 text-sm leading-relaxed max-w-2xl">
            在供应链仿真平台中扮演制造商角色，与分销商、零售商协同完成从采购到交付的全链路运营决策；
            通过数据分析优化生产与库存策略，提升周转效率，最终在 1124 支参赛队伍中获二等奖。
          </p>
        </motion.div>

        {/* 项目三 步骤 */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {project3Steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border ${step.color}`}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <step.icon size={18} className="text-accent-light" />
              </div>
              <h4 className="text-base font-medium text-white mb-2">{step.title}</h4>
              <p className="text-sm text-text-secondary/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 项目三 技术标签 + 成果 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center gap-2"
        >
          {project3Tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-text-secondary/70 hover:border-amber-400/30 hover:text-amber-400 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/20 text-xs text-amber-400/80">
            <Trophy size={13} />
            全国二等奖
          </span>
        </motion.div>
      </div>
    </section>
  );
}
