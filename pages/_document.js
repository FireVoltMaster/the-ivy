import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth bg-white antialiased">
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" type="image/png" href="/images/favicon.png" />
            <meta name="robots" content="index, follow" />

                {/* OPEN GRAPH */}
            <meta property="og:site_name" content="The Ivy" key="ogsitename" />
            <meta property="og:title" content="The Ivy" key="og:title" />
            <meta property="og:description" content="The Ivy is a premier art / event space and retail experience in Long Beach, New York." key="ogdesc" />
            <meta property="og:url" content="https://www.theivylbny.com" key="ogurl" /> 
            <meta property="og:image" content="https://www.theivylbny.com/images/the-ivy-neon.png" key="ogimage" />
            <meta property="og:type" content="website" />

            <link rel="canonical" href="https://www.theivylbny.com/" />

                {/* FAVICONS  */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

                {/* GOOGLE FONT CDN */}
                <link href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap" rel="stylesheet" />

        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

// The only tag that Vercel suggests not to use in the _document.js file is the viewport tag

// _document.js file will extend the default document used on every page, which will control the HTML structure. This is where you can put links for external files, such as linking a font from Google Fonts, and is a good place for meta tags that will remain constant throughout the site.