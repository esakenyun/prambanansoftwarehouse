import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Prambanan Software",
  description: "Software house based in Bandung, Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
