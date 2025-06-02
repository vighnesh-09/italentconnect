import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RecruiterDashNav from '../Pages/RecruiterDashNav';
    
const EmployerDataGrid = () => {
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        'https://itc-backend-241149078260.us-central1.run.app/api/employer/all-jobs'
      );
      setJobs(response.data);
    } catch (error) {
      console.log('Error fetching jobs:', error);
    }
  };

  const handleOpenDialog = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedJob(null);
  };

  const handleDelete = async () => {
    if (!selectedJob) return;

    try {
      await axios.delete(
        `https://itc-backend-241149078260.us-central1.run.app/api/employer/delete-job/${selectedJob.userId}/${selectedJob.jobId}`
      );
      fetchJobs(); // Refresh the job list
      handleCloseDialog();
    } catch (error) {
      console.log('Error deleting job:', error);
    }
  };

  const columns = [
    { field: 'title', headerName: 'Job Title', width: 200 },
    { field: 'department', headerName: 'Department', width: 180 },
    { field: 'numberOfOpenings', headerName: 'Openings', width: 120 },
    { field: 'jobType', headerName: 'Job Type', width: 150 },
    { field: 'salary', headerName: 'Salary', width: 150 },
    {
      field: 'educationalQualification',
      headerName: 'Qualification',
      width: 200,
    },
    { field: 'experienceRequired', headerName: 'Experience', width: 180 },
    { field: 'jobLocation', headerName: 'Location', width: 180 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'status', headerName: 'Status', width: 120 },

    // Employer Details
    { field: 'employerName', headerName: 'Employer Name', width: 180 },
    { field: 'companyName', headerName: 'Company Name', width: 200 },
    { field: 'mobileNo', headerName: 'Mobile No', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'companyAddress', headerName: 'Company Address', width: 250 },

    // ✅ Delete Button Column
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <IconButton color="error" onClick={() => handleOpenDialog(params.row)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const rows = jobs.map((job, index) => ({
    id: index + 1,
    jobId: job._id, // ✅ Store job ID for deletion
    userId: job.userId, // ✅ Store user ID for backend request
    title: job.title,
    department: job.department,
    numberOfOpenings: job.numberOfOpenings,
    jobType: job.jobType,
    salary: job.salary,
    educationalQualification: job.educationalQualification,
    experienceRequired: job.experienceRequired,
    jobLocation: job.jobLocation,
    description: job.description,
    status: job.status,

    // Employer Info
    employerName: job.employerName || 'N/A',
    companyName: job.companyName || 'N/A',
    mobileNo: job.mobileNo || 'N/A',
    email: job.email || 'N/A',
    companyAddress: job.companyAddress || 'N/A',
  }));

  return (
    <>
      <RecruiterDashNav />
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#ff5722',
          marginBottom: '20px',
          fontWeight: 'bold',
        }}
      >
        Job Listings
      </Typography>
      <Box
        sx={{
          height: 500,
          width: '90%',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '20px',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f5f5f5',
              color: '#333',
              fontWeight: 'bold',
              fontSize: '16px',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#fff3e0',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #e0e0e0',
            },
            '& .MuiCheckbox-root': {
              color: '#ff5722',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '1px solid #e0e0e0',
            },
          }}
        />
      </Box>

      {/* ✅ Delete Confirmation Dialog */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>Are you sure you want to delete this job?</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployerDataGrid;
