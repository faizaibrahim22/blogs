"use client";
import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogsCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    image?: string;
  };
  index: number;
}

const BlogsCard: React.FC<BlogsCardProps> = ({ post, index }) => {
  const cardBackground = index % 4 === 0 ? "bg-slate-200 text-black" : "bg-slate-200 text-black";

  return (
    <Card className={`p-1 mb-6  rounded-lg shadow-lg ${cardBackground}`}>
      <CardContent className="">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-[580px] h-auto font-extralight rounded-lg"
          />
        )}
        <CardTitle className="text-xl font-bold">{post.title}</CardTitle>
        <p className="mt-2 text-sm">{post.description}</p>
        <p className="mt-4 text-xs text-gray-500">{post.date}</p>
        <div>Published on: 2024-12-29</div>
        <a
          href={`/posts/${post.id}`}
          className="w-full text-yellow-500  bg-black hover:bg-yellow-200"
        >
          Read More
        </a>
      </CardContent>
    </Card>
  );
};

const BlogPage = () => {
  const posts = [
    {
      id: "1",
      title: "Mastering TypeScript in Web Development",
      description: " Deep Understanding of Type System   Static Typing: You should understand how TypeScript adds types to JavaScript. This includes primitive types like string, number, boolean, any, and more complex types like arrays, tuples, and objects TypeScript can automatically infer the types of variables. Mastery means understanding when TypeScript infers types and how to override them when necessary Learn how to use | (union) and & (intersection) to combine types Literal Types: Understand how to create precise types like specific strings or numbers  Mastering Advanced Features Generics: These allow you to create reusable type- safe functions and classes.Generics are key to writing flexible and scalable TypeScript code" ,
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

return (
  <div className="p-20 ">
    {posts.map((post, index) => (
      <BlogsCard key={post.id} post={post} index={index} />
    ))}
  </div>
);
};

export default BlogPage;
