import Link from "next/link";

export default function Navigation(slug) {
  return (
    <nav className="navbar">
      <Link slug={slug} href={`/${slug}`}>
        <button>Spotlight</button>
      </Link>
      <Link slug={slug} href={`/${slug}`}>
        <button>Pieces</button>
      </Link>
    </nav>
  );
}
