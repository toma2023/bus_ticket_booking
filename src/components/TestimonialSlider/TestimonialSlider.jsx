"use client"
import React from 'react';
import Slider from '@madzadev/image-slider'
      //  import "image-slider/dist/index.css"

import card_1 from "../../../public/card_1.jpg";
import card_2 from "../../../public/card_2.jpg";
import card_3 from "../../../public/card_3.jpg";
import Image from 'next/image';

const TestimonialSlider = () => {
    const images = [
        {url: 'https://picsum.photos/seed/a/1600/900'},
        {url: 'https://picsum.photos/seed/b/1920/1080'},
        {url: 'https://picsum.photos/seed/c/1366/768'}
      ]
    
  return (
    <div>
      <Slider imageList={images} width={1000} height={300}/>
    
    </div>
  );
};

export default TestimonialSlider;
