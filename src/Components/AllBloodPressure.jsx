import React from 'react'
import SingleDocument from './SingleDocument'
import Navbar from './Navbar'
import SingleBloodPressure from './SingleBloodPressure'

function AllBloodPressure() {
  return (
    <div>
      <Navbar className=' z-20  hidden' />
      <section className='ml-[20rem] min-h-screen bg-gray-100'>

        <h1 className='text-max md:text-[50px] p-5 pb-0'>Blood Pressure Reports</h1>
        <div className="grid grid-cols-1 gap-5">
          <SingleBloodPressure/>
          <SingleBloodPressure/>
          <SingleBloodPressure/>
        </div>
      </section>
    </div>
  )
}

export default AllBloodPressure