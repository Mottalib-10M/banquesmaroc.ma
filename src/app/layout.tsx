import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/config';
import { buildOrganizationSchema, buildWebSiteSchema } from '@/lib/seo';
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
    locale: 'fr_MA',
    siteName: SITE.name,
    images: [
      {
        url: 'https://banquesmaroc.ma/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Banques Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    images: ['https://banquesmaroc.ma/og-default.png'],
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
  const webSiteSchema = buildWebSiteSchema();

  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta property="og:locale" content="fr_MA" />
        <meta property="og:image:alt" content="Banques Maroc" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:rounded focus:shadow-lg">
          Aller au contenu
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `setTimeout(function(){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","CLARITY_ID")},3000);`,
          }}
        />
      </body>
    </html>
  );
}
