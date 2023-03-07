import React from 'react'
import Image from 'next/image'
  
  export default function FlyerDisplay() {
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
          <div className="max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none pl-2">

            <div className="hover:scale-110 ease-in-out duration-200">
                <Image
                    className="max-w-full h-auto rounded-xl" 
                    src="/images/flyer-display/partyannouncement.jpg"
                    height={450}
                    width={350}
                    alt="Flyer 1"
                    blurDataURL="/images/flyer-display/partyannouncement.jpg"
                    placeholder="blur"
                    loading="lazy"
                />
            </div>

            <div className="hover:scale-110 ease-in-out duration-200">
                <Image
                    className="max-w-full h-auto rounded-xl" 
                    src="/images/flyer-display/weeklycrafts.jpeg"
                    height={450}
                    width={350}
                    alt="Flyer 2"
                    blurDataURL="/images/flyer-display/weeklycrafts.jpeg"
                    placeholder="blur"
                    loading="lazy"
                />
            </div>

            <div className="hover:scale-110 ease-in-out duration-200">
                <Image
                    className="max-w-full h-auto rounded-xl" 
                    src="/images/flyer-display/craftmenu.jpeg"
                    height={450}
                    width={350}
                    alt="Flyer 3"
                    blurDataURL="/images/flyer-display/craftmenu.jpeg"
                    placeholder="blur"
                    loading="lazy"
                />
            </div>

          </div>
        </div>
      </div>
    )
  }
  