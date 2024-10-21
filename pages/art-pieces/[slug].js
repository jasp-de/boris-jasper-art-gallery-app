import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PieceDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (!slug || !data) {
    return <p>Loading...</p>;
  }

  const PieceData = data.find((piece) => piece.slug === slug);

  if (!PieceData) {
    return <p>Art piece not found</p>;
  }

  return <ArtPieceDetails PieceData={PieceData} />;
}
