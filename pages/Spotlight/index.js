import Layout from "@/components/Layout";
import Spotlight from "@/components/Spotlight";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function SpotlightPage() {
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  const router = useRouter();

  const [randomValueSpotlight, setRandomValueSpotlight] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setRandomValueSpotlight(Math.floor(Math.random() * data.length));
    }
  }, [data]);
  return (
    <>
      <Layout />

      {randomValueSpotlight !== null && (
        <Spotlight
          artist={data[randomValueSpotlight]}
          image={data[randomValueSpotlight]}
        />
      )}
    </>
  );
}
