import ArtPiecePreview from "@/Components/ArtPiecePreview/ArtPiecePreview";
import { uid } from "uid";

export default function favorites({ favorites, data, setFavorites }) {
  return (
    <div className="artList">
      <h1>❤️ Your Favorite Artworks</h1>
      <ul>
        {!favorites.length ? (
          <p>
            You have not yet added any favorites. Check out the{" "}
            <a href="/art-list">Artworks</a>
          </p>
        ) : (
          favorites.map((favoriteArt) => {
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
          })
        )}
      </ul>
    </div>
  );
}
