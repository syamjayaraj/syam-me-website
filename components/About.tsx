"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, PenTool } from "lucide-react";

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
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <div className="prose prose-invert text-gray-400 leading-relaxed">
            <p>
              I'm a multidisciplinary technologist with a focus on building sustainable digital products. 
              As the Founder and CEO of <strong>FLOYET Labs & Technologies LLP</strong>, I bridge the gap between complex engineering challenges and user-centric design.
            </p>
            <p>
              My journey involves full-stack development, cloud architecture, and technical writing. 
              I share my tech learnings through <strong>CodeARIV</strong> and my literary works through my Malayalam blog, <strong>Mirage</strong>.
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
             <Code2 className="w-8 h-8 text-blue-500" />
             <h3 className="font-bold">Engineering</h3>
             <p className="text-xs text-gray-500">Next.js, React Native, Node.js</p>
          </div>
          <div className="bento-card p-6 flex flex-col gap-3">
             <Cpu className="w-8 h-8 text-purple-500" />
             <h3 className="font-bold">Architecture</h3>
             <p className="text-xs text-gray-500">Scalable Systems, Cloud Design</p>
          </div>
          <div className="bento-card p-6 flex flex-col gap-3">
             <Globe className="w-8 h-8 text-green-500" />
             <h3 className="font-bold">Entrepreneurship</h3>
             <p className="text-xs text-gray-500">Product Strategy, Leadership</p>
          </div>
          <div className="bento-card p-6 flex flex-col gap-3">
             <PenTool className="w-8 h-8 text-orange-500" />
             <h3 className="font-bold">Writing</h3>
             <p className="text-xs text-gray-500">Tech Blogs & Malayalam Literature</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
