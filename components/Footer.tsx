"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/20 backdrop-blur-lg">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/syamjayaraj" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/syamjayaraj" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-blue-400 hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.github.com/syamjayaraj" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-gray-700 hover:text-white transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-gray-500 space-y-2">
            <p>
              Carefully Handcrafted in INDIA | Powered by <a href="https://floyet.com" className="text-white hover:text-blue-400">FLOYET</a>
            </p>
            <p>
              Copyright © <a href="https://syam.me" className="text-white hover:text-blue-400">SYAM.ME</a> 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
