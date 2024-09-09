import React, { Component } from 'react'
import { Box, Typography, Button} from '@mui/material';
import Bannersale from '../../assets/img/bannersale.png';
import { Link } from 'react-router-dom';



export default class ProductAll extends Component {
  render() {
    return (
      <Box width={'100%'} height={'auto'} display={'flex'} justifyContent={'center'} alignItems={'center'} mt={'70px'}>
        <Link to="/productDetails" style={{ textDecoration: 'none' }}>
        <Box width={'100%'}>
          <img src={Bannersale} alt='gear4' style={{ width: '100%', height:'100%', borderRadius: '10px' }}/>
          <Box>
            <Typography/>
            <Button>Mua Ngay</Button>
          </Box>
        </Box>
        </Link>
      </Box>
    )
  }
}
