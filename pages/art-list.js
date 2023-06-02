import ArtPieces from "@/Components/ArtPieces/ArtPieces";

export default function ArtList({ data, favorites, setFavorites }) {
    console.log(data);
    return (
        <ArtPieces
            data={data}
            favorites={favorites}
            setFavorites={setFavorites}
        />
    );
}