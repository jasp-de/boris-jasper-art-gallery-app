import ArtPieceDetails from "../../components/ArtPieceDetails";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

export default function Details({ image, title, artist, year, genre }) {
  return (
    <div>
      <ArtPieceDetails> </ArtPieceDetails>
    </div>
  );
}
