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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
   
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://itc-backend-241149078260.us-central1.run.app/api/recruiter/forgot-password',
        { email }
      );
      alert(res.data.message);
      navigate('/otp-verify', { state: { email } }); // Redirect to OTP Verification Page
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
          Recruiter Forgot Password
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
                Forgot Password?
              </Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>
                Enter your email to receive an OTP.
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Send OTP
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
