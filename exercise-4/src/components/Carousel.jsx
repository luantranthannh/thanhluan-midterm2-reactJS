import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import {useState} from 'react'
export const Carousel = ({ images }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);  

  function goToPreviousImage() {
    setCurrentIndex(currentIndex === 0? images.length - 1 : currentIndex - 1);
  }
  function goToNextImage() {
    setCurrentIndex(currentIndex === images.length - 1? 0 : currentIndex + 1);
  }
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill  onClick={goToPreviousImage} className="arrow arrow-left" />

      <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="slide" />

      <BsArrowRightCircleFill onClick={goToNextImage} className="arrow arrow-right" />
    </div>
  );
};
