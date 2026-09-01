import type { Metadata } from "next";
import { LegalPage } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "ユーザーデータの削除 | Berry Threads Assistant",
  description: "Berry Threads Assistantに保存されたユーザーデータの削除手順",
};

export default function DataDeletionPage() {
  return (
    <LegalPage
      eyebrow="User Data Deletion"
      title="ユーザーデータの削除手順"
      description="Berry Threads Assistantとの連携解除および保存データの削除を申請できます。"
      updatedAt="2026年9月1日"
    >
      <section>
        <h2>1. Meta側でアプリ連携を解除する</h2>
        <ol>
          <li>ThreadsまたはMetaのアカウン設定を開きます。</li>
          <li>「アプリとウェブサイト」または連携アプリの管理画面を開きます。</li>
          <li>「Berry Threads Assistant」を選択し、アクセスを削除または連携を解除します。</li>
        </ol>
        <p>
          これにより今後のAPIアクセスを停止できますが、すでに本サービス側に保存されたデータの削除には次の申請も行ってください。
        </p>
      </section>

      <section>
        <h2>2. 保存データの削除を申請する</h2>
        <p>
          <a href="mailto:gonbee1230@gmail.com?subject=Berry%20Threads%20Assistant%20Data%20Deletion%20Request">
            gonbee1230@gmail.com
          </a>
          へ、件名を「Berry Threads Assistant Data Deletion
          Request」としてメールを送信してください。
        </p>
        <p>本人確認と対象の特定のため、次の情報を記載してください。</p>
        <ul>
          <li>Threadsのユーザー名</li>
          <li>本サービスと連携したおおよその日付</li>
          <li>「本サービスに保存された自分のデータの削除を希望する」という文言</li>
        </ul>
        <p>
          パスワード、アクセストークン、クレジットカード情報は送信しないでください。
        </p>
      </section>

      <section>
        <h2>3. 削除対象</h2>
        <p>対象を確認できた場合、次のデータを削除します。</p>
        <ul>
          <li>Threadsアカウン識別子と認証情報</li>
          <li>本サービス内の投稿案、投稿履歴、分析結果</li>
          <li>本サービスが作成した関連ログ、保存ファイル</li>
        </ul>
        <p>
          法令上の保存義務がある情報や、不正利用防止に必要な最小限の記録は、適用期間中のみ保存する場合があります。
        </p>
      </section>

      <section>
        <h2>4. 完了までの期間</h2>
        <p>
          本人確認および対象データの特定後、原則30日以内に削除し、完了をメールでお知らせします。
        </p>
      </section>
    </LegalPage>
  );
}
