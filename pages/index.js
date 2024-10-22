import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
export default function HomePage() {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );
}
