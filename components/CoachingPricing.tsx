"use client";

import { useState } from "react";
import { Check, ChevronDown, Globe2, MessageCircle, Users } from "lucide-react";

const currencies = {
  USD: { label: "USD — US dollar", price: "$499" },
  EUR: { label: "EUR — Euro", price: "€459" },
  GBP: { label: "GBP — British pound", price: "£399" },
  AED: { label: "AED — UAE dirham", price: "AED 1,799" },
  SAR: { label: "SAR — Saudi riyal", price: "SAR 1,849" },
  QAR: { label: "QAR — Qatari riyal", price: "QAR 1,799" },
  KWD: { label: "KWD — Kuwaiti dinar", price: "KWD 149" },
  BHD: { label: "BHD — Bahraini dinar", price: "BHD 185" },
  OMR: { label: "OMR — Omani rial", price: "OMR 189" },
  ILS: { label: "ILS — Israeli new shekel", price: "₪1,799" },
  INR: { label: "INR — Indian rupee", price: "₹41,999" },
} as const;

type Currency = keyof typeof currencies;

const includes = [
  "6 weeks of live, hands-on coaching",
  "Build and launch your own SaaS product",
  "Personal feedback and code reviews",
  "Private cohort community and recordings",
  "Direct access to a Founder & CEO",
];

type CoachingPricingProps = {
  whatsappLink: string;
};

export default function CoachingPricing({ whatsappLink }: CoachingPricingProps) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const selected = currencies[currency];

  return (
    <div className="bento-card hover:scale-100 overflow-hidden border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 via-[var(--bg-secondary)] to-blue-950/20">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 md:p-12 space-y-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Founding cohort
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-300">
              <Users className="h-4 w-4" />
              Only 8 seats
            </span>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-400">6-week live program</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Build and launch your SaaS with AI.
            </h2>
            <p className="max-w-xl text-gray-400 leading-relaxed">
              Get coached directly by Syamlal CM, Founder &amp; CEO of Floyet Labs
              &amp; Technologies, while you turn your idea into a working, deployed
              product.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                  <Check className="h-3 w-3 text-emerald-400" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 bg-black/20 p-8 md:p-12 lg:border-l lg:border-t-0 flex flex-col justify-center">
          <label htmlFor="coaching-currency" className="mb-2 flex items-center gap-2 text-sm text-gray-400">
            <Globe2 className="h-4 w-4" />
            Display currency
          </label>
          <div className="relative">
            <select
              id="coaching-currency"
              value={currency}
              onChange={(event) => setCurrency(event.target.value as Currency)}
              className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 py-3 pl-4 pr-12 text-white outline-none transition-colors focus:border-emerald-400/60"
            >
              {Object.entries(currencies).map(([code, item]) => (
                <option key={code} value={code} className="bg-gray-950 text-white">
                  {item.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
            />
          </div>

          <div className="mt-7">
            <p className="text-sm text-gray-500">Founding cohort price</p>
            <div className="mt-1 flex flex-wrap items-end gap-x-3 gap-y-1">
              <p className="whitespace-nowrap text-5xl font-bold tracking-tight md:text-6xl">
                {selected.price}
              </p>
              <p className="whitespace-nowrap pb-2 text-sm text-gray-500">one-time</p>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              A fixed launch price for the complete program. No subscription.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-magnetic mt-8 w-full bg-white text-black hover:bg-gray-200"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Apply for one of 8 seats
          </a>
          <p className="mt-3 text-center text-xs text-gray-600">
            Start with a free fit call. No pressure to enrol.
          </p>
        </div>
      </div>
    </div>
  );
}
