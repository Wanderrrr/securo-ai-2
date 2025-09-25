import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "System Rejestracji",
  description: "Nowy system do zarzadzania rejestracjami",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">{children}</div>
      </body>
    </html>
  );
}
