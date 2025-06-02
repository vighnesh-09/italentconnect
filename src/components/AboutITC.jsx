// import React from 'react';
// import { Box, Typography, Button, Grid, Container } from '@mui/material';
// import teamImage from '../assets/ab.png';

// const AboutITC = () => {
//   return (
//     <Box sx={{ py: { xs: 6, md: 12 }, backgroundColor: '#fff' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={8} alignItems="center">
//           {/* Left Side - Images */}
//           <Grid item xs={12} md={6}>
//             <Box
//               component="img"
//               src={teamImage}
//               alt="Team Meeting"
//               sx={{
//                 width: { xs: '100%', md: '590px' },
//                 height: { xs: 'auto', md: '501.5px' },
//                 // border: '4px solid #fff',
//                 // boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                 // borderRadius: '10px',
//               }}
//             />
//           </Grid>

//           {/* Right Side - Content */}
//           <Grid item xs={12} md={6}>
//             <Box sx={{ pl: { md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
//               <Typography
//                 sx={{
//                   color: '#FBB040',
//                   fontWeight: 600,
//                   mb: 1.5,
//                   fontFamily: 'Poppins',
//                   fontSize: { xs: '20px', md: '24px' },
//                 }}
//               >
//                 ABOUT ITC
//               </Typography>

//               <Typography
//                 sx={{
//                   color: '#192A56',
//                   fontWeight: 700,
//                   mb: 3.5,
//                   fontSize: { xs: '1.8rem', md: '2.5rem' },
//                   lineHeight: 1.2,
//                   fontFamily: 'Lora',
//                 }}
//               >
//                 One Stop Solution For All Your HR Needs
//               </Typography>

//               <Typography
//                 sx={{
//                   color: '#322E2E',
//                   mb: 5,
//                    fontFamily: 'Poppins, sans-serif', 
//                   fontSize: "18px", 
//                   fontWeight: "500",
                  
//                   lineHeight: 1.6,
//                   maxWidth: '100%',
//                 }}
//               >
//                 "Your One-Stop HR Solution – From Talent Acquisition to Employee Engagement, We Streamline Your Workforce for Success!"
//               </Typography>

//               <Grid container spacing={4} sx={{ mb: 5 }}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: '#F6B93B',
//                       fontWeight: 600,
//                       mb: 1.5,
//                       fontSize: { xs: '1rem', md: '1.25rem' },
//                       fontFamily:"Lora"
//                     }}
//                   >
//                     Powerful Partners
//                   </Typography>
//                   <Typography
//                     sx={{
//                       color: '#322E2E',
//                       lineHeight: 1.2,
//                       fontFamily: 'Poppins, sans-serif', fontSize: "18px", fontWeight: "500"
//                     }}
//                   >
//                     "Empowering Success Through Strong Partnerships."
//                   </Typography>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: '#F6B93B',
//                       fontWeight: 600,
//                       mb: 1.5,
//                       fontSize: { xs: '1rem', md: '1.25rem' },
//                        fontFamily:"Lora"
//                     }}
//                   >
//                     Strategic Planning
//                   </Typography>
//                   <Typography
//                     sx={{
//                       color: '#322E2E',
//                       lineHeight: 1.2,
//                       fontFamily: 'Poppins, sans-serif', fontSize: "18px", fontWeight: "500"
                    
//                     }}
//                   >
//                     "Strategic Planning: Charting the Path to Success."
//                   </Typography>
//                 </Grid>
//               </Grid>

//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: '#192A56',
//                   color: '#fff',
//                   px: 3,
//                   py: 1.2,
//                   fontFamily:"Lora",
//                   fontSize: '1rem',
//                   borderRadius: '10px',
//                   '&:hover': {
//                     backgroundColor: '#192A56',
//                   },
//                 }}
//               >
//                 Contact Us
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutITC;

import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import teamImage from '../assets/ab.png';

const AboutITC = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Side - Images */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={teamImage}
              alt="Team Meeting"
              sx={{
                width: { xs: '100%', md: '100%' }, // Changed to be responsive
                height: { xs: 'auto', md: '501.5px' },
                maxWidth: { md: '597px' }, // Added max-width
                display: 'block', // Added to prevent spacing issues
              }}
            />
          </Grid>

          {/* Right Side - Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              pl: { xs: 0, md: 4 }, // Increased padding for laptop
              pr: { md: 2 }, // Added right padding
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { md: '100%' } // Ensure content doesn't overflow
            }}>
              <Typography
                sx={{
                  color: '#F6B93B',
                  fontWeight: 600,
                  mb: 0.1,
                  fontFamily: 'Lora',
                  fontSize: { xs: '16px', md: '24px' },
                }}
              >
                ABOUT ITC
              </Typography>

              <Typography
                sx={{
                  color: '#192A56',
                  fontWeight: 700,
                  mb: { xs: 1, md: 2 },
                  fontSize: { xs: '1.4rem', md: '2.5rem' },
                  lineHeight: 1.2,
                  fontFamily:"Lora"
                }}
              >
                One Stop Solution For All Your HR Needs
              </Typography>

              <Typography
                sx={{
                  color: '#322E2E',
                  mb: { xs: 0.5, md: 1 },
                  fontFamily: 'Poppins, sans-serif', 
                  fontSize: { xs: "14px", md: "18px" },
                  fontWeight: "500",
                  lineHeight: 1.6,
                  maxWidth: '100%',
                }}
              >
                "Your One-Stop HR Solution – From Talent Acquisition to Employee Engagement, We Streamline Your Workforce for Success!"
              </Typography>

              <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 3, md: 5 } }}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#F6B93B',
                      fontWeight: 600,
                      mb: { xs: 1, md: 1.5 },
                      fontSize: { xs: "18px", md: "24px" },
                      fontFamily:"Lora"
                    }}
                  >
                    Powerful Partners
                  </Typography>
                  <Typography
                    sx={{
                      color: '#322E2E',
                      lineHeight: 1.1,
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "500"
                    }}
                  >
                    "Empowering Success Through Strong Partnerships."
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#F6B93B',
                      fontWeight: 600,
                      mb: { xs: 1, md: 1.5 },
                      fontSize: { xs: "18px", md: "24px" },
                      fontFamily:"Lora"
                    }}
                  >
                    Strategic Planning
                  </Typography>
                  <Typography
                    sx={{
                      color: '#322E2E',
                      lineHeight: 1.2,
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: { xs: "14px", md: "18px" },
                      fontWeight: "500"
                    }}
                  >
                    "Strategic Planning: Charting the Path to Success."
                  </Typography>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#192A56',
                  color: '#fff',
                  px: { xs: 1.5, md: 2 },
                  py: { xs: 0.3, md: 0.5 },
                  fontFamily:"Lora",
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  borderRadius: '8px',
                  mb: { xs: 2, md: 3 },
                  '&:hover': {
                    backgroundColor: '#192A56',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutITC;

