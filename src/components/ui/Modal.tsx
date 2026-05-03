import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ open, title, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="presentation">
          <motion.div
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-deck-dark/95 p-6 text-white shadow-2xl"
            initial={{ scale: 0.96, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 24 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onAnimationComplete={() => {
              const el = document.getElementById('modal-title');
              (el as HTMLElement | null)?.focus?.();
            }}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 id="modal-title" tabIndex={-1} className="font-display text-3xl text-white">{title}</h3>
              <button className="text-xs uppercase tracking-[0.25em] text-gold" onClick={onClose}>Close</button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
