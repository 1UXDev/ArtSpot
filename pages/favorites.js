import { useState } from "react";

export default function favorites({}) {
  // const [favState, setFavState] = useState(["red - and - blue"]);

  // const

  // function handleToggleFavorite(slug) {
  //   setFavState((favState) => {
  //     const favInfo = favState.find((clickedFav) => clickedFav.slug === slug);
  //     const { isFavorite } = false;

  //     if (favInfo) {
  //       return favState.map((newArray) =>
  //         favInfo.slug === slug
  //           ? { ...favInfo, isFavorite: !isFavorite }
  //           : favInfo
  //       );
  //     }
  //     console.log(favState);

  //     return [...favState, { slug, isFavorite: true }];
  //   });

  return (
    <div>
      <h1>Here are your Favs</h1>
    </div>
  );
}
