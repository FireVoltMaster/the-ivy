import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'

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

        <h1 className="font-hurricane text-8xl">the Ivy</h1>

        <Hero />

        <Subscribe />
        
      </main>

      <Footer />

    </div>
  )
}
