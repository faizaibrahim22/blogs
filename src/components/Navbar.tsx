"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const currentDate = new Date();
      setCurrentDateTime(currentDate.toLocaleDateString()); // Update the state with the current date
    };
    update(); 

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className='text-gray-900  flex body-font shadow-lg'>
      <div className='container mx-auto flex flex-wrap p-3 flex-col'>
        <div className="flex text-black">
          <span>{currentDateTime}</span> 
        </div>
        <nav className='md:ml-8 flex  flex-wrap text-blue-900 justify-center'>
          <ul className='flex gap-8'>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/"}><li>About</li></Link>
          <Link href={"/"}><li>Blog</li></Link>
          <Link href={"/"}><li>Content</li></Link>
          </ul>
          </nav>
          <div  className='ml-96 relative left-52 bottom-6'>
          <button className="inline-flex py-1 rounded w-16 text-white ml-96 font-bold bg-red-800 ">Youtube</button>
         </div>
      </div>
    </header>
  );
}

export default Navbar;
