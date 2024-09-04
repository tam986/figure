import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Avatar, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook để điều hướng


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra đầu vào
    if (email === '' && password === '') {
        setErrorMessage('Email và mật khẩu không được để trống.');
    } else if (email === '') {
        setErrorMessage('Email không được để trống.');
    } else if (password === '') {
        setErrorMessage('Mật khẩu không được để trống.');
    } else {
        setErrorMessage('');
        try {
            const response = await axios.post('http://localhost:4000/api/auth/signin', {
                email,
                password,
            });
            if (response.data) {
              const dataUser = response.data
                localStorage.setItem("username",dataUser.name)
                localStorage.setItem("email",dataUser.email)
                navigate('/home'); // Redirect đến trang home sau khi đăng nhập thành công
            } else {
                throw new Error('Dữ liệu nhận vào không hợp lệ.');
            }
        } catch (error) {
            setErrorMessage('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
        }
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng Nhập
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Địa chỉ email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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