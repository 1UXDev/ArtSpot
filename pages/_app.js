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

  const [favorites, setFavorites] = useState([
    { slug: "blue-and-red", isFavorite: true },
  ]);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      {/* <SWRConfig values={{ fetcher }}> */}
      <Navigation />
      <Component
        {...pageProps}
        data={data}
        favorites={favorites}
        setFavorites={setFavorites}
      />
      {/* </SWRConfig> */}
    </>
  );
}
