import React from 'react'

export default function Contact() {
  return (
    <div
        className="bg-center bg-cover bg-fixed"
        style={{
            backgroundImage:
              "url('/images/ivy-bg.jpg')",
          }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* <div className="py-10 px-6 bg-neon-pink/70 backdrop-blur-lg rounded-3xl sm:py-16 sm:px-12 lg:p-10 items-center"> */}
            <div className="py-10 px-6 bg-neon-pink rounded-3xl sm:py-16 sm:px-12 lg:p-10 items-center">
                <h3 className="text-4xl font-thin tracking-tight text-white pb-3 text-center">Get in touch</h3>

                <p className="text-l tracking-tight text-base text-white pb-5 text-center">Interested in collaborating, have a question or just want to say hi?  Hit us up!</p>

                <form action="#" method="POST" className="space-y-4 w-2/3 mx-auto">
                    <div className="">
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            //WTF
                            autoComplete="name"
                            required
                            className="w-full text-black border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white rounded-md"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full text-black border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white rounded-md"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="subject" className="sr-only">
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            className="w-full text-black border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white rounded-md"
                            placeholder="Subject"
                        />
                    </div>

                    <div className="">
                        <label htmlFor="email-address" className="sr-only">
                            Mesage
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            required
                            className="w-full text-black border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white rounded-md"
                            placeholder="Message to The Ivy"
                            rows={3}
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-pink-300 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                    >
                        Send
                    </button>

                </form>
            </div>
        </div>


    </div>
  )
}
