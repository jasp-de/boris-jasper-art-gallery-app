import Link from "next/link";

export default function ArtPieceDetails({ PieceData }) {
  const { imageSource, name, year, artist, genre } = PieceData;

  return (
    <div>
      <Link href="/">BACK</Link>
      <img src={imageSource} alt={name} width="400px" />
      <p>
        {name} - {year}
      </p>
      <p>{artist}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}
