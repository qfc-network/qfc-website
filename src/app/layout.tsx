import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const metadata: Metadata = {
  metadataBase: new URL('https://qfc.network'),
  title: {
    default: 'QFC Network — The Future of Decentralized Computing',
    template: '%s | QFC Network',
  },
  description: 'A next-generation blockchain platform with Proof of Contribution consensus, multi-VM architecture, and quantum-safe cryptography. 500K+ TPS, sub-second finality, EVM compatible.',
  keywords: ['QFC', 'blockchain', 'Proof of Contribution', 'quantum-safe', 'EVM', 'DeFi', 'Web3', 'Layer 1', 'Rust blockchain', 'smart contracts'],
  authors: [{ name: 'QFC Network', url: 'https://qfc.network' }],
  creator: 'QFC Network',
  openGraph: {
    title: 'QFC Network — The Future of Decentralized Computing',
    description: 'Next-generation blockchain with 500K+ TPS, sub-second finality, and quantum-safe security.',
    url: 'https://qfc.network',
    siteName: 'QFC Network',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'QFC Network' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@QFCNetwork',
    creator: '@QFCNetwork',
    title: 'QFC Network — The Future of Decentralized Computing',
    description: 'Next-generation blockchain with 500K+ TPS, sub-second finality, and quantum-safe security.',
    images: [{ url: '/og-image.png', alt: 'QFC Network' }],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://qfc.network',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'QFC Network',
  url: 'https://qfc.network',
  description: 'A next-generation blockchain platform with Proof of Contribution consensus, multi-VM architecture, and quantum-safe cryptography.',
  publisher: {
    '@type': 'Organization',
    name: 'QFC Network',
    url: 'https://qfc.network',
    logo: {
      '@type': 'ImageObject',
      url: 'https://qfc.network/logo.svg',
    },
    sameAs: [
      'https://x.com/QFCNetwork',
      'https://github.com/qfc-network',
      'https://discord.gg/qfc',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
