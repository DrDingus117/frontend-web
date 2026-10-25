export const metadata = { title: "About | GamesPulse" };

export default function About() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-gray-50">About the Site</h1>

      <section id="mission" aria-labelledby="mission-heading" className="space-y-2">
        <h2 id="mission-heading" className="text-2xl font-bold text-gray-50">Our Mission</h2>
        <p>Make the site accessible and functional.</p>
      </section>

      <section id="team" aria-labelledby="team-heading" className="space-y-2">
        <h2 id="team-heading" className="text-2xl font-bold text-gray-50">Our Team</h2>
        <p>
          I plan on keeping up with everyone&apos;s progress to get this site closer every week to being completed.
        </p>
      </section>

      <section id="github" aria-labelledby="github-heading" className="space-y-2">
        <h2 id="github-heading" className="text-2xl font-bold text-gray-50">Kenny&apos;s GitHub Repo</h2>
        <a
          href="https://github.com/myKalling/CAP-SOFT-290-GamePulse-2025-Cross-Platform-Video-Game-Sentiment-and-Consumer-Trust-Analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Visit the GitHub repo (opens in a new tab)
        </a>
      </section>
    </main>
  );
}