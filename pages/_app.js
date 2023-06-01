import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/Components/Navigation/Navigation";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  //const localFavorites = localStorage.getItem(JSON.parse("favorites"));
  const [favorites, setFavorites] = useState(
    localFavorites ? localFavorites : [{}]
  );

  // Everytime favorites changes we write it to the localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

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
