import type { Metadata } from "next";
import ScrollObserver from "@/utils/scroll-observer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Machearn",
  description: "Self Introduction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollObserver>{children}</ScrollObserver>
      </body>
    </html>
  );
}
