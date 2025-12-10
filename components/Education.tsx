"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-20 container-custom max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 border-b border-white/10 pb-4">Education</h2>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between group">
            <div>
              <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                 <a href="http://awhengg.org/" target="_blank" rel="noreferrer">AWH Engineering College</a>
              </h3>
              <p className="text-gray-400">B.Tech in Computer Science & Engineering</p>
            </div>
            <p className="text-gray-500 font-mono text-sm mt-1 md:mt-0">2013 — 2017</p>
          </div>
      </div>
    </section>
  );
}
