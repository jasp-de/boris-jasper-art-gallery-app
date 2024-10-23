import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const ArtPiecesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default function ArtPieces({ pieces, artPiecesInfo, handleFavorites }) {
  if (!pieces || pieces.length === 0) {
    return <p>No art pieces available.</p>;
  }

  return (
    <ArtPiecesGrid>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          piece={piece}
          isFavorite={
            artPiecesInfo.find((info) => info.slug === piece.slug)
              ?.isFavorite || false
          }
          onToggleFavorite={() => handleFavorites(piece.slug)}
        />
      ))}
    </ArtPiecesGrid>
  );
}
