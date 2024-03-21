import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import './globalicon.css';
import Head from 'next/head';
import 'react-tooltip/dist/react-tooltip.css';
import NavigationFixed from '@/app/_component/organism/navigationFixed';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Vacgom</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
