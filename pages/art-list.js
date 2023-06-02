import ArtPieces from "@/Components/ArtPieces/ArtPieces";

export default function ArtList({ data, favorites, setFavorites }) {
  console.log(data);
  return (
    <div className="artList">
      <h1>Explore All Artworks</h1>

      <ArtPieces
        data={data}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}
