import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-sans">

      {/* Toolbar */}
      <Navbar />

      {/* Push all content down */}
      <div className="pt-20">
        <Hero />

        <main className="max-w-6xl mx-auto px-6">
          <section className="mt-24" id="projects">
            <h2 className="text-3xl mb-6">Selected Projects</h2>
            <Projects />
          </section>

          <section className="mt-24" id="skills">
            <h2 className="text-3xl mb-6">Skills</h2>
            <Skills />
          </section>
        </main>

        <Footer />
      </div>

    </div>
  )
}


  
 
  
