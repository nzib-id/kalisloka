import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

/* ====== BODY FONT (Google Font: Montserrat) ====== */
const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

/* ====== METADATA ====== */

export const metadata: Metadata = {
  metadataBase: new URL("https://kalisloka.com"),
  title: {
    default: "Kalisloka",
    template: "%s | Kalisloka",
  },
  description:
    "Kalisloka is an agricultural raw material supply and trade partner serving industrial and business needs.",
  openGraph: {
    title: "Kalisloka",
    description:
      "Agricultural raw material supply and trade partner for industrial and business sectors.",
    type: "website",
  },
};

// export const metadata: Metadata = {
//   title: "Kalisloka",
//   description:
//     "Official website of Kalisloka — Agricultural Raw Material Supply & Trade Partner.",
// };

/* ====== ROOT LAYOUT ====== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PRELOAD CUSTOM HEADING FONT */}
        <link
          rel="preload"
          href="/fonts/LT-Glockenspiel.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${montserrat.variable} font-body`}>{children}</body>
    </html>
  );
}
