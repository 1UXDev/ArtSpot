import Link from "next/link";

export default function Spotlight({ image, artist, slug }) {
  return (
    <div className="Spotlight">
      <Link href={`/art-pieces/${slug}`}>
        <img src={image} width={600}></img>
        <h3>{artist}</h3>
      </Link>
    </div>
  );
}
