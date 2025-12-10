"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    { company: "Floyet Labs & Technologies LLP", role: "Founder & CEO", period: "2024 — Present", link: "https://floyet.com" },
    { company: "ISPG Technologies", role: "Senior Software Engineer", period: "2022 — 2024", link: "https://www.ispg.co/" },
    { company: "Redmonark Technologies", role: "Co-Founder & CTO", period: "2018 — 2020", link: "https://redmonark.com" },
  ];

  return (
    <section className="py-20 container-custom max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 border-b border-white/10 pb-4">Experience</h2>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center justify-between group">
            <div>
              <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                 <a href={job.link} target="_blank" rel="noreferrer">{job.company}</a>
              </h3>
              <p className="text-gray-400">{job.role}</p>
            </div>
            <p className="text-gray-500 font-mono text-sm mt-1 md:mt-0">{job.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
