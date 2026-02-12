"use client";

import { useState } from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  company?: string; // honeypot
};

export type ContactHeroContent = {
  hero: {
    title: string;
    subtitle: string;
    address: {
      label: string;
      lines: string[];
    };
    phone: {
      label: string;
      value: string;
      href: string;
    };
    email: {
      label: string;
      value: string;
      href: string;
    };
  };
  form: {
    labels: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      message: string;
    };
    placeholders: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      message: string;
    };
    requiredNote: string;
    submitLabel: string;
    submittingLabel: string;
    validationError: string;
    successMessage: string;
    honeypotMessage: string;
    errorMessage: string;
  };
};

export type ContactHeroProps = {
  content: ContactHeroContent;
};

export default function ContactHero({ content }: ContactHeroProps) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null,
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const form = new FormData(e.currentTarget);
    const data: ContactFormData = {
      firstName: String(form.get("firstName") || "").trim(),
      lastName: String(form.get("lastName") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      message: String(form.get("message") || "").trim(),
      company: String(form.get("company") || "").trim(), // honeypot
    };

    if (!data.firstName || !data.email || !data.message) {
      setStatus({
        ok: false,
        msg: content.form.validationError,
      });
      return;
    }

    if (data.company) {
      setStatus({
        ok: true,
        msg: content.form.honeypotMessage,
      });
      (e.currentTarget as HTMLFormElement).reset();
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus({ ok: true, msg: content.form.successMessage });
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      setStatus({
        ok: false,
        msg: content.form.errorMessage,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="floral-section bg-white/95 py-12 sm:py-16 dark:bg-gray-900/90">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-black/5 dark:bg-gray-900/80">
          <h2 className="text-2xl font-semibold text-brand-700 sm:text-3xl">
            {content.hero.title}
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            {content.hero.subtitle}
          </p>

          <dl className="mt-8 space-y-4 text-base/7 text-slate-700 dark:text-slate-300">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">{content.hero.address.label}</span>
                <BuildingOffice2Icon
                  aria-hidden="true"
                  className="h-7 w-6 text-brand-500"
                />
              </dt>
              <dd>
                {content.hero.address.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </dd>
            </div>

            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">{content.hero.phone.label}</span>
                <PhoneIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-brand-500"
                />
              </dt>
              <dd>
                <a
                  href={content.hero.phone.href}
                  className="hover:text-brand-600 dark:hover:text-white"
                >
                  {content.hero.phone.value}
                </a>
              </dd>
            </div>

            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">{content.hero.email.label}</span>
                <EnvelopeIcon
                  aria-hidden="true"
                  className="h-7 w-6 text-brand-500"
                />
              </dt>
              <dd>
                <a
                  href={content.hero.email.href}
                  className="hover:text-brand-600 dark:hover:text-white"
                >
                  {content.hero.email.value}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-black/5 dark:bg-gray-900/80"
          noValidate
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  {content.form.labels.firstName}
                </label>
                <div className="mt-2.5">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-brand-500"
                    placeholder={content.form.placeholders.firstName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  {content.form.labels.lastName}
                </label>
                <div className="mt-2.5">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-brand-500"
                    placeholder={content.form.placeholders.lastName}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  {content.form.labels.email}
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-brand-500"
                    placeholder={content.form.placeholders.email}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  {content.form.labels.phone}
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-brand-500"
                    placeholder={content.form.placeholders.phone}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  {content.form.labels.message}
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-brand-500"
                    placeholder={content.form.placeholders.message}
                  />
                </div>
              </div>
            </div>

            {status && (
              <p
                className={`mt-4 text-sm ${
                  status.ok ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.msg}
              </p>
            )}

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-md bg-brand-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:opacity-60 dark:bg-brand-500 dark:hover:bg-brand-400 dark:focus-visible:outline-brand-500"
              >
                {submitting
                  ? content.form.submittingLabel
                  : content.form.submitLabel}
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              {content.form.requiredNote}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
