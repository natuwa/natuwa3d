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
  title: "3D Printed Miniatures in India | Custom Couple Figurine | NATUWA3D",
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
    url: "https://www.natuwa3d.com",
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

  metadataBase: new URL("https://www.natuwa3d.com"),
  robots: {
  index: true,
  follow: true,

  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

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
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
        
              name: "NATUWA3D",
        
              url: "https://www.natuwa3d.com",
        
              logo: "https://www.natuwa3d.com/logo.png",
        
              description:
                "Custom 3D printed wedding miniatures and personalized couple figurines in India.",
        
              sameAs: [
                "https://www.instagram.com/natuwa3d",
                "https://www.facebook.com/natuwa3d",
              ],
            }),
          }}
        />
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
        
              name: "Custom 3D Wedding Miniature",
        
              image: [
                "https://www.natuwa3d.com/og-image.jpg",
              ],
        
              description:
                "Personalized 3D printed bride groom miniature made from photos in India.",
        
              brand: {
                "@type": "Brand",
                name: "NATUWA3D",
              },
        
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "2999",
                availability: "https://schema.org/InStock",
                url: "https://www.natuwa3d.com/book-now",
              },
            }),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
        
              mainEntity: [
                {
                  "@type": "Question",
        
                  name: "What is a custom 3D wedding miniature?",
        
                  acceptedAnswer: {
                    "@type": "Answer",
        
                    text:
                      "A custom 3D wedding miniature is a personalized figurine created from your photos using 3D printing technology.",
                  },
                },
        
                {
                  "@type": "Question",
        
                  name: "What is the price of a custom couple miniature?",
        
                  acceptedAnswer: {
                    "@type": "Answer",
        
                    text:
                      "Custom couple miniature prices at NATUWA3D start from ₹2999 depending on size and detailing.",
                  },
                },
        
                {
                  "@type": "Question",
        
                  name: "Do you deliver all over India?",
        
                  acceptedAnswer: {
                    "@type": "Answer",
        
                    text:
                      "Yes, NATUWA3D delivers personalized 3D miniatures across India.",
                  },
                },
        
                {
                  "@type": "Question",
        
                  name: "How can I order a miniature?",
        
                  acceptedAnswer: {
                    "@type": "Answer",
        
                    text:
                      "You can order directly through our website or WhatsApp by sharing your photos and requirements.",
                  },
                },
              ],
            }),
          }}
        />
        {children}
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js">
        </script>

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
