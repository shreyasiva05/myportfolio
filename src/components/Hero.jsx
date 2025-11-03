import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <header className="w-full bg-[#0d0d0f] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT */}
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.15 }}
            className="text-5xl lg:text-6xl font-semibold tracking-tight"
          >
            Shreya Sivakumar
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.25 }}
            className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            Software Engineer & UX-focused CS student at UMBC. I build AI-powered applications, developer tools, and clean user experiences.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 bg-black/20 backdrop-blur-md hover:bg-black/40 transition shadow-lg shadow-white/5"
            >
              View Projects
            </a>

            <a 
              href="mailto:shreyasivakumar2005@gmail.com" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            Based in Ellicott City, MD • Open to relocation
          </div>
        </div>

        {/* RIGHT IMAGE / CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.35 }}
          className="w-full lg:w-1/2"
        >
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">
            <img 
              src="/hero.jpg" 
              alt="hero" 
              className="w-full h-80 object-cover opacity-90 hover:opacity-100 transition"
            />
          </div>
        </motion.div>
      </div>
    </header>
  )
}

  