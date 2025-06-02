import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, Button } from '@mui/material';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const AppliedJobsList = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await axios.get(
          'https://itc-backend-241149078260.us-central1.run.app/api/applications/applied-jobs'
        );
        setAppliedJobs(response.data);
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };     

    fetchAppliedJobs();
  }, []);

  // Define columns for DataGrid

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'candidate', headerName: 'Candidate Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'mobileNo', headerName: 'Mobile No', width: 150 },

    {
      field: 'resume',
      headerName: 'Resume',
      width: 180,
      renderCell: (params) =>
        params.value !== 'N/A' ? (
          <a
            href={`https://itc-backend-241149078260.us-central1.run.app/${params.value}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        ) : (
          'N/A'
        ),
    },

    { field: 'jobTitle', headerName: 'Job Title', width: 200 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'salary', headerName: 'Salary', width: 120 },
    { field: 'jobType', headerName: 'Job Type', width: 120 },
    {
      field: 'educationalQualification',
      headerName: 'Qualification',
      width: 120,
    },
    { field: 'experienceRequired', headerName: 'Experience', width: 120 },
    { field: 'location', headerName: 'Job Location', width: 180 },
  ];

  // Convert API data to DataGrid format
  const rows = appliedJobs.map((job, index) => ({
    id: index + 1,
    candidate: `${job.candidateId?.firstName || 'N/A'} ${
      job.candidateId?.lastName || ''
    }`,
    email: job.candidateId?.email || 'N/A',
    mobileNo: job.candidateId?.mobileNo || 'N/A',
    resume: job.candidateId?.resume || 'N/A',
    jobTitle: job.jobId?.title || 'N/A',
    department: job.jobId?.department || 'N/A',
    salary: job.jobId?.salary || 'N/A',
    jobType: job.jobId?.jobType || 'N/A',
    educationalQualification: job.jobId?.educationalQualification || 'N/A',
    experienceRequired: job.jobId?.experienceRequired || 'N/A',
    location: job.jobId?.jobLocation || 'N/A',
  }));

  return (
    <>
      <RecruiterDashNav />
      <Box sx={{ height: 500, width: '100%', p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Applied Jobs
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </>
  );
};

export default AppliedJobsList;
