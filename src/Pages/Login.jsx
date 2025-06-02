import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Avatar,
  Divider,
  Link,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';


const RecruiterLogin = () => {
  const [loginMode, setLoginMode] = useState('mobile');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  const validationSchema = Yup.object().shape({
    mobile:
      loginMode === 'mobile'
        ? Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
            .required('Mobile number is required')
        : Yup.string(),
    email:
      loginMode === 'email'
        ? Yup.string().email('Invalid email').required('Email is required')
        : Yup.string(),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      mobile: '',
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const payload = {
          password: values.password,
          ...(loginMode === 'mobile'
            ? { mobile: values.mobile }
            : { email: values.email }),
        };
        const res = await axios.post(
          'https://itc-backend-241149078260.us-central1.run.app/api/recruiter/recruiter-login',
          payload
        );
        toast.success('Login Successful');
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userType', 'recruiter');
        navigate('/recruiter');
      } catch (error) {
        toast.error(error.response?.data?.message || 'Login failed');
      }
    },
  });

  const switchLoginMode = () => {
    setLoginMode((prev) => (prev === 'mobile' ? 'email' : 'mobile'));
    formik.resetForm(); // Reset form on mode switch
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
        padding: { xs: '5%', md: '2%' },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Text */}
        <Grid item xs={12} md={6}>
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
              Welcome Back, Recruiter!
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'white', opacity: 0.8, mb: 3 }}
            >
              Log in to connect with top talent and streamline your hiring
              process.
            </Typography>
          </motion.div>
        </Grid>

        {/* Form */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={6}
              sx={{
                width: { xs: '90%', sm: '80%', md: '450px' },
                p: { xs: 2, md: 4 },
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.95)',
                mx: 'auto',
              }}
            >
              <Box display="flex" justifyContent="center" mb={1}>
                <Avatar sx={{ bgcolor: '#2C5364' }}>
                  <LockOutlined />
                </Avatar>
              </Box>
              <Typography
                variant="h5"
                align="center"
                sx={{ fontWeight: 'bold', color: '#203A43', mb: 2 }}
              >
                Recruiter Login
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <Box component="form" onSubmit={formik.handleSubmit}>
                {loginMode === 'mobile' ? (
                  <TextField
                    label="Mobile No"
                    name="mobile"
                    fullWidth
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.mobile && Boolean(formik.errors.mobile)
                    }
                    helperText={formik.touched.mobile && formik.errors.mobile}
                    margin="normal"
                  />
                ) : (
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    margin="normal"
                  />
                )}

                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  margin="normal"
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: '#2C5364',
                    '&:hover': { backgroundColor: '#0F2027' },
                  }}
                >
                  Login
                </Button>
              </Box>

              <Divider sx={{ my: 2 }}>OR</Divider>

              <Button
                variant="outlined"
                fullWidth
                onClick={switchLoginMode}
                sx={{
                  textTransform: 'none',
                  color: '#2C5364',
                  borderColor: '#2C5364',
                  '&:hover': { borderColor: '#0F2027' },
                }}
              >
                {loginMode === 'mobile'
                  ? 'Login with Email'
                  : 'Login with Mobile Number'}
              </Button>

              <Typography align="center" mt={2} sx={{ fontSize: '0.9rem' }}>
                Forgot your password?{' '}
                <Link
                  href="/forgot-password"
                  sx={{
                    color: '#2C5364',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Reset Here
                </Link>
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
      <ToastContainer position="top-center" autoClose={3000} />
    </Grid>
  );
};

export default RecruiterLogin;
