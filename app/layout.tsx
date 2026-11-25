import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import "./globals.css";

import { company } from "@/data/company";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: company.website ? new URL(company.website) : undefined,

  title: {
    default: "Vidraçaria em BH | JP Vidraçaria",
    template: "%s | JP Vidraçaria",
  },

  description:
    "Vidraçaria em Belo Horizonte especializada em box para banheiro, espelhos sob medida, portas, janelas e esquadrias de alumínio. Solicite seu orçamento.",

  applicationName: "JP Vidraçaria",

  authors: [{ name: "JP Vidraçaria" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "JP Vidraçaria",

    title: "JP Vidraçaria | Vidraçaria em Belo Horizonte",

    description:
      "Vidros, espelhos, box para banheiro e esquadrias de alumínio sob medida em BH.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${inter.variable}
          ${montserrat.variable}
          antialiased
        `}
      >
        <Header />

        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
