import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QFS Blockchain",
  description: "Experience the future of decentralized finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-900">
      <body className="bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">{children}</body>
    </html>
  );
}
