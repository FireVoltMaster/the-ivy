import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// COMPONENTS
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Subscribe from '../components/Subscribe'
import ThreeColCard from '../components/ThreeColCard'
import CalModal from '../components/CalModal'
import CalDisclosure from '../components/CalDisclosure'
import Between from '../components/Between'

// CALENDARS
import AugustCalendar from '../components/Calendar/Months/August22/August22Calendar'

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

        {/* <h1 className="font-hurricane text-8xl">the Ivy</h1> */}

        <Hero />

        {/* <div className="flex justify-center">
          <CalModal />
        </div> */}

        <div className="">
        <CalDisclosure />
        </div>

        {/* <div className="px-8 md:px-20 lg:px-28 xl:px-32 pb-10">
        <AugustCalendar />
        </div> */}
        
        <Subscribe />
        
        <ThreeColCard />

        <Between />
        
      </main>

      <Footer />

    </div>
  )
}
