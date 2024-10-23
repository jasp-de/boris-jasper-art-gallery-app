import styled from "styled-components";
import { useState, useEffect } from "react";
import Link from "next/link";
import AddToFavorites from "./AddToFavorites";

const SpotlightWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  height: auto;
  max-height: 60vh;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 60vh;
    object-fit: contain;
    margin-bottom: 10px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
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
  width: 100%;
  max-height: 60vh;
  display: inline-block;
`;

const FavoriteButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
`;

const RandomPieceButton = styled.button`
  &:hover {
    transform: scale(1.01);
    background-color: #357abd;
  }
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
      <ImageContainer>
        <Link href={`/art-pieces/${randomPiece.slug}`}>
          <img src={randomPiece.imageSource} alt={randomPiece.name} />
          <FavoriteButtonWrapper>
            <AddToFavorites
              isFavorite={isFavorite}
              onToggleFavorite={handleFavorites}
            />
          </FavoriteButtonWrapper>
        </Link>
      </ImageContainer>
      <p>{randomPiece.artist}</p>
      <RandomPieceButton onClick={getRandomPiece}>
        Show Another Piece
      </RandomPieceButton>
    </SpotlightWrapper>
  );
}
