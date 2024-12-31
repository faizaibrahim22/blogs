
import Navbar from '@/components/Navbar';
import React from 'react';
import CommentSection from "@/components/CommentSection";
import Author from '@/components/Author';

const posts = [
  {
    id: "1",
    title: "Mastering TypeScript in Web Development",
    description:
      "TypeScript brings type safety to JavaScript, making code robust and maintainable.",
    date: "2024-12-29",
    image: "/image/next.jpg",
  },
  {
    id: "2",
    title: "Exploring the Power of Next.js",
    description:
      "Next.js offers features like server-side rendering and static generation for fast and dynamic websites.",
    date: "2024-12-30",
    image: "/image/nextjs.jpg",
  },
  {
    id: "3",
    title: "Exploring Html",
    description: "Html for beginners. Basic With code Examples",
    date: "2024-12-30",
    image: "/image/img.jpg",
  },
  {
    id: "4",
    title: "Exploring CSS",
    description: "CSS for beginners. Basic With code Examples",
    date: "2024-12-30",
    image: "/image/pickss.jpg",
  },
  {
    id: "5",
    title: "Nodejs",
    description:
      "Node.js is a powerful, open-source, cross-platform JavaScript runtime environment that enables developers to run JavaScript code on the server-side. It uses the V8 JavaScript engine (the same engine used by Google Chrome) to execute code, allowing for fast and efficient performance.",
    date: "2024-12-30",
    image: "/image/node.jpg",
  },
  {
    id: "6",
    title: "Shadcn",
    description:
      "Shadcn is a UI component library built for React, providing a set of customizable, accessible, and reusable components. It is designed to help developers build modern user interfaces quickly and efficiently.",
    date: "2024-12-30",
    image: "/image/shad.jpg",
  }, 
  {
    id: "7",
    title: "Github",
    description:"Could you clarify what you are specifically asking about GitHub? Are you looking for instructions on how to set up a repository for your project, or are you asking something else about GitHub",
    date: "2024-12-30",
    image: "/image/github.jpg",
  },
  
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);
  console.log('Post ID:', id);
  console.log('Post:', post);
  
  if (!post) {
    return (
      <div>
         <div>
      <h1>Post ID: {params.id}</h1>
    </div>
        
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="post-container">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <img src={post.image} alt={post.title} />
        <p>{post.date}</p>
        <Author />
        <CommentSection/>
      </div>
    </div>
  );
}
