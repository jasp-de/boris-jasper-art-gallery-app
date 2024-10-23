import Link from "next/link";
import styled from "styled-components";
import AddToFavorites from "./AddToFavorites";

const PreviewContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const ArtImage = styled.img`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  &:hover {
    animation: grow 0.3s forwards;
  }

  @keyframes grow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.02);
    }
  }
`;

export default function ArtPiecePreview({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  const { slug, imageSource, name, artist } = piece;

  return (
    <PreviewContainer>
      <ImageContainer>
        <Link href={`/art-pieces/${slug}`}>
          <ArtImage src={imageSource} alt={name} width="400px" />
        </Link>
        <FavoriteButtonWrapper>
          <AddToFavorites
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </FavoriteButtonWrapper>
      </ImageContainer>
      <p>
        <i>
          {name} - {artist}
        </i>
      </p>
    </PreviewContainer>
  );
}
