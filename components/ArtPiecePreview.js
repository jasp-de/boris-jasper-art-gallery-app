import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

export default function ArtPiecePreview({ pieces }) {
  console.log(pieces);

  if (!pieces) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {pieces.map(({ slug, imageSource, name, artist }) => (
        <div key={slug}>
          <Link slug={slug} href={`/art-pieces/${slug}`}>
            <img src={imageSource} alt={name} width="400px" />
          </Link>
          <p>{name}</p>
          <p>{artist}</p>
        </div>
      ))}
    </div>
  );
}
