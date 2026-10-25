import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "GamesPulse",
  description: "GamesPulse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        className="bg-gray-900 text-gray-200 leading-relaxed"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}