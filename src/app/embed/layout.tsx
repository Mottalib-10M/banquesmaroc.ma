import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/config';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Simulateur crédit immobilier - Widget',
  description: 'Widget intégrable du simulateur de crédit immobilier Banques Maroc.',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: SITE.brandColor,
  width: 'device-width',
  initialScale: 1,
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="bg-white p-4">
        {children}
        <div className="mt-4 text-center">
          <a
            href={`${SITE.url}/simulation-credit-immobilier/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-brand transition-colors"
          >
            Propulsé par {SITE.name}
          </a>
        </div>
      </body>
    </html>
  );
}
