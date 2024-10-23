import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";

const ArtPiecesGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;
  padding: 20px;
`;

const PreviewContainer = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;
  padding: 20px;
`;

export default function ArtPieces({ pieces, artPiecesInfo, handleFavorites }) {
  if (!pieces || pieces.length === 0) {
    return <p>No art pieces available.</p>;
  }

  return (
    <ArtPiecesGrid>
      <PreviewContainer>
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
      </PreviewContainer>
    </ArtPiecesGrid>
  );
}
