export default function Spotlight({ image, artist }) {
  return (
    <>
      <img
        src={image.imageSource}
        alt={artist.artist}
        style={{
          width: "50%",
          height: "auto",
        }}
      />
      <p>{artist.artist}</p>
    </>
  );
}
