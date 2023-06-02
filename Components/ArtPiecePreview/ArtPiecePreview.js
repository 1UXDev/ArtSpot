import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  title,
  artist,
  image,
  slug,
  favorites,
  setFavorites,
}) {
  return (
    <li key={slug}>
      <Link href={`/art-pieces/${slug}`}>
        <img src={image} alt={title}></img>
        <h4>{title}</h4>
        <p>{artist}</p>
        <FavoriteButton
          slug={slug}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </Link>
    </li>
  );
}
