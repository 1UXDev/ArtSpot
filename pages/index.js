import Spotlight from "@/Components/Spotlight/Spotlight";
import ArtPieces from "@/Components/ArtPieces/ArtPieces";

export default function HomePage({ data }) {
  let randNumber = null;
  function randomizer() {
    return (randNumber = Math.floor(Math.random() * data.length));
  }
  randomizer();
  return (
    <div>
      <h1>ArtSpot</h1>
      <Spotlight
        image={data[randNumber].imageSource}
        artist={data[randNumber].artist}
      />
      <ArtPieces data={data} />
    </div>
  );
}
