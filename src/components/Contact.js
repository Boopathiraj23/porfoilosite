import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bgsecondary w-full flex flex-grow  md:justify-center p-3 py-10 '>
      <div className=''>
            <h1 className='flex flex-grow text-2xl font-bold justify-center ml-[120px] md:ml-120 text-white py-1 border-b-4 w-[100px] '>CONTACT</h1>
      </div>
      <div className='flex flex-col mt-20 ml-[-140px] text-white text-center'>
          <p className=''><span>Email : </span>bbraj2002@gmail.com</p>
          <p><span>Mobile : </span>9345474600</p>
          <p><span>Location : </span>Chennai</p>
      </div>
    </div>
  )
}

export default Contact
