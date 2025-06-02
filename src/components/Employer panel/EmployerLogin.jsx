import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Link,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
  
const EmployerLogin = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const validationSchema = Yup.object({
    mobileNo: Yup.string()
      .required('Mobile number is required')
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const formik = useFormik({
    initialValues: {
      mobileNo: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          'https://itc-backend-241149078260.us-central1.run.app/api/employer/login',
          values
        );
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userType', 'employer');
        alert('Login Successful!');
        navigate('/employer-dashboard');
      } catch (error) {
        alert(error.response?.data?.message || 'Login failed');
      }
    },
  });

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #FFC72C, #00509E, #002147)',
        p: isMobile ? 2 : 5,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: 'left',
          color: 'white',
          mb: isMobile ? 4 : 0,
          pr: isMobile ? 0 : 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            sx={{ fontWeight: 'bold', mb: 2, color: '#00509E' }}
          >
            Welcome Back!
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
            Login to manage your recruitment with ease.
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            Access your employer dashboard and streamline your hiring process.
          </Typography>
        </motion.div>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10vh',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card
            elevation={10}
            sx={{
              width: isMobile ? '95%' : '85%',
              maxWidth: 450,
              p: isMobile ? 3 : 5,
              borderRadius: 6,
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              background: 'rgba(255, 255, 255, 0.98)',
            }}
          >
            <CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                mb={2}
              >
                <Avatar sx={{ bgcolor: '#00509E', width: 70, height: 70 }}>
                  <LockOutlined sx={{ color: '#FFC72C' }} />
                </Avatar>
              </Grid>
              <Typography
                variant="h4"
                mb={3}
                align="center"
                sx={{ fontWeight: 'bold', color: '#002147' }}
              >
                Employer Login
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Box component="form" onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Mobile No"
                  name="mobileNo"
                  type="tel"
                  value={formik.values.mobileNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.mobileNo && Boolean(formik.errors.mobileNo)
                  }
                  helperText={formik.touched.mobileNo && formik.errors.mobileNo}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    backgroundColor: '#00509E',
                    color: '#FFC72C',
                    '&:hover': { backgroundColor: '#002147' },
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 3,
                  }}
                >
                  Login
                </Button>
              </Box>

              <Typography align="center" mt={3}>
                New Account?{' '}
                <Link
                  href="/employer-register"
                  sx={{
                    color: '#002147',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Register Here
                </Link>
              </Typography>

              <Typography align="center" mt={2}>
                <Link
                  href="/employer-forgot-password"
                  sx={{
                    color: '#00509E',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Forgot Password?
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default EmployerLogin;
