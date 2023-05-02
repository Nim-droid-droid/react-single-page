import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Service(){

  return(

    <div className=' text-xl bg-[#EDEFF1] text-[#506473] py-16 px-4 h-[623px]'>
     
          <div className='grid max-w-[1240px] mx-auto md:grid-cols-6 py-8 '>

            <div className="w-[434px] mr-[300px] col-span-3 pt-8 md:pt-2">
                <div className=' text-5xl font-light w-full py-8'>
                  <h5 className=' text-5xl text-[#19293A]'>We're a brands</h5>
                  <h5>best friend</h5>
                </div>

                <p className="font-bold text-[#19293A] pt-8 hover:underline underline-offset-8 decoration-4 decoration-[#C0345E]">Let's talk</p>
                
            </div>



              <div>
                  <h6 className='font-bold pt-12 pr-20'>EXPLORE</h6>
                  <ul>
                      <li className='py-1 pt-4 hover:font-extrabold'>Services</li>
                      <li className='py-1 pt-4 hover:font-extrabold'>Work</li>
                      <li className='py-1 pt-4 hover:font-extrabold'>About</li>
                      <li className='py-1 pt-4 hover:font-extrabold'>Blog</li>
                      <li className='py-1 pt-4 hover:font-extrabold'>Careers</li>
                  </ul>
              </div>

              <div>
                    <h6 className='font-bold pt-12'>SERVICES</h6>
                    <ul>
                        <li className='py-1 pt-4 hover:font-extrabold'>Brand</li>
                        <li className='py-1 pt-4 hover:font-extrabold'>Development</li>
                        <li className='py-1 pt-4 hover:font-extrabold'>Marketing </li>
                    </ul>
              </div>


            <div className="ml-6">
                <h6 className='font-bold pt-12 '>QUESTIONS?</h6>
                <ul>
                    <li className='py-1 pt-4 font-bold'>Call Us</li>
                    <li className='py-1 pt-4'>0121 345 678</li>
                    <li className='pb-1 pt-4 font-bold'>Email Us</li>
                    <li className='pb-1 pt-4 hover:font-extrabold'>info@digitalspaniel.co.uk</li>
                </ul>
            </div>

          </div>

            <div className='flex ml-[600px]'>
                    {/* <div className=''>
                        <p>Copyright &copy; Digital Spaniel 2019, Inc. All rights reserved.</p>
                    </div> */}
                    <div className='flex ml-[600px]'>
                        <FaFacebook size={20} style={{color: '#19293A', marginRight: '10px'}} />
                        <FaTwitter size={20} style={{color: '#19293A', marginRight: '10px'}} />
                        <FaInstagram size={20} style={{color: '#19293A', marginRight: '10px'}} />
                        <FaLinkedinIn size={20} style={{color: '#19293A', marginRight: '10px'}} />
                    </div>
              </div>
            
    </div>

  )
}