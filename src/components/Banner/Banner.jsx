import React from 'react'
import Slider from 'react-slick';
import banner from '../../assets/banner.png'
import logo from '../../assets/Logo.png'

const Banner = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* <div>
          <img src={banner} alt="" />
        </div> */}
        
        
      </Slider>
    </div>
  )
}

export default Banner