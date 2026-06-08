interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-mono font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-base text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
