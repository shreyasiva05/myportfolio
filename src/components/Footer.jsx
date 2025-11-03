import React from 'react'
  
export default function Footer(){
    return (
      <footer className="mt-24 bg-white border-t py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Shreya Sivakumar</div>
          <div className="flex gap-4">
            <a href="mailto:shreyasivakumar2005@gmail.com" className="text-sm">Email</a>
            <a href="https://www.linkedin.com/in/shreyasivak" target="_blank" rel="noreferrer" className="text-sm">LinkedIn</a>
            <a href="/shreyasivakumar_resume.pdf" className="text-sm">Resume</a>
          </div>
        </div>
      </footer>
    )
}
  
 