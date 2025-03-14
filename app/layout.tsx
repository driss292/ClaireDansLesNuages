import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/layout/Header";

export const metadata: Metadata = {
  title: "Claire dans les nuages | Site en construction",
  description: "Designer, conceptrice 3D, graphiste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
