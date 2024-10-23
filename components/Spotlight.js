import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import AddToFavorites from "./AddToFavorites";

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

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const FavoriteButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default function Spotlight({ pieces, artPiecesInfo, handleFavorites }) {
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

  const isFavorite =
    artPiecesInfo?.find((info) => info.slug === randomPiece.slug)?.isFavorite ||
    false;

  return (
    <SpotlightWrapper>
      <h2>Spotlight</h2>
      <ImageContainer>
        <Link href={`/art-pieces/${randomPiece.slug}`}>
          <img src={randomPiece.imageSource} alt={randomPiece.name} />
        </Link>
        <FavoriteButtonWrapper>
          <AddToFavorites
            isFavorite={isFavorite}
            onToggleFavorite={() => handleFavorites(randomPiece.slug)}
          />
        </FavoriteButtonWrapper>
      </ImageContainer>
      <p>{randomPiece.artist}</p>
      <button onClick={getRandomPiece}>Show Another Piece</button>
    </SpotlightWrapper>
  );
}
