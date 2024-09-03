import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, image: './img/zoro.jpg', title: 'Zoro Wano', price: '$10' },
  { id: 2, image: './img/yamato.jpg', title: 'Yamato Wano', price: '$20' },
  { id: 3, image: './img/yamato-fight.jpg', title: 'Yamato-Fight', price: '$30' },
];

function ProductSection() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/order');
  };

  return (
    <Box sx={{ width: '1220px', margin: '0 auto', padding: '40px 0' }} onClick={() => navigate('/productDetail')}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">Sản Phẩm Hot</Typography>
        <Button variant="contained">Xem Thêm</Button>
      </Box>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={4} key={product.id}>
            <Box
              sx={{
                border: '1px solid #ddd',
                padding: 1,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&:hover .action-box': {
                  opacity: 1,
                },
              }}
            >
              <img src={product.image} alt={product.title} style={{ width: '100%' }} />
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body1" color="textSecondary">{product.price}</Typography>

              <Box
                className="action-box"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '395px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={() => navigate('/order')}
                  >
                    Mua Ngay
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    
  );
}

export default ProductSection;
