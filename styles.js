import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #fff;

  }

  h1, h2 {
    text-align: center;
    color: #1a1a1a;
  }

  img {
    height: auto;
    display: block;
  }

  button {
    background-color: #4a90e2;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  @media (min-width: 768px) {
    body {
      max-width: 1800px;
      margin: 0 auto;
      padding: 20px;
    }
  }
`;
