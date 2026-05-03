'use client';

import { useState, useEffect } from 'react';
import { SceneFrame } from './SceneFrame';
import { useDeckStore } from '../../store/deckStore';

type FormState = { name: string; email: string; company?: string; message: string; category?: string };

export function ContactScene() {
  const openModule = useDeckStore((state) => state.openModule);
  const [activePath, setActivePath] = useState<'leasing' | 'sponsorship' | 'events'>('leasing');
  const formPrefill = useDeckStore((s) => s.formPrefill);
  const setFormPrefill = useDeckStore((s) => s.setFormPrefill);
  const [status, setStatus] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '', category: 'leasing' });

  useEffect(() => {
    if (formPrefill) {
      setForm((cur) => ({ ...cur, ...formPrefill }));
      // clear after applying so next opens are fresh
      setFormPrefill(null);
    }
  }, [formPrefill, setFormPrefill]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
      <div className="grid gap-5 lg:grid-cols-3">
        {[
          ['leasing', 'Retail Leasing'],
          ['sponsorship', 'Brand Partnerships'],
          ['events', 'Event Production']
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => {
              setActivePath(key as typeof activePath);
              openModule(key as 'leasing' | 'sponsorship' | 'events');
            }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-left transition hover:border-gold/50 hover:bg-gold/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold">CTA</p>
            <h3 className="mt-3 font-display text-3xl text-white">{label}</h3>
            <p className="mt-3 text-sm text-white/65">Open the matching module and keep the conversation within the deck experience.</p>
          </button>
        ))}
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6 text-sm text-white/70">
        Active path: <span className="text-gold">{activePath}</span>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <input required className="rounded-md bg-black/10 p-3 text-white" placeholder="Your name" value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} />
          <input required type="email" className="rounded-md bg-black/10 p-3 text-white" placeholder="Email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} />
        </div>
        <input className="rounded-md bg-black/10 p-3 text-white" placeholder="Company (optional)" value={form.company} onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))} />
        <select className="rounded-md bg-black/10 p-3 text-white w-64" value={form.category} onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))}>
          <option value="leasing">Retail Leasing</option>
          <option value="sponsorship">Brand Partnerships</option>
          <option value="events">Event Production</option>
        </select>
        <textarea required className="h-40 rounded-md bg-black/10 p-3 text-white" placeholder="Tell us about your inquiry" value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))} />
        <div className="flex items-center gap-3">
          <button type="submit" className="rounded-full bg-gold px-5 py-3 text-black">Send Inquiry</button>
          <div className="text-sm text-white/70">{status}</div>
        </div>
      </form>
    </SceneFrame>
  );
}
