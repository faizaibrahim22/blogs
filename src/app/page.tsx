import React from "react";
import Navbar from "@/components/Navbar";
import Author from "@/components/Author";
import BlogsCard from "@/components/BlogsCard";
import Feacture from "@/components/Feacture"; // or Feature if renamed
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Feacture />
      <BlogsCard />
      <CommentSection postId="1" /> {/* Replace "1" with dynamic postId if needed */}
      <Author />
      <Footer />
    </div>
  );
};

export default Page;
