
import React from 'react'
import { motion } from 'framer-motion'
  
export default function ProjectCard({project}){
    return (
      <motion.a href={project.link} whileHover={{y:-6}} className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
        <div className="w-full h-48 overflow-hidden">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600 mt-2 text-sm" dangerouslySetInnerHTML={{__html: project.desc}} />
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-3 py-1 bg-gray-100 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </motion.a>
    )
}
  

  