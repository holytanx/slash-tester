import type { Metadata, Viewport } from 'next';
import './globals.css';

// This automatically generates: <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Yongza',
  description: 'A Next.js web app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* The rest of your app content goes here */}
        <main>{children}</main>
      </body>
    </html>
  );
}