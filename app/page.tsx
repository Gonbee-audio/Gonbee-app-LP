const businessActivities = [
  "Mobile app planning, development, and operation",
  "Android utility app development",
  "Productivity, lifestyle, document, and daily-use tools",
  "App maintenance and user support",
];

const apps = [
  {
    name: "DayFilm - Daily Vlog Maker",
    description:
      "A lightweight tool for turning everyday moments into simple daily vlog videos.",
  },
  {
    name: "Pause10: Breathing Timer",
    description:
      "A focused breathing timer designed for short pauses, calm routines, and daily reset moments.",
  },
  {
    name: "PDF Rotate Lite",
    description:
      "A practical document utility for rotating PDF pages quickly on Android devices.",
  },
  {
    name: "Rappel Medicaments Lite",
    description:
      "A simple reminder app that helps users keep track of medicine schedules.",
  },
  {
    name: "Facture Minute Lite",
    description:
      "A compact invoice helper for creating basic billing records with minimal friction.",
  },
  {
    name: "Mes Colis Lite",
    description:
      "A daily-use parcel tracking helper for organizing shipment information.",
  },
];

const companyFacts = [
  ["Brand", "Gonbee Apps"],
  ["Operator", "Yuuhei Takahashi"],
  ["Location", "Japan"],
  ["Business", "Mobile app development and operation"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <header className="border-b border-line/80 bg-white/95">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8"
          aria-label="Primary navigation"
        >
          <a href="#top" className="text-lg font-semibold tracking-normal text-ink">
            Gonbee Apps
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-muted sm:flex">
            <a className="transition hover:text-ink" href="#about">
              About
            </a>
            <a className="transition hover:text-ink" href="#apps">
              Apps
            </a>
            <a className="transition hover:text-ink" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="border-b border-line/70 bg-surface">
        <div
          id="main-content"
          className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <p className="mb-5 inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-trust">
              Gonbee Apps operated by Yuuhei Takahashi
            </p>
            <h1 className="text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
              Gonbee Apps
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Independent mobile app project operated by Yuuhei Takahashi, a
              sole proprietor in Japan.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              We develop and operate lightweight Android apps for everyday
              productivity, lifestyle, documents, and daily utilities.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                Contact us
              </a>
              <a
                href="#apps"
                className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              >
                View apps
              </a>
            </div>
          </div>

          <aside
            className="rounded-lg border border-line bg-white p-6 shadow-soft"
            aria-label="Business profile"
          >
            <h2 className="text-base font-semibold text-ink">Business Profile</h2>
            <dl className="mt-6 space-y-5">
              {companyFacts.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 border-b border-line/70 pb-4 last:border-0 last:pb-0 sm:grid-cols-[120px_1fr]"
                >
                  <dt className="text-sm font-medium text-muted">{label}</dt>
                  <dd className="text-sm font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 rounded-md bg-surface px-4 py-3 text-sm leading-6 text-muted">
              Official website for Google Play app publication, support, and
              business contact.
            </p>
          </aside>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-trust">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink">
              Independent Android app development from Japan.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              Gonbee Apps is a mobile app development project operated by
              Yuuhei Takahashi, a sole proprietor in Japan.
            </p>
            <p>
              We plan, develop, publish, maintain, and operate Android apps for
              Google Play, with a focus on lightweight tools that are easy to
              use in daily life.
            </p>
            <p className="rounded-lg border border-line bg-surface p-5">
              日本の個人事業主である Yuuhei Takahashi が、日常生活・作業効率化・
              ドキュメント管理などに役立つ軽量な Android アプリを企画、開発、
              運営しています。
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line/70 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-trust">
              Business Activities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink">
              Mobile app development and operation.
            </h2>
          </div>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {businessActivities.map((activity) => (
              <li
                key={activity}
                className="rounded-lg border border-line bg-white p-5 text-base font-medium text-ink shadow-sm"
              >
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-trust">
              Apps
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink">
              Published and planned Android utilities.
            </h2>
          </div>
          <p className="text-sm leading-6 text-muted">
            Google Play links will be added as each listing is finalized.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {apps.map((app) => (
            <article
              key={app.name}
              className="flex h-full flex-col justify-between rounded-lg border border-line bg-white p-6 shadow-sm transition hover:border-brand/40 hover:shadow-soft"
            >
              <div>
                <h3 className="text-lg font-semibold text-ink">{app.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {app.description}
                </p>
              </div>
              <a
                href="#"
                className="mt-6 inline-flex w-fit items-center rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                aria-label={`${app.name} Google Play listing link not yet available`}
              >
                Google Play
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-y border-line/70 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-trust">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-ink">
              Support and business inquiries.
            </h2>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <p className="text-base leading-7 text-muted">
              For app support, privacy questions, and business inquiries, please
              contact us by email.
            </p>
            <a
              href="mailto:gonbee1230@gmail.com"
              className="mt-5 inline-flex items-center rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
            >
              gonbee1230@gmail.com
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="grid gap-6 border-b border-line pb-8 sm:grid-cols-2 lg:grid-cols-4">
            {companyFacts.map(([label, value]) => (
              <div key={label}>
                <p className="text-sm font-medium text-muted">{label}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Gonbee Apps. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a className="hover:text-ink" href="/privacy">
                Privacy Policy
              </a>
              <a className="hover:text-ink" href="/terms">
                Terms
              </a>
              <a className="hover:text-ink" href="/data-deletion">
                Data Deletion
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
