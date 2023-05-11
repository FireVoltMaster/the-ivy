import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

// MONTHS
import MayCalendar from './Calendar/Months/May23/May23Calendar'
import JuneCalendar from './Calendar/Months/June23/June23Calendar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CalDisclosure() {
  return (
    <div id="calendar" className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="text-center text-3xl font-thin text-gray-900 sm:text-4xl">
            See what&apos;s happening at
          </h2>
          <div className="flex justify-center -mb-10">
            <Image 
                src="/images/the-ivy.png"
                width={140}
                height={100}
                alt="logo"
            />
          </div>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">

            {/* May */}
            <Disclosure as="div" className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-base text-3xl text-gray-900">
                        May 🌼
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(open ? 'transition duration-300 ease-in-out transform -rotate-180' : 'rotate-0', 'transition duration-300 ease-in-out h-6 w-6 transform')}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2">
                      {/* <p className='text-center text-5xl lg:text-7xl font-hurricane animate-bounce'>
                        May events calendar coming soon!
                      </p> */}
                      <MayCalendar />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* June */}
            <Disclosure as="div" className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-base text-3xl text-gray-900">
                        June 🌈
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(open ? 'transition duration-300 ease-in-out transform -rotate-180' : 'rotate-0', 'transition duration-300 ease-in-out h-6 w-6 transform')}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2">
                      {/* <p className='text-center text-5xl lg:text-7xl font-hurricane animate-bounce'>
                        May events calendar coming soon!
                      </p> */}
                      <JuneCalendar />
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            
          </dl>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-10">
        <Link href="/event-list">
          <a className="flex flex-row">
            <button
              type="button"
              className="px-3.5 mt-8 py-2 bg-gradient-to-b from-neon-pink via-neon-pink to-pink-400 text-white hover:bg-gradient-to-t from-neon-pink via-neon-pink to-pink-400 hover:text-white font-light rounded-md text-lg flex flex-row items-center"
            >  
              SEE ALL EVENTS & PURCHASE TICKETS
              <div className="pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
              </div>
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}
