import React from 'react'
import Image from 'next/image'
  
  export default function ClassImages() {
    return (
      <div className="relative bg-[#fe68c3] pt-12 pb-8 px-4 sm:px-6 lg:pt-26 lg:pb-26 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          {/* <div className="text-center">
            <h2 className="text-4xl tracking-tight font-thin text-gray-900 sm:text-4xl">#theivylbny</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              👀 peep into the world of
            </p>
            <div className="-mb-20">
                <Image 
                    src="/images/the-ivy.png"
                    width={140}
                    height={100}
                    alt="logo"
                />
            </div>
          </div> */}
          <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none pl-24">

            <div className="hover:scale-105 ease-in-out duration-200">
                <Image
                    className="max-w-full h-auto rounded-full" 
                    src="/images/macrame.jpg"
                    height={350}
                    width={250}
                    alt="Macrame"
                    blurDataURL="/images/macrame.jpg"
                    placeholder="blur"
                    loading="lazy"
                />
            </div>

            <div className="hover:scale-105 ease-in-out duration-200">
                <Image
                    className="max-w-full h-auto rounded-full" 
                    src="/images/tie-dye.jpg"
                    height={350}
                    width={250}
                    alt="Tie Dye"
                    blurDataURL="/images/tie-dye.jpg"
                    placeholder="blur"
                    loading="lazy"
                />
            </div>

            <div className="hover:scale-105 ease-in-out duration-200">
                <Image
                    className="max-w-full h-auto rounded-full" 
                    src="/images/candle-making.jpg"
                    height={350}
                    width={250}
                    alt="Candle Making"
                    blurDataURL="/images/candle-making.jpg"
                    placeholder="blur"
                    loading="lazy"
                />
            </div>

          </div>
        </div>
      </div>
    )
  }
  