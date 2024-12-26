"use client"
import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);  
  const [newComment, setNewComment] = useState('');  


  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value); 
  };
  
  const handleCommentsSubmit = () => {
    if (newComment) {
      setComments((prevComments) => [...prevComments, newComment]);  // Add new comment
      setNewComment('');  
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newComment}
        onChange={handleCommentChange}
        placeholder="Add a comment"
      />
      <button onClick={handleCommentsSubmit}>Submit</button>
      <div>
        <h3>Comments:</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
