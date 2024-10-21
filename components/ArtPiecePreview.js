import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

export default function ArtPiecePreview({ pieces, handleFavorites }) {
  if (!pieces) {
    return <p>Loading...</p>;
  }

  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "50px",
        margin: "20px",
      }}
    >
      {pieces.map(({ slug, imageSource, name, artist }) => (
        <div
          key={slug}
          style={{
            backgroundColor: "#f9f9f9",
            padding: "50px",
            margin: "20px",
          }}
        >
          <Link slug={slug} href={`/art-pieces/${slug}`}>
            <img src={imageSource} alt={name} width="400px" />
          </Link>
          <p>{name}</p>
          <p>{artist}</p>
          <button className="FavoritesButton" onClick="handleFavorites">
            TOGGLE FAVORITES
          </button>
        </div>
      ))}
    </div>
  );
}
