import React from 'react'
import SingleDocument from './SingleDocument'
import Navbar from './Navbar'

function AllDocuments() {
  return (
    <div>
      <Navbar className=' z-20  hidden' />
      <section className='ml-[20rem] bg-gray-100'>

        <h1 className='text-max md:text-[50px] p-5 pb-0'>All Reports</h1>
        <div className="grid grid-cols-1 gap-5">
          <SingleDocument/>
          <SingleDocument/>
          <SingleDocument/>
          <SingleDocument/>
        </div>
      </section>
    </div>
  )
}

export default AllDocuments