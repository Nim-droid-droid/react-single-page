// Use this carousel instead, fix code:
// import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// // add array of objs with img src in here:
// const items = [  {
//     imageSrc:'../assets/dashboard01.png'
//   },
//   {
//     imageSrc:'../assets/newspaper.png'
//   },
//   {
//     imageSrc:'../assets/lab01.png'
//   },
// ];

// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: this.props.items,
//       active: this.props.active,
//       direction: ''
//     };
//     this.rightClick = this.moveRight.bind(this);
//     this.leftClick = this.moveLeft.bind(this);
//   }

//   generateItems() {
//     let items = [];
//     let level;
//     console.log(this.state.active);
//     for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
//       let index = i;
//       if (i < 0) {
//         index = this.state.items.length + i;
//       } else if (i >= this.state.items.length) {
//         index = i % this.state.items.length;
//       }
//       level = this.state.active - i;
//       items.push(
//         <Item key={index} id={this.state.items[index]} level={level} />
//       );
//     }
//     return items;
//   }

//   moveLeft() {
//     let newActive = this.state.active;
//     newActive--;
//     this.setState({
//       active: newActive < 0 ? this.state.items.length - 1 : newActive,
//       direction: 'left'
//     });
//   }

//   moveRight() {
//     let newActive = this.state.active;
//     this.setState({
//       active: (newActive + 1) % this.state.items.length,
//       direction: 'right'
//     });
//   }

//   render() {
//     return (
//       <div id='carousel' className='noselect'>
//         <div className='arrow arrow-left' onClick={this.leftClick}>
//           <i className='fi-arrow-left'></i>
//         </div>
//         <ReactCSSTransitionGroup
//           transitionName={this.state.direction}
//         >
//           {this.generateItems()}
//         </ReactCSSTransitionGroup>
//         <div className='arrow arrow-right' onClick={this.rightClick}>
//           <i className='fi-arrow-right'></i>
//         </div>
//       </div>
//     );
//   }
// }

// class Item extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       level: this.props.level
//     };
//   }

//   render() {
//     const className = 'item level' + this.props.level;
//     return (
//       <div className={className}>
//         {this.props.id}
//       </div>
//     );
//   }
// }


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
    <div >

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

