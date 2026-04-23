import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from "next/script";
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "3D Wedding Miniatures in India | Custom Couple Figurine | NATUWA3D",
  description:
    "Order personalized 3D printed wedding miniatures in India. Custom couple figurines for weddings, anniversaries & gifts. Starting from ₹2999.",
  
  keywords: [
    "3D wedding miniature",
    "custom couple figurine",
    "3D printed miniature India",
    "wedding miniature gift",
    "personalized miniature couple",
  ],

  openGraph: {
    title: "Custom 3D Wedding Miniatures | NATUWA3D",
    description:
      "Turn your wedding memories into stunning 3D printed miniatures. Perfect gift for couples.",
    url: "https://natuwa3d.com",
    siteName: "NATUWA3D",
    images: [
      {
        url: "/og-image.jpg", // 👉 ek achhi product image upload karo public folder me
        width: 1200,
        height: 630,
        alt: "3D printed wedding miniature couple",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "3D Wedding Miniatures | NATUWA3D",
    description:
      "Custom 3D printed couple figurines for weddings & gifts.",
    images: ["/og-image.jpg"],
  },

  metadataBase: new URL("https://natuwa3d.com"),

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}

        {/* Tidio Chatbot */}
        <Script
          src="//code.tidio.co/c4mztfhlj2ryzp2iyk8vzat40wzgrlim.js"
          strategy="afterInteractive"
        />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
