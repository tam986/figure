import React from 'react';
import { Box, Typography, Grid, Link, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', width: '100%' }}>
      {/* Box 1 */}
      <Box sx={{ width: '1220px', padding: '20px', display: 'flex', justifyContent: 'space-between' ,mr:'auto',ml:'auto'}}>
        {/* Logo and Info */}
        <Box sx={{ width: '33.33%', textAlign: 'left' }}>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize:'48px',
              letterSpacing: '.3rem',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            FIGME
          </Typography>
          <Typography variant="body2" mt={2}>
            Email: info@myshop.com
          </Typography>
          <Typography variant="body2">
            Phone: +123 456 7890
          </Typography>
          <Typography variant="body2">
            Address: 123 Main Street, City, Country
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ width: '33.33%' }}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Typography variant="h6">Links</Typography>
              <ul style={{ listStyleType: 'none' ,padding:0}}>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>Home</Link></li>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>Products</Link></li>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>Blog</Link></li>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>Contact</Link></li>
              </ul>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Categories</Typography>
              <ul style={{ listStyleType: 'none',padding:0}}>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>One Piece</Link></li>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>Dragon Ball</Link></li>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>Jujutsu Kaisen</Link></li>
              </ul>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Blog</Typography>
              <ul style={{ listStyleType: 'none',padding:0}}>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>Cách bảo quản figure</Link></li>
                <li><Link href="#" color="inherit" sx={{textDecoration:'none'}}>Phân biệt thật giả figure</Link></li>
              </ul>
            </Grid>
          </Grid>
        </Box>

        {/* Contact Form */}
        <Box sx={{ width: '33.33%', textAlign: 'left' ,display:'flex',flexDirection:'column',justifyItems:'flex-end'}}>
          <Box sx={{width:'70%'}}>
          <Typography variant="h6">Contact Us</Typography>
          <TextField
            fullWidth
            variant="filled"
            label="Your Email"
            type="email"
            sx={{width:'160px',height:'50px', backgroundColor: '#fff', borderBottomLeftRadius: 2,borderTopLeftRadius: 2, marginBottom: '10px' }}
          />
          <Button variant="contained" color="primary" sx={{width:'50px',height:'50px',borderBottomRightRadius: 2,borderTopRightRadius: 2,borderBottomLeftRadius:0 ,borderTopLeftRadius: 0}}>Submit</Button>

          </Box>
         
          {/* Social Media Icons */}
          <Box sx={{width:'70%'}} display="flex" justifyContent="flex-start" mt={2}>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://youtube.com" target="_blank">
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Box 2 */}
      <Box sx={{ backgroundColor: '#222', width: '100%', textAlign: 'center' ,display:'flex',justifyContent:'space-between ',alignItems:'center'}}>
        <Box sx={{ width: '1220px', display: 'flex',alignItems:'center', justifyContent: 'space-between' ,mr:'auto',ml:'auto'}}>
          <Typography variant="body2">&copy; 2024 MyShop. All rights reserved.</Typography>
          {/* Payment Methods */}
          <Box mt={2} display="flex" justifyContent="center" gap={2}>
            <img src="/paypal.png" alt="Paypal" width={50} />
            <img src="/credit-card.png" alt="Credit Card" width={50} />
            <img src="/momo.png" alt="Momo" width={50} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
