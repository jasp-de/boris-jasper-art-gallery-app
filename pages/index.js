import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function HomePage({ data, artPiecesInfo, handleFavorites }) {
  return (
    <div>
      <Spotlight
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleFavorites={handleFavorites}
      />
      <ArtPieces
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleFavorites={handleFavorites}
      />
    </div>
  );
}
