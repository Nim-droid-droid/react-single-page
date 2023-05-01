// the closest carousel to the design is Swiper or Id Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import Dashboard from '../assets/dashboard01.png';
import Newspaper from '../assets/newspaper.png';
import Socks from '../assets/socks.png';
import Rider from '../assets/rider01.png';
import Lab from '../assets/lab01.png';

import { Navigation, EffectCoverflow } from 'swiper';


export default function Carousel(){
  return (
    <div>

        <div className='flex flex-col justify-center items-center my-10 h-[200px]'>
          <h3 className='my-4 text-5xl text-[#19293A]'>Case Studies</h3>
          <div className='w-[710px] h-[60px] text-center text-[#506473] text-xl font-extralight'>
            <p>
              Every project is different. We like to work collaboratively with our clients, tailoring each product to suit the needs of you and your business</p>
          </div>
        </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        grabCursor={true}
        centeredSlides={true}
        effect={'coverflow'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={Dashboard} alt="dashboard" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Socks} alt="socks" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Rider} alt="rider" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Newspaper} alt="newspaper" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Lab} alt="lab" />
        </SwiperSlide>


        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>

      </Swiper>

      <div className='flex flex-col justify-center ml-80 mt-8 text-5xl text-[#19293A] font-light w-full px-8 py-8'>
        <h5>What are</h5>
        <h5 className='text-[#506473]'>we all about?</h5>
      </div>

    </div>
  );
}