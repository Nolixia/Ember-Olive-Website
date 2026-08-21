import type { Metadata } from "next";
import "./globals.css";
import "./mobile-menu.css";
import {Header,Footer} from "./components";

export const metadata: Metadata = {
  title: "Ember & Olive Restaurant",
  description: "Modern Mediterranean dining in Birmingham. Explore our seasonal menu and reserve your table or private dining room online.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><Header/>{children}<Footer/></body>
    </html>
  );
}
