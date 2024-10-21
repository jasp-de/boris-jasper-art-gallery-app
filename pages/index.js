import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

export default function HomePage() {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  return (
    <div>
      <h1>Hello from Next.jspr</h1>
    </div>
  );
}
