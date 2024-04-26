import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <section className="bg-gray-50 undarker:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
    <div className="w-full bg-white rounded-lg shadow undarker:border md:mt-0 sm:max-w-md xl:p-0 undarker:bg-gray-800 undarker:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl undarker:text-white">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 undarker:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 undarker:bg-gray-700 undarker:border-gray-600 undarker:placeholder-gray-400 undarker:text-white undarker:focus:ring-blue-500 undarker:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 undarker:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 undarker:bg-gray-700 undarker:border-gray-600 undarker:placeholder-gray-400 undarker:text-white undarker:focus:ring-blue-500 undarker:focus:border-blue-500"
              required=""
            />
          </div>
          
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center undarker:bg-primary-600 undarker:hover:bg-primary-700 undarker:focus:ring-primary-800"
          >
            Sign in
          </button>
          <p className="text-sm font-light text-gray-500 undarker:text-gray-400">
            Dont have an account yet?{" "}
            <Link
              to={"/register"}
              className="font-medium text-primary-600 hover:underline undarker:text-primary-500"
            >
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

//  SingleDocument