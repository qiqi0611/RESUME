'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function NavBar({ sections }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 100;
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="text-lg font-medium tracking-tight text-white hover:text-accent-light transition-colors">
          WQ
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm transition-all duration-200',
                  activeSection === section.id
                    ? 'text-white bg-white/10'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                )}
              >
                {section.label}
              </button>
            ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-1">
          {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={cn(
                  'px-4 py-2.5 rounded-lg text-sm text-left transition-colors',
                  activeSection === section.id
                    ? 'text-white bg-white/10'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                )}
              >
                {section.label}
              </button>
            ))}
        </div>
      )}
    </nav>
  );
}
