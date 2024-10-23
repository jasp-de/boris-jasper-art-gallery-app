import { useState, useEffect } from "react";
import styled from "styled-components";

const CommentList = styled.ul`
  list-style-type: none; // Убираем маркеры списка
  padding: 0; // Убираем отступы
`;

const CommentItem = styled.li`
  margin-bottom: 15px;
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
  align-self: flex-end;
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
    const newComments = [...comments, comment];
    setComments(newComments);
    localStorage.setItem(`comments-${slug}`, JSON.stringify(newComments));
    setComment("");
  };

  return (
    <div>
      <h3>Comments</h3>
      <CommentList>
        {comments.map((c, index) => (
          <CommentItem key={index}>Anonim: {c}</CommentItem>
        ))}
      </CommentList>
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
