import Link from "next/link";

const linkClass =
  "inline-block bg-gray-700 hover:bg-gray-600 text-gray-50 font-bold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300";

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 p-4">
        <Link
          href="/games"
          aria-label="GamesPulse home"
          className="text-2xl font-bold tracking-wide text-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Games<span className="text-sky-300">Pulse</span>
        </Link>
        <nav id="nav-list" aria-label="Main">
          <ul className="flex flex-wrap gap-3">
            <li><Link href="/about" className={linkClass}>About</Link></li>
            <li><Link href="/credits" className={linkClass}>Credits</Link></li>
            <li>
              <Link
                href="/account"
                className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Sign In
              </Link>
            </li>
            <li><Link href="/games" className={linkClass}>Games</Link></li>
            <li><Link href="/" className={linkClass}>Home</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}