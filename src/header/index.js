import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';  

const pages = ['Home', 'Products', 'Blog', 'Contact'];
const settings = ['Profile', 'Order', 'Dashboard', 'Login'];
const orders = [
  { id: 1, image: 'https://via.placeholder.com/50',name:'product 1', price: '$50', quantity: 1 },
  { id: 2, image: 'https://via.placeholder.com/50',name:'product 2', price: '$100', quantity: 2 },
];

function ResponsiveAppBar() {
  const [Nav, setNav] = React.useState(null);
  const [User, setUser] = React.useState(null);
  const [showOrderTable, setShowOrderTable] = React.useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNav(null);
  };

  const handleCloseUserMenu = () => {
    setUser(null);
  };

  const handleCartClick = () => {
    setShowOrderTable((prev) => !prev); // Toggle order table visibility
  };

  const handleSeeAllOrders = () => {
    navigate('/orders'); 
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#fce1a8' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              letterSpacing: '.3rem',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            FIGME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={Nav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(Nav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, color: '#000' }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Nav Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',color: '#000' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Account & Cart */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '200px', position: 'relative' }}>
            <ShoppingCartIcon sx={{ p: 0, fontSize: 30, color: '#000' ,'&:hover':{
              cursor:'pointer'
            }}} onClick={handleCartClick} />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <AccountCircleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 40, color: '#000' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={User}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(User)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Order Table */}
      {showOrderTable && (
        <TableContainer
          component={Box} // Remove Paper to prevent default background
          sx={{
            maxWidth: '400px',
            position: 'absolute', // Position below the cart icon
            top: '67px', // Adjust distance from the cart icon
            right: '0', 
            zIndex: 10, // Ensure it appears on top
            boxShadow: 3, // Optional for better visibility
            backgroundColor: 'white'
            
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <img src={order.image} alt={`Product ${order.id}`} width={50} height={50} />
                  </TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={handleSeeAllOrders} sx={{ mt: 2, textAlign: 'center', width: '100%' }}>
            See All Orders
          </Button>
        </TableContainer>
      )}
    </AppBar>
  );
}

export default ResponsiveAppBar;
