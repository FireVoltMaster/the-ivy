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
            <div className="py-10 px-6 bg-neon-pink rounded-3xl sm:py-16 sm:px-12 lg:p-20 items-center">
                <h3 className="text-4xl font-thin tracking-tight text-white pb-2">Get in touch</h3>

                <form action="#" method="POST" className="space-y-4 w-2/3 mx-auto">
                    <div className="">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
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

                </form>
            </div>
        </div>


    </div>
  )
}
