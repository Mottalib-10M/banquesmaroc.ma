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
    url: SITE.url,
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
    google: 'TODO-ADD-YOUR-GSC-VERIFICATION-CODE',
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">Aller au contenu principal</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        {/* Règle « sans cookie » (RECETTE §15.6) : aucun outil de mesure ni traceur. L'ancien
            appel à Clarity visait un identifiant fictif (« CLARITY_ID ») : retiré, pas de projet. */}
      </body>
    </html>
  );
}
