import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navbar">
      <Link href="/pages/Spotlight">
        <button>Spotlight</button>
      </Link>
      <Link href="/pages/art-pieces">
        <button>Pieces</button>
      </Link>
    </nav>
  );
}
