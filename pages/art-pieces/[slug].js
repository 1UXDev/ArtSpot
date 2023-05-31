import { useRouter } from "next/router";
import ArtPieceDetails from "@/Components/ArtPieceDetails/ArtPieceDetails";

export default function Slug({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const { imageSource, name, artist, year, genre } = data.find(
    (currentArtwork) => currentArtwork.slug === slug
  );

  return (
    <div>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
      />
    </div>
  );
}
