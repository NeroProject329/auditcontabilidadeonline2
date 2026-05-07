import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Central de Atendimento Especializado | Análise Gratuita",
  description:
    "Central de atendimento especializada em análise de situações financeiras e administrativas. Atendimento humano, rápido e seguro.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Central de Atendimento Especializado",
    description:
      "Faça uma análise gratuita e descubra soluções disponíveis para sua situação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}