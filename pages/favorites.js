import ArtPiecePreview from "@/Components/ArtPiecePreview/ArtPiecePreview";
import { uid } from "uid";

export default function favorites({ favorites, data, setFavorites }) {
  return (
    <div>
      <h1>Your Favorite Artworks</h1>
      <ul>
        {favorites.map((favoriteArt) => {
          return data.map((artwork) => {
            if (favoriteArt.slug === artwork.slug && favoriteArt.isFavorite) {
              return (
                <ArtPiecePreview
                  key={uid()}
                  image={artwork.imageSource}
                  title={artwork.name}
                  artist={artwork.artist}
                  slug={artwork.slug}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              );
            }
          });
        })}
      </ul>
    </div>
  );
}
