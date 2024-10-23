import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import ArtPieces from "@/components/ArtPieces";
import ArtPiecePreview from "@/components/ArtPiecePreview";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  return (
    <div>
      <h1>Hello from Next.jspr</h1>
      <ArtPieces pieces={data} />
      <ArtPiecePreview pieces={data} />
    </div>
  );
}
