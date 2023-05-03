import React from "react";
import office1 from "../assets/office01.png"
import office2 from "../assets/office02.png"
import office3 from "../assets/office03.png"
import office4 from "../assets/office04.png"

export default function About(){
  
  return(
    <div className='w-full text-xl bg-[#EDEFF1] text-[#506473] py-28 px-8 pt-30 h-[780px]'>
      <div className=" px-20">

<div class="grid grid-cols-3 md:grid-cols-4 py-10">
    <div class="grid col-span-2">
        <div>
            <img class="h-[408px] w-[652px]" src={office1} alt=""/>
        </div>
    </div>
    <div class="grid gap-1 col-span-1.5">
        <div>
            <img class="h-[200px] w-[382px]" src={office3} alt=""/>
        </div>
        <div>
            <img class="h-[262px] w-[262px]" src={office4} alt=""/>
        </div>
    </div>
    <div class="grid gap-1">
        <div>
            <img class="h-[348px] w-[260px]" src={office2} alt=""/>
        </div>
    </div>
  
</div>

        <div className="-mt-10">

        <span className="ml-4 mr-10 text-[#19293A] text-xl font-bold hover:underline decoration-4 underline-offset-8 decoration-[#C0345E] bloc">About</span>
        <span className="mb-10 px-8 text-[#19293A] text-xl font-bold hover:underline decoration-4 underline-offset-8 decoration-[#C0345E]">Career</span>
        </div>
      </div>

    </div>
  )
}