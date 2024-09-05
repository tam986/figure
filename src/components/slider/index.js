import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  '/img-slide/slide1.jpg',
  '/img-slide/slide2.jpg',
  '/img-slide/slide3.jpg',
  '/img-slide/slide4.jpg',
  '/img-slide/slide5.jpg',
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <img src={images[currentIndex]} alt="slider" style={{ width: '100%', height: 'auto' }} />
      <IconButton
        sx={{ position: 'absolute', top: '50%', left: '10px', display: 'none', ':hover': { display: 'block' } }}
        onClick={goToPrevSlide}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        sx={{ position: 'absolute', top: '50%', right: '10px', display: 'none', ':hover': { display: 'block' } }}
        onClick={goToNextSlide}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default Slider;
