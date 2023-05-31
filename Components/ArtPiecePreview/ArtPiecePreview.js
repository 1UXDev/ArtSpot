import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({ title, artist, image, slug }) {
  console.log({ title });
  return (
    <li key={slug}>
      <Link href={`/art-pieces/${slug}`}>
        <img src={image} alt={title} width="200px"></img>
        <h4>{title}</h4>
        <p>{artist}</p>
        {/* <FavoriteButton
          isFavorite={false}
          onToggleFavorite={onToggleFavorite}
        /> */}
      </Link>
    </li>
  );
}
