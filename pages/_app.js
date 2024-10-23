import GlobalStyle from "../styles";
import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

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
