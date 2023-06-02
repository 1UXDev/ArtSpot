import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  image,
  artist,
  slug,
  favorites,
  setFavorites,
}) {
  return (
    <div className="Spotlight">
      <div className="details">
        <Link href={`/art-pieces/${slug}`}>
          <div className="artPieceDetailsContainer">
            <FavoriteButton
              slug={slug}
              favorites={favorites}
              setFavorites={setFavorites}
            />
            <img src={image}></img>
            <div className="artpieceDetails">
              <h1>{artist}</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
