import ArtPieces from "@/components/ArtPieces";
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

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  handleFavorites,
}) {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <BackLink href="/">BACK</BackLink>
      <h1>All Art Pieces</h1>
      <ArtPieces
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleFavorites={handleFavorites}
      />
    </div>
  );
}
