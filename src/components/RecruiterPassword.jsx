import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';    
import { toast } from 'react-toastify';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const validationSchema = Yup.object({
  oldPassword: Yup.string().required('Old Password is required'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function ChangePassword() {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.put(
        'https://itc-backend-241149078260.us-central1.run.app/api/fetch/change-password',
        {
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );

      toast.success(res.data.message);
      resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update password');
    }
  };

  return (
    <>
      <RecruiterDashNav />
      <Grid container component="main" sx={{ height: '100vh' }}>
        {/* Left Content Section */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/600x800/?security,password)',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            textAlign: 'center',
            padding: 4,
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Secure Your Account
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Change your password regularly to keep your account safe.
            </Typography>
          </Box>
        </Grid>

        {/* Change Password Form */}
        <Grid item xs={12} sm={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              p: 4,
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Change Password
            </Typography>

            <Formik
              initialValues={{
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form style={{ width: '100%', maxWidth: '400px' }}>
                  <Field
                    as={TextField}
                    name="oldPassword"
                    label="Old Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    error={touched.oldPassword && Boolean(errors.oldPassword)}
                    helperText={touched.oldPassword && errors.oldPassword}
                  />

                  <Field
                    as={TextField}
                    name="newPassword"
                    label="New Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    error={touched.newPassword && Boolean(errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                  />

                  <Field
                    as={TextField}
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      mt: 3,
                      bgcolor: '#ff5722',
                      ':hover': { bgcolor: '#e64a19' },
                    }}
                  >
                    {isSubmitting ? 'Updating...' : 'Update Password'}
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
