import { useState, useEffect } from "react";
import styled from "styled-components";

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 15px;
`;

const CommentText = styled.span`
  display: block;
  font-size: 16px;
`;

const CommentDate = styled.span`
  display: block;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  text-transform: lowercase;
`;

const NoCommentsText = styled.p`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  text-transform: lowercase;
`;

const CommentFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  box-sizing: border-box;
  outline: none;
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #357abd;
  }
`;

export default function CommentForm({ slug }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${slug}`)) || [];
    setComments(savedComments);
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}`;
    const newComment = { text: comment, date: formattedDate };
    const newComments = [...comments, newComment];
    setComments(newComments);
    localStorage.setItem(`comments-${slug}`, JSON.stringify(newComments));
    setComment("");
  };

  return (
    <div>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <NoCommentsText>No comments yet</NoCommentsText>
      ) : (
        <CommentList>
          {comments.map((c, index) => (
            <CommentItem key={index}>
              <CommentText>Anonim: {c.text}</CommentText>
              <CommentDate>{c.date}</CommentDate>
            </CommentItem>
          ))}
        </CommentList>
      )}
      <CommentFormWrapper onSubmit={handleSubmit}>
        <TextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </CommentFormWrapper>
    </div>
  );
}
