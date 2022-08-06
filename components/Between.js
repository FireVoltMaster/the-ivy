import React from 'react'
import Image from 'next/image'

export default function Between() {
  return (
    <div>
        <div className="relative pt-16 pb-16 lg:pb-16 flex content-center items-center justify-center min-h-screen-10">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
            style={{
              backgroundImage:
                "url('/images/ivy-bg.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-20 bg-black"
            ></span>
          </div>

          {/* <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  
                  
                    <Image
                      // className="h-48 w-full object-cover"
                      src="/images/the-ivy-white.png"
                      width={300}
                      height={250}
                      alt="adam laptop"
                      blurDataURL="/images/the-ivy-white.png"
                      placeholder="blur"
                    />

                </div>
              </div>
            </div>
          </div> */}
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          </div>
        </div>



    </div>
  )
}
