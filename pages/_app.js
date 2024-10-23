import GlobalStyle from "../styles";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";
export default function App({ Component, pageProps }) {
  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
