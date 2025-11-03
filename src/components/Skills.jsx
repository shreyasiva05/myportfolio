import React from 'react'

const categorizedSkills = {
  'Programming & Scripting': ['Python', 'Java', 'JavaScript', 'SQL', 'C++', 'TypeScript', 'Scripting'],
  'AI/ML': ['Agentic AI', 'NLP', 'TensorFlow'],
  'Web & Frameworks': ['React', 'Next.js', 'REST APIs', 'HTML/CSS'],
  'DevOps, Cloud & Tools': ['Git', 'AWS', 'Kubernetes', 'Unix/Linux/Docker', 'Terraform'],
  'Design': ['Figma']
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-[#1c1c1e] py-24 text-white"
    >
      {/* THIS IS WHAT MATCHES YOUR HERO SECTION WIDTH */}
      <div className="w-full px-6 lg:px-24">

        <h2 className="text-4xl font-semibold text-center mb-16">
          Skills
        </h2>

        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="mb-16">

            {/* Category Title */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">
              {category}
            </h3>

            {/* Skill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {skills.map(skill => (
                <div
                  key={skill}
                  className="
                    p-4
                    rounded-xl
                    bg-[#e5e5e5]
                    text-black
                    text-center
                    shadow-md
                    transition-all
                    hover:bg-white
                    hover:shadow-[0_0_18px_rgba(255,255,255,0.5)]
                  "
                >
                  {skill}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}




  
 
  