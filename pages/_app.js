import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "@/Components/Navigation/Navigation";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [{}],
  });

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
