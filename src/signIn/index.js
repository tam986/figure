import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Avatar, Link } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignIn() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic đăng nhập đơn giản
    if (user === '' && password === '') {
      setErrorMessage('user và mật khẩu không được để trống.');
    }else if(user === ''){
      setErrorMessage('user không được để trống.');
    }else if(password === ''){
      setErrorMessage('Mật khẩu không được để trống.');
    } else {
      setErrorMessage('');
      console.log('Thông tin đăng nhập:', { user, password });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Avatar alt="tam" src="./img/logo.jpg" />
        <Typography component="h1" variant="h5">
          Đăng Nhập
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="Địa chỉ user"
            name="user"
            autoComplete="user"
            autoFocus
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mật khẩu"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <Typography color="error" variant="body2">
              {errorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng Nhập
          </Button>
        </Box>
      </Box>
      {/* Don't have account? Sign up" */}
      <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link href="signup" underline="hover">
                Sign in
              </Link>
            </Typography>
          </Box>
    </Container>
  );
}

export default SignIn;