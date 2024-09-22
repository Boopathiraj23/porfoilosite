import React from 'react'
import resumeimg from '../assets/bbimg.png'
// import resumee from '../assets/resume.jpg'
import BB from '../assets/BB.pdf'
const Resume = () => {
  return (
    <div id='resume' className='w-full h-1/2 bgprimary flex flex-col md:flex-row md:px-60'>

      <div className='w-full md:w-full  py-20 p-5 flex justify-center' >
          <img className='h-[450px] rounded-[10px] blur-[1px]' src={resumeimg}  />
      </div>
      <h1 className='flex flex-grow h-10 mt-[-640px]  md:mt-[150px] text-2xl font-bold justify-center ml-[130px] md:ml-[140px] text-white py-10 border-b-4 w-[100px]'>RESUME</h1>

      <div className='flex flex-grow items-center py-4 h-1/2 ml-10 md:ml-[-180px] md:w-full mt-[500px] md:mt-[250px]'> 
          <h1 className='font-bold text-2xl text-white'>Here I'AM Take my Resume <a href={BB} download='Resume.pdf' className='flex flex-col mt-3 w-[125px] rounded text-center p-1 item-center bgsecondary  ml-20 hover:border-2'>Download</a></h1>
      </div>
   

    </div>
  )
}

export default Resume
