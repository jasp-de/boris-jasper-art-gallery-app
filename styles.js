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
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  button {
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
  }

  @media (min-width: 768px) {
    body {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
  }
`;
