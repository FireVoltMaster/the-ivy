import Head from 'next/head'
import Image from 'next/image'

// COMPONENTS
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import ThreeColCard from '../components/ThreeColCard'
import CalDisclosure from '../components/CalDisclosure'
import ClassImages from '../components/ClassImages'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>The Ivy</title>
        <meta name="description" content="The Ivy is a premier art / event space and retail experience in Long Beach, New York." />
      </Head>

      <Nav />

      <main>

        <Hero />

        <ClassImages />

        <CalDisclosure />

        <Subscribe />
        
        <ThreeColCard />

        {/* <Contact /> */}
        
      </main>

      <Footer />

    </div>
  )
}
