interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: boolean;
}

export function SectionHeader({ title, subtitle, accent }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      {accent && (
        <p className="font-mono text-sm font-medium text-accent mb-2">
          {accent}
        </p>
      )}
      <h2 className="text-2xl font-mono font-semibold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-base text-muted">{subtitle}</p>
      )}
    </div>
  );
}
