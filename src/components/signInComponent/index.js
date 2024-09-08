import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Avatar, Link, CircularProgress } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Đặt trạng thái loading thành true

    // Kiểm tra đầu vào cơ bản
    if (!email || !password) {
      setErrorMessage('Email và mật khẩu không được để trống.');
      setLoading(false);
      return;
    }

    setErrorMessage(''); // Xóa lỗi trước đó

    try {

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Đặt độ trễ 1 giây

      const response = await axios.post('http://localhost:4000/api/auth/signin', { email, password });

      if (response.data) {
        const { name, email: userEmail } = response.data;

        // Lưu trữ dữ liệu người dùng trong localStorage
        localStorage.setItem("username", name);
        localStorage.setItem("email", userEmail);
        navigate('/home');
        // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
      }
    } catch (error) {
      setErrorMessage('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
    } finally {
      setLoading(false); // Đảm bảo trạng thái loading luôn được tắt
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">
          Bạn chưa có tài khoản?{' '}
          <Link href="signup" underline="hover">
            Đăng ký
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default SignIn;
