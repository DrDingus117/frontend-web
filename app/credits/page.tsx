export const metadata = { title: "Credits | GamesPulse" };

const linkClass = "text-sky-300 underline underline-offset-4 hover:text-sky-200";

export default function Credits() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-50">API Credits</h1>
      <p>Game data and review scores on this site come from the sources below.</p>

      <ul className="space-y-3 list-disc pl-6">
        <li>
          <a className={linkClass} href="https://rawg.io" target="_blank" rel="noopener noreferrer">
            RAWG Video Games Database API
          </a>
          : covers, release dates, and ratings
        </li>
        <li>
          <a className={linkClass} href="https://www.igdb.com" target="_blank" rel="noopener noreferrer">
            IGDB
          </a>
          : critic and user ratings
        </li>
        <li>
          <a className={linkClass} href="https://steamdb.info" target="_blank" rel="noopener noreferrer">
            SteamDB
          </a>
          : peak player counts
        </li>
      </ul>
    </main>
  );
}