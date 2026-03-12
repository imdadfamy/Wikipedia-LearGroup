import "./globals.css";

export const metadata = {
  title: "Wikilearn",
  description: "Plateforme d'apprentissage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}