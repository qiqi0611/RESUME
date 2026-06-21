'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, FileText } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-light text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
            联系我
          </h2>
          <p className="text-text-secondary/60 text-sm">
            期待与你交流，欢迎随时联系
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          {[
            { icon: Mail, label: '邮箱', value: '19986281712@163.com', href: 'mailto:19986281712@163.com' },
            { icon: Phone, label: '电话', value: '19986281712', href: 'tel:19986281712' },
            { icon: MapPin, label: '所在地', value: '北京', href: null },
            { icon: FileText, label: '简历', value: '下载 PDF 版本', href: '#' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href || undefined}
              className={`flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/20 hover:bg-accent/[0.04] transition-all duration-300 ${
                item.href ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-accent-light" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-text-secondary/40 uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm text-white truncate">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="mailto:19986281712@163.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-medium text-sm transition-all duration-200 hover:scale-105"
          >
            <Send size={16} />
            发送邮件
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-20 pt-8 border-t border-white/5"
        >
          <p className="text-xs text-text-secondary/30">
            &copy; 2026 吴琦. Built with Next.js &amp; Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
