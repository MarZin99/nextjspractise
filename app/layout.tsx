import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "./components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
