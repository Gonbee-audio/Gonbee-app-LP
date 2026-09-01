import type { Metadata } from "next";
import { LegalPage } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "利用規約 | Berry Threads Assistant",
  description: "Berry Threads Assistantの利用規約",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="利用規約"
      description="Berry Threads Assistantの利用条件を定めます。"
      updatedAt="2026年9月1日"
    >
      <section>
        <h2>1. 適用</h2>
        <p>
          本規約は、Gonbee Apps（以下「運営者」）が提供するBerry
          Threads Assistant（以下「本サービス」）の利用に適用されます。
        </p>
      </section>

      <section>
        <h2>2. サービス内容</h2>
        <p>
          本サービスは、Threadsの公開投稿の検索・整理・評価、投稿案の作成支援、および正当に権限を与えられたアカウントへの投稿を支援するツールです。
        </p>
      </section>

      <section>
        <h2>3. 利用条件</h2>
        <ul>
          <li>利用者は、自らが管理する、または正当な権限を持つアカウントでのみ本サービスを利用できます。</li>
          <li>Metaの利用規約、Threads APIのポリシー、法令その他の適用ルールを守る必要があります。</li>
          <li>実際に公開する投稿の内容とタイミングについて、利用者が責任を負います。</li>
        </ul>
      </section>

      <section>
        <h2>4. 禁止事項</h2>
        <ul>
          <li>他者になりすます行為、不正アクセス、スパム、迷惑行為</li>
          <li>著作権、商標権、肖像権、プライバシーその他の第三者の権利を侵害する行為</li>
          <li>権利者の許諾なく、第三者の投稿、画像、動画を複製または再投稿する行為</li>
          <li>虚偽または誤解を招く情報、違法な内容、有害な内容を公開する行為</li>
          <li>本サービスや外部サービスに過度な負荷をかける行為</li>
        </ul>
      </section>

      <section>
        <h2>5. 知的財産権</h2>
        <p>
          本サービスのシステム、デザイン、文書等の権利は運営者または正当な権利者に帰属します。検索結果に含まれる第三者のコンテンツの権利は、それぞれの権利者に帰属します。
        </p>
      </section>

      <section>
        <h2>6. サービスの変更・停止</h2>
        <p>
          運営者は、保守、仕様変更、障害、外部サービスの変更その他の事情により、本サービスの全部または一部を変更・停止する場合があります。
        </p>
      </section>

      <section>
        <h2>7. 免責事項</h2>
        <p>
          運営者は、本サービスの完全性、正確性、継続性、特定目的への適合性を保証しません。法令上免責できない場合を除き、本サービスの利用により生じた損害について、運営者は責任を負いません。
        </p>
      </section>

      <section>
        <h2>8. 規約の変更</h2>
        <p>
          運営者は、必要に応じて本規約を変更することがあります。変更後の規約は、本ページに掲載した時点から効力を生じます。
        </p>
      </section>

      <section>
        <h2>9. お問い合わせ</h2>
        <p>
          本規約に関するお問い合わせは、
          <a href="mailto:gonbee1230@gmail.com">gonbee1230@gmail.com</a>までご連絡ください。
        </p>
      </section>
    </LegalPage>
  );
}
