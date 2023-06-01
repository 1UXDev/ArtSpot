export default function FavoriteButton({ slug, setFavorites, favorites }) {
  console.log("current Button Slug", slug);
  console.log("favorite", favorites);

  function handleToggle(event) {
    event.preventDefault();

    setFavorites((favorites) => {
      if (info) {
        return favorites.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      return [...favorites, { slug, isFavorite: true }];
    });
  }

  const info = favorites.find((info) => info.slug === slug);
  const { isFavorite } = info || { isFavorite: false };
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return <button onClick={handleToggle}>{isFavorite ? "❤️" : "🖤"}</button>;
}
