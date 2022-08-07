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
            {/* <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-20 bg-black"
            ></span> */}
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
