import Link from "next/link";

export default function ArtPieceDetails({ PieceData }) {
  const { imageSource, name, year, artist, genre, colors } = PieceData;

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
      <img src={imageSource} alt={name} title={name} width="400px" />
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
