import GlobalStyle from "../styles";
import useSWR from "swr";
import { useEffect, useState } from "react";
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

  const handleFavorites = (slug) => {
    updateArtPiecesInfo((draft) => {
      const index = draft.findIndex((piece) => piece.slug === slug);
      if (index !== -1) {
        draft[index].isFavorite = !draft[index].isFavorite;
      } else {
        draft.push({ slug, isFavorite: true });
      }
    });
  };

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        handleFavorites={handleFavorites}
      />
    </>
  );
}
