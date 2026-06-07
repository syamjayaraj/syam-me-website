"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, Globe, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 container-custom">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight">About</h2>
          <div className="prose prose-invert text-gray-400 leading-relaxed">
            <p>
              I am a technology entrepreneur focused on building sustainable
              digital businesses. As Founder and CEO of{" "}
              <strong>Floyet Labs & Technologies LLP</strong>, I lead product
              strategy, engineering, and go-to-market for software ventures.
            </p>
            <p>
              With a background in full-stack development and cloud architecture,
              I combine technical depth with business execution — from early-stage
              product design to scaling teams and systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bento-card p-6 flex flex-col gap-3">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h3 className="font-bold">Leadership</h3>
            <p className="text-xs text-gray-500">
              Company building, strategy, and operations
            </p>
          </div>
          <div className="bento-card p-6 flex flex-col gap-3">
            <Cpu className="w-8 h-8 text-purple-500" />
            <h3 className="font-bold">Engineering</h3>
            <p className="text-xs text-gray-500">
              Next.js, React Native, Node.js, cloud systems
            </p>
          </div>
          <div className="bento-card p-6 flex flex-col gap-3">
            <Globe className="w-8 h-8 text-green-500" />
            <h3 className="font-bold">Product</h3>
            <p className="text-xs text-gray-500">
              SaaS, mobile apps, and platform design
            </p>
          </div>
          <div className="bento-card p-6 flex flex-col gap-3">
            <Users className="w-8 h-8 text-orange-500" />
            <h3 className="font-bold">Teams</h3>
            <p className="text-xs text-gray-500">
              Hiring, mentoring, and cross-functional delivery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
