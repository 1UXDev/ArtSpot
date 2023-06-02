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
      <img src={image}></img>
      <div className="artpieceDetails">
        <h1>{title}</h1>
        <div className="colorPalette">
          <ColorPalette colors={colors} />
        </div>
        <div className="artistYear">
          <p style={{ fontWeight: "bold" }}>{artist}</p>
          <p>{year}</p>
        </div>
        <div className="genre">
          <p>#{genre}</p>
        </div>
      </div>
    </div>
  );
}
