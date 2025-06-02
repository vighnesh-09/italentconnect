
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import {
  Button,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,    
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import RecruiterDashNav from '../Pages/RecruiterDashNav';
import CloseIcon from '@mui/icons-material/Close';

const RecruiterAllJobList = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedJobCandidates, setSelectedJobCandidates] = useState([]);
  const [seenCandidateIds, setSeenCandidateIds] = useState(new Set());

  useEffect(() => {
    fetchJobs();
    fetchAppliedJobs();

    // Load seen candidates from localStorage
    const savedSeenIds = localStorage.getItem('seenCandidateIds');
    if (savedSeenIds) {
      setSeenCandidateIds(new Set(JSON.parse(savedSeenIds)));
    }
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        'https://itc-backend-241149078260.us-central1.run.app/api/jobs/all'
      );
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleToggleJobStatus = async (jobId, currentStatus) => {
    try {
      const response = await axios.put(
        `https://itc-backend-241149078260.us-central1.run.app/api/jobs/toggle-status/${jobId}`
      );
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === jobId ? { ...job, status: response.data.job.status } : job
        )
      );
      alert(`Job ${response.data.job.status} successfully!`);
    } catch (error) {
      console.error('Error toggling job status:', error);
    }
  };

  const handleDeleteJob = async (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if (!confirm) return;

    try {
      await axios.delete(
        `https://itc-backend-241149078260.us-central1.run.app/api/jobs/delete-job/${jobId}`
      );
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
      alert('Job deleted successfully!');
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Something went wrong while deleting the job.');
    }
  };

  const handleViewCandidates = (jobId) => {
    const candidates = appliedJobs.filter((app) => app.jobId?._id === jobId);

    const updatedCandidates = candidates.map((app) => ({
      ...app,
      isNew: !seenCandidateIds.has(app._id),
    }));

    setSelectedJobCandidates(updatedCandidates);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    const newIds = selectedJobCandidates.map((app) => app._id);
    const updatedSeenIds = new Set([...seenCandidateIds, ...newIds]);
    setSeenCandidateIds(updatedSeenIds);
    localStorage.setItem(
      'seenCandidateIds',
      JSON.stringify(Array.from(updatedSeenIds))
    );
    setOpenDialog(false);
  };

  const columns = [
    { field: 'postedByRole', headerName: 'Posted By', width: 150 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'numberOfOpenings', headerName: 'Openings', width: 120 },
    { field: 'jobType', headerName: 'Job Type', width: 120 },
    { field: 'salary', headerName: 'Salary', width: 120 },
    { field: 'educationalQualification', headerName: 'Education', width: 120 },
    { field: 'experienceRequired', headerName: 'Experience', width: 120 },
    { field: 'description', headerName: 'Description', width: 180 },
    { field: 'jobLocation', headerName: 'Location', width: 150 },
    { field: 'status', headerName: 'Status', width: 100 },
    {
      field: 'appliedCount',
      headerName: 'Applied',
      width: 100,
      renderCell: (params) => {
        const count = appliedJobs.filter(
          (app) => app.jobId?._id === params.row._id
        ).length;
        return (
          <Tooltip title="View Candidates">
            <IconButton onClick={() => handleViewCandidates(params.row._id)}>
              <GroupIcon />
              <span style={{ marginLeft: '5px' }}>{count}</span>
            </IconButton>
          </Tooltip>
        );
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 240,
      renderCell: (params) => (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button
            variant="contained"
            color={params.row.status === 'active' ? 'secondary' : 'primary'}
            onClick={() =>
              handleToggleJobStatus(params.row._id, params.row.status)
            }
          >
            {params.row.status === 'active' ? 'Close Job' : 'Reopen Job'}
          </Button>

          <Button
            variant="outlined"
            color="error"
            sx={{ '&:hover': { backgroundColor: '#ffebee' } }}
            onClick={() => handleDeleteJob(params.row._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <RecruiterDashNav />
      <div style={{ padding: '1rem' }}>
        <Typography variant="h4" gutterBottom>
          All Job Listings
        </Typography>
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <div style={{ width: 'max-content', minWidth: '1200px' }}>
            <DataGrid
              rows={jobs}
              columns={columns}
              getRowId={(row) => row._id}
              loading={loading}
              pageSize={5}
              autoHeight
            />
          </div>
        </div>
      </div>

      {/* Candidate Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          Applied Candidates
          <IconButton onClick={handleCloseDialog} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedJobCandidates.length > 0 ? (
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={selectedJobCandidates.map((candidate) => ({
                  id: candidate._id,
                  firstName: candidate.candidateId?.firstName || '-',
                  lastName: candidate.candidateId?.lastName || '-',
                  email: candidate.candidateId?.email || '-',
                  mobileNo: candidate.candidateId?.mobileNo || '-',
                  appliedDate: new Date(candidate.appliedDate).toLocaleString(),
                  resume: candidate.candidateId?.resume,
                  isNew: candidate.isNew,
                }))}
                columns={[
                  { field: 'firstName', headerName: 'First Name', width: 120 },
                  { field: 'lastName', headerName: 'Last Name', width: 120 },
                  { field: 'email', headerName: 'Email', width: 200 },
                  { field: 'mobileNo', headerName: 'Mobile No', width: 140 },
                  {
                    field: 'appliedDate',
                    headerName: 'Applied Date',
                    width: 180,
                  },
                  {
                    field: 'resume',
                    headerName: 'Resume',
                    width: 130,
                    renderCell: (params) =>
                      params.value ? (
                        <a
                          href={`https://itc-backend-241149078260.us-central1.run.app/${params.value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                        </a>
                      ) : (
                        '-'
                      ),
                  },
                ]}
                getRowClassName={(params) =>
                  params.row.isNew ? 'new-candidate' : ''
                }
                autoHeight
                pageSize={5}
                sx={{
                  '& .new-candidate': {
                    backgroundColor: '#fff3e0', // Highlight new candidates
                  },
                }}
              />
            </div>
          ) : (
            <Typography>No candidates have applied to this job yet.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RecruiterAllJobList;
