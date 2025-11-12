import type { Metadata } from "next";
import "./globals.scss";
import GlassFilter from "@/components/Navbar/GlassFilter";
import VLibras from "@/components/VLibras/VLibras";

export const metadata: Metadata = {
  title: "MentorIA",
  description:
    "Com a MentorIA, você nunca estará sozinho em sua jornada de aprendizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        {/* Filtro global invisível */}
        <GlassFilter />

        {/* Plugin de acessibilidade VLibras */}
        <VLibras />

        {/* Conteúdo da aplicação */}
        {children}
      </body>
    </html>
  );
}
