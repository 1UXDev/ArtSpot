import ArtPieces from "@/Components/ArtPieces/ArtPieces";

export default function ArtList({ data, favorites, setFavorites }) {
  console.log(data);
  return (
    <>
      <h1>Explore</h1>

      <ArtPieces
        data={data}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}
