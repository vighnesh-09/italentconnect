import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions,
} from '@mui/material';

const UpdateEmployerModal = ({
  open,
  handleClose,
  employer,
  refreshProfile,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    mobileNo: '',
    companyAddress: '',
  });

  // **🛠 Auto-fill form when modal opens**
  useEffect(() => {
    if (employer) {
      setFormData({
        name: employer.name || '',
        companyName: employer.companyName || '',
        email: employer.email || '',
        mobileNo: employer.mobileNo || '',
        companyAddress: employer.companyAddress || '',
      });
    }
  }, [employer]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        'https://itc-backend-241149078260.us-central1.run.app/api/employerProfile/update',
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
        alert('Profile Updated Successfully');
        refreshProfile(); // **🔄 Refresh Employer Profile**
        handleClose(); // **❌ Close Modal**
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Edit Employer Profile</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled
        />
        <TextField
          fullWidth
          margin="dense"
          label="Mobile No"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Company Address"
          name="companyAddress"
          value={formData.companyAddress}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleUpdate} variant="contained" color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateEmployerModal;
