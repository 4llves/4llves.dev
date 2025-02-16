import { Navigation } from "@/components/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        <ScrollArea className="h-dvh">
          <Navigation />
          <div className="mt-20">{children}</div>
        </ScrollArea>
      </body>
    </html>
  );
}
