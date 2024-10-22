import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";
import Spotlight from "@/components/Spotlight";
import AnimatedHeading from "@/components/AnimatedHeading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage({ data, artPiecesInfo, handleFavorites }) {
  return (
    <div>
      <AnimatedHeading />
      <Spotlight pieces={data} />
      <ArtPieces
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        handleFavorites={handleFavorites}
      />
    </div>
  );
}
