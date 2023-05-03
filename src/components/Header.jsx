import React from "react";
import Dog from "../assets/Spaniel01_gradient.png"

export default function Header(){
  return(
<div name='home' className='w-fit  flex flex-col justify-between '>
    
<div className='grid md:grid-cols-2 max-w-[1240px] h-[600px] m-auto'>
    <div className='flex flex-col justify-center text-[#506473] w-full px-8 py-8 md:items-start'>
        <p className='text-[#C0345E]'>BRAND, DEV, ECOM, MARKETING</p>
        <div className=' text-5xl text-[#19293A] font-light w-full py-8'>
            <h5>We unleash</h5>
            <h5>business potantial</h5>
        </div>
        {/* <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>We unleash business potantial</h1> */}
        <p className="w-[413px] h-[141px]">
        We create brand Answers which are memorable and distinct. Our experience team create and developbrands with personality and resonance.
        </p>
        
        <span className="text-[#19293A] font-bold hover:underline underline-offset-8 decoration-4 decoration-[#C0345E]">Let's talk</span>
    </div>

    <div className='w-[710px] h-[710px] -mt-20 ml-28 '>
        <img className='' src={Dog} alt="/" />
    </div>

    </div>
</div>
  )
}
