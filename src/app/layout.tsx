import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/config';
import { buildOrganizationSchema } from '@/lib/seo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} - Comparateur de banques et simulateur crédit au Maroc`,
    template: '%s',
  },
  description: SITE.description,
  authors: [{ name: SITE.author }],
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE',
    other: { 'msvalidate.01': 'BING_VERIFICATION_CODE' },
  },
};

export const viewport: Viewport = {
  themeColor: SITE.brandColor,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:rounded focus:shadow-lg">
          Aller au contenu
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
