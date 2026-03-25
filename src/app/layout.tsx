import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";

import "./globals.css";

// 1. Google Font: Open Sans
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

// 2. Google Font: Roboto
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// 3. Local Font: Glinter
// Make sure Glinter.woff2 is in: public/fonts/Glinter.woff2
// const glinter = localFont({
//   src: "../../public/fonts/Glinter.woff2", 
//   variable: "--font-glinter",
// });

export const metadata: Metadata = {
  title: "My Photography Portfolio",
  description: "Capturing moments through the lens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${roboto.variable} ${roboto.variable} h-full  antialiased`}
      >
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}