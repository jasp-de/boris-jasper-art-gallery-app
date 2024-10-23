import Link from "next/link";
import AddToFavorites from "./AddToFavorites";
import styled from "styled-components";
import CommentForm from "./CommentForm";

const ArtPieceWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
  text-decoration: underline;

  &:hover {
    color: #666;
  }
`;

const ArtImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const ArtInfo = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Artist = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 5px;
`;

const Genre = styled.p`
  font-size: 16px;
  color: #888;
  margin-bottom: 15px;
`;

const ColorsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColorLabel = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

const ColorSwatch = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  display: inline-block;
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

export default function ArtPieceDetails({
  pieceData,
  isFavorite,
  handleFavorites,
}) {
  const { imageSource, name, artist, year, genre, colors, slug } = pieceData;

  const handleToggleFavorite = () => {
    handleFavorites(pieceData.slug);
  };

  return (
    <ArtPieceWrapper>
      <BackLink href="/">BACK</BackLink>

      <ImageContainer>
        <ArtImage src={imageSource} alt={name} title={name} />
        <FavoriteButtonWrapper>
          <AddToFavorites
            isFavorite={isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
        </FavoriteButtonWrapper>
      </ImageContainer>

      <ArtInfo>
        <Title>
          {name} - {year}
        </Title>
        <Artist>{artist}</Artist>
        <Genre>Genre: {genre}</Genre>
      </ArtInfo>
      <ColorsWrapper>
        <ColorLabel>Colors:</ColorLabel>
        {colors.map((color) => (
          <ColorSwatch
            key={color}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </ColorsWrapper>
      <CommentForm slug={slug} />
    </ArtPieceWrapper>
  );
}
