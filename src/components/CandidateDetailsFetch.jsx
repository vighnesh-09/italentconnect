import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Box, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const CandidateDetailsFetch = () => {
  const [rows, setRows] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
  });     

  const fetchRecruiters = async () => {
    try {
      const res = await axios.get(
        'https://itc-backend-241149078260.us-central1.run.app/api/candidate/fetch'
      );
      setRows(res.data);
    } catch (err) {
      console.error('Error fetching recruiters:', err);
    }
  };

  useEffect(() => {
    fetchRecruiters();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://itc-backend-241149078260.us-central1.run.app/api/candidate/delete/${id}`
      );
      fetchRecruiters();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleEditClick = (row) => {
    setEditingRow(row);
    setFormData({
      firstName: row.firstName,
      lastName: row.lastName,
      email: row.email,
      mobileNo: row.mobileNo,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://itc-backend-241149078260.us-central1.run.app/api/candidate/update/${editingRow._id}`,
        formData
      );
      setEditingRow(null);
      fetchRecruiters();
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  const columns = [
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'mobileNo', headerName: 'Mobile Number', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            onClick={() => handleEditClick(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <>
      <RecruiterDashNav />
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" mb={2}>
          Candidate List
        </Typography>

        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          autoHeight
          pageSize={5}
          rowsPerPageOptions={[5]}
          components={{ Toolbar: GridToolbar }}
        />

        {editingRow && (
          <Paper
            elevation={4}
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              padding: 4,
              zIndex: 9999,
              minWidth: 400,
            }}
          >
            <Typography variant="h6" mb={2}>
              Edit Candidate Details
            </Typography>

            <TextField
              fullWidth
              label="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              margin="normal"
            />

            <TextField
              fullWidth
              label="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              margin="normal"
            />

            <TextField
              fullWidth
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              margin="normal"
            />

            <TextField
              fullWidth
              label="Mobile Number"
              value={formData.mobileNo}
              onChange={(e) =>
                setFormData({ ...formData, mobileNo: e.target.value })
              }
              margin="normal"
            />

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
              >
                Update
              </Button>
              <Button variant="outlined" onClick={() => setEditingRow(null)}>
                Cancel
              </Button>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default CandidateDetailsFetch;
