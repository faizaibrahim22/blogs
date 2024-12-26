import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation'
import React from 'react'

const Postpage = () => {
  const params = useParams();
  const postId = params.id;


  const posts = [
    {
      id:"1",
      title:"First Post",
      content:"This is my first post",

    },{
      id:"2",
      title:"Second post",
      content:"This is my Second Post",

    }
  ]
  const post = posts.find((p) => p.id === postId);

  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Postpage
