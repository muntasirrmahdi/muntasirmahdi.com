interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20">
      <div className="">
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
