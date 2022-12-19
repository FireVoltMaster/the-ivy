// import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import useScrollPosition from '../hooks/useScrollPosition'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const scrollPosition = useScrollPosition()

  return (
    // <Disclosure as="nav" className="fixed bg-white/70 backdrop-blur-2xl w-screen z-40">
    <Disclosure as="nav" 
      className={classNames(scrollPosition > 0 ?
      "bg-white/70 backdrop-blur-2xl" : "bg-black/0",
      "fixed w-screen z-40 transition-colors ease-in-out duration-500"
    )}>
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">

                {/* NAVBAR IMAGES */}
                <div className="flex-shrink-0">

                    {/* MOBILE */}
                  <div className="block lg:hidden h-8 w-auto pr-1">
                    <Image
                      // className="block lg:hidden h-8 w-auto"
                      // src="/images/the-ivy.png"
                      src={classNames(scrollPosition > 0 ? "/images/the-ivy.png" : "/images/the-ivy-neon.png")}
                      alt="the ivy"
                      width={110}
                      height={65}
                    />
                  </div>

                    {/* LARGE SCREEN */}
                  <div className="hidden lg:block h-32 w-auto pt-10 pr-5">
                    <Image
                      // className="hidden lg:block h-32 w-auto"
                      // src="/images/the-ivy.png"
                      src={classNames(scrollPosition > 0 ? "/images/the-ivy.png" : "/images/the-ivy-neon.png")}
                      alt="the ivy"
                      width={120}
                      height={75}
                    />
                  </div>
                </div>

                {/* MAIN NAV LINKS */}
                {/* <div className="hidden sm:block sm:ml-6"> */}
                <div className="block sm:ml-6">
                  {/* <div className="pl-28 lg:pl-96 flex space-x-5"> */}
                  <div className="pl-26 lg:pl-5 flex space-x-3">

                    <Link href="/">
                      <a 
                        // className="text-neon-pink hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        className={classNames(scrollPosition > 0 ? "text-neon-pink" : "text-white bg-neon-pink/80", "hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium")}

                      >
                        Home
                      </a>
                    </Link>

                    <Link href="#calendar">
                      <a 
                        // className="text-neon-pink hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        className={classNames(scrollPosition > 0 ? "text-neon-pink" : "text-white bg-neon-pink/80", "hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium")}

                      >
                        Calendar
                      </a>
                    </Link>

                    {/* <Link href="shop.theivylbny.com">
                      <a className="text-neon-pink hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Shop
                      </a>
                    </Link> */}
                      {/* <a href="https://the-ivy-hydrogen-vercel.vercel.app/" className="text-neon-pink hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Shop
                      </a> */}
                    <a 
                      href="https://shop.theivylbny.com/" 
                      // className="text-neon-pink hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      className={classNames(scrollPosition > 0 ? "text-neon-pink" : "text-white bg-neon-pink/80", "hover:bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium")}
                    >
                      Shop
                    </a>

                  </div>
                </div>
              </div>


              {/* <div className="-mr-2 flex sm:hidden"> */}

                {/* MOBILE MENU BUTTON */}  
                {/* <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-neon-pink hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}

              {/* </div> */}
            </div>
          </div>

            {/* MOBILE MENU  */}
          {/* <div className="">
          <Transition
            enter="duration-300 ease-in"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">

                
              <Link href="/">
                  <a
                  className="text-neon-pink flex flex-row space-x-2 hover:text-gray-700 px-3 py-2 justify-center rounded-md text-base font-medium"
                  >
                    Home
                  </a>
              </Link>

              <Link href="#calendar">
                <a
                  className="text-neon-pink flex flex-row space-x-2 hover:text-gray-700 px-3 py-2 justify-center rounded-md text-base font-medium"
                >
                  Calendar
                </a>
              </Link>

              <Link href="/shop">
                <a
                  className="text-neon-pink flex flex-row space-x-2 hover:text-gray-700 px-3 py-2 justify-center rounded-md text-base font-medium"
                >
                  Shop
                </a>
              </Link>

            </div>

            <div className="pt-4 pb-3 border-t border-white/70">

            </div>
          </Disclosure.Panel>
          </Transition>
          </div> */}
        </div>
      )}
    </Disclosure>
  )
}
