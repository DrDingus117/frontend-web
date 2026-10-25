import data from "../data/games.json";

export const metadata = { title: "Most Played Games of 2025 | GamesPulse" };

type Game = {
  name: string;
  released: string;
  metacritic: number | null;
  igdbCritic: number | null;
  igdbUsers: number | null;
  rawgRating: number | null;
  peakPlayers: number | null;
};

// Display fixes for names RAWG spells oddly. Add more here if you spot any.
const NAME_FIXES: Record<string, string> = {
  "mecha break": "Mecha Break",
  "Persona5: The Phantom X": "Persona 5: The Phantom X",
};

function displayName(name: string) {
  return NAME_FIXES[name] || name;
}

function scoreText(g: Game) {
  if (g.metacritic) return `Metacritic ${g.metacritic}`;
  if (g.igdbCritic) return `IGDB critic ${g.igdbCritic}`;
  if (g.igdbUsers) return `IGDB overall ${g.igdbUsers}`;
  if (g.rawgRating) return `RAWG ${g.rawgRating}/5`;
  return "Not rated";
}

function formatDate(released: string) {
  return new Date(released + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function GameList({ games }: { games: Game[] }) {
  return (
    <>
      {games.map((g) => (
        <li key={g.name} className="py-2">
          <div className="flex justify-between gap-4">
            <span className="text-gray-50 font-bold">{displayName(g.name)}</span>
            <span className="text-gray-300 text-right text-sm">
              <time dateTime={g.released}>{formatDate(g.released)}</time>
              {` · ${scoreText(g)}`}
              {g.peakPlayers ? ` · Peak ${g.peakPlayers.toLocaleString("en-US")}` : ""}
            </span>
          </div>
        </li>
      ))}
    </>
  );
}

export default function Games() {
  const paid: Game[] = data.paid;
  const free: Game[] = data.free;
  const hasPeaks = [...paid, ...free].some((g) => g.peakPlayers);

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-gray-50">Most Played Games of 2025</h1>
        <p className="text-sm text-gray-300">
          Data collected {data.collected} from RAWG and IGDB{hasPeaks ? " and SteamDB." : "."}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        {/* PAY TO PLAY (left) */}
        <section aria-labelledby="paid-heading" className="bg-indigo-950/60 border-2 border-indigo-400 p-5">
          <h2 id="paid-heading" className="text-3xl font-bold text-indigo-200 mb-4">Pay to Play</h2>
          <ol className="list-decimal pl-6 divide-y divide-indigo-400/30">
            <GameList games={paid} />
          </ol>
        </section>

        {/* FREE TO PLAY (right) */}
        <section aria-labelledby="free-heading" className="bg-emerald-950/60 border-2 border-emerald-400 p-5">
          <h2 id="free-heading" className="text-3xl font-bold text-emerald-200 mb-4">Free to Play</h2>
          <ol className="list-decimal pl-6 divide-y divide-emerald-400/30">
            <GameList games={free} />
          </ol>
        </section>
      </div>
    </main>
  );
}