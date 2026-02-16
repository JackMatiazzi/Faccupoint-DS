import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faccupoint Design System",
  description: "Biblioteca de componentes React - TCC Jackson Matiazzi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
