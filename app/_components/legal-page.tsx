import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-surface text-ink">
      <header className="border-b border-line bg-white">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-5 sm:px-8">
          <Link className="text-lg font-semibold text-ink" href="/">
            Gonbee Apps
          </Link>
          <Link className="text-sm font-medium text-muted hover:text-ink" href="/">
            ホームへ戻る
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="rounded-xl border border-line bg-white p-6 shadow-soft sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-trust">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">{description}</p>
          <p className="mt-3 text-sm text-muted">最終更新日：{updatedAt}</p>

          <div className="legal-content mt-10 border-t border-line pt-8">
            {children}
          </div>
        </div>
      </article>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
          <p>© 2026 Gonbee Apps. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy">プライバシーポリシー</Link>
            <Link href="/terms">利用規約</Link>
            <Link href="/data-deletion">データ削除</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
