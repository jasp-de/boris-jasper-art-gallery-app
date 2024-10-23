import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Spotlight from "@/components/Spotlight";
import AnimatedHeading from "@/components/AnimatedHeading";
import styled from "styled-components";
import Link from "next/link";

const BackLink = styled(Link)`
  display: inline-block;
  margin: 20px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  text-decoration: underline;

  &:hover {
    color: #666;
  }
`;

export default function Favorites({ data, artPiecesInfo, handleFavorites }) {
  if (!data) {
    return <p>Loading...</p>;
  }

  const favoritePieces = data.filter((piece) =>
    artPiecesInfo.some((info) => info.slug === piece.slug && info.isFavorite)
  );

  return (
    <div>
      <BackLink href="/">BACK</BackLink>
      <h1>Favorites</h1>
      {favoritePieces.length > 0 ? (
        <ArtPieces
          pieces={favoritePieces}
          artPiecesInfo={artPiecesInfo}
          handleFavorites={handleFavorites}
        />
      ) : (
        <p>No favorites yet. Add some art pieces to your favorites!</p>
      )}
    </div>
  );
}
