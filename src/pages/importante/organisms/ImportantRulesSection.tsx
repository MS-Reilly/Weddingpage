type ImportantRule = {
  id: string;
  text: string;
};

type ImportantRulesSectionProps = {
  title: string;
  subtitle: string;
  rules: ImportantRule[];
};

export default function ImportantRulesSection({
  title,
  subtitle,
  rules,
}: ImportantRulesSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-brand-100 bg-white/95 p-8 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.4)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
          {title}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-brand-900 sm:text-4xl">
          {subtitle}
        </h2>
        <ul className="mt-6 grid gap-3 text-sm text-brand-700 sm:grid-cols-2">
          {rules.map((rule) => (
            <li
              key={rule.id}
              className="flex gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 p-4"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
              <span className="leading-6">{rule.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
