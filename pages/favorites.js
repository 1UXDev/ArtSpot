import { useState } from "react";
import Link from "next/link";
import FavoriteButton from "@/Components/FavoriteButton/FavoriteButton";

export default function favorites({ favorites, data, setFavorites }) {
  return (
    <div>
      <h1>Here are your Favs</h1>
      <ul>
        {favorites.map((favoriteArt) => {
          return data.map((CurrentDBItem) => {
            if (favoriteArt.slug === CurrentDBItem.slug) {
              return (
                <li key={CurrentDBItem.slug}>
                  <Link href={`/art-pieces/${CurrentDBItem.slug}`}>
                    <img
                      src={CurrentDBItem.imageSource}
                      alt={CurrentDBItem.name}
                      width="200px"
                    ></img>
                    <h4>{CurrentDBItem.name}</h4>
                    <p>{CurrentDBItem.artist}</p>
                    <FavoriteButton
                      slug={CurrentDBItem.slug}
                      favorites={favorites}
                      setFavorites={setFavorites}
                    />
                  </Link>
                </li>
              );
            }
          });
        })}
      </ul>
    </div>
  );
}
