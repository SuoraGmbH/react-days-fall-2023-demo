import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1 className="title">📋 Micro Status 2.0</h1>
          <nav className="navigation">
            <ul>
              <li>
                <Link href="/">Timeline</Link>
              </li>
              <li>
                <Link href="/compose">Compose</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
