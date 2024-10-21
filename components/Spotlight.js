export default function Spotlight({ image, artist }) {
  return (
    <>
      <img src={image.imageSource} alt={artist.artist} />
      <p>{artist.artist}</p>
    </>
  );
}
