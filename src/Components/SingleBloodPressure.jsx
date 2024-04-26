import React from 'react'

function SingleBloodPressure() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-5 bg-white gap-10 m-5  rounded-lg shadow-lg' >
      <div className="img">
        <p className='text-3xl p-5 bg-blue-100 bg-'>122.32</p>
      </div>
      <div>
        <p className="text-lg">Recorded on:</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <br />
        <p className="text-lg">Place</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <br />
        
      </div>
    </div>
  )
}

export default SingleBloodPressure