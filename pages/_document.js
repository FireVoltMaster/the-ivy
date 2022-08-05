import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth bg-black antialiased">
        <Head>
            <meta charSet="utf-8" />
            {/* <link rel="icon" type="image/png" href="/images/favicon.png" /> */}
            <meta name="robots" content="index, follow" />

                {/* OPEN GRAPH */}
            {/* <meta property="og:site_name" content="CUSTOM CONTENT HERE" key="ogsitename" />
            <meta property="og:title" content="CUSTOM CONTENT HERE" key="og:title" />
            <meta property="og:description" content="CUSTOM CONTENT HERE" key="ogdesc" /> */}
            {/* <meta property="og:url" content="CUSTOM URL HERE" key="ogurl" /> */}
            {/* <meta property="og:image" content="https://www.CUSTOM URL HERE.com/images/PIC PATH HERE.png" key="ogimage" /> */}
                {/* UNCOMMENT AFTER DEPLOYMENT TO URL */}
            <meta property="og:type" content="website" />

            {/* <link rel="canonical" href="https://www.CUSTOM URL HERE.com/" /> */}

                {/* FAVICONS  */}
            {/* <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" /> */}

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