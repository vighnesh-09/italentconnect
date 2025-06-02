
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Grid,
//   Box,
//   Typography,
//   Button,
//   Container,
//   useMediaQuery,
// } from '@mui/material';
// import { LocationOn, Work, AttachMoney } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import jo1 from "../assets/jo1.svg"
// import jo2 from "../assets/jo2.svg"
// import jo3 from "../assets/jo3.svg"

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const isMobile = useMediaQuery('(max-width: 600px)');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get('https://itc-backend-241149078260.us-central1.run.app/api/jobs/all');
//         const activeJobs = response.data.filter(
//           (job) => job.status === 'active'
//         ); // ✅ Only active jobs
//         setJobs(activeJobs);
//       } catch (error) {
//         setError('Error fetching jobs');
//         console.error('Error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   if (loading) return <Typography align="center">Loading jobs...</Typography>;
//   if (error)
//     return (
//       <Typography align="center" color="error">
//         {error}
//       </Typography>
//     );

//   return (
//     <Container maxWidth="lg" sx={{ py: 5 }}>
     

//       <Grid container >
//         {jobs.map((job, index) => (
//           <Grid item xs={12} sm={6} md={5} key={index}>
//             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   p: 3,
//                   backgroundColor: '#fff',
//                   borderRadius: '16px',
                  
//                   transition: '0.3s',
                  
//                   height: '100%',
//                   width:"380px",
//                   border: '2px solid #e0e0e0',
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   fontWeight="bold"
//                   color="#192A56"
//                   fontFamily="Lora"
//                   sx={{ mb: 1 }}
//                 >
//                   {job.title}
//                 </Typography>
                
               
//                 <Box
//   sx={{
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     mb: 2,
//   }}
// >
//   {/* Experience Section (left side) */}
//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Box
//       component="img"
//       src={jo1} // Replace with actual path
//       alt="experience icon"
//       sx={{ width: 25, height: 25, mr: 1 }}
//     />
//     <Typography variant="body2" color="black" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="18px">
//       {job.experienceRequired || 'Fresher'}
//     </Typography>
//   </Box>

//   {/* Salary Section (right side) */}
//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Box
//       component="img"
//       src={jo3} // Replace with actual path
//       alt="salary icon"
//       sx={{ width: 25, height: 25, mr: 1 }}
//     />
//     <Typography variant="body2" color="black" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="18px" marginRight="10px">
//       {job.salary || 'Not mentioned'}
//     </Typography>
//   </Box>
// </Box>

//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//   <Box
//     component="img"
//     src={jo2} // Replace this with the correct path or import
//     alt="location icon"
//     sx={{ width: 25, height: 25, mr: 1 ,mb:1 }}
//   />
  
// </Box>

//                   <Typography variant="body2" color="black" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="18px" marginBottom="15px">
//                     {job.jobLocation || 'Location not specified'}
//                   </Typography>
//                 </Box>

                

//                 <Button
//                   variant="contained"
//                   fullWidth
//                   onClick={() => navigate('/jobdetails', { state: { job } })}
//                   sx={{
//                     backgroundColor: '#F6B93B',
//                     color: '#192A56',
//                     textTransform: 'none',
//                     fontSize:"17px",
//                     fontWeight:"600",
//                     transition: '0.3s',
//                     '&:hover': { backgroundColor: '#1565c0' },
//                     fontFamily:"Lora"
//                   }}
//                 >
//                   APPLY
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default JobList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import jo1 from "../assets/jo1.svg";
import jo2 from "../assets/jo2.svg";
import jo3 from "../assets/jo3.svg";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://itc-backend-241149078260.us-central1.run.app/api/jobs/all');
        const activeJobs = response.data.filter(
          (job) => job.status === 'active'
        );
        setJobs(activeJobs);
      } catch (error) {
        setError('Error fetching jobs');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <Typography align="center">Loading jobs...</Typography>;
  if (error)
    return (
      <Typography align="center" color="error">
        {error}
      </Typography>
    );

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid container spacing={8} sx={{ flexWrap: 'wrap' }}>
  {jobs.map((job, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        style={{ width: '100%' }}
      >
       <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 2, // reduced padding
    backgroundColor: '#fff',
    borderRadius: '16px',
    transition: '0.3s',
    minHeight: '200px', // Optional: minimum height to maintain base size
height: 'auto',     // Let height adjust based on content

    width: '105%',
    border: '2px solid #e0e0e0',
  }}
>

          <Typography
            variant="h6"
            fontWeight="bold"
            color="#192A56"
            fontFamily="Lora"
            sx={{ mb: 1 }}
          >
            {job.title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={jo1}
                alt="experience icon"
                sx={{ width: 25, height: 25, mr: 1 }}
              />
              <Typography
                variant="body2"
                color="black"
                fontFamily="Poppins, sans-serif"
                fontWeight="400"
                fontSize="18px"
              >
                {job.experienceRequired || 'Fresher'}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={jo3}
                alt="salary icon"
                sx={{ width: 25, height: 25, mr: 1 }}
              />
              <Typography
                variant="body2"
                color="black"
                fontFamily="Poppins, sans-serif"
                fontWeight="400"
                fontSize="18px"
                marginRight="10px"
              >
                {job.salary || 'Not mentioned'}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              component="img"
              src={jo2}
              alt="location icon"
              sx={{ width: 25, height: 25, mr: 1 }}
            />
            <Typography
              variant="body2"
              color="black"
              fontFamily="Poppins, sans-serif"
              fontWeight="400"
              fontSize="18px"
            >
              {job.jobLocation || 'Location not specified'}
            </Typography>
          </Box>

          <Box mt="auto">
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/jobdetails', { state: { job } })}
              sx={{
                backgroundColor: '#F6B93B',
                color: '#192A56',
                textTransform: 'none',
                fontSize: '17px',
                fontWeight: '600',
                transition: '0.3s',
                '&:hover': { backgroundColor: '#1565c0' },
                fontFamily: 'Lora',
              }}
            >
              APPLY
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  ))}
</Grid>

    </Container>
  );
};

export default JobList;

