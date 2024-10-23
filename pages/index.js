import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
import Layout from "@/components/Layout";
import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";
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

  /*  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data!</div>;
  } */
  return (
    <>
      <Layout />

      <ArtPieces pieces={data} />
    </>
  );
}
