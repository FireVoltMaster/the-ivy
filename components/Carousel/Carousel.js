import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'


// Arrow icons as SVG components
// const PrevArrow = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="w-6 h-6"
//     >
//       <path d="M15 18l-6-6 6-6" />
//     </svg>
// )
// const NextArrow = () => (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="w-6 h-6"
//     >
//         <path d="M9 18l6-6-6-6" />
//     </svg>
// )

export const EmblaCarousel = () => {
    const autoplayOptions = {
        delay: 4000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      }

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
    
    // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    // const [selectedIndex, setSelectedIndex] = useState(0);
  
    // const scrollPrev = useCallback(() => emblaApi.scrollPrev(), []);
    // const scrollNext = useCallback(() => emblaApi.scrollNext(), []);
    // const scrollTo = useCallback((index) => emblaApi.scrollTo(index), []);
    
    // useEffect(() => {
    //     const emblaApi = emblaRef && emblaRef.current
    //   if (!emblaApi) return;
    
    //   // Enable/disable arrow buttons based on Embla state
    //   setPrevBtnEnabled(emblaApi.canScrollPrev());
    //   setNextBtnEnabled(emblaApi.canScrollNext());
    
    //   // Listen to Embla events to update state
    //   const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    //   const onScroll = () => {
    //     setPrevBtnEnabled(emblaApi.canScrollPrev());
    //     setNextBtnEnabled(emblaApi.canScrollNext());
    //   };
    //   emblaApi.on("select", onSelect);
    //   emblaApi.on("scroll", onScroll);
    //   return () => {
    //     emblaApi.off("select", onSelect);
    //     emblaApi.off("scroll", onScroll);
    //   };
    // }, [emblaRef]);
    

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
    // return (
    //     <div className="embla">
    //         <div className="embla__container" ref={emblaRef}>

    //             <div className="embla__slide">
    //                 <Image
    //                 className="max-w-full h-auto rounded-xl"
    //                 src="/images/carousel/insideshop1.jpg"
    //                 height={550}
    //                 width={850}
    //                 alt="Flyer 1"
    //                 blurDataURL="/images/carousel/insideshop1.jpg"
    //                 placeholder="blur"
    //                 loading="lazy"
    //                 />
    //             </div>
    //             <div className="embla__slide">
    //                 <Image
    //                 className="max-w-full h-auto rounded-xl"
    //                 src="/images/carousel/insideshop2.jpg"
    //                 height={550}
    //                 width={850}
    //                 alt="Flyer 1"
    //                 blurDataURL="/images/carousel/insideshop2.jpg"
    //                 placeholder="blur"
    //                 loading="lazy"
    //                 />
    //             </div>
    //             <div className="embla__slide">
    //                 <Image
    //                 className="max-w-full h-auto rounded-xl"
    //                 src="/images/carousel/insideshop3.jpg"
    //                 height={550}
    //                 width={850}
    //                 alt="Flyer 1"
    //                 blurDataURL="/images/carousel/insideshop3.jpg"
    //                 placeholder="blur"
    //                 loading="lazy"
    //                 />
    //             </div>

    //         </div>
    //         <button
    //             className={`embla__button embla__button--prev ${prevBtnEnabled ? "" : "is-disabled"}`}
    //             onClick={scrollPrev}
    //             disabled={!prevBtnEnabled}
    //             aria-label="Previous slide"
    //         >
    //             <PrevArrow />
    //         </button>
    //         <button
    //             className={`embla__button embla__button--next ${nextBtnEnabled ? "" : "is-disabled"}`}
    //             onClick={scrollNext}
    //             disabled={!nextBtnEnabled}
    //             aria-label="Next slide"
    //         >
    //             <NextArrow />
    //         </button>
    //     </div>
    // );
  
}
