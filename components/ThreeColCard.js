import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
// 👆 I think this package is fucking up the entire site... need to find a better instagram tool
import Image from 'next/image'
  
  export default function ThreeColCard() {
    return (
      <div className="relative bg-[#fe68c3] pt-12 pb-20 px-4 sm:px-6 lg:pt-26 lg:pb-26 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight font-thin text-gray-900 sm:text-4xl">#getlostintheivy</h2>
            {/* <p className="max-w-2xl mx-auto text-xl font-md text-neon-pink sm:mt-4">
              Take a peek into the world of
            </p> */}
            {/* <div className="-mb-20">
                <Image 
                    src="/images/the-ivy.png"
                    width={140}
                    height={100}
                    alt="logo"
                />
            </div> */}
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed 
                    url="https://www.instagram.com/p/CiijS4KvvHu/?igshid=N2NmMDY0OWE%3D" 
                    width={328} 
                    height={540}
                />
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed 
                    url="https://www.instagram.com/reel/CpTLYCUPPjb/?igshid=YmMyMTA2M2Y=" 
                    width={328} 
                    height={520}
                />
            </div> */}

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed 
                    url="https://www.instagram.com/reel/CibRdALjCiT/?igshid=N2NmMDY0OWE%3D" 
                    width={328}
                    height={540} 
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed 
                    url="https://www.instagram.com/reel/CjqlEtapKg1/?igshid=N2NmMDY0OWE%3D" 
                    width={328} 
                    height={540} 
                />
            </div>

          </div>
        </div>
      </div>
    )
  }
  