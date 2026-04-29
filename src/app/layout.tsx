import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./component/provider/Providers";




const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

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
      <body className={`${openSans.variable} ${roboto.variable} h-full antialiased`}>
        {/* 2. Wrap the children here */}
        <Providers>
          <main className="grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}