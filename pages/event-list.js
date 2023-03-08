import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import SecondaryNav from '../components/SecondaryNav'
import Footer from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'

import { events } from '../data/events'


export default function EventList() {
  return (
    <div className="bg-white overflow-hidden">
      <Head>
          <title>Events at The Ivy</title>
          <meta name="description" content="Events happening at The Ivy in Long Beach, New York." />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="flex justify-center pt-3 -mb-36">
        <Image
          src="/images/the-ivy.png"
          alt="the ivy"
          width={165}
          height={125}
        />
      </div>
      <div className="pl-5">
        <Link href="/">
          <a className="flex flex-row">
            <button
                type="button"
                className="z-50 px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
            >  
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/>
              </svg>
                Back
            </button>
          </a>
        </Link>
      </div> */}
      <SecondaryNav />
      <ScrollToTop />
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
                <h2 className="text-3xl text-neon-pink font-semibold tracking-wide">
                  Upcoming events happening at The Ivy
                </h2>

                {/* 
                //////////////////////////////////////////////////////////////////// 
                  CLIENT WANTED A SINGLE TOP BUTTON TO MONTHLY TICKET PAGE
                ///////////////////////////////////////////////////////////////////// 
                  NOW SHES GOING BACK TO INDIVIDUAL PAGES, BUTTON IS HERE IF WE NEED
                //////////////////////////////////////////////////////////////////////
                */}
                {/* <Link href="https://novembereventcalendar.ezevent.com">
                  <a className="flex flex-row" target="_blank">
                    <button
                        type="button"
                        className="z-50 px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
                    >  
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                      </svg>
                        <div className="pl-3">
                          November Tickets
                        </div>
                    </button>
                  </a>
                </Link> */}
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-neon-pink" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
          </div>
          
          <div className="mt-8 lg:mt-0">
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">


            {events.map((event) => (
                <div key={event.date} className="pb-6 border-b border-gray-200">

                    <div className="text-base">
                        <h3>
                            {event.date} @ {event.time}
                            {/* {event.date}  {event.time} */}
                        </h3>
                        <h3>{event.title}</h3>
                        <p>
                          {event.description}  
                            {/* READ MORE LINK TO EVENT PAGE */}
                          {/* <Link href={event.eventPage}>
                            <a className="pl-2">
                              read more
                            </a>
                          </Link> */}
                        </p>

                    </div>

                            {/* TICKETS */}
                    {/* <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                        </svg>

                        <div className="cursor-pointer pl-2">
                            <a href={event.tickets} target="_blank" rel="noreferrer" className='text-xl text-neon-pink hover:text-green-400'>Tickets</a>
                        </div>
                    </div> */}

                </div>
            ))}
                  
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  )
}
