import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Input,
  IconButton,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mobilePattern = /^[6-9]\d{9}$/;

    if (!mobilePattern.test(formData.mobileNo)) {
      setErrors({
        mobileNo: 'Invalid mobile number. Must be 10 digits starting from 6-9.',
      });
      toast.error('Please enter a valid mobile number');
      return;
    } else {
      setErrors({});
    }

    const formDataToSend = new FormData();
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mobileNo', formData.mobileNo);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('resume', formData.resume);

    
    try {
      await axios.post(
        'https://itc-backend-241149078260.us-central1.run.app/api/candidate/register',
        formDataToSend,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      localStorage.setItem('email', formData.email);
      localStorage.setItem('mobileNo', formData.mobileNo);

      toast.success('User registered successfully!');
      navigate('/open-job');
    } catch (error) {
      toast.error('Registration failed');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#203A43',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Side Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Join Our Platform
            </Typography>
            <Typography variant="body1" color="inherit" paragraph>
              Register today to get access to exclusive job offers and upload
              your resume to apply instantly.
            </Typography>
          </Grid>

          {/* Right Side Form */}
          <Grid item xs={12} md={6} sx={{ mt: 9 }}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Register
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                  fullWidth
                  margin="normal"
                  label="First Name"
                  name="firstName"
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Mobile No"
                  name="mobileNo"
                  onChange={handleChange}
                  required
                  error={!!errors.mobileNo}
                  helperText={errors.mobileNo}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  required
                />

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                  <Input
                    type="file"
                    onChange={handleFileChange}
                    inputProps={{ accept: '.pdf,.doc,.docx' }}
                    sx={{ display: 'none' }}
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload">
                    <IconButton component="span" color="primary">
                      <CloudUpload />
                    </IconButton>
                  </label>
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {formData.resume ? formData.resume.name : 'Upload Resume'}
                  </Typography>
                </Box>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: '#1976d2',
                    color: 'white',
                    '&:hover': { backgroundColor: '#1565c0' },
                  }}
                >
                  Register
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
