import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://qfc.network'),
  title: 'QFC Network — The Future of Decentralized Computing',
  description: 'A next-generation blockchain platform with Proof of Contribution consensus, multi-VM architecture, and quantum-safe cryptography.',
  openGraph: {
    title: 'QFC Network',
    description: 'Next-generation blockchain with 500K+ TPS, sub-second finality, and quantum-safe security.',
    url: 'https://qfc.network',
    siteName: 'QFC Network',
    images: [{ url: '/og-image.png', width: 1024, height: 1024 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QFC Network',
    description: 'Next-generation blockchain with 500K+ TPS, sub-second finality, and quantum-safe security.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
