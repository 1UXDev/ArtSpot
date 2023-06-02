import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link href="/">Spotlight</Link>
      </div>
      <div>
        <Link href="/art-list">Artworks</Link>
      </div>
      <div>
        <Link href="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}
