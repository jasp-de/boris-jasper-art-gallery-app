import Link from "next/link";
import styled from "styled-components";
import AddToFavorites from "./AddToFavorites";

const PreviewContainer = styled.div`
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
          <img src={imageSource} alt={name} width="400px" />
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
