import Slider from "react-slick";
import factory from '../assets/factory.png';
import farmer from '../assets/farmer.png';
import customer from '../assets/customer.png'

export default function CarouselImage () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slickPlay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
    <div className="container mx-auto px-4 mt-12">
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