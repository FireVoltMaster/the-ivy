import React, { useRef, useState } from 'react';
import Image from 'next/image'
import axios from 'axios'


export default function Subscribe() {

    // create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null)

    const [errors, setErrors] = useState({})

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showFailureMessage, setShowFailureMessage] = useState(false)

    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true

        if (inputEl.length <= 0) {
            tempErrors["inputEl"] = true
            isValid = false
        }

        setErrors({...tempErrors})
        console.log("errors", errors)
        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let isValidForm = handleValidation()

        if (isValidForm) {

            const res = await axios.post('api/subscribe', {
                email: inputEl.current.value
            })
            .then(function(res) {
                console.log('Success!')
                setShowSuccessMessage(true)
                setShowFailureMessage(false)
            })
            .catch(function(error){
                console.log('🚨 API error')
                // setMessage(error)
                setShowSuccessMessage(false)
                setShowFailureMessage(true)
            })
        
            // clear the input value and show a success message
            // inputEl.current.value = ''
            // setMessage('Success! 🎉 You are now subscribed to the newsletter.')

        }
      }

    return (
      <div 
          className="bg-center bg-cover bg-fixed"
          style={{
            backgroundImage:
              "url('/images/ivy-bg.jpg')",
          }}>
            {/* <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-20 bg-black"
            ></span> */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="py-10 px-6 bg-neon-pink rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-4xl font-thin tracking-tight text-white">Sign up for our email list</h2>

              <p className="mt-4 max-w-3xl text-lg text-indigo-100 pt-2">
                <span className="underline decoration-green-700">Stay in the loop</span> with events, 
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
              <form
                method="POST"
                onSubmit={handleSubmit} 
                className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  ref={inputEl} 
                  autoComplete="email"
                  required
                  className="w-full text-black border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-pink-300 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Sign up
                </button>
              </form>
              <p className="mt-3 text-xs text-indigo-100">
                We care about the protection of your data. We will never share your information.
              </p>
            </div>
          </div>
          <div className="text-sm text-center mx-auto pt-2">
                {showSuccessMessage && (
                    <p className="text-indigo-100 font-semibold text-sm my-2">
                        Thanks for signing up!
                    </p>
                )}
                {showFailureMessage && (
                    <p className="text-indigo-100">
                        Something went wrong... please email me and I will add you 
                    </p>
                )}
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
  