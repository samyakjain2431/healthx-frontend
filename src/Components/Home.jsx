import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
function Home() {
  return (
    <div className='relative bg-gray-200' >
       <Navbar className=' z-20 ' />
      <section className="bg-gray-100  undarker:bg-gray-900 p-4 sm:ml-[18rem]">

        <div className="details grid grid-cols-3 bg-white">
          
        </div>

        <div className="bg-white m-8 p-5 mx-auto rounded-lg shadow-lg bp-graph w-3/4">
          <h2 className='text-lg font-semibold'>Blood Pressure Timeline</h2>
          <div className="m-5 h-screen shadow-[inset_0_-2px_12px_rgba(0,0,0,0.1)] rounded-md p-4 bg-gray-100">
            k
          </div>
        </div>

        <div className="projects text-left mx-auto w-3/4">
          <div className="flex justify-between">
          <h2>Major Projects</h2>
          <Link to={'/alldocs'}>All Documents ...</Link>
          </div>
          <div className="docs grid grid-cols-3 gap-10">
            <div className="bg-white h-40 rounded-lg shadow-lg p-4">
              kj
            </div>
            <div className="bg-white h-40 rounded-lg shadow-lg p-4">
              kj
            </div>
            <div className="bg-white h-40 rounded-lg shadow-lg p-4">
              kj
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home