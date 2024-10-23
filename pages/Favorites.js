import ArtPieces from "@/components/ArtPieces";

export default function FavoritesPage({
  data,
  artPiecesInfo,
  handleFavorites,
}) {
  const favoritePieces = data.filter((piece) =>
    artPiecesInfo.find((info) => info.slug === piece.slug && info.isFavorite)
  );

  return (
    <div>
      <h1>Favorite Art Pieces</h1>
      <ArtPieces
        pieces={favoritePieces}
        artPiecesInfo={artPiecesInfo}
        handleFavorites={handleFavorites}
      />
    </div>
  );
}
