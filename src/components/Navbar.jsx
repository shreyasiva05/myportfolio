import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0d0d0fab] border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <a href="#home" className="text-white text-xl font-semibold tracking-tight">
          Shreya Sivakumar
        </a>

        {/* RIGHT — NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <a className="hover:text-white transition" href="#home">Home</a>
          <a className="hover:text-white transition" href="#projects">Projects</a>
          <a className="hover:text-white transition" href="/resume.pdf" target="_blank">Resume</a>
          <a className="hover:text-white transition" href="mailto:shreyasivakumar2005@gmail.com">Email</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </div>

      </div>
    </motion.nav>
  );
}
