import React from "react";

export default function Service(){

  return(

    <div className='w-full text-xl bg-[#EDEFF1] text-[#506473] mt-10 py-16 px-4 h-[787px]'>
     
          <div className='max-w-[1240px] mx-auto grid  md:grid-cols-6 py-8 '>

            <div className="w-[434px] mr-[300px] col-span-3 pt-8 md:pt-2">
                <div className=' text-5xl font-light w-full py-8'>
                  <h5 className=' text-5xl text-[#19293A]'>What are</h5>
                  <h5>we capable of</h5>
                </div>
                <p className="py-1">
                  By focusing on design as an enabler and putting a huge emphasis on our client as co-producers, we create innovative, sustainable marketing that enhance brand experience and user engagement.
                </p>

                <p className="font-bold text-[#19293A] pt-8 hover:underline underline-offset-8 decoration-4 decoration-[#C0345E]">Our process</p>
            </div>


            <div>
              <div>
                  <h6 className='font-bold pt-12 pr-20 uppercase'>brand</h6>
                  <ul>
                      <li className='py-1 pt-4 hover:font-extrabold'>Brand Strategy</li>
                      <li className='py-1 pt-4 hover:font-extrabold'>Logo & Name</li>
                      <li className='py-1 pt-4 hover:font-extrabold'>Identity & Collateral</li>
                  </ul>
              </div>

              <div>
                    <h6 className='font-bold pt-12'>DEVELOPMENT</h6>
                    <ul>
                        <li className='py-1 pt-4 hover:font-extrabold'>eCommerce</li>
                        <li className='py-1 pt-4 hover:font-extrabold'>Web Development</li>
                        <li className='py-1 pt-4 hover:font-extrabold'>Mobile Apps</li>
                    </ul>
              </div>
            </div>

            <div className="ml-14">
                <h6 className='font-bold pt-12'>MARKETING</h6>
                <ul>
                    <li className='py-1 pt-4 hover:font-extrabold'>Digital</li>
                    <li className='pb-1 pt-4 hover:font-extrabold'>Market Research</li>
                </ul>
            </div>

          </div>
            
    </div>

  )
}