"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen py-20 container-custom flex flex-col justify-center">
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Building technology <br />
          <span className="text-gray-500">that</span>{" "}
          <span className="text-white">scales.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-x-4 gap-y-2 text-gray-400 text-sm md:text-base font-medium"
        >
          <span>Founder & CEO</span>
          <span className="hidden sm:inline w-1 h-1 bg-gray-600 rounded-full self-center" />
          <span>Product Builder</span>
          <span className="hidden sm:inline w-1 h-1 bg-gray-600 rounded-full self-center" />
          <span>Technology Leader</span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bento-card md:col-span-2 md:row-span-2 relative group p-8 flex flex-col justify-between"
        >
          <div className="space-y-4 z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-xl font-bold tracking-tight">
              SC
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              Syamlal CM
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Founder & CEO of{" "}
              <a
                href="https://floyet.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Floyet Labs & Technologies LLP
              </a>
              . I build and lead teams that ship high-performance web and mobile
              products with scalable architecture.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-8 z-10">
            <a
              href="#contact"
              className="btn-magnetic bg-white text-black hover:bg-gray-200"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="btn-magnetic"
            >
              Experience
            </a>
            <Link
              href="/blog"
              className="btn-magnetic text-gray-300 hover:text-white"
            >
              Blog
            </Link>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bento-card md:col-span-1 md:row-span-2 relative overflow-hidden group"
        >
          <img
            src="/assets/images/syamlal.jpg"
            alt="Syamlal CM"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 md:absolute md:inset-0"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-white font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Kozhikode, Kerala, India
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bento-card md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between group hover:bg-white/5"
        >
          <div className="flex justify-between items-start">
            <div className="bg-white/10 p-2.5 rounded-xl text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Kozhikode, Kerala</h3>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              India
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bento-card md:col-span-1 md:row-span-1 p-6 flex flex-col justify-center gap-4"
        >
          <div className="grid grid-cols-2 gap-4 h-full">
            <a
              href="https://github.com/syamjayaraj"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/syamjayaraj"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/syamjayaraj"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:syamjayaraj@gmail.com"
              className="flex items-center justify-center bg-white/5 rounded-2xl hover:bg-white/10 hover:text-green-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
