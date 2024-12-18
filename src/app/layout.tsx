import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HamburguerMenu } from "@/components/hamburguer-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Snowflake } from "@/components/_snowflake/snow-flake";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "4llves.dev | Alves Jhonata Developer Frontend & RPA",
  description:
    "Alves Jhonata | Desenvolvedor Front-end | RPA | Desvendando problemas e criando soluções através da tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Snowflake />
        <ScrollArea className="h-dvh">
          <HamburguerMenu />
          {children}
        </ScrollArea>
      </body>
    </html>
  );
}
