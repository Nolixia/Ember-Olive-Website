import NolixiaPreview from "./nolixia-preview";
import type { Metadata } from "next";
import "./globals.css";
import "./mobile-menu.css";
import {Header,Footer} from "./components";

export const metadata: Metadata = {robots:{index:false,follow:true},metadataBase:new URL("https://ember-olive-website.netlify.app"),
  title: "Ember & Olive Restaurant",
  description:"Nolixia website design preview with illustrative business content. Explore the sample and discuss a website for your business.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><NolixiaPreview/><Header/>{children}<Footer/><NolixiaPreview footer/></body>
    </html>
  );
}
