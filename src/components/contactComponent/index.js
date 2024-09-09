import React, { Component } from 'react'
import { Box, Typography ,TextField,Button,Checkbox} from '@mui/material';
export default class Contact extends Component {
  render() {
    return (
      <Box width={'100%'} height={'418px'} sx={{bgcolor:'#fce1a8'}} display={'flex'}justifyContent={'center'} justifyItems={'center'} flexDirection={'column'} alignItems={'center'}>
        <Box width={'1220px'} display={'flex'} justifyItems={'center'} flexDirection={'column'} alignItems={'center'}>
          <h1>Contact for us</h1>
          <Typography/> <i>Subscribe to our latest newsletter to get news about special discounts.</i>
          <Box sx={{width:'100%',mt:'10px' } } display={'flex'} justifyContent={'center'} justifyItems={'center'} alignItems={'center'}>
          <TextField
            fullWidth
            variant="filled"
            label="Your Email"
            type="email"
            sx={{width:'70%',height:'50px', backgroundColor: '#fff', borderBottomLeftRadius: 2,borderTopLeftRadius: 2, marginBottom: '10px'}}
          />
          <Button variant="contained" color="primary" sx={{width:'50px',height:'56px',borderBottomRightRadius: 2,borderTopRightRadius: 2,borderBottomLeftRadius:0 ,borderTopLeftRadius: 0}}>Submit</Button>
          </Box>
        <Box sx={{width:'100%',mt:'10px' } }display={'flex'}justifyContent={'center'} justifyItems={'center'} alignItems={'center'}>
          <Checkbox /> 
          <Typography/> <strong> I agree to the terms and conditions and the privacy policy</strong>
          </Box>
          
        </Box>

      </Box>
    )
  }
}
