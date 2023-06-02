import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Artworks</Link>
      <Link href="/spotlight">Spotlight</Link>
      <Link href="/favorites">Favorites</Link>
    </nav>
  );
}
