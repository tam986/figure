import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Link,
  CircularProgress,
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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    // Kiểm tra điều kiện xác thực, ví dụ: mật khẩu và xác nhận mật khẩu khớp nhau
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Mật khẩu và xác nhận mật khẩu không khớp.');
      setLoading(false); 
      return;
    }
    setErrorMessage('')
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Đặt độ trễ 1 giây

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
        // setTimeout(() => {
        //   navigate('/'); // Chuyển hướng đến trang đăng nhập sau 1 giây
        // }, 2000);
      } else {
        throw new Error('Dữ liệu nhận vào không hợp lệ.');
      }
    } catch (error) {
      setErrorMessage('Đăng ký không thành công. Vui lòng kiểm tra lại thông tin.');
    } finally {
      setLoading(false); // Đảm bảo trạng thái loading luôn được tắt
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
        <Typography variant="h5">Đăng Ký</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? 'Đang đăng ký...' : 'Đăng ký'}
            </Button>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Bạn đã có tài khoản?{' '}
              <Link href="/" underline="hover">
                Đăng nhập
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
