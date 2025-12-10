"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 container-custom">
      <div className="bento-card p-12 text-center space-y-8 bg-gradient-to-b from-transparent to-blue-900/10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to build something?</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Whether you have a project in mind or just want to chat about tech, I'm always open to new connections.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:hi@syam.me" className="btn-magnetic bg-white text-black hover:bg-gray-200">
             <Mail className="w-4 h-4 mr-2" />
             hi@syam.me
          </a>
          <a href="https://wa.me/919946792650" target="_blank" className="btn-magnetic border border-white/20 hover:bg-white/5">
             <MessageCircle className="w-4 h-4 mr-2" />
             WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
