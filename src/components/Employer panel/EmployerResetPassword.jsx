import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
     
const EmployerResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await axios.post(
        'https://itc-backend-241149078260.us-central1.run.app/api/employerProfile/reset-password',
        {
          email,
          newPassword: formData.password,
        }
      );

      alert(res.data.message);
      navigate('/employer-login'); // Redirect to Login Page
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <>
      <Box
        sx={{
          height: { xs: '25vh', sm: '30vh', md: '80vh' }, // Adjust height for different screens
          background: 'url(service.jpg) no-repeat center center/cover',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: { xs: 2, sm: 3, md: 4 }, // Adjust padding
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, // Responsive font size
            marginTop: '15vh',
          }}
        >
          Employer Reset Password
        </Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '70vh' }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={10} sx={{ borderRadius: 6, padding: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Reset Password
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  label="New Password"
                  name="password"
                  type="password"
                  fullWidth
                  required
                  onChange={handleChange}
                />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  required
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Reset Password
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default EmployerResetPassword;
