import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import Image from 'next/image'
  
  export default function ThreeColCard() {
    return (
      <div className="relative bg-[#fe68c3] pt-12 pb-20 px-4 sm:px-6 lg:pt-26 lg:pb-26 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight font-thin text-gray-900 sm:text-4xl">#theivylbny</h2>
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
                    url="https://www.instagram.com/p/CfwrhntJQ8k/?igshid=YmMyMTA2M2Y=" 
                    width={328} 
                    height={450}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed 
                    url="https://www.instagram.com/reel/CgzRr1gvp6t/?igshid=YmMyMTA2M2Y=" 
                    width={328}
                    height={450} 
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InstagramEmbed 
                    url="https://www.instagram.com/p/CgANIv-OuKC/?igshid=YmMyMTA2M2Y=" 
                    width={328} 
                    height={455} 
                />
            </div>

          </div>
        </div>
      </div>
    )
  }
  