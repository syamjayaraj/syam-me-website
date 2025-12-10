"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Category = "products" | "writing";

export default function Works() {
  const [activeTab, setActiveTab] = useState<Category>("products");

  const products = [
    {
      title: "GymTie App",
      category: "Mobile App",
      desc: "Comprehensive gym management solution for owners.",
      link: "https://gymtie.com",
      color: "bg-orange-500"
    },
    {
      title: "Parambath App",
      category: "Community Mobile App",
      desc: "Localized app providing instant access to village services.",
      link: "https://parambath.onnich.com",
      color: "bg-green-500"
    },
    {
      title: "YoungMenu",
      category: "SaaS",
      desc: "Digital menu solution for restaurants and home bakers. (Coming Soon)",
      link: "https://youngmenu.com",
      color: "bg-pink-500"
    },
  ];

  const writings = [
    {
      title: "Mirage",
      category: "Writing",
      desc: "A creative space for my Malayalam short stories, essays, and articles.",
      link: "https://mirage.syam.me",
      color: "bg-teal-500"
    },
    {
      title: "CodeARIV",
      category: "Tech Blog",
      desc: "Demystifying complex tech concepts for everyone.",
      link: "https://codeariv.com",
      color: "bg-blue-500"
    }
  ];

  const currentItems = activeTab === "products" ? products : writings;

  return (
    <section id="works" className="py-20 container-custom">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
         <div>
           <h2 className="text-4xl font-bold tracking-tight mb-2">Selected Works</h2>
           <span className="text-sm text-gray-500">2018 — Present</span>
         </div>
         
         {/* Tab Switcher */}
         <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            <button 
              onClick={() => setActiveTab("products")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "products" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
            >
              Tech Products
            </button>
            <button 
              onClick={() => setActiveTab("writing")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "writing" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
            >
              Writings
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bento-card group p-8 min-h-[280px] flex flex-col justify-between relative hover:bg-white/5"
          >
             <div className="space-y-4">
               <div className="flex justify-between items-start">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 ${project.color} bg-opacity-10 text-white`}>
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
               </div>
               
               <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
                  {project.title}
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
               </p>
             </div>
             
             <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-6">
                <div className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${project.color}`} />
             </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
