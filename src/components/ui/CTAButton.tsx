import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'ghost';
}

export function CTAButton({ className, variant = 'ghost', ...props }: CTAButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition duration-300',
        variant === 'gold'
          ? 'border-gold bg-gold text-black hover:bg-gold-light'
          : 'border-white/30 bg-white/5 text-white hover:border-gold hover:bg-gold/15',
        className
      )}
      {...props}
    />
  );
}
