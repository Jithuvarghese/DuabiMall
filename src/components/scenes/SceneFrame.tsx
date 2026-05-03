import { cn } from '@/utils/cn';

interface SceneFrameProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function SceneFrame({ eyebrow, title, description, children, className }: SceneFrameProps) {
  return (
    <section className={cn('relative min-h-screen px-4 pb-12 pt-28 sm:px-6 lg:px-10 lg:pt-32', className)}>
      <div className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-7xl flex-col justify-between gap-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl font-light leading-[0.95] text-white md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
