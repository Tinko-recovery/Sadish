import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "Sadish Sugumaran | Enterprise Delivery & AI Architecture",
  description: "Portfolio of Sadish Sugumaran - Senior IT Delivery Leader & AI Systems Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sadish Sugumaran",
              "jobTitle": "Senior IT Delivery Leader",
              "worksFor": {
                "@type": "Organization",
                "name": "Kyndryl"
              },
              "url": "https://tinko-recovery.github.io/Sadish/",
              "sameAs": [
                "https://linkedin.com/in/sadish-sugumaran"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
