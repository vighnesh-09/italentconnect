import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  TextField,
  Avatar,
  Divider,
  Button,
} from '@mui/material';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const ProfilePage = () => {
  const [recruiter, setRecruiter] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
  });
      
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'https://itc-backend-241149078260.us-central1.run.app/api/fetch/profile',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setRecruiter(response.data);
      setFormData({
        name: response.data.name || '',
        location: response.data.location || '',
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'https://itc-backend-241149078260.us-central1.run.app/api/fetch/update',
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert('Profile updated successfully!');
      fetchProfile(); // Refetch data instead of reloading
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile.');
    }
  };

  if (!recruiter) {
    return <Typography>Loading profile...</Typography>;
  }

  return (
    <Box>
      <RecruiterDashNav />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: 3,
          gap: 3,
          backgroundColor: '#f8f9fa',
        }}
      >
        {/* Left Profile Section */}
        <Box
          sx={{
            width: '30%',
            backgroundColor: '#fff',
            padding: 3,
            boxShadow: 2,
            borderRadius: 2,
          }}
        >
          <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }} />
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ fontWeight: 'bold', mt: 1 }}
          >
            {recruiter.name}
          </Typography>
          <Typography textAlign="center" color="text.secondary">
            {recruiter.email}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ fontSize: '14px', color: '#333' }}>
            <Typography>
              <b>Email:</b> {recruiter.email}
            </Typography>
            <Typography>
              <b>Mobile:</b> {recruiter.mobile}
            </Typography>
            <Typography>
              <b>Location:</b> {recruiter.location}
            </Typography>
          </Box>
        </Box>

        {/* Right Editable Form */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: '#fff',
            padding: 3,
            boxShadow: 2,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              borderBottom: '2px solid #007bff',
              display: 'inline-block',
              pb: 0.5,
            }}
          >
            My Profile
          </Typography>
          <TextField
            label="Your Name"
            fullWidth
            sx={{ my: 1 }}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Location"
            fullWidth
            sx={{ my: 1 }}
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <TextField
            label="Email ID"
            fullWidth
            sx={{ my: 1 }}
            value={recruiter.email}
            disabled
          />
          <TextField
            label="Mobile No"
            fullWidth
            sx={{ my: 1 }}
            value={recruiter.mobile}
            disabled
          />

          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#007bff', color: '#fff' }}
            onClick={handleUpdate}
          >
            Update Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
