type HotelNoticeSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  pricing: {
    title: string;
    options: Array<{ guests: string; price: string }>;
  };
  deadline: string;
  paymentInstructions: string;
  paymentMethods: Array<{
    name: string;
    fields: Array<{ label: string; value: string }>;
  }>;
  reference: {
    label: string;
    format: string;
    exampleLabel: string;
    example: string;
  };
  imageSrc: string;
  imageAlt: string;
};

export default function HotelNoticeSection({
  eyebrow,
  title,
  description,
  pricing,
  deadline,
  paymentInstructions,
  paymentMethods,
  reference,
  imageSrc,
  imageAlt,
}: HotelNoticeSectionProps) {
  return (
    <section className="floral-section-gray bg-gradient-to-r from-brand-500 to-brand-200 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/95">
            {description}
          </p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur sm:p-8 lg:p-10">
          {/* Pricing Section */}
          <div className="mb-6">
            <h3 className="mb-3 text-xl font-semibold text-white">
              {pricing.title}
            </h3>
            <ul className="space-y-2">
              {pricing.options.map((option, index) => (
                <li key={index} className="text-white/90">
                  <span className="font-medium">{option.guests}:</span>{" "}
                  <span className="text-lg font-semibold">{option.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deadline */}
          <div className="mb-6 rounded-xl bg-white/10 p-4">
            <p className="text-sm leading-6 text-white/95">{deadline}</p>
          </div>

          {/* Payment Instructions */}
          <div className="mb-6">
            <p className="mb-4 text-sm leading-6 text-white/95">
              {paymentInstructions}
            </p>

            {/* Payment Methods */}
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/20 bg-white/5 p-4"
                >
                  <h4 className="mb-3 font-semibold text-white">
                    {method.name}
                  </h4>
                  <dl className="space-y-2">
                    {method.fields.map((field, fieldIndex) => (
                      <div
                        key={fieldIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <dt className="min-w-[100px] font-medium text-white/80">
                          {field.label}:
                        </dt>
                        <dd className="text-white/70">
                          {field.value || "TBD"}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>

          {/* Reference Format */}
          <div className="rounded-xl bg-white/10 p-4">
            <p className="mb-2 text-sm font-semibold text-white">
              {reference.label}
            </p>
            <p className="mb-1 text-sm text-white/80">{reference.format}</p>
            <p className="text-sm italic text-white/70">
              {reference.exampleLabel} {reference.example}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
