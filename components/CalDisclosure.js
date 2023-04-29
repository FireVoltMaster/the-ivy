import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

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
    </div>
  )
}
