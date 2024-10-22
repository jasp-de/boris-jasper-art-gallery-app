import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

export default function ArtPiecePreview({
  piece,
  isFavorite,
  onToggleFavorite,
}) {
  const { slug, imageSource, name, artist } = piece;

  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <img src={imageSource} alt={name} width="400px" />
      </Link>
      <p>{name}</p>
      <p>{artist}</p>
      <button onClick={onToggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
