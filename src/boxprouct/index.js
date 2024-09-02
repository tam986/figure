import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const products = [
  { id: 1, image: 'https://via.placeholder.com/150', title: 'Product 1', price: '$10' },
  { id: 2, image: 'https://via.placeholder.com/150', title: 'Product 2', price: '$20' },
  { id: 3, image: 'https://via.placeholder.com/150', title: 'Product 3', price: '$30' },
];

function ProductSection() {
  return (
    <Box sx={{ width: '1220px', margin: '0 auto', padding: '40px 0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4">Sản Phẩm Hot</Typography>
        <Button variant="contained">Xem Thêm</Button>
      </Box>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={4} key={product.id}>
            <Box sx={{ border: '1px solid #ddd', padding: 2, textAlign: 'center' }}>
              <img src={product.image} alt={product.title} style={{ width: '100%' }} />
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body1" color="textSecondary">{product.price}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSection;
