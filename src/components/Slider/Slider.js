import React from 'react'
import './Slider.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-thene.css'
import { sliderImages } from '../../utils/images'

const Slider = () => {
  return (
    <div className='hero-slider'>
      <div className='hero-slider-item'>
        <img src={sliderImages[0]} alt='' />
      </div>
    </div>
  )
}

export default Slider