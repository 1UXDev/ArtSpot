import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/Components/Navigation/Navigation";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const [artPiecesInfo, setArtPiecesInfo] = useState();
  // function onToggleFavorite() {
  //   console.log("Hallo");
  // }

  return (
    <>
      <GlobalStyle />
      {/* <SWRConfig values={{ fetcher }}> */}
      <Navigation />
      <Component
        {...pageProps}
        data={data}
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // onToggleFavorite={onToggleFavorite}
        // setArtPiecesInfo={setArtPiecesInfo}
      />
      {/* </SWRConfig> */}
    </>
  );
}
