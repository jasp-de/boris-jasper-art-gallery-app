import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

export default function ArtPiecePreview({ pieces }) {
  console.log(pieces);

  if (!pieces) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {pieces.map(({ slug, imageSource, name, artist }) => (
        <li key={slug}>
          <Link slug={slug} href={`/art-pieces/${slug}`}>
            <img src={imageSource} alt={name} />
          </Link>
          <p>{name}</p>
          <p>{artist}</p>
        </li>
      ))}
    </ul>
  );
}
