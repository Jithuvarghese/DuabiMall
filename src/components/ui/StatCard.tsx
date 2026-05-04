'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  highlight?: boolean;
  delay?: number;
}

export function StatCard({ label, value, highlight = false, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className={`group rounded-[2rem] border px-5 sm:px-6 py-6 sm:py-8 transition-all duration-300 ${
        highlight
          ? 'border-gold/50 bg-gold/5 shadow-lg shadow-gold/10'
          : 'border-white/10 bg-white/[0.04] shadow-lg shadow-black/15 hover:border-gold/40 hover:bg-gold/8'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-col gap-3">
        <p className="text-[0.7rem] uppercase tracking-[0.35em] text-white/45">{label}</p>
        <p className={`font-display text-4xl sm:text-5xl font-light ${highlight ? 'text-gold' : 'text-white'}`}>
          {value}
        </p>
      </div>
    </motion.div>
  );
}
