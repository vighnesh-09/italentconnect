
import React, { useState } from 'react';
import { 
  Box, TextField, Button, Typography, Card, CardContent, Grid, Avatar, Link, Divider 
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployerRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    mobileNo: '',
    email: '',
    location: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Full Name is required';
    if (!formData.companyName) tempErrors.companyName = 'Company Name is required';
    if (!formData.mobileNo.match(/^\d{10}$/)) tempErrors.mobileNo = 'Enter a valid 10-digit Mobile No';
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) tempErrors.email = 'Enter a valid Email';
    if (!formData.location) tempErrors.location = 'Location is required';
    if (formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters long';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await axios.post('https://itc-backend-241149078260.us-central1.run.app/api/employer/register', formData);
      alert(res.data.message);
      navigate('/employer-login');
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', p: 2 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Content Section */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
              Welcome to Employer Portal
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', opacity: 0.8, mb: 3 }}>
              Register to access top talent and grow your business with ease.
            </Typography>
          </motion.div>
        </Grid>

        {/* Registration Form Section */}
        <Grid item xs={12} md={6} sx={{ mt: 9 }}>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card elevation={6} sx={{ maxWidth: 500, mx: 'auto', p: 4, borderRadius: 4, boxShadow: '0 6px 25px rgba(0,0,0,0.3)', background: 'rgba(255, 255, 255, 0.95)' }}>
              <CardContent>
                <Grid container justifyContent="center">
                  <Avatar sx={{ bgcolor: '#2C5364', width: 60, height: 60 }}>
                    <LockOutlined />
                  </Avatar>
                </Grid>
                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#203A43', mb: 3 }}>
                  Register Employer
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField label="Full Name" name="name" fullWidth onChange={handleChange} error={!!errors.name} helperText={errors.name} margin="normal" />
                  <TextField label="Company Name" name="companyName" fullWidth onChange={handleChange} error={!!errors.companyName} helperText={errors.companyName} margin="normal" />
                  <TextField label="Mobile No" name="mobileNo" fullWidth onChange={handleChange} error={!!errors.mobileNo} helperText={errors.mobileNo} margin="normal" />
                  <TextField label="Email" name="email" fullWidth onChange={handleChange} error={!!errors.email} helperText={errors.email} margin="normal" />
                  <TextField label="Location" name="location" fullWidth onChange={handleChange} error={!!errors.location} helperText={errors.location} margin="normal" />
                  <TextField label="Password" type="password" name="password" fullWidth onChange={handleChange} error={!!errors.password} helperText={errors.password} margin="normal" />
                  <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, backgroundColor: '#2C5364', '&:hover': { backgroundColor: '#0F2027' }, py: 1.5 }}>
                    Register
                  </Button>
                </Box>
                <Typography align="center" mt={3}>
                  Already have an account? <Link href="/employer-login" sx={{ color: '#2C5364', fontWeight: 'bold', '&:hover': { textDecoration: 'underline' } }}>Login</Link>
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployerRegister;
