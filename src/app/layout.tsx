import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css"
import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";


const inter = Inter({ variable: "--inter", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "TestApp",
  description: "Just some description.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
