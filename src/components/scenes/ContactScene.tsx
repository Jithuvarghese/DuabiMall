'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SceneFrame } from './SceneFrame';
import { useDeckStore } from '../../store/deckStore';

type FormState = { name: string; email: string; company?: string; message: string; category?: string };

type FormErrors = Partial<Record<keyof FormState, string>>;

function CustomSelect({ value, onChange, options }: { value?: string | undefined; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((s) => !s)} className="w-full text-left rounded-[1.75rem] border border-white/10 bg-black/25 px-4 py-3 pr-12 text-sm text-white outline-none transition focus:border-gold/50 focus:bg-black/35 sm:px-5 sm:py-4 sm:text-base">
        {options.find((o) => o.value === value)?.label ?? 'Select'}
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gold/70">▾</span>
      </button>
      {open ? (
        <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/85 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="w-full text-left px-5 py-4 text-sm text-white transition hover:bg-white/8 sm:px-6"
            >
              {opt.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ContactScene() {
  const openModule = useDeckStore((state) => state.openModule);
  const [activePath, setActivePath] = useState<'leasing' | 'sponsorship' | 'events'>('leasing');
  const formPrefill = useDeckStore((s) => s.formPrefill);
  const setFormPrefill = useDeckStore((s) => s.setFormPrefill);
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '', category: 'leasing' });

  function validate(values: FormState) {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Name is required.';
    if (!values.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!values.message.trim()) nextErrors.message = 'Tell us about your inquiry.';
    if (!values.category) nextErrors.category = 'Choose a category.';
    return nextErrors;
  }

  useEffect(() => {
    if (formPrefill) {
      setForm((cur) => ({ ...cur, ...formPrefill }));
      if (formPrefill.category === 'leasing' || formPrefill.category === 'sponsorship' || formPrefill.category === 'events') {
        setActivePath(formPrefill.category);
      }
      // clear after applying so next opens are fresh
      setFormPrefill(null);
    }
  }, [formPrefill, setFormPrefill]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please fix the highlighted fields.');
      return;
    }

    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } });
      const json = await res.json();
      if (json.ok) setStatus('Sent — thank you.');
      else setStatus('Error sending.');
    } catch {
      setStatus('Error sending.');
    }
  }

  return (
    <SceneFrame
      eyebrow="Connect"
      title="Your brand. The world’s stage."
      description="Choose the path that fits your business goal and keep the experience inside the deck, the way the brief asks for."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          ['leasing', 'Retail Leasing'],
          ['sponsorship', 'Brand Partnerships'],
          ['events', 'Event Production']
        ].map(([key, label]) => (
          <motion.button
            key={key}
            type="button"
            onClick={() => {
              setActivePath(key as typeof activePath);
              openModule(key as 'leasing' | 'sponsorship' | 'events');
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className={key === activePath ? 'rounded-[2rem] border border-gold bg-gold/10 p-6 text-left transition' : 'rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-gold/50 hover:bg-gold/10'}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold">CTA</p>
            <h3 className="mt-3 font-display text-3xl text-white">{label}</h3>
            <p className="mt-3 text-sm leading-7 text-white/68">Open the matching module and keep the conversation within the deck experience.</p>
          </motion.button>
        ))}
      </div>
      <div className="mt-2 rounded-[2rem] border border-white/10 bg-black/30 p-6 text-sm text-white/70">
        Active path: <span className="text-gold">{activePath}</span>
      </div>

      <motion.form noValidate onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:gap-5 sm:p-8 md:p-10" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <input required aria-invalid={Boolean(errors.name)} className={`w-full rounded-2xl border bg-black/25 px-6 py-5 text-base text-white outline-none transition placeholder:text-white/35 focus:bg-black/35 focus:ring-2 sm:px-7 sm:py-6 sm:text-base ${errors.name ? 'border-rose-400/60 focus:border-rose-300 focus:ring-rose-400/20' : 'border-white/10 focus:border-gold/50 focus:ring-gold/20'}`} placeholder="Your name" value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} />
            {errors.name ? <p className="mt-2 text-xs text-rose-300">{errors.name}</p> : null}
          </div>
          <div>
            <input required type="email" aria-invalid={Boolean(errors.email)} className={`w-full rounded-2xl border bg-black/25 px-6 py-5 text-base text-white outline-none transition placeholder:text-white/35 focus:bg-black/35 focus:ring-2 sm:px-7 sm:py-6 sm:text-base ${errors.email ? 'border-rose-400/60 focus:border-rose-300 focus:ring-rose-400/20' : 'border-white/10 focus:border-gold/50 focus:ring-gold/20'}`} placeholder="Email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} />
            {errors.email ? <p className="mt-2 text-xs text-rose-300">{errors.email}</p> : null}
          </div>
        </div>
        <input className="w-full rounded-2xl border border-white/10 bg-black/25 px-6 py-5 text-base text-white outline-none transition placeholder:text-white/35 focus:border-gold/50 focus:bg-black/35 focus:ring-2 focus:ring-gold/20 sm:px-7 sm:py-6 sm:text-base" placeholder="Company (optional)" value={form.company} onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))} />
        <CustomSelect
          value={form.category}
          onChange={(v) => setForm((s) => ({ ...s, category: v }))}
          options={[
            { value: 'leasing', label: 'Retail Leasing' },
            { value: 'sponsorship', label: 'Brand Partnerships' },
            { value: 'events', label: 'Event Production' }
          ]}
        />
        <div>
          <textarea required aria-invalid={Boolean(errors.message)} className={`w-full h-40 resize-none rounded-2xl border bg-black/25 px-6 py-5 text-base text-white outline-none transition placeholder:text-white/35 focus:bg-black/35 focus:ring-2 sm:h-44 sm:px-7 sm:py-6 sm:text-base md:h-48 ${errors.message ? 'border-rose-400/60 focus:border-rose-300 focus:ring-rose-400/20' : 'border-white/10 focus:border-gold/50 focus:ring-gold/20'}`} placeholder="Tell us about your inquiry" value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))} />
          {errors.message ? <p className="mt-2 text-xs text-rose-300">{errors.message}</p> : null}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <button type="submit" className="inline-flex items-center justify-center rounded-full border border-gold/70 bg-gradient-to-r from-gold to-[#d7bb7b] px-5 py-3 text-sm font-medium text-black transition hover:brightness-105 active:scale-95 sm:px-6 sm:text-base">Send Inquiry</button>
          {status && <div className="text-xs sm:text-sm text-white/70">{status}</div>}
        </div>
      </motion.form>
    </SceneFrame>
  );
}
