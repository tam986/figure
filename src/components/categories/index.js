import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import onePieceThumb from '../../assets/img/onePieceThumb.jpg';
import dragonBallThumb from '../../assets/img/dragonBallthumb.jpg';
import jujutsuKaisenThumb from '../../assets/img/jujutsuKaisenThumb.jpg';


const categories = [
  { id: 1, image: onePieceThumb, title: 'One Piece' },
  { id: 2, image: dragonBallThumb, title: 'Dragon Ball' },
  { id: 3, image: jujutsuKaisenThumb, title: 'Jujutsu Kaisen' },
];

function CategoriesSection() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '1220px', margin: '0 auto', padding: '40px 0' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              width: '30%', 
              textAlign: 'center',
              marginBottom: '20px',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
            onClick={() => navigate(`/products/category/${category.id}`)}
          >
            <img
              src={category.image}
              alt={category.title}
              style={{ width: '100%', height: '100%',borderRadius:'10px' }}
            />
            <Typography variant="h6" sx={{ mt: 1 }}>
              {category.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CategoriesSection;
