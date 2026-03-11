import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YottaVibes | Excellence through AI",
  description:
    "YottaVibes builds AI-powered learning platforms that help learners achieve mastery faster through focused preparation and intelligent practice.",
   icons: {
    icon: "/favicon.svg",
   },
    openGraph: {
    title: "YottaVibes",
    description:
      "AI-powered learning platforms for faster mastery and better outcomes.",
    url: "https://yottavibes-website.vercel.app",
    siteName: "YottaVibes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}