import styled from "styled-components";
import Image from "next/image";

const FavoriteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
  max-width: 50px;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledImage = styled(Image)`
  filter: ${(props) => (props.isFavorite ? "none" : "grayscale(100%)")};
  opacity: ${(props) => (props.isFavorite ? 1 : 0.6)};
  transition: filter 0.3s ease, opacity 0.3s ease;
`;

export default function AddToFavorites({ isFavorite, onToggleFavorite }) {
  return (
    <FavoriteButton
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <StyledImage
        src="/favicon.ico"
        alt="Favorite"
        width={32}
        height={32}
        isFavorite={isFavorite}
      />
    </FavoriteButton>
  );
}
