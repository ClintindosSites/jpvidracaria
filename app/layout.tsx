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
  metadataBase: new URL(company.website || "https://jpvidracaria.com.br"),

  title: {
    default: "Vidraçaria em BH | JP Vidraçaria",
    template: "%s | JP Vidraçaria",
  },

  description:
    "Vidraçaria em Belo Horizonte especializada em box para banheiro, espelhos sob medida, portas e janelas de vidro, esquadrias de alumínio e pergolados. Solicite seu orçamento.",

  applicationName: company.name,

  authors: [{ name: company.name }],

  creator: company.name,

  publisher: company.name,

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

    siteName: company.name,

    title: "JP Vidraçaria | Vidraçaria em Belo Horizonte",

    description:
      "Soluções em vidros e esquadrias de alumínio sob medida. Transforme seu ambiente com a JP Vidraçaria.",

    images: [
      {
        url: "/images/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "JP Vidraçaria - Vidros e esquadrias sob medida em Belo Horizonte",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "JP Vidraçaria | Vidraçaria em Belo Horizonte",

    description:
      "Soluções em vidros e esquadrias de alumínio sob medida em Belo Horizonte.",

    images: ["/images/opengraph-image.webp"],
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
