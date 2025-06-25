// app/layout.js
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* load after hydration for best performance */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){…}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init','1908763623286699'); fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1908763623286699&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}

