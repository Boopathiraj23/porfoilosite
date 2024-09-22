import React from 'react'
import pjt1 from '../assets/portfolio.png'
import pjt2 from '../assets/cart.png'
import pjt3 from '../assets/car.jpeg'
import pjt4 from '../assets/Screenshot 2024-07-03 114209.png'
const Projects = () => {
  return (
    <div id='projects' className='bgsecondary flex flex-col md:w-full '>
      <div className='ml-[20px] md:ml-[400px] py-3'>
          <h1 className='flex  flex-grow text-2xl font-bold justify-center ml-[120px] md:ml-80 text-white py-1 border-b-4 w-[100px]'>PROJECTS</h1>
      </div>
      <div className='py-10 flex flex-col md:flex-row w-full gap-3 p-3 md:pl-[50px] '>
          <div className='relative'>
               <img className="px-3 py-2 md:py-3 w-[350px] h-[300px] rounded-[20px]" src={pjt1} />
               
               <div className='projects'>
                    <p className='font-bold py-10 mt-[70px] text-white'>Portfolio Website Using React js</p>
                    <a href='https://github.com/Boopathiraj23/Portfolio' className='text-white bgsecondary p-2 rounded-[10px] border-[1px]'>View Project</a>
               </div>
          </div>
          <div className='relative'>
                <img className="px-3 w-[350px] h-[300px] py-3 rounded-[20px]" src={pjt2} />  
                <div className='projects'>
                    <p className='font-bold py-10 mt-[70px] text-white'>Mini Ecommerce Website Using React js</p>
                    <a href='https://github.com/Boopathiraj23/React-Ecomwebsite-Cart' className='text-white bgsecondary p-2 rounded-[10px] border-[1px]'>View Project</a>
               </div> 
          </div>
          <div className='relative'>
                <img className="px-3 w-[350px] h-[300px] py-3 rounded-[20px]" src={pjt4} />  
                <div className='projects'>
                    <p className='font-bold py-10 mt-[70px] text-white'>To-do List Using React js</p>
                    <a href='https://todo23-4bf83.web.app/' className='text-white bgsecondary p-2 rounded-[10px] border-[1px]'>View Project</a>
               </div> 
          </div>
          <div className='relative'>
                <img className="px-3 w-[350px] h-[300px] py-3 rounded-[20px]" src={pjt3} /> 
                <div className='projects'>
                    <p className='font-bold py-10 mt-[70px] text-white'>Car Price Prediction Using Machine Learning</p>
                    <a href='https://github.com/Boopathiraj23/carprice33' className='text-white bgsecondary p-2 rounded-[10px] border-[1px]'>View Project</a>
               </div>    
          </div>
      </div>
    </div>
  )
}

export default Projects
