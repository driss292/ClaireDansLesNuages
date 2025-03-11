import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "./Components/layout/Header";

const ptSerif = PT_Serif({
  subsets: ["latin"], // Optimisation pour la langue
  weight: ["400", "700"], // Ajouter le gras si nécessaire
  style: ["normal", "italic"], // Styles disponibles
});

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
      <body className={ptSerif.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
