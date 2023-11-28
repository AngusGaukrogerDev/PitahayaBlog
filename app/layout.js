import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Pitahaya",
  description: "The Pitahaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          The Pitahaya | Independent Travel, Tech, and Lifestyle Blog
        </title>

        <meta
          name="description"
          content="Explore the world with The Pitahaya - your go-to source for independent travel, tech, and lifestyle insights. Discover tips, reviews, and inspiration for your next adventure."
        />

        <meta
          name="keywords"
          content="travel, tech, lifestyle, blog, independent, adventure, tips, reviews, inspiration"
        />
        <meta name="author" content="Your Name or The Pitahaya Team" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="canonical" href="https://www.thepitahaya.com" />

        <meta
          property="og:title"
          content="The Pitahaya | Independent Travel, Tech, and Lifestyle Blog"
        />
        <meta
          property="og:description"
          content="Explore the world with The Pitahaya - your go-to source for independent travel, tech, and lifestyle insights. Discover tips, reviews, and inspiration for your next adventure."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thepitahaya.com" />
        <meta
          property="og:image"
          content="https://www.thepitahaya.com/images/og-image.jpg"
        />
        <meta property="og:site_name" content="The Pitahaya" />

        {/* <meta name="twitter:card" content="summary_large_image"> */}
        <meta name="twitter:site" content="@pitahayalabs" />
        <meta
          name="twitter:title"
          content="The Pitahaya | Independent Travel, Tech, and Lifestyle Blog"
        />
        <meta
          name="twitter:description"
          content="Explore the world with The Pitahaya - your go-to source for independent travel, tech, and lifestyle insights. Discover tips, reviews, and inspiration for your next adventure."
        />
        <meta
          name="twitter:image"
          content="https://www.yourpitahayasite.com/images/twitter-image.jpg"
        />

        <link rel="icon" href="/head/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/head/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/head/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/head/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/head/favicon-chrome'192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/head/favicon-chrome'512x512.png"
        />
        <link rel="manifest" href="/head/site.webmanifest" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4914994958096865"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
