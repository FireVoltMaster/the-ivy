import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

// COMPONENTS
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import ThreeColCard from '../components/ThreeColCard'
import CalDisclosure from '../components/CalDisclosure'
import ClassImages from '../components/ClassImages'
import LandingModal from '../components/LandingModal'
// import Contact from '../components/Contact'
// import Map from '../components/LeafletMap/'


export default function Home() {
  return (
    <div>
      {/* <Script data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script> */}
      {/* <Script
        strategy='lazyOnload' 
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE} 
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      /> */}
      <Head>
        <title>The Ivy</title>
        <meta name="description" content="The Ivy is a premier art / event space and retail experience in Long Beach, New York." />
        <meta property="og:image" content="https://www.theivylbny.com/images/the-ivy-neon.png" key="ogimage" />
      </Head>

      {/* <LandingModal image='/images/landing-modal/vday.jpg'/> */}
      <LandingModal image='/images/landing-modal/artsandcarafes.jpg'/>


      <Nav />

      <main>

        <Hero />

        <ClassImages />

        <CalDisclosure />

        <ThreeColCard />

        <Subscribe />
        
        {/* <Contact /> */}
        
      </main>

      {/* <Map /> */}
      <Footer />

    </div>
  )
}
