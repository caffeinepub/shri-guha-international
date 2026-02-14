import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Section({ id, title, subtitle, children, className = '', noPadding = false }: SectionProps) {
  return (
    <section id={id} className={`${noPadding ? '' : 'py-16 md:py-24'} ${className}`}>
      <div className={noPadding ? '' : 'container mx-auto px-4'}>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
