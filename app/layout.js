import { Inter } from 'next/font/google'
import './globals.css'
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Pitahaya',
  description: 'The Pitahaya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/head/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/head/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/head/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/head/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/head/favicon-chrome'192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/head/favicon-chrome'512x512.png" />
        <link rel="manifest" href="/head/site.webmanifest" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4914994958096865"
        crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
