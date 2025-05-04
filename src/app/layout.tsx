import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ScrawlBot',
  description: 'ScrawlBot is an email marketing bot that integrates with any website using simple code, automating campaigns and tracking performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
