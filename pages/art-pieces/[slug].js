import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function PieceDetails({ data, artPiecesInfo, handleFavorites }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || !data) {
    return <p>Loading...</p>;
  }

  const pieceData = data.find((piece) => piece.slug === slug);

  if (!pieceData) {
    return <p>Art piece not found</p>;
  }

  const isFavorite =
    artPiecesInfo.find((info) => info.slug === slug)?.isFavorite || false;

  return (
    <ArtPieceDetails
      pieceData={pieceData}
      isFavorite={isFavorite}
      handleFavorites={handleFavorites}
    />
  );
}
