export default function ArtPiecePreview({ pieces }) {
  console.log(pieces);

  if (!pieces) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <img src={piece.imageSource} alt={piece.name} />
          <p>{piece.name}</p>
          <p>{piece.artist}</p>
        </li>
      ))}
    </ul>
  );
}
