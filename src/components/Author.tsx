"use  client"
import React from 'react'
const Author = () => {
  return (
    <div>
      <div className="text-black bg-slate-200 shadow-lg rounded-lg p-7">
        <div className="flex items-center animation-fadeIn">
          <img
            className='rounded-3xl mr-5 flex border-2 border-r-zinc-900 object-cover w-36 h-52'
            src="./image/post.jpg"
            alt='file'
          />
          <div>
            <h3 className='flex font-serif  text-2xl text-black'>Faiza Qureshi</h3>
            <p className='text-black font-serif'>
              {""}
              I am currently an intermediate computer science student 
            </p>
          </div>

        </div>
        <p className='text-mt-4  text-center font-serif  -relaxed'>Hello, my name is Faiza Qureshi. I am a passionate and hardworking individual from Pakistan. Currently, I am working on mastering modern web development technologies like Next.js, TypeScript, TailwindCSS, and more. I enjoy creating responsive and dynamic web applications, focusing on clean code and user-friendly designs.
      My recent projects include a dynamic blog with interactive features and an upcoming e-commerce project. Apart from coding, I am improving my English skills step by step to enhance my communication.
</p>
<div >
            <a href="https://www.linkedin.com/in/faiza-qureshi-bb8753315/"
            className='px-3 py-2 rounded text-white hover:bg-blue-500  bg-blue-900'>
              Linkedin
            </a>
            <a href="https://github.com/faizaibrahim22"
            className='px-3 py-2 rounded ml-3 text-white hover:bg-black bg-orange-800'>
              Github
            </a>
          </div>
          </div>
      </div>
      
  
  )
}

export default Author
