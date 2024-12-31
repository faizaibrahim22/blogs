"use client"
import React from 'react'

const Feacture = () => {
  return (
    <div>
        <section className='py-9 text-center  animate-none transform hover:translate-y-[6px] translate-all duration-500 rase-in-out bg-neutral-300 mb-44 font-semibold text-2xl'>
      <h2 className='text-3xl text-blue-950 py-4'>FAIZA QURESHI :
     Navigating  The Secrets Techonlogy In Tech Chronicales Blogs!!</h2>
     <p className='text-center m-4 text-sm '>
     Hello, my name is Faiza Qureshi. I am a passionate and hardworking individual from Pakistan. Currently, I am working on mastering modern web development technologies like Next.js, TypeScript, TailwindCSS, and more. I enjoy creating responsive and dynamic web applications, focusing on clean code and user-friendly designs.
     My recent projects include a dynamic blog with interactive features and an upcoming e-commerce project. Apart from coding, I am improving my English skills step by step to enhance my communication.

     </p>
     <div  className='mx-auto max-w-7xl px-6'>
      <h2 className='text-3xl my-9 py-8 underline text-blue-950 text-center'>Exploring our Categoies {" "}</h2>
     </div>
     <div className='grid grid-cols-3 gap-10 font-normal   sm:grid-col-4 lg:grid-cols-6'>
      {[
        "Technology",
        "Next.js",
        "HTML",
        "Artificial Intelligence",
        "C.Science",
        "Web development"
      ].map((category,index)=>
        <div key={index} className='relative group bg-white text-black rounded shadow-md hover:bg-sky-950 transition duration-300'>
         <p>{category}</p>
          </div>
      )}
      
     </div>
     <div className='text-sm  py-5'>
      Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      </div>
      </section>
    </div>
  )
}

export default Feacture
