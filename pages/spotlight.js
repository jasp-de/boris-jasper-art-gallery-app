import Link from "next/link";
import styled from "styled-components";
import AddToFavorites from "@/components/AddToFavorites";
import Spotlight from "@/components/Spotlight";

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

export default function SpotlightPage({
  data,
  artPiecesInfo,
  handleFavorites,
}) {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BackLink href="/">BACK</BackLink>
      <Spotlight
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleFavorites={handleFavorites}
      />
    </>
  );
}
