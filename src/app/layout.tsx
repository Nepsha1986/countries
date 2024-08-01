import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import AppHeader from "@/containers/AppHeader";

import "@/styles/globals.scss";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Countries",
  description: "Get information about countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <AppHeader />

        <main>{children}</main>
      </body>
    </html>
  );
}
