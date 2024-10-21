import GlobalStyle from "../styles";
import useSWR from "swr";
<<<<<<< HEAD
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import { useEffect, useState } from "react";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function App({ Component, pageProps }) {
=======
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

>>>>>>> main
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

<<<<<<< HEAD
  const [randomValueSpotlight, setRandomValueSpotlight] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setRandomValueSpotlight(Math.floor(Math.random() * data.length));
    }
  }, [data]);
  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data!</div>;
  }

=======
>>>>>>> main
  return (
    <>
      {randomValueSpotlight !== null && (
        <Spotlight
          artist={data[randomValueSpotlight]}
          image={data[randomValueSpotlight]}
        />
      )}
      <ArtPieces pieces={data} />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
