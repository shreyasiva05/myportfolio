import React from "react";
import { motion } from "framer-motion";

const categorizedSkills = {
  "Programming & Scripting": ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
  "AI/ML": ["Agentic AI", "NLP", "TensorFlow"],
  "Web & Frameworks": ["React", "Next.js", "REST APIs", "HTML/CSS"],
  "DevOps, Cloud & Tools": ["Git", "AWS", "Kubernetes", "Docker", "Linux", "Terraform"],
  Design: ["Figma"],
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-black py-24 text-white">
      <div className="w-full px-6 lg:px-24">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center mb-16"
        >
          Skills
        </motion.h2>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="mb-16">

            {/* Category */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-6 text-gray-300"
            >
              {category}
            </motion.h3>

            {/* Animated Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.12 }}

                  className="
                    flex items-center justify-center
                    p-6 rounded-2xl bg-neutral-900
                    border border-neutral-700
                    shadow-[0_0_15px_rgba(255,255,255,0.05)]
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
                    hover:border-neutral-500
                    transition-all cursor-pointer
                    text-gray-200 text-sm font-medium
                  "
                >
                  {skill}
                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}




  
 
  
