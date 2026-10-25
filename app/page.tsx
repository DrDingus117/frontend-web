import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-gray-50">Welcome to GamesPulse</h1>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <li>
          <Link href="/games" className="block bg-gray-800 border border-gray-700 hover:bg-gray-700 p-5 text-xl font-bold text-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300">
            Games
          </Link>
        </li>
        <li>
          <Link href="/about" className="block bg-gray-800 border border-gray-700 hover:bg-gray-700 p-5 text-xl font-bold text-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/credits" className="block bg-gray-800 border border-gray-700 hover:bg-gray-700 p-5 text-xl font-bold text-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-300">
            Credits
          </Link>
        </li>
        <li>
          <Link href="/account" className="block bg-indigo-500 hover:bg-indigo-400 p-5 text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-sky-300">
            Sign In
          </Link>
        </li>
      </ul>
    </main>
  );
}