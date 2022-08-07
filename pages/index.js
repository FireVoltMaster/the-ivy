import Head from 'next/head'
import Image from 'next/image'

// COMPONENTS
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import ThreeColCard from '../components/ThreeColCard'
import CalDisclosure from '../components/CalDisclosure'


export default function Home() {
  return (
    <div>
      <Head>
        <title>The Ivy</title>
        <meta name="description" content="The Ivy is an art, apparel and event space in Long Beach, New York" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>

        <Hero />

        <CalDisclosure />

        <Subscribe />
        
        <ThreeColCard />
        
      </main>

      <Footer />

    </div>
  )
}
