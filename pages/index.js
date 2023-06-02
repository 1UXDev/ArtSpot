import Spotlight from "@/Components/Spotlight/Spotlight";
import { uid } from "uid";

export default function HomePage({ data, favorites, setFavorites }) {
  let randNumber = null;
  function randomizer() {
    return (randNumber = Math.floor(Math.random() * data.length));
  }
  randomizer();

  let colors = data[randNumber].colors;
  return (
    <main>
      <h1>
        ArtSpot{" "}
        {colors.map((color) => {
          return (
            <span key={uid()} style={{ color: color }}>
              ⦁
            </span>
          );
        })}
      </h1>
      <Spotlight
        image={data[randNumber].imageSource}
        artist={data[randNumber].artist}
        slug={data[randNumber].slug}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </main>
  );
}
