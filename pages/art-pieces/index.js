import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function ArtPiecesPage() {
  const router = useRouter();
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  return (
    <>
      <Layout />
      <ArtPieces />
    </>
  );
}
