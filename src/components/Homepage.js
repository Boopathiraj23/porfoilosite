import React from 'react'
import hero from '../assets/Boopathiraj33.jpeg'
const Homepage = () => {
  return (
    <div className='flex flex-col md:flex-row  w-full  justify-between p-5 pt-[50px]  bg-blue-300 bgsecondary'>
     <div className= 'pad1  md:w-1/2 text-red-700 md:pl-60 justify-center mt-20 md:mt-40 md:ml-[120px]'>
          <h1 className='text-4xl font-bold'>Hi...I'M</h1>
          <h1 className='text-3xl font-bold'>BOOPATHI</h1>
          <h3 className='text-lg text-white'>I'm Front-End Developer</h3>
     </div>
      <div className='md:w-1/4  md:mt-10 md:mr-[300px] '>
          <img className='rounded-full mt-[20px]' src={hero} />
      </div>
    </div>
  )
}

export default Homepage
