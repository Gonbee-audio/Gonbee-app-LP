import type { Metadata } from "next";
import { LegalPage } from "../_components/legal-page";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Berry Threads Assistant",
  description: "Berry Threads Assistantのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="プライバシーポリシー"
      description="Berry Threads Assistantにおける情報の取り扱いを説明します。"
      updatedAt="2026年9月1日"
    >
      <section>
        <h2>1. 運営者</h2>
        <p>
          Berry Threads Assistant（以下「本サービス」）は、Gonbee Apps
          （運営者：Yuuhei Takahashi、日本）が運営します。
        </p>
      </section>

      <section>
        <h2>2. 取得する情報</h2>
        <p>本サービスは、利用者の許可に基づき、次の情報を取得する場合があります。</p>
        <ul>
          <li>ThreadsアカウントのID、ユーザー名、プロフィール情報</li>
          <li>利用者が管理するThreads投稿の本文、投稿日時、URL、メディア種別</li>
          <li>Threads APIで検索した公開投稿の本文、ユーザー名、投稿日時、URL、メディア情報</li>
          <li>投稿の表示・反応に関する統計情報</li>
          <li>アクセストークンなど、外部サービスとの連携に必要な認証情報</li>
        </ul>
      </section>

      <section>
        <h2>3. 利用目的</h2>
        <ul>
          <li>キーワードによる公開投稿の検索、整理、評価</li>
          <li>新しい投稿案の作成支援と、利用者が承認したThreads投稿の公開</li>
          <li>投稿結果の記録、効果測定、機能改善</li>
          <li>不正利用の防止、障害対応、ユーザーサポート</li>
        </ul>
        <p>
          検索元の第三者の画像や動画を、権利者の許諾なく新しい投稿に再利用することはありません。
        </p>
      </section>

      <section>
        <h2>4. 利用する外部サービス</h2>
        <p>
          本サービスの提供のため、Meta Threads API、Google Apps
          Script、Google Sheets、Google Drive、GoogleのAIサービス、Discord等を利用する場合があります。それぞれの提供者の規約およびプライバシーポリシーが適用されます。
        </p>
      </section>

      <section>
        <h2>5. 第三者への提供と販売</h2>
        <p>
          取得した個人情報を販売しません。法令に基づく場合を除き、利用者の同意なく利用目的の範囲を超えて第三者に提供しません。
        </p>
      </section>

      <section>
        <h2>6. 保管と安全管理</h2>
        <p>
          取得した情報は、利用目的の達成に必要な期間保管します。アクセス制限、認証情報の非公開保管その他の合理的な安全管理措置を講じます。不要になった情報は順次削除します。
        </p>
      </section>

      <section>
        <h2>7. 利用者の選択とデータ削除</h2>
        <p>
          利用者はMetaの設定から本サービスとの連携を解除できます。本サービスが保有するデータの削除は、
          <a href="/data-deletion">データ削除手順</a>に従って申請できます。
        </p>
      </section>

      <section>
        <h2>8. お問い合わせ</h2>
        <p>
          本ポリシーまたはデータの取り扱いに関するお問い合わせは、
          <a href="mailto:gonbee1230@gmail.com">gonbee1230@gmail.com</a>までご連絡ください。
        </p>
      </section>
    </LegalPage>
  );
}
