import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link href="/">Artworks</Link>
      </div>
      <div>
        <Link href="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}
