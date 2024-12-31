"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [authorComment, setAuthorComment] = useState<string>("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() && authorComment.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorComment,
        text: newComment,
      };

      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorComment("");
    }
  };


  const handleDeleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  const handleEditComment = (id: string) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setEditingCommentId(id);
      setEditingText(commentToEdit.text);
    }
  };

  const handleSaveEdit = () => {
    setComments(
      comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editingText }
          : comment
      )
    );
    setEditingCommentId(null);
    setEditingText("");
  };

  return (
    <div className="space-y-7 ml-11">
      <h2 className="text-2xl font-serif">Comments</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={authorComment}
          onChange={(e) => setAuthorComment(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="px-4 py-2 font-bold bg-black text-white rounded hover:bg-slate-400"
        >
          Submit
        </button>
      </div>
      <div>
        {comments.map((comment) => (
          <Card key={comment.id} className="p-4 mb-4 border rounded">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">{comment.author}</h3>
                {editingCommentId === comment.id ? (
                  <textarea
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="w-full p-2 mt-2 border rounded"
                  ></textarea>
                ) : (
                  <p className="mt-1">{comment.text}</p>
                )}
              </div>
              <div className="space-x-2">
                {editingCommentId === comment.id ? (
                  <button
                    onClick={handleSaveEdit}
                    className="px-2 py-1 text-sm bg-green-500 text-white rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditComment(comment.id)}
                    className="px-2 py-1 text-sm bg-black text-white rounded"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="px-2 py-1 text-sm bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
