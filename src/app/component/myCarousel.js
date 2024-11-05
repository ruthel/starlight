"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from "next/link";

const MyCarousel = () => {

  const CustomDot = ({onClick, ...rest}) => {
    const {
      onMove,
      index,
      active,
      carouselState: {currentSlide, deviceType}
    } = rest;
    let carouselItems = Array.from({length: 7})
    return (
      <button
        className={`${active ? "bg-white" : ""} border-2 rounded-full h-3 w-3 mx-1`}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: {max: 4000, min: 3000},
      items: 5
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 5
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 5
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 2
    }
  };

  return (
    <Carousel
      showDots={true}
      responsive={responsive}
      customDot={<CustomDot />}
      infinite={true}
      swipeable={false}
      itemClass="px-2 mt-5 mb-8"
    >
      {Array.from({length: 7}).map((_, i) => {
        return (
          <Link href='/editor' key={i}>
            <img
              src={`/personal/img_${i % 5}.png`}
              key={i}
              className='rounded-lg shadow-lg'
              alt="#"
            />
          </Link>
        )
      })}
    </Carousel>
  );
}

export default MyCarousel