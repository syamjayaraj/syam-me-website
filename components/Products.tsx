"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/products";

export default function Products() {
  const [featured, ...rest] = products;

  return (
    <section id="products" className="py-20 container-custom">
      <div className="mb-12 space-y-3">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-500">
          Built & managed at Floyet
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Products I build and run
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Real software used by real businesses every day — designed, engineered,
          launched and operated by my team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <motion.a
          href={featured.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card md:col-span-2 p-8 md:p-10 group relative"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
                {featured.category}
              </span>
              <h3 className="text-3xl font-bold flex items-center gap-2">
                The {featured.name} ecosystem
                <ArrowUpRight className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
              </h3>
              <p className="text-gray-400 leading-relaxed">{featured.tagline}</p>
            </div>
            <div className="space-y-4">
              {featured.apps && (
                <div className="flex flex-wrap gap-3">
                  {featured.apps.map((app) => (
                    <span
                      key={app}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {featured.features.map((f) => (
                  <span key={f} className="text-xs text-gray-400 px-3 py-1 rounded-full bg-white/5">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none" />
        </motion.a>

        {rest.map((product, i) => (
          <motion.a
            key={product.name}
            href={product.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bento-card p-8 flex flex-col gap-4 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                {product.category}
              </span>
              {product.beta && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400">
                  Beta
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              {product.name}
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{product.tagline}</p>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {product.features.map((f) => (
                <span key={f} className="text-xs text-gray-400 px-3 py-1 rounded-full bg-white/5">
                  {f}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
