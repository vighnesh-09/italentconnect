import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Avatar,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecruiterDashNav from './RecruiterDashNav';

const RecruiterRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://itc-backend-241149078260.us-central1.run.app/api/recruiter/recruiter-register',
        formData
      );
      toast.success('Registration Successful');
      navigate('/recruiter');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <>
      <RecruiterDashNav />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
          padding: { xs: '0 5%', md: '0 10%' },
        }}
      >
        
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {/* Left Content Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                Join Our Recruiter Network
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  opacity: 0.8,
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                Create an account to find top talent quickly and efficiently.
              </Typography>
            </motion.div>
          </Grid>

          {/* Registration Form Section */}
          <Grid item xs={12} md={6} sx={{ mt: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={6}
                sx={{
                  width: { xs: '85%', sm: '75%', md: 400 },
                  mx: 'auto',
                  my: { xs: 4, md: 6 }, // Reduced top and bottom margin
                  p: { xs: 2, md: 3 },
                  borderRadius: 4,
                  boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
                  background: 'rgba(255, 255, 255, 0.95)',
                }}
              >
                <Box display="flex" justifyContent="center" mb={2}>
                  <Avatar sx={{ bgcolor: '#2C5364', width: 60, height: 60 }}>
                    <PersonAdd />
                  </Avatar>
                </Box>
                <Typography
                  variant="h4"
                  mb={3}
                  align="center"
                  sx={{
                    fontWeight: 'bold',
                    color: '#203A43',
                    fontSize: { xs: '1.8rem', md: '2.125rem' },
                  }}
                >
                  Recruiter Register
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Company Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="mobile"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      backgroundColor: '#2C5364',
                      '&:hover': { backgroundColor: '#0F2027' },
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    Register
                  </Button>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RecruiterRegister;
