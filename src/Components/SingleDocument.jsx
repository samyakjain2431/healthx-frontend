import React from 'react'

function SingleDocument() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-5 bg-white gap-10 m-5  rounded-lg shadow-lg' >
      <div className="img">
        <img src="https://www.spineinfo.com/wp-content/uploads/2023/02/shutterstock_283708769-scaled.jpg.webp" alt="" />
      </div>
      <div>
        <p className="text-lg">Document Name</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <br />
        <p className="text-lg">Issued Date</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <br />
        <p className="text-lg">Under (doctor)</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <br />
        <p className="text-lg">Issued By (Lab)</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <br />
        <p className="text-lg">Hospital</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <br />
        
      </div>
    </div>
  )
}

export default SingleDocument