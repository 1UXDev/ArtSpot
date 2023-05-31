import ArtPieces from "@/Components/ArtPieces/ArtPieces";
import GlobalStyle from "../styles";
import useSWR from "swr";
import ArtPiecePreview from "@/Components/ArtPiecePreview/ArtPiecePreview";
import Spotlight from "@/Components/Spotlight/Spotlight";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  let randNumber = null;
  function randomizer() {
    return (randNumber = Math.floor(Math.random() * data.length));
  }
  randomizer();

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Spotlight
        image={data[randNumber].imageSource}
        artist={data[randNumber].artist}
      />
      <ArtPieces data={data} />
    </>
  );
}
