import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Link,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Thêm biến trạng thái cho thông báo thành công
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate(); // Hook để điều hướng

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra điều kiện xác thực, ví dụ: mật khẩu và xác nhận mật khẩu khớp nhau
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', formData);
      if (response.data) {
        setSuccessMessage('Đã tạo thành công!'); // Thông báo thành công
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }); // Xóa các trường nhập liệu
        setTimeout(() => {
          navigate('/'); // Chuyển hướng đến trang đăng nhập sau 1 giây
        }, 1000);
      } else {
        throw new Error('Dữ liệu nhận vào không hợp lệ.');
      }
    } catch (error) {
      setErrorMessage('Đăng ký không thành công. Vui lòng kiểm tra lại thông tin.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
        <Typography variant="h5">Sign Up</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            type="email"
          />
          <TextField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            type="password"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            type="password"
          />
          {errorMessage && (
            <Typography color="error" variant="body2">
              {errorMessage}
            </Typography>
          )}
          {successMessage && (
            <Typography color="success" variant="body2">
              {successMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link href="/signin" underline="hover">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
