import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gonbee Apps | Mobile App Development and Operation",
  description:
    "Gonbee Apps is an independent mobile app project operated by Yuuhei Takahashi, a sole proprietor in Japan, developing and operating lightweight Android apps for Google Play.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gonbee Apps",
    description:
      "Independent mobile app project operated by Yuuhei Takahashi, a sole proprietor in Japan.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
