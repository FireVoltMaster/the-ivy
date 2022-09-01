import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Footer from './Footer'

export default function Event(props) {
  return (
    <div>
      <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white overflow-hidden">
        <div className="flex justify-center pt-3 -mb-36">
          <Image
            src="/images/the-ivy.png"
            alt="the ivy"
            width={165}
            height={125}
          />
        </div>
        <div className="pl-5">
          <Link href="/#calendar">
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
        </div>

        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
                  <h2 className="text-2xl text-neon-pink font-semibold tracking-wide">
                    {props.date}
                  </h2>
                  <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl uppercase">
                    {props.title}
                  </h3>
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
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="lg:aspect-none">
                      <Image 
                        src={props.image}
                        alt="Flyer"
                        width={1184}
                        height={1376}
                        className="rounded-lg shadow-lg object-center"
                      />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    {/* <span className="ml-2">👆 Event Flyer</span> */}
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    {props.heading}
                  </p>
                </div>
                <h3>
                  {props.subheading}
                </h3>
                <p> 
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
