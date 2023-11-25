'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const SliderHeader = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className=" max-w-7xl mx-auto ">
      <Slider {...settings}>
        <div className=" h-80   bg-[url('/images/1.jpg')] bg-cover bg-center">
          <h3>1</h3>
        </div>
        <div className=" h-80   bg-[url('/images/2.jpg')] bg-cover bg-center">
          <h3>2</h3>
        </div>
        <div className=" h-80  bg-[url('/images/3.jpg')] bg-cover bg-center">
          <h3>3</h3>
        </div>
        <div className=" h-80   bg-[url('/images/3.jpg')] bg-cover bg-center">
          <h3>4</h3>
        </div>
      </Slider>
    </div>
  )
}

export default SliderHeader
