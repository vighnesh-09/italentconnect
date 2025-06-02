import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
  Typography,
} from '@mui/material';

const ChangePasswordModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handlePasswordChange = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        'https://itc-backend-241149078260.us-central1.run.app/api/employerProfile/change-password',
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
               
      const data = await response.json();
      if (response.ok) {
        alert('Password Changed Successfully');
        handleClose();
        setFormData({ oldPassword: '', newPassword: '', confirmPassword: '' }); // Reset fields
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Old Password"
          name="oldPassword"
          type="password"
          value={formData.oldPassword}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="dense"
          label="New Password"
          name="newPassword"
          type="password"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {error && <Typography color="error">{error}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handlePasswordChange}
          variant="contained"
          color="primary"
        >
          Update Password
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePasswordModal;
