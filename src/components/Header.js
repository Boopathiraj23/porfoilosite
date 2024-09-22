import React, { useState } from 'react'

import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
     const [togglemenu,setTogglemenu]=useState('false')
  return (
    <section className='fixed z-10 w-full flex justify-between bg-blue-600 p-7'>
     
     <div className='text-white text-2xl'>
          <h1 className='h1tag font-bold'>BOOPATHI</h1>
          
     </div>
     <div className=' hidden md:block text-white  w-1 resizenav '>
          <ul className='flex  ml-[-160px] '>
               
                   <li><a className='px-10' href='/'>Home</a></li> 
                   <li><a className='px-10' href='#about'>About</a></li>
                   <li><a className='px-10' href='#projects'>Projects</a></li> 
                   <li><a className='px-10' href='#resume'>Resume</a></li> 
                   <li><a className='px-10' href='#contact'>Contact</a></li> 
           
          </ul>

     </div>

     { togglemenu==true && <div className='align-content-center flex-col   block md:hidden  text-white '>
          <ul onClick={()=>setTogglemenu(!togglemenu)} className='flex-col md:flex justify-center mobile-nav'>
               
                   <li><a className='px-10' href='/'>Home</a></li> 
                   <li><a className='px-10' href='#about'>About</a></li>
                   <li><a className='px-10' href='#projects'>Projects</a></li> 
                   <li><a className='px-10' href='#resume'>Resume</a></li> 
                   <li><a className='px-10' href='#contact'>Contact</a></li> 
           
          </ul>

     </div>}
     <button onClick={()=>setTogglemenu(!togglemenu)} ><GiHamburgerMenu className='block md:hidden' />
</button>
    </section>
  )
}

export default Header
