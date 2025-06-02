import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Avatar,
  Box,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
     
const ProfileDataFetch = () => {
  const [employer, setEmployer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployerProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(
          'https://itc-backend-241149078260.us-central1.run.app/api/employerProfile/profile',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        const data = await response.json();
        if (response.ok) {
          setEmployer(data);
        } else {
          console.error('Error fetching employer profile:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployerProfile();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 4, p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              width: 80,
              height: 80,
              fontSize: 32,
            }}
          >
            {employer?.name?.charAt(0)}
          </Avatar>
          <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
            {employer?.name}
          </Typography>
          <Typography color="textSecondary">{employer?.companyName}</Typography>
        </Box>

        <CardContent>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>Email:</strong> {employer?.email}
          </Typography>
          <Typography variant="body1">
            <strong>Mobile No:</strong> {employer?.mobileNo}
          </Typography>
          <Typography variant="body1">
            <strong>Company Address:</strong> {employer?.companyAddress}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfileDataFetch;
