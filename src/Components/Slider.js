import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Import images
import Tanya from '../UI/images/image-tanya.jpg';
import John from '../UI/images/image-john.jpg';
import quotesImg from '../UI/images/pattern-quotes.svg';
import bgPattern from '../UI/images/pattern-bg.svg';
import curveImg from '../UI/images/pattern-curve.svg';
import prevIcon from '../UI/images/icon-prev.svg';
import nextIcon from '../UI/images/icon-next.svg';

// Import Tailwind CSS
import '../App.css'; 

function Slider() {
  const testimonials = [
    {
      text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
      name: 'Tanya Sinclair',
      title: 'UX Engineer',
      image: Tanya, 
    },
    {
      text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
      name: 'John Tarkpor',
      title: 'Junior Front-end Developer',
      image: John,
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Bottom curve background */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          className="w-full h-auto lg:w-1/2 lg:h-auto xl:w-1/3 2xl:w-1/4"
          src={curveImg}
          alt="Curve Background"
        />
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-11/12 md:w-3/4 lg:w-2/3"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-between p-8 rounded-lg shadow-lg  lg:flex-row-reverse   "
          >
            {/*Image */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0 lg:mr-10 lg:mt-5 xl:">
              <img
                src={bgPattern}
                alt=""
                className="absolute  transform scale-110 z-[-1] lg:absolute lg:bottom-0 xl:size-80 "
              />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-md shadow-2xl relative size-60 lg:size-72 lg:bottom-1 lg:right- xl:w-3/4 xl:bottom-3"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left  pt-10 lg:mt-0 lg:w-1/2 xl:relative left-20">
              <p className="relative mb-6 text-gray-700 lg:mb-8 ">
                <img
                  src={quotesImg}
                  alt="quotes"
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 lg:left-24 lg:translate-x-0   w-12 h-12"
                />
                <p className='lg:w-96 lg:ml-10'>{testimonial.text}</p>
              </p>
              
             <div className='lg:relative left-10 lg:flex space-x-2 text-xs bottom-5'>
               <div className=" font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className=" text-gray-500">{testimonial.title}</div>
             </div>

              {/* Buttons */}
              <div className='bg-white py-4 px-9 rounded-full flex relative bottom-72 sm:bottom-56 lg:bottom-80 xl:top-11 xl:left-96'>
         <img className="swiper-button-prev size-3 absolute top-8" src={prevIcon} alt="" />
          <img className="swiper-button-next size-3 absolute top-8 " src={nextIcon} alt="" /></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;