import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ data, setFavorites, favorites }) {
  // for later: do not display in List what was randomly selected as Spotlight
  return (
    <ul>
      {data.map((artwork) => {
        return (
          <ArtPiecePreview
            image={artwork.imageSource}
            title={artwork.name}
            artist={artwork.artist}
            slug={artwork.slug}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        );
      })}
    </ul>
  );
}
