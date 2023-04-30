import React from 'react';
import Paul from '../assets/testimonial_face03.png'
import Johnny from '../assets/testimonial_face01.png'
import Mary from '../assets/testimonial_face02.png'

export default function Cards(){
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>

      <div className='grid md:grid-cols-3 max-w-[1240px] mx-auto gap-8 text-[#506473]'>

          <div className='flex flex-col w-full p-4 my-8 bg-[#E2E4E6] rounded-lg md:my-0 hover:bg-[#19293A] hover:text-white hover:scale-105 shadow-xl duration-300'>
              <p className='text-center font-light italic mt-10 mb-3 mx-14 text-2xl hover:text-white'>Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end result too!</p>
              <img className='w-24 h-24 mx-auto mt-4' src={Paul} alt="Paul" />
              <span className='text-xs font-bold text-center py-2 mt-4'>Paul Simon</span>
              <p className='text-center text-sm font-bold mb-8'>Founder, MegaCorp</p>
          </div>

          <div className='flex flex-col w-full p-4 bg-[#E2E4E6] rounded-lg md:my-0 my-8 hover:bg-[#19293A] hover:text-white hover:scale-105 shadow-xl duration-300'>
              <p className='text-center font-light italic mt-10 mb-3 mx-14 text-2xl hover:text-white'>Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.</p>
              <img className='w-24 h-24 mx-auto mt-4' src={Johnny} alt="Johnny" />
              <span className='text-xs font-bold text-center py-2 mt-4'>Johnny B. Goode</span>
              <p className='text-center text-sm font-bold mb-8'>CEO, Getting things Done</p>
          </div>

          <div className='flex flex-col w-full p-4 my-8 bg-[#E2E4E6] rounded-lg md:my-0 hover:bg-[#19293A] hover:text-white hover:scale-105 shadow-xl duration-300'>
              <p className='text-center font-light italic mt-10 mb-3 mx-14 text-2xl hover:text-white'>We needed a creative and unique brand which could compete against establish products. Digital spaniel delivered in spades and we've seen a huge response to the product launch.</p>
              <img className='w-24 h-24 mx-auto mt-4' src={Mary} alt="Mary" />
              <span className='text-xs font-bold text-center py-2 mt-4'>Mary Jane</span>
              <p className='text-center text-sm font-bold mb-8'>CEO, Design Matters</p>
          </div>

      </div>
      
    </div>
  );
};

