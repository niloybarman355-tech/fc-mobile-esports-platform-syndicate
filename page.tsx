export default function Home() {
  const features = [
    "Registrations",
    "Fixtures",
    "Standings",
    "Results",
    "Leaderboards",
    "Admin Dashboard",
  ];

  return (
    <main className="site-shell">
      <section className="hero">
        <div className="eyebrow">THE SYNDICATE • FC MOBILE ESPORTS</div>
        <h1>TOURNAMENT HUB</h1>
        <p>
          Run registrations, fixtures, results, standings and leaderboards
          from one competitive platform.
        </p>

        <div className="actions">
          <a className="primary" href="#tournament">View Tournament</a>
          <a className="secondary" href="#features">Explore Features</a>
        </div>
      </section>

      <section id="tournament" className="panel">
        <div>
          <span className="live">LIVE</span>
          <h2>Ultimate Division Rival — Season 01</h2>
          <p>League + Knockout • 16 Participants</p>
        </div>

        <div className="stats">
          <div><strong>16</strong><span>Teams</span></div>
          <div><strong>120</strong><span>Matches</span></div>
          <div><strong>194</strong><span>Goals</span></div>
        </div>
      </section>

      <section id="features" className="grid">
        {features.map((item) => (
          <article className="card" key={item}>
            <span>FCM</span>
            <h3>{item}</h3>
            <p>Built for fast, mobile-first tournament operations.</p>
          </article>
        ))}
      </section>
    </main>
  );
}
