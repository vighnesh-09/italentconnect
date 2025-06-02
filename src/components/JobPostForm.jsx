// import React, { useState } from 'react';
// import {
//   Box,
//   TextField,
//   Button,
//   MenuItem,
//   Typography,
//   Paper,    
//   Grid,
// } from '@mui/material';
// import RecruiterDashNav from '../Pages/RecruiterDashNav';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';

// const JobPostForm = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     department: '',
//     numberOfOpenings: '',
//     jobType: '',
//     salary: '',
//     educationalQualification: '',
//     experienceRequired: '',
//     jobLocation: '',
//     description: '',
//     status: 'active',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async () => {
//   //   try {
//   //     const token = localStorage.getItem('token');
//   //     if (!token) {
//   //       alert('User is not authenticated!');
//   //       return;
//   //     }

//   //     const decodedToken = jwtDecode(token);
//   //     const recruiterId = decodedToken.userId;

//   //     if (!recruiterId) {
//   //       alert('Recruiter ID not found!');
//   //       return;
//   //     }

//   //     // Generate a unique jobId
//   //     const jobId = `JOB-${Date.now()}`;

//   //     const response = await axios.post(
//   //       'https://itc-backend-241149078260.us-central1.run.app/api/recruiter/job',
//   //       { ...formData, recruiterId, jobId }, // ✅ Include jobId
//   //       {
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //           Authorization: `Bearer ${token}`,
//   //         },
//   //       }
//   //     );

//   //     alert('Job Posted Successfully!');
//   //     console.log(response.data);

//   //     setFormData({
//   //       title: '',
//   //       department: '',
//   //       numberOfOpenings: '',
//   //       jobType: '',
//   //       salary: '',
//   //       educationalQualification: '',
//   //       experienceRequired: '',
//   //       jobLocation: '',
//   //       description: '',
//   //       status: 'active',
//   //     });
//   //   } catch (error) {
//   //     console.error('Error posting job:', error);
//   //     alert('Failed to post job.');
//   //   }
//   // };
//   const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         alert('User is not authenticated!');
//         return;
//       }

//       const decodedToken = jwtDecode(token);
//       const recruiterId = decodedToken.userId;

//       if (!recruiterId) {
//         alert('Recruiter ID not found!');
//         return;
//       }

//       // Generate a unique jobId
//       const jobId = `JOB-${Date.now()}`;

//       // Recruiter API (With Auth)
//       const recruiterApiCall = axios.post(
//         'https://itc-backend-241149078260.us-central1.run.app/api/recruiter/job',
//         { ...formData, recruiterId, jobId },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Public Job API (Without Auth)
//       const publicJobApiCall = axios.post(
//         'https://itc-backend-241149078260.us-central1.run.app/api/jobs/post-job',
//         { ...formData, jobId, postedByRole: 'recruiter' }
//       );

//       // Execute both API calls in parallel
//       const [recruiterRes, publicRes] = await Promise.all([
//         recruiterApiCall,
//         publicJobApiCall,
//       ]);

//       alert('✅ Job Posted Successfully!');
//       console.log('Recruiter API Response:', recruiterRes.data);
//       console.log('Public API Response:', publicRes.data);

//       // Reset Form
//       setFormData({
//         title: '',
//         department: '',
//         numberOfOpenings: '',
//         jobType: '',
//         salary: '',
//         educationalQualification: '',
//         experienceRequired: '',
//         jobLocation: '',
//         description: '',
//         status: 'active',
//       });
//     } catch (error) {
//       console.error('❌ Error posting job:', error);
//       alert(error.response?.data?.message || 'Failed to post job.');
//     }
//   };

//   return (
//     <>
//       <RecruiterDashNav />

//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           minHeight: '100vh',
//           padding: '20px',
//           background: '#F8F8F8',
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             width: '100%',
//             maxWidth: '1000px',
//             padding: '20px',
//             borderRadius: '10px',
//             background: '#fff',
//           }}
//         >
//           <Grid container spacing={3}>
//             {/* Sidebar */}
//             <Grid item xs={12} md={4}>
//               <Box
//                 sx={{
//                   padding: '20px',
//                   background: '#E7F0FA',
//                   borderRadius: '10px',
//                   textAlign: 'center',
//                 }}
//               >
//                 <Typography variant="h6" sx={{ mb: 2 }}>
//                   Job Posting Tips
//                 </Typography>
//                 <Typography variant="body2">
//                   ✅ Use clear and concise job titles.
//                   <br />
//                   ✅ Specify the department and location.
//                   <br />
//                   ✅ Provide detailed job descriptions.
//                   <br />✅ Mention the required experience and salary.
//                 </Typography>
//               </Box>
//             </Grid>

//             {/* Job Post Form */}
//             <Grid item xs={12} md={8}>
//               <Box>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     background: '#E7F0FA',
//                     padding: '10px',
//                     borderRadius: '5px',
//                     mb: 2,
//                     textAlign: 'center',
//                   }}
//                 >
//                   Job Details
//                 </Typography>

//                 <TextField
//                   fullWidth
//                   label="Job Title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   margin="normal"
//                 />

//                 <TextField
//                   fullWidth
//                   label="Department"
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   margin="normal"
//                 />

//                 <TextField
//                   fullWidth
//                   label="Number of Openings"
//                   name="numberOfOpenings"
//                   type="number"
//                   value={formData.numberOfOpenings}
//                   onChange={handleChange}
//                   margin="normal"
//                 />

//                 <TextField
//                   fullWidth
//                   select
//                   label="Job Type"
//                   name="jobType"
//                   value={formData.jobType}
//                   onChange={handleChange}
//                   margin="normal"
//                 >
//                   <MenuItem value="Full-time">Full-time</MenuItem>
//                   <MenuItem value="Part-time">Part-time</MenuItem>
//                   <MenuItem value="Contract">Contract</MenuItem>
//                 </TextField>

//                 <TextField
//                   fullWidth
//                   label="Salary"
//                   name="salary"
//                   value={formData.salary}
//                   onChange={handleChange}
//                   margin="normal"
//                 />

//                 <TextField
//                   fullWidth
//                   select
//                   label="Educational Qualification"
//                   name="educationalQualification"
//                   value={formData.educationalQualification}
//                   onChange={handleChange}
//                   margin="normal"
//                 >
//                   <MenuItem value="SSC">SSC</MenuItem>
//                   <MenuItem value="HSC">HSC</MenuItem>
//                   <MenuItem value="Graduate">Graduate</MenuItem>
//                   <MenuItem value="Post Graduate">Post Graduate</MenuItem>
//                   <MenuItem value="Diploma">Diploma</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                 </TextField>

//                 <TextField
//                   fullWidth
//                   select
//                   label="Experience Required"
//                   name="experienceRequired"
//                   value={formData.experienceRequired}
//                   onChange={handleChange}
//                   margin="normal"
//                 >
//                   <MenuItem value="Fresher">Fresher</MenuItem>
//                   <MenuItem value="1-3 Years">1-3 Years</MenuItem>
//                   <MenuItem value="3-5 Years">3-5 Years</MenuItem>
//                   <MenuItem value="5+ Years">5+ Years</MenuItem>
//                 </TextField>

//                 <TextField
//                   fullWidth
//                   label="Job Location"
//                   name="jobLocation"
//                   value={formData.jobLocation}
//                   onChange={handleChange}
//                   margin="normal"
//                 />

//                 <TextField
//                   fullWidth
//                   multiline
//                   rows={4}
//                   label="Job Description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   margin="normal"
//                 />

//                 <TextField
//                   fullWidth
//                   select
//                   label="Status"
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   margin="normal"
//                 >
//                   <MenuItem value="active">Active</MenuItem>
//                   <MenuItem value="closed">Closed</MenuItem>
//                 </TextField>

//                 <Button
//                   variant="contained"
//                   fullWidth
//                   sx={{ mt: 2, backgroundColor: '#007bff' }}
//                   onClick={handleSubmit}
//                 >
//                   Submit Job Post
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>
//     </>
//   );
// };

// export default JobPostForm;


import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import RecruiterDashNav from '../Pages/RecruiterDashNav';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const JobPostForm = () => {
  const [excelFile, setExcelFile] = useState(null);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
  setExcelFile(e.target.files[0]);
};


  
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('User is not authenticated!');
        return;
      }

      const decodedToken = jwtDecode(token);
      const recruiterId = decodedToken.userId;

      if (!recruiterId) {
        alert('Recruiter ID not found!');
        return;
      }

      // Generate a unique jobId
      const jobId = `JOB-${Date.now()}`;

      // Recruiter API (With Auth)
      const recruiterApiCall = axios.post(
        'https://itc-backend-241149078260.us-central1.run.app/api/recruiter/job',
        { ...formData, recruiterId, jobId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Public Job API (Without Auth)
      const publicJobApiCall = axios.post(
        'https://itc-backend-241149078260.us-central1.run.app/api/jobs/post-job',
        { ...formData, jobId, postedByRole: 'recruiter' }
      );

      // Execute both API calls in parallel
      const [recruiterRes, publicRes] = await Promise.all([
        recruiterApiCall,
        publicJobApiCall,
      ]);

      alert('✅ Job Posted Successfully!');
      console.log('Recruiter API Response:', recruiterRes.data);
      console.log('Public API Response:', publicRes.data);

      // Reset Form
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
    } catch (error) {
      console.error('❌ Error posting job:', error);
      alert(error.response?.data?.message || 'Failed to post job.');
    }
  };

  const handleExcelUpload = async () => {
  if (!excelFile) {
    alert('❌ Please select an Excel file first.');
    return;
  }

  const formData = new FormData();
  formData.append('file', excelFile);

  try {
    const res = await axios.post(
      'https://itc-backend-241149078260.us-central1.run.app/api/jobs/post-job',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    alert('✅ Excel Uploaded Successfully!');
    console.log(res.data);
    setExcelFile(null); // reset file
  } catch (error) {
    console.error('❌ Excel Upload Error:', error);
    alert(error.response?.data?.message || 'Excel upload failed.');
  }
};


  return (
    <>
      <RecruiterDashNav />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '20px',
          background: '#F8F8F8',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: '1000px',
            padding: '20px',
            borderRadius: '10px',
            background: '#fff',
          }}
        >
          <Grid container spacing={3}>
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  padding: '20px',
                  background: '#E7F0FA',
                  borderRadius: '10px',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Job Posting Tips
                </Typography>
                <Typography variant="body2">
                  ✅ Use clear and concise job titles.
                  <br />
                  ✅ Specify the department and location.
                  <br />
                  ✅ Provide detailed job descriptions.
                  <br />✅ Mention the required experience and salary.
                </Typography>
              </Box>

              
            </Grid>

            

            {/* Job Post Form */}
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    background: '#E7F0FA',
                    padding: '10px',
                    borderRadius: '5px',
                    mb: 2,
                    textAlign: 'center',
                  }}
                >
                  Job Details
                </Typography>

                <TextField
                  fullWidth
                  label="Job Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Number of Openings"
                  name="numberOfOpenings"
                  type="number"
                  value={formData.numberOfOpenings}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  select
                  label="Job Type"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  margin="normal"
                >
                  <MenuItem value="Full-time">Full-time</MenuItem>
                  <MenuItem value="Part-time">Part-time</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  label="Salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  select
                  label="Educational Qualification"
                  name="educationalQualification"
                  value={formData.educationalQualification}
                  onChange={handleChange}
                  margin="normal"
                >
                  <MenuItem value="SSC">SSC</MenuItem>
                  <MenuItem value="HSC">HSC</MenuItem>
                  <MenuItem value="Graduate">Graduate</MenuItem>
                  <MenuItem value="Post Graduate">Post Graduate</MenuItem>
                  <MenuItem value="Diploma">Diploma</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  select
                  label="Experience Required"
                  name="experienceRequired"
                  value={formData.experienceRequired}
                  onChange={handleChange}
                  margin="normal"
                >
                  <MenuItem value="Fresher">Fresher</MenuItem>
                  <MenuItem value="1-3 Years">1-3 Years</MenuItem>
                  <MenuItem value="3-5 Years">3-5 Years</MenuItem>
                  <MenuItem value="5+ Years">5+ Years</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  label="Job Location"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Job Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  select
                  label="Status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  margin="normal"
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="closed">Closed</MenuItem>
                </TextField>

                <Box mt={4}>
  <Typography variant="h6" sx={{ mb: 1 }}>
    Or Upload Excel File
  </Typography>
  <input
    type="file"
    accept=".xlsx, .xls"
    onChange={handleFileChange}
    style={{ marginBottom: '10px' }}
  />
  <Button
    variant="contained"
    color="secondary"
    onClick={handleExcelUpload}
    disabled={!excelFile}
  >
    Upload Excel
  </Button>
</Box>


                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, backgroundColor: '#007bff' }}
                  onClick={handleSubmit}
                >
                  Submit Job Post
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default JobPostForm;
