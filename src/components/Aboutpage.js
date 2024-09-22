import React from 'react'
import aboutimg from '../assets/about.png'
const Aboutpage = () => {
  return (
    <div id="about" className='flex flex-col md:flex-row w-full p-3  justify-between bgprimary'>
      <div className='w-full md:w-full'>
          <img className='' src={aboutimg} />
      </div>
      <div className='py-4 md:py-40 '>
      
            <h1 className='flex  flex-grow text-2xl font-bold justify-center ml-[120px] md:ml-[350px] text-white py-1 border-b-4 w-[100px]'>ABOUT</h1>
            
            <p className='text-wrap font-bold py-7 md:py-2 text-white w-1/2 align-content-center mb-70 ml-20 md:ml-[200px] text-center'>
                  <span className='font-bold text-xl'>"</span>Hi..! Myself Boopathi,I am a Front end Developer I have a Frontend skils like as HTML, CSS, Javascript, React Js,  Tailwind css and then I have some knowledge from Backend like Node js, Express js, MongoDB. 
                  <span className='font-bold text-xl'>"</span>
            </p>
        </div>
         
      
      
    </div>
  )
}

export default Aboutpage
