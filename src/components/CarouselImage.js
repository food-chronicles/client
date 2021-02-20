import Slider from "react-slick";
import factory from '../assets/factory.png';
import farmer from '../assets/farmer.png';
import customer from '../assets/customer.png'
import { useState } from 'react'

export default function CarouselImage () {
  const [autoPlay, setAutoPlay] = useState(true)

  function play() {
    Slider.slickPlay();
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
    <div className="container mx-auto px-12 mt-12 max-w-7xl">
      <Slider {...settings}>
      <div className="grid grid-cols-1">
        <img src={ farmer } className="rounded-md" alt=""/>
      </div>
      <div className="grid grid-cols-1">
        <img src={ factory } className="rounded-md" alt=""/>
      </div>
      <div className="grid grid-cols-1">
        <img src={ customer } className="rounded-md" alt=""/>
      </div>
    </Slider>
    </div>
    </>
  )
}