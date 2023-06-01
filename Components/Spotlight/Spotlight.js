import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ image, artist, slug, favorites,
  setFavorites, }) {
  return (
    <div className="Spotlight">
      <Link href={`/art-pieces/${slug}`}>
        <img src={image} width={600}></img>
        <h3>{artist}</h3>
        <FavoriteButton
          slug={slug}
          favorites={favorites}
          setFavorites={setFavorites} />
      </Link>
    </div>
  );
}
