import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider1Image from '../../assets/img-slide/slide1.jpg';
import Slider2Image from '../../assets/img-slide/slide2.jpg';
import Slider3Image from '../../assets/img-slide/slide3.jpg';
import Slider4Image from '../../assets/img-slide/slide4.jpg';
import Slider5Image from '../../assets/img-slide/slide5.jpg';

const images = [
  Slider1Image,
  Slider2Image,
  Slider3Image,
  Slider4Image,
  Slider5Image,
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
    <Box 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '720px', 
        overflow: 'hidden', 
        '&:hover .slider-button': { display: 'flex', bgcolor:'#fff',borderRadius:'50%',jC:'center',aI:'center'} 
      }}
    >
      <img 
        src={images[currentIndex]} 
        alt="slider" 
        style={{ width: '100%', height: 'auto' }} 
      />
      <IconButton
        className="slider-button"
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '10px', 
          display: 'none', 
          transform: 'translateY(-50%)',
          zIndex: 1 
        }}
        onClick={goToPrevSlide}
      >
        <ArrowBackIosIcon sx={{fontSize:'25px'}} />
      </IconButton>
      <IconButton
        className="slider-button"
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          right: '10px', 
          display: 'none', 
          transform: 'translateY(-50%)',
          zIndex: 1 
        }}
        onClick={goToNextSlide}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default Slider;
