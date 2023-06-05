import ColorPalette from "../ColorPalette/ColorPalette";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  title,
  artist,
  year,
  genre,
  image,
  colors,
  favorites,
  setFavorites,
  slug,
}) {
  return (
    <div className="artPieceDetailsContainer">
      <FavoriteButton
        slug={slug}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      <div className="imgContainer">
        <img src={image}></img>
        <img src={image} className="renderedIMG"></img>
      </div>
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
