import React, {useState, useEffect} from "react";
import {AiOutlineMenu} from "react-icons/ai"
import Logo from "../assets/Digital Spaniel logo01-01.png"



export default function Navbar(){

  const [stickyClass, setStickyClass] = useState('relative');
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 900 ? setStickyClass('fixed top-0 left-0 z-50 bg-[#19293A]') : setStickyClass('relative bg-transparent');
    }
  };


  return(
    <div className={` h-16 w-full ${stickyClass}`}>

        <div className=' px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1> */}
            <img src={Logo} className='w-48 h-20 ml-10 mr-4 my-9'/>
          </div>

          <div className=' pr-4 mr-10 mt-1 text-white hidden md:flex'>
          <ul className="flex space-x-4 underline-offset-4">
           <li className="p-4 hover:underline hover:decoration-white decoration-2">Services</li>
           <li className="p-4 hover:underline hover:decoration-white decoration-2">Work</li>
           <li className="p-4 hover:underline hover:decoration-white decoration-2">About</li>
           <li className="p-4 hover:underline hover:decoration-white decoration-2">Blog</li>
           <li className="p-4 hover:underline hover:decoration-white decoration-2">Contact</li>
         </ul>

          </div>

        </div>
  

      </div>
  )
}
