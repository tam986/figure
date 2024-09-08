import { Box, Typography } from '@mui/material'; // Import Typography correctly
import React, { Component } from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default class Benerfit extends Component {
  render() {
    return (
      <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'#000'}>
        <Box width={'1220px'} height={'100px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <LocalShippingIcon sx={{color:'#fff'}}/>
            <Typography color='#fff' variant="h6">Delivery</Typography>
          </Box>
          <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <AddLocationIcon sx={{color:'#fff'}}/>
            <Typography color='#fff' variant="h6">Location</Typography> 
          </Box>
          <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <CardGiftcardIcon sx={{color:'#fff'}}/>
            <Typography color='#fff' variant="h6">Discount</Typography> 
          </Box>
          <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <ContactSupportIcon sx={{color:'#fff'}}/>
            <Typography color='#fff' variant="h6">Contact</Typography> 
          </Box>
        </Box>
      </Box>
    );
  }
}
