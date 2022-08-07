import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div>
        <div className="relative pt-32 pb-56 lg:pb-64 flex content-center items-center justify-center min-h-screen-75">
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
                    />

                </div>
                <div className="">
                <p className="text-white text-3xl">Long Beach, NY&apos;s Premier Art / Event Space and Retail Experience.</p>
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



    </div>
  )
}
