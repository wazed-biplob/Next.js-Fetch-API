import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Next Js Deomonstration",
  description: "Next Level Web Developement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
