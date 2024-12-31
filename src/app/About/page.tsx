import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div>
      <Navbar/>
      <section className=' py-10 px-5 items-center bg-slate-600 text-center'>
      <h1 className="text-4xl font-bold  text-center text-blacl mb-6">About Me</h1>
        <p className="text-lg text-yellow-500 mb-4">
          Hi, I'm <span className="font-semibold text-yellow-500">Faiza Qureshi</span>, a passionate web developer and tech enthusiast from Pakistan.
        </p>
        <p className="text-yellow-500 mb-8">
          Tech Chronicles is my way of sharing knowledge about web development, technology, and personal growth.
          Join me as we explore exciting topics and build something amazing together!
        </p>
        <h2 className="text-2xl font-semibold text-white mb-4">Skills & Expertise</h2>
        <ul className="flex justify-center gap-4 flex-wrap ">
          {["Next.js", "TypeScript", "TailwindCSS", "Responsive Design", "UI/UX"].map((skill, index) => (
            <li
              key={index}
              className="bg-blue-100 text-yellow-600 hover:bg-slate-300 px-4 py-2 rounded shadow-md"
            >
              {skill}
            </li>
          ))}
        </ul>

      </section>
      <Footer/>
    </div>
    
  )
}

export default page
