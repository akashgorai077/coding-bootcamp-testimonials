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

function TestimonialSlider() {
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

export default TestimonialSlider;


//!

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import dummy1 from '../Images/dummy1.png'
// import dummy2 from '../Images/dummy2.png'


// const testimonials = [
//   {
//     img:dummy2,
//     name: "Tanisha Rajput",
//     title: "Web Developer",
//     content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee in Web Development. They helped me in learning with ease which eventually landed me a job for a package of 12 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
//   },
//   {
//     img:dummy1,
//     name: "Prince Raj",
//     title: "HR Generalist",
//     content: "I started my training at BAOIAM as a HR. With all the essential training and knowledge from my mentors, I landed a job for 12 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me. They truly helped me in getting the most suitable job opportunity.",
//   },
//   {
//     img:dummy1,
//     name: "Vijay Poranki",
//     title: "Product Manager",
//     content: " trained with BAOIAM as a Product Management and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
//   },
//   {
//     img:dummy2,
//     name: "Rituraj Datta",
//     title: "Data Analyst",
//     content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee as a Data Analytics. They helped me in learning with ease which eventually landed me a job for a package of 11 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
//   },
//   {
//     img:dummy1,
//     name: "Shubham Daiya",
//     title: "Android Developer",
//     content: "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
//   },
//   {
//     img:dummy1,
//     name: "Preetika Rawat",
//     title: "Digital Marketer",
//     content: "I started my training at BAOIAM. With all the essential training and knowledge from my mentors, I landed a job for 13 LPA. Cannot thank enough for all the time and energy that BAOIAM and its mentors has invested in me. They truly helped me in getting the most suitable job opportunity.",
//   },
//   {
//     img:dummy1,
//     name: "Shubham Daiya",
//     title: "Android Developer",
//     content: "Started training in BAOIAM and got placed as a Android Developer with a package of 14 LPA. I would like to show my heartly gratitude to BAOIAM and its trainers for helping me out in building me career.",
//   },
//   {
//     img:dummy1,
//     name: "Harsha Khirwadkar",
//     title: "Graphic Designer",
//     content: "I would like to thank BAOIAM and its mentors for the guidance which was given to me throughout my journey as a trainee. They helped me in learning with ease which eventually landed me a job for a package of 10 LPA. I will always be grateful to BAOIAM for such an amazing opportunity.",
//   },
//   {
//     img:dummy1,
//     name: "Pracheta Bhanjachowdhuri",
//     title: "UI/UX Designer",
//     content: "I trained with BAOIAM as a UI/UX Designer and it was due to their immense support and guidance, that I subsequently landed a job with 14 LPA. I extend my sincere gratitude to all my mentors and trainers for helping me out in shaping my life.",
//   },

// ];

// const TestimonialSlider = () => {
//   return (
//      <div className="relative w-full px-10">
//       <Swiper
//         navigation={{
//           prevEl: '.swiper-button-prev',
//           nextEl: '.swiper-button-next',
//         }}
//         // pagination={{ clickable: true }}
//         modules={[Navigation, Pagination]}
//         spaceBetween={25}
//         slidesPerView={3}
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <div className="border border-orange-600 shadow-xl rounded-2xl text-center mt-10 px-10 flex flex-col py-10 w-full h-96">
//               <img className="w-24 h-24 mx-auto rounded-full object-cover" src={testimonial.img} alt="Student img" />
//               <h3 className="text-xl text-gray-700 font-bold mt-4">{testimonial.name}</h3>
//               <p className="text-gray-500">{testimonial.title}</p>
//               <p className="mt-2 text-gray-500">{testimonial.content}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//         <div className="swiper-button-prev bg-orange-400 rounded-full p-7" > </div>
//         <div className="swiper-button-next bg-orange-400 rounded-full p-7" ></div>
      
//     </div>
//   );
// };

// export default TestimonialSlider;

