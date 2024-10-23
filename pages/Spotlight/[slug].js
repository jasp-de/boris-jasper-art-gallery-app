import ArtPieces from "@/components/ArtPieces";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SpotlightSlug() {
  const router = useRouter();
  const { slug } = router.query;

  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (!slug || !data) {
    return <p>Loading...</p>;
  }

  const SpotlightData = data.find((piece) => piece.slug === slug);

  if (!SpotlightData) {
    return <p>Art piece not found</p>;
  }
  console.log("Slug:", slug);
  console.log("Data:", data);

  return <ArtPieces />;
}
