import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function FlyerDisplay() {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: 'phone',
      duration: 800,
      easing: 'ease-out-sine',
    })
  })

  return (
    <div className="relative bg-[#fe68c3] pt-12 pb-8 px-4 sm:px-6 lg:pt-26 lg:pb-26 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-lg mx-auto grid gap-10 lg:grid-cols-3 lg:max-w-none pl-2 justify-center items-center justify-items-center place-items-center">
          <div className="hover:scale-110 ease-in-out duration-200">
            <Image
              data-aos="fade-up" data-aos-delay="200"
              className="max-w-full h-auto rounded-xl"
              src="/images/flyer-display/newhours.jpg"
              height={450}
              width={350}
              alt="Flyer 1"
              blurDataURL="/images/flyer-display/newhours.jpg"
              placeholder="blur"
              loading="lazy"
            />
          </div>

          <div className="hover:scale-110 ease-in-out duration-200">
            <Image
              data-aos="fade-up" data-aos-delay="500"
              className="max-w-full h-auto rounded-xl"
              src="/images/flyer-display/partyannouncement.jpg"
              height={450}
              width={350}
              alt="Flyer 2"
              blurDataURL="/images/flyer-display/partyannouncement.jpg"
              placeholder="blur"
              loading="lazy"
            />
          </div>

          <div className="hover:scale-110 ease-in-out duration-200">
            <Image
              data-aos="fade-up" data-aos-delay="700"
              className="max-w-full h-auto rounded-xl"
              src="/images/flyer-display/weeklycrafts.jpeg"
              height={450}
              width={350}
              alt="Flyer 3"
              blurDataURL="/images/flyer-display/weeklycrafts.jpeg"
              placeholder="blur"
              loading="lazy"
            />
          </div>

          {/* lg:col-start-2 centers the fourth image */}
          <div className="hover:scale-110 ease-in-out duration-200 lg:col-start-2">
            <Image
              data-aos="fade-up" data-aos-delay="700"
              className="max-w-full h-auto rounded-xl"
              src="/images/flyer-display/craftmenu.jpeg"
              height={450}
              width={350}
              alt="Flyer 4"
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

  