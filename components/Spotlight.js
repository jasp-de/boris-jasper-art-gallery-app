import styled from "styled-components";
import { useState, useEffect } from "react";

const SpotlightWrapper = styled.div`
  margin-bottom: 40px;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    font-weight: bold;
  }

  button {
    margin-top: 10px;
  }
`;

export default function Spotlight({ pieces }) {
  const [randomPiece, setRandomPiece] = useState(null);

  const getRandomPiece = () => {
    if (pieces && pieces.length > 0) {
      const randomIndex = Math.floor(Math.random() * pieces.length);
      setRandomPiece(pieces[randomIndex]);
    }
  };

  useEffect(() => {
    getRandomPiece();
  }, [pieces]);

  if (!randomPiece) {
    return <p>Loading...</p>;
  }

  return (
    <SpotlightWrapper>
      <h2>Spotlight</h2>
      <img src={randomPiece.imageSource} alt={randomPiece.name} />
      <p>{randomPiece.artist}</p>
      <button onClick={getRandomPiece}>Show Another Piece</button>
    </SpotlightWrapper>
  );
}
