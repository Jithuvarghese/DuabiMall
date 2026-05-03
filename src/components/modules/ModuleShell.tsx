'use client';

import { useEffect, useId } from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../ui/CTAButton';
import { cn } from '../../utils/cn';

interface ModuleShellProps {
  title: string;
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  onClose: () => void;
  children: React.ReactNode;
}

export function ModuleShell({ title, tabs, activeTab, onTabChange, onClose, children }: ModuleShellProps) {
  const titleId = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    // focus management: focus first focusable in dialog and restore on close
    const previousActive = document.activeElement as HTMLElement | null;
    const dialog = document.querySelector('[role="dialog"]') as HTMLElement | null;
    if (dialog) {
      const focusable = dialog.querySelector<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])");
      focusable?.focus();
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousActive?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-black/85 p-4 backdrop-blur-xl sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="presentation"
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col rounded-[2rem] border border-white/10 bg-deck-dark/95 p-5 text-white shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Module</p>
            <h3 id={titleId} className="mt-2 font-display text-4xl text-white">{title}</h3>
          </div>
          <CTAButton type="button" onClick={onClose}>Close</CTAButton>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={cn('rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition', activeTab === tab ? 'border-gold bg-gold text-black' : 'border-white/10 bg-white/5 text-white/70')}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-6 flex-1 overflow-auto">{children}</div>
      </div>
    </motion.div>
  );
}
