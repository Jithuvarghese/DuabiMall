'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useDeckStore } from '../../store/deckStore';

const meetingOptions = [
  { category: 'leasing', label: 'Retail Leasing', message: 'I would like to schedule a meeting to discuss Dubai Mall leasing opportunities.' },
  { category: 'sponsorship', label: 'Brand Partnerships', message: 'I would like to schedule a meeting to discuss sponsorship and partnership options.' },
  { category: 'events', label: 'Event Production', message: 'I would like to schedule a meeting to discuss event production opportunities.' }
] as const;

export function MeetingPrompt() {
  const modalId = useDeckStore((state) => state.modalId);
  const closeModal = useDeckStore((state) => state.closeModal);
  const goToScene = useDeckStore((state) => state.goToScene);
  const setFormPrefill = useDeckStore((state) => state.setFormPrefill);

  const isOpen = modalId === 'meeting-request';

  function openContact(category: (typeof meetingOptions)[number]['category'], message: string) {
    setFormPrefill({ category, message });
    closeModal();
    goToScene('contact');
  }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button type="button" aria-label="Close meeting prompt" className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} />
          <motion.div
            className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white/10 bg-[#101010]/95 p-6 shadow-2xl shadow-black/40 sm:p-8"
            initial={{ y: 18, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Request a Meeting</p>
            <h3 className="mt-3 font-display text-3xl font-light text-white">Choose the meeting path</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
              Select the business lane you want and the contact form will open already prefilled.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {meetingOptions.map((option) => (
                <motion.button
                  key={option.category}
                  type="button"
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-left transition hover:border-gold/50 hover:bg-gold/10"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openContact(option.category, option.message)}
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Open Form</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/80">{option.label}</p>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="button" className="text-xs uppercase tracking-[0.3em] text-white/45 transition hover:text-white" onClick={closeModal}>
                Maybe later
              </button>
              <button type="button" className="rounded-full border border-gold/70 bg-gold px-5 py-3 text-xs uppercase tracking-[0.3em] text-black transition hover:bg-gold-light" onClick={() => openContact('leasing', meetingOptions[0].message)}>
                Open Leasing Form
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}