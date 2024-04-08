import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import "../styles/scss/global.scss";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "I'm Manh Huy",
  description: "I'm Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
