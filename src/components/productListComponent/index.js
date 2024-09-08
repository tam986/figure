import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
  { id: 1, image: '../../assets/img/onePieceThumb.jpg', title: 'One Piece' },
  { id: 2, image: '../../assets/img/dragonBallthumb.jpg', title: 'Dragon Ball' },
  { id: 3, image: '../../assets/img/jujutsuKaisenThumb.jpg', title: 'Jujutsu Kaisen' },
];

const products = [
  { id: 1, categoryid: 1,name:'zoro', image: 'https://one-piece.com/img/figure/0607_101068FZ%20MOMODORAGON_04.jpg', title: 'Zoro Wano', price: '$10' },
  { id: 2, categoryid: 1,name:'yamato', image: 'https://one-piece.com/img/figure/0425_100988100988_02.jpg', title: 'Yamato Wano', price: '$20' },
  { id: 3, categoryid: 1,name:'yamato', image: 'https://one-piece.com/img/figure/100892_figure_thum10.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 4, categoryid: 2,name:'vegeta', image: 'https://content.pancake.vn/1/s600x600/e0/f2/77/b5/fdf1900802cddeac1253ebb7b4fc55554966013fe68470abf1ff90d0.jpg', title: 'Majin Vegeta', price: '$10' },
  { id: 5, categoryid: 2,name:'', image: 'https://content.pancake.vn/1/s600x600/93/d1/10/3e/fb98f1aad2d8af1a466c6e16daeea18bd0fd841172607226c185faa7.jpg', title: 'Yamato Wano', price: '$20' },
  { id: 6, categoryid: 2,name:'', image: 'https://content.pancake.vn/1/s600x600/e9/19/42/e2/d49904c8a644b2a46e1eac61b04c103d2c2307d2bb76e77904b5d110.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 7, categoryid: 2,name:'', image: 'https://content.pancake.vn/1/s600x600/84/a9/c4/4f/96bf834ad834fe14714a7b0ab7ebd9f669d151ccb402d04991206fd7.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 8, categoryid: 2,name:'', image: 'https://content.pancake.vn/1/s600x600/97/0d/fb/34/e0fc44ba1aaccca3fe082fc5990fb5f008b52f2e0fbfe2d29bb6cec7.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 9, categoryid: 2,name:'', image: 'https://content.pancake.vn/1/s600x600/85/24/6e/cf/43c27dcb5659e3a5d609cbead05e77902ebd1742c895decfb4e7a102.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 10, categoryid: 2,name:'', image: 'https://content.pancake.vn/1/s600x600/83/93/00/c8/7353a81cdfd0abf0bf8e9fb3e9b23a1f5e38b9cdd75f2d2d947adefa.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 11, categoryid: 2,name:'', image: 'https://content.pancake.vn/1/s600x600/3b/2e/25/65/3343d1d67616bdd2204ec0a304b09dfc87a1d3c45f88dcdf66793adf.jpg', title: 'Yamato-Fight', price: '$30', description:'lorem ipsum dolor sit amet'},
  { id: 12, categoryid: 1,name:'', image: 'https://one-piece.com/img/figure/0607_101068FZ%20MOMODORAGON_04.jpg', title: 'Zoro Wano', price: '$10' },
  { id: 13, categoryid: 1,name:'', image: 'https://one-piece.com/img/figure/0425_100988100988_02.jpg', title: 'Yamato Wano', price: '$20' },
  { id: 14, categoryid: 1,name:'', image: 'https://one-piece.com/img/figure/100892_figure_thum10.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 15, categoryid: 1,name:'', image: 'https://one-piece.com/o/assets/uploads/figure/20221012141304/50776f35035c940fcd7466af5ec69ae9.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 16, categoryid: 1,name:'', image: 'https://one-piece.com/img/figure/0421_101693101693-thum.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 17, categoryid: 1,name:'', image: 'https://one-piece.com/img/figure/24082408main.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 18, categoryid: 1,name:'', image: 'https://one-piece.com/img/figure/24072407main.jpg', title: 'Yamato-Fight', price: '$30' },
  { id: 19, categoryid: 1,name:'', image: 'https://one-piece.com/img/figure/1002_101329101329_GEAR5_thum.jpg', title: 'Yamato-Fight', price: '$30', description:'lorem ipsum dolor sit amet'},  
];

function ProductList({ category }) {
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

  // Sự kiện click khi nhấn vào "Xem Thêm" để điều hướng đến trang danh mục
  const handleViewMoreClick = () => {
    navigate(`/product/categories/${category.id}`);
  };

  return (
    <Box sx={{ width: '1220px', margin: '0 auto', padding: '40px 0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">{category.title}</Typography>
      </Box>
      <Grid container spacing={2}>
        {products.filter(product => product.categoryid === category.id).map((product) => (
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
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt={product.title} style={{ width: '100%', height:'400px', borderRadius: '10px' }} />
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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, mt: 2 }}>
        <Button variant="contained" onClick={handleViewMoreClick}>Xem Thêm</Button>
      </Box>
    </Box>
  );
}

export default ProductList;
