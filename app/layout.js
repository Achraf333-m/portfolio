import "../styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata = {
  title: "E-portfolio | Achraf Daimallah",
  description: "Using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
