import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "NusaKabar — Berita yang memberi arah", template: "%s | NusaKabar" },
  description: "Berita Indonesia terkini yang jernih, cepat, dan tepercaya.",
  openGraph: { type: "website", locale: "id_ID", siteName: "NusaKabar" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
