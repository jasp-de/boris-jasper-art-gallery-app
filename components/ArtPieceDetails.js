import Link from "next/link";

export default function ArtPieceDetails({ pieceData }) {
  const { imageSource, name, artist, year, genre, colors } = pieceData;

  return (
    <div>
      <Link
        href="/"
        style={{
          margin: "20px",
        }}
      >
        {" "}
        BACK
      </Link>
      <img src={imageSource} alt={name} title={name} />
      <p>
        {name} - {year}
      </p>
      <p>{artist}</p>
      <p>Genre: {genre}</p>
      <div>
        <p>
          Colors:
          {colors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: "20px",
                height: "20px",
                display: "inline-block",
                margin: "0 5px",
                borderRadius: "50%",
                alignItems: "center",
              }}
              title={color}
            ></div>
          ))}
        </p>
      </div>
    </div>
  );
}
