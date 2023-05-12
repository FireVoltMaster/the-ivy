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
import LandingModal from '../components/LandingModal'
import FlyerDisplay from '../components/FlyerDisplay'
import GiftCards from '../components/GiftCards'
import { EmblaCarousel } from '../components/Carousel/Carousel'
import { ScrollToTop } from '../components/ScrollToTop'


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
        <title>The Ivy LBNY</title>
        <meta name="description" content="The Ivy is a premier art / event space and retail experience in Long Beach, New York." />
        <meta property="og:image" content="https://www.theivylbny.com/images/the-ivy-neon.png" key="ogimage" />
      </Head>
      {/* <LandingModal 
        image='/images/landing-modal/artsandcarafes.jpg'
      /> */}
      <Nav />
      <ScrollToTop />
      <main>
        <Hero />
        {/* <FlyerDisplay /> */}
        <EmblaCarousel />
        <GiftCards />
        <CalDisclosure />
        <ThreeColCard />
        <Subscribe /> 
      </main>
      <Footer />
    </div>
  )
}
