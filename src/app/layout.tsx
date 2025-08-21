import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]

});


export const metadata: Metadata = {
  title: "Insight Tech"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
