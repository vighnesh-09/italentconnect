// import React from "react";
// import { Box, Typography, Container, Grid } from "@mui/material";
// import core1 from "../assets/core1.svg"
// import core2 from "../assets/core2.svg"
// import core3 from "../assets/core3.svg"


// const coreValues = [
//   {
//     title: "Ethics",
//     description: "Without ethics, there can be no trust, and without trust, there cannot be a relationship.",
//     icon: <img src={core1} alt="Ethics" style={{ width: 50, height: 50 }} />
//   },
//   {
//     title: "Teamwork",
//     description: "Our Team, we thrive in an environment of accountability and collaboration.",
//     icon: <img src={core2} alt="Teamwork" style={{ width: 50, height: 50 }} />
//   },
//   {
//     title: "Communication",
//     description: "We actively listen to the needs and concerns of our clients to foster strong, lasting relationships.",
//     icon: <img src={core3} alt="Communication" style={{ width: 50, height: 50 }} />
//   }
// ];

// const CoreValues = () => {
//   return (
//     <Box sx={{ bgcolor: "#fff", py: 10 }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           sx={{
//             mb: 3,
//             mt: "-50px",
//             color: "#192A56",
//             fontFamily:"Lora",
//             fontWeight: 600,
//             "& .highlight": {
//               color: "#F6B93B"
//             },
//             textAlign: "left", // Align the heading to the left
//           }}
//         >
//           <span className="highlight">OUR</span> CORE VALUES
//         </Typography>

//         <Typography
//           sx={{
//             mb: 6,
//             color: "black",
//             maxWidth: 800,
//             mx: "auto",
//             textAlign: "left",
//             marginLeft:"10px" ,// Align the description to the left
//             fontFamily: 'Poppins, sans-serif',fontSize:"18px",fontWeight:"500"
//           }}
//         >
//           We understand the impact of meeting your executive search needs. Our ability to deliver results to you, your company, and your stakeholders has made us a leader in the industry.
//         </Typography>

//         <Grid container spacing={4}>
//           {coreValues.map((value, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <Box
//                 sx={{
//                   bgcolor: '#192A56',
//                   borderRadius: 2,
//                   p: 3,
//                   height: { xs: 220, sm: 250, md: 170 },  // Adjust height for responsiveness
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center', // To center content vertically
//                   color: 'white',
//                   marginTop:"30px"
//                 }}
//               >
//                 <Box
//                   sx={{
//                     bgcolor: '#F6B93B',
//                     width: 184,
//                     height:122,
//                     borderRadius: 2,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginBottom: 3,
//                     marginTop: "-70px", // Pull the icon up to overlap with the box's top border
//                   }}
//                 >
//                   <Typography sx={{ fontSize: '3rem' }}>
//                     {value.icon}
//                   </Typography>
//                 </Box>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 2,
//                     fontWeight: 600,
//                     color: '#F6B93B', 
//                   marginTop:"10px"

//                   }}
//                 >
//                   {value.title}
//                 </Typography>
//                 <Typography sx={{ opacity: 0.9 , fontFamily: 'Poppins, sans-serif',fontSize:"18px",fontWeight:"500"}}>
//                   {value.description}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default CoreValues;





import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import core1 from "../assets/core1.svg"
import core2 from "../assets/core2.svg"
import core3 from "../assets/core3.svg"


const coreValues = [
  {
    title: "Ethics",
    description: "Without ethics, there can be no trust, and without trust, there cannot be a relationship.",
    icon: <img src={core1} alt="Ethics" style={{ width: 60, height: 60 }} />
  },
  {
    title: "Teamwork",
    description: "Our Team, we thrive in an environment of accountability and collaboration.",
    icon: <img src={core2} alt="Teamwork" style={{ width: 60, height: 60 }} />
  },
  {
    title: "Communication",
    description: "We actively listen to the needs and concerns of our clients to foster strong, lasting relationships.",
    icon: <img src={core3} alt="Communication" style={{ width: 60, height: 60 }} />
  }
];

const CoreValues = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            mt: "-50px",
            color: "#192A56",
            fontFamily: "Lora",
            fontWeight: 600,
            "& .highlight": {
              color: "#F6B93B"
            },
            textAlign: "left",
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }
          }}
        >
          <span className="highlight">OUR</span> CORE VALUES
        </Typography>

        <Typography
          sx={{
            mb: { xs: 4, md: 6 },
            color: "#322E2E",
            maxWidth: 1100,
            mx: "auto",
            textAlign: "left",
            marginLeft: { xs: "5px", md: "10px" },
            fontFamily: 'Poppins, sans-serif',
            fontSize: { xs: '15px', sm: '16px', md: '16px' },
            fontWeight: "500",
            lineHeight: 1.6
          }}
        >
          We understand the impact of meeting your executive search needs. Our ability to deliver results to you, your company, and your stakeholders has made us a leader in the industry.
        </Typography>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {coreValues.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  bgcolor: '#192A56',
                  borderRadius: 2,
                  p: { xs: 2.5, md: 3 },
                  height: { xs: 'auto', sm: 250, md: 180 },
                  minHeight: { xs: 220, sm: 250, md: 180 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  color: 'white',
                  marginTop: { xs: "35px", md: "40px" }
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#F6B93B',
                    width: { xs: 100, md: 110 },
                    height: { xs: 100, md: 110 },
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 2,
                    marginTop: "-70px",
                  }}
                >
                  <Typography sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    '& img': {
                      width: { xs: 60, md: 60 },
                      height: { xs: 60, md: 60 }
                    }
                  }}>
                    {value.icon}
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    mb: { xs: 1.5, md: 2 },
                    fontWeight: 800,
                    color: '#F6B93B',
                    marginTop: "10px",
                    fontFamily: "Lora",
                    fontSize: { xs: '1.25rem', sm: '1.35rem', md: '1.5rem' }
                  }}
                >
                  {value.title}
                </Typography>
                <Typography sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: { xs: '14px', sm: '15px', md: '16px' },
                  fontWeight: "500",
                  lineHeight: 1.6,
                  opacity: 0.9
                }}>
                  {value.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreValues;

