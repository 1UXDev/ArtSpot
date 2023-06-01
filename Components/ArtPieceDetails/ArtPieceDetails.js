import ColorPalette from "../ColorPalette/ColorPalette";

export default function ArtPieceDetails({
  title,
  artist,
  year,
  genre,
  image,
  colors,
}) {
  return (
    <div>
      <ColorPalette colors={colors} />
      <img src={image} width={600}></img>
      <h1>{title}</h1>
      <div>
        <p>{artist}</p>
        <p>{year}</p>
      </div>
      <div>
        <p>{genre}</p>
      </div>
    </div>
  );
}
