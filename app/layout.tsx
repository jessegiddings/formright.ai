import type { Metadata } from 'next'
import Script from 'next/script'
import Analytics from '@/components/Analytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'Find the Best LLC Formation Service | Free Quiz | FormRight',
  description:
    'Answer 5 quick questions and get a personalized LLC formation service recommendation. Compare ZenBusiness, Northwest, LegalZoom, Bizee, and more — free, no account required.',
  openGraph: {
    title: 'Find the Best LLC Formation Service | Free Quiz | FormRight',
    description:
      'Answer 5 quick questions and get a personalized LLC formation service recommendation. Free, no account required.',
    url: 'https://formright.ai',
    siteName: 'FormRight',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find the Best LLC Formation Service | Free Quiz | FormRight',
    description:
      'Answer 5 quick questions and get a personalized LLC formation service recommendation.',
  },
  metadataBase: new URL('https://formright.ai'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18080062369" strategy="afterInteractive" />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18080062369');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-cream text-ink overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
