import React from 'react'
import Image from 'next/image'


export default function Subscribe() {
    return (
      <div className="bg-center bg-cover bg-fixed"
          style={{
            backgroundImage:
              "url('/images/ivy-bg.jpg')",
          }}>
            {/* <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-20 bg-black"
            ></span> */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="py-10 px-6 bg-indigo-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-4xl font-thin tracking-tight text-white">Sign up for our email list</h2>
              {/* <p className="mt-4 max-w-3xl text-lg text-indigo-100 pt-2">
                <span className="underline decoration-pink-500">Stay in the loop</span> with events, art shows, classes and retail drops going down at <span className="font-hurricane text-4xl">the</span> <span className="font-hurricane text-6xl">Ivy</span>
              </p> */}

              <p className="mt-4 max-w-3xl text-lg text-indigo-100 pt-2">
                <span className="underline decoration-pink-500">Stay in the loop</span> with events, 
              </p>

              <p className="max-w-3xl text-lg text-indigo-100">
              art shows, classes, and retail drops going down at
              </p>

              <div className="-mb-10">
                <Image 
                    src="/images/the-ivy-white.png"
                    width={140}
                    height={100}
                    alt="logo"
                />
            </div>




            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full text-black border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Sign up
                </button>
              </form>
              <p className="mt-3 text-xs text-indigo-100">
                We care about the protection of your data. We will never share your information.
              </p>
            </div>
          </div>
        </div>
        <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
          </div>
      </div>
    )
  }
  