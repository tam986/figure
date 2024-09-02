import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body2">&copy; 2024 MyShop. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
