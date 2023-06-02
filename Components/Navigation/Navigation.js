import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  console.log(router.pathname);

  if (router.pathname === "/art-list") {
  }

  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Spotlight
      </Link>

      <Link
        href="/art-list"
        className={router.pathname === "/art-list" ? "active" : ""}
      >
        Artworks
      </Link>

      <Link
        href="/favorites"
        className={router.pathname === "/favorites" ? "active" : ""}
      >
        Favorites
      </Link>
    </nav>
  );
}
