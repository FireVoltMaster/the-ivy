import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div>
        <div className="relative pt-32 pb-12 flex content-center items-center justify-center min-h-screen-75">
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
                      priority
                    />

                </div>
                <div className="py-5 px-1 bg-neon-pink/80 rounded-2xl sm:py-10 sm:px-10 lg:p-10 lg:items-center">
                  <p className="text-white text-xl lg:text-3xl font-thin">
                    The Ivy on Beech Street, in the heart of Long Beach, NY carries unique clothing and home goods. We also create and curate DIY art classes and creative workshops featuring various unique crafts.
                  </p>
                </div>

                {/* ⚠️ 👇 UNCOMMENT THIS OUT WHEN EVENT LIST PAGE IS READY */}

                {/* <div className="flex flex-col justify-center items-center">
                  <Link href="/event-list">
                    <a className="flex flex-row">
                      <button
                        type="button"
                        className="z-50 px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
                      >  
                        SEE ALL EVENTS
                        <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        </div>
                      </button>
                    </a>
                  </Link>
                </div> */}

              </div>
            </div>
          </div>
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          </div> */}
        </div>



    </div>
  )
}
