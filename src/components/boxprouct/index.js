import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import zoroImage from '../../assets/img/zoro.jpg';
import yamatoImage from '../../assets/img/yamato.jpg';
import yamatoFightImage from '../../assets/img/yamato-fight.jpg';

const products = [
  { id: 1, categoryid: 1, image: zoroImage, title: 'Zoro Wano', price: '$10' },
  { id: 2, categoryid: 2, image: yamatoImage, title: 'Yamato Wano', price: '$20' },
  { id: 3, categoryid: 3, image: yamatoFightImage, title: 'Yamato-Fight', price: '$30' },
];

function ProductSection() {
  const navigate = useNavigate();

  // Sự kiện click khi nhấn vào toàn bộ box sản phẩm để đi đến chi tiết sản phẩm
  const handleProductClick = (productId) => {
    navigate(`/productDetail/${productId}`);
  };

  // Sự kiện click khi nhấn vào "Mua Ngay" để đi đến trang order
  const handleBuyNowClick = (e, productId) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click lan ra khỏi button
    navigate(`/order/${productId}`);
  };

  return (
    <Box sx={{ width: '1220px', margin: '0 auto', padding: '40px 0' }}>
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
                borderRadius: '10px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&:hover .action-box': {
                  opacity: 1,
                },
              }}
              // Sự kiện click để điều hướng sang trang chi tiết sản phẩm
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '10px' }} />
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
                    // Sự kiện click của nút "Mua Ngay"
                    onClick={(e) => handleBuyNowClick(e, product.id)}
                  >
                    Mua Ngay
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click lan đến box sản phẩm
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
