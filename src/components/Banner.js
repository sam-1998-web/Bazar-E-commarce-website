import React, { useState } from 'react'
import {HiArrowRight,HiArrowLeft} from 'react-icons/hi'

const Banner = () => {
    
    const [currSlide , setCurrSlide ] = useState(0)
    
    const data = [
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/33234650700333.58d88a71f123e.png",
        "https://i.pinimg.com/originals/b4/6e/b7/b46eb746f7664083877a42aa05062dfe.jpg",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14d5f677630559.5c8d3005a7c9c.png",
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/167073978/original/6106390d91357a90011c07b9d15fd40921be2459/create-stunning-ecommerce-banners-social-media-post-ads.png",

    ]

    const prevSlide = () =>{
        setCurrSlide(currSlide === 0 ? 3 : (prev) => prev - 1)  
    }
    const nextSlide = () =>{
        setCurrSlide(currSlide === 3 ? 0 : (prev) => prev + 1)  
    }
    // console.log(currSlide);

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div style={{transform: `translateX(-${currSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
            <img
             className='w-screen h-full object-cover'
              src={data[0]}
               alt="ImgOne"
               loading='priority'
               />
            <img
             className='w-screen h-full object-cover'
              src={data[1]}
               alt="ImgTwo"
               loading='priority'
               />
            <img
             className='w-screen h-full object-cover'
              src={data[2]}
               alt="Img3"
               loading='priority'
               />
            <img
             className='w-screen h-full object-cover'
              src={data[3]}
               alt="Img4"
               loading='priority'
               />
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
            <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
               <HiArrowLeft/>
            </div>
            <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
              <HiArrowRight />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
