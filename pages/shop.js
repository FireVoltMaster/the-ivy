import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Shop() {
  return (
    <div>
        <div className="relative pt-32 pb-96 lg:pb-96 flex content-center items-center justify-center min-h-screen-96">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
            style={{
              backgroundImage:
                "url('/images/ivy-wall.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-30 bg-black"
            ></span>
          </div>

          <div className="">
      </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                {/* <div className="hover:scale-125 ease-in-out duration-200"> */}
                <div className="">
                  
                    <Image
                      src="/images/the-ivy-neon.png"
                      width={350}
                      height={300}
                      alt="The Ivy"
                      blurDataURL="/images/the-ivy-neon.png"
                      placeholder="blur"
                    />

                </div>
                <div className="">
                <p className="text-white text-3xl">Online shop coming soon!!</p>
                </div>
                <div className="flex justify-center">
                    <Link href="/">
                        <button
                            type="button"
                            className="z-50 px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
                        >
                        <a className="flex flex-row">
                        <svg className="w-5 h-5 pt-2" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/>
                        </svg>
                            Back
                        </a>
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          </div>
        </div>
        <Footer />
    </div>
  )
}
