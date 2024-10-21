import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  console.log("data:", data);

  return (
    <div>
      <h1>Hello from Next.jspr</h1>
    </div>
  );
}
