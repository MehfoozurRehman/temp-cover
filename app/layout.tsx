import "./style/global.scss";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import Toast from "./Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Temp Cover Live",
  description: "Temp Cover Live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        />
      </head>
      <body className={inter.className}>
        <Toast />
      </body>
    </html>
  );
}
