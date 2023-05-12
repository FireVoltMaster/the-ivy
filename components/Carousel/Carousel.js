import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export const EmblaCarousel = () => {
    const autoplayOptions = {
        delay: 4000,
        // jump: true,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])
    
    // useEffect(() => {
    //     if (emblaApi) {
    //       console.log(emblaApi.slideNodes()) // Access API
    //     }
    //   }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
            <Image
              className="max-w-full h-auto rounded-xl"
              src="/images/carousel/insideshop1.jpg"
              height={550}
              width={850}
              alt="Flyer 1"
              blurDataURL="/images/carousel/insideshop1.jpg"
              placeholder="blur"
              loading="lazy"
            />
        </div>
        <div className="embla__slide">
            <Image
              className="max-w-full h-auto rounded-xl"
              src="/images/carousel/insideshop2.jpg"
              height={550}
              width={850}
              alt="Flyer 1"
              blurDataURL="/images/carousel/insideshop2.jpg"
              placeholder="blur"
              loading="lazy"
            />
        </div>
        <div className="embla__slide">
            <Image
              className="max-w-full h-auto rounded-xl"
              src="/images/carousel/insideshop3.jpg"
              height={550}
              width={850}
              alt="Flyer 1"
              blurDataURL="/images/carousel/insideshop3.jpg"
              placeholder="blur"
              loading="lazy"
            />
        </div>
      </div>
    </div>
  )
}
