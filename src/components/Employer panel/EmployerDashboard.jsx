import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Avatar,
  LinearProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchSection from './SearchSection';
import ProfileDataFetch from './profileDataFetch';

const EmployerDashboard = () => {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    numberOfOpenings: '',
    jobType: '',
    salary: '',
    educationalQualification: '',
    experienceRequired: '',
    jobLocation: '',
    description: '',
    status: 'active',
  });

  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    if (!token || userType !== 'employer') {
      navigate('/login');
    } else {
      fetchEmployerJobs();
    }
  }, [navigate]);

  const fetchEmployerJobs = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await fetch(
        'https://itc-backend-241149078260.us-central1.run.app/api/employer/employer-jobs',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setJobs(data.jobs);
    } catch (error) {
      console.error('🚨 Error fetching jobs:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = 'Job Title is required';
    if (!formData.department) tempErrors.department = 'Department is required';
    if (!formData.numberOfOpenings)
      tempErrors.numberOfOpenings = 'Openings required';
    if (!formData.jobType) tempErrors.jobType = 'Job Type is required';
    if (!formData.salary) tempErrors.salary = 'Salary is required';
    if (!formData.educationalQualification)
      tempErrors.educationalQualification = 'Education is required';
    if (!formData.experienceRequired)
      tempErrors.experienceRequired = 'Experience is required';
    if (!formData.jobLocation)
      tempErrors.jobLocation = 'Job Location is required';
    if (!formData.description)
      tempErrors.description = 'Description is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!validateForm()) return;

  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       alert("Please log in again.");
  //       return;
  //     }

  //     const res = await axios.post(
  //       "https://itc-backend-241149078260.us-central1.run.app/api/employer/add-job",
  //       formData,
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     alert(res.data.message);
  //     fetchEmployerJobs();
  //           setFormData({
  //       title: "",
  //       department: "",
  //       numberOfOpenings: "",
  //       jobType: "",
  //       salary: "",
  //       educationalQualification: "",
  //       experienceRequired: "",
  //       jobLocation: "",
  //       description: "",
  //       status: "active",
  //     });
  //   } catch (error) {
  //     alert(error.response?.data?.message || "Something went wrong");
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please log in again.');
        return;
      }

      // Employer API (Requires Auth)
      const employerApiCall = axios.post(
        'https://itc-backend-241149078260.us-central1.run.app/api/employer/add-job',
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Public Job API (Without Auth)
      const publicJobApiCall = axios.post(
        'https://itc-backend-241149078260.us-central1.run.app/api/jobs/post-job',
        { ...formData, postedByRole: 'employer' } // 👈 added this
      );

      // Hit both APIs in parallel
      const [employerRes, publicRes] = await Promise.all([
        employerApiCall,
        publicJobApiCall,
      ]);

      alert('✅ Job posted successfully!');
      setFormData({
        title: '',
        department: '',
        numberOfOpenings: '',
        jobType: '',
        salary: '',
        educationalQualification: '',
        experienceRequired: '',
        jobLocation: '',
        description: '',
        status: 'active',
      });

      console.log('Employer API Response:', employerRes.data);
      console.log('Public API Response:', publicRes.data);

      fetchEmployerJobs(); // Refresh job list
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <SearchSection />

      <Grid container spacing={3} sx={{ p: 3 }}>
        {/* Left Section - Form */}
        <Grid item xs={12} md={8}>
          <Card elevation={10} sx={{ borderRadius: 4, p: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                🚀 Post a New Job
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  label="Job Title"
                  name="title"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={formData.title}
                  error={!!errors.title}
                  helperText={errors.title}
                />

                <TextField
                  label="Department"
                  name="department"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={formData.department}
                  error={!!errors.department}
                  helperText={errors.department}
                />

                <TextField
                  label="Number of Openings"
                  name="numberOfOpenings"
                  type="number"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={formData.numberOfOpenings}
                  error={!!errors.numberOfOpenings}
                  helperText={errors.numberOfOpenings}
                />

                <FormControl fullWidth margin="normal" error={!!errors.jobType}>
                  <InputLabel>Job Type</InputLabel>
                  <Select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                  >
                    <MenuItem value="Full-time">Full-time</MenuItem>
                    <MenuItem value="Part-time">Part-time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                  </Select>
                  {errors.jobType && (
                    <Typography color="error">{errors.jobType}</Typography>
                  )}
                </FormControl>

                <TextField
                  label="Salary"
                  name="salary"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={formData.salary}
                  error={!!errors.salary}
                  helperText={errors.salary}
                />

                <FormControl
                  fullWidth
                  margin="normal"
                  error={!!errors.educationalQualification}
                >
                  <InputLabel>Educational Qualification</InputLabel>
                  <Select
                    name="educationalQualification"
                    value={formData.educationalQualification}
                    onChange={handleChange}
                  >
                    <MenuItem value="SSC">SSC</MenuItem>
                    <MenuItem value="HSC">HSC</MenuItem>
                    <MenuItem value="Graduate">Graduate</MenuItem>
                    <MenuItem value="Post Graduate">Post Graduate</MenuItem>
                    <MenuItem value="Diploma">Diploma</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                  {errors.educationalQualification && (
                    <Typography color="error">
                      {errors.educationalQualification}
                    </Typography>
                  )}
                </FormControl>

                <FormControl
                  fullWidth
                  margin="normal"
                  error={!!errors.experienceRequired}
                >
                  <InputLabel>Experience Required</InputLabel>
                  <Select
                    name="experienceRequired"
                    value={formData.experienceRequired}
                    onChange={handleChange}
                  >
                    <MenuItem value="Fresher">Fresher</MenuItem>
                    <MenuItem value="1-3 Years">1-3 Years</MenuItem>
                    <MenuItem value="3-5 Years">3-5 Years</MenuItem>
                    <MenuItem value="5+ Years">5+ Years</MenuItem>
                  </Select>
                  {errors.experienceRequired && (
                    <Typography color="error">
                      {errors.experienceRequired}
                    </Typography>
                  )}
                </FormControl>

                <TextField
                  label="Job Location"
                  name="jobLocation"
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={formData.jobLocation}
                  error={!!errors.jobLocation}
                  helperText={errors.jobLocation}
                />

                <TextField
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  onChange={handleChange}
                  value={formData.description}
                  error={!!errors.description}
                  helperText={errors.description}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  🚀 Post Job
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Profile Card */}
        <Grid item xs={12} md={4}>
          <ProfileDataFetch />
        </Grid>
      </Grid>
    </>
  );
};

export default EmployerDashboard;
