// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import whoare1 from "../assets/whoare1.png";
// import whoare2 from "../assets/whoare2.png";

// const StyledImage = styled("img")(({ theme }) => ({
//   width: "100%",
//   maxWidth: "400px", // Reduced from 500px
//   height: "auto",
//   display: "block",
//   margin: "0 auto",
//   [theme.breakpoints.down("sm")]: {
//     maxWidth: "90%",
//   },
// }));

// const TopLeftCorner = styled(Box)(({ theme }) => ({
//   position: "relative",
//   display: "inline-block",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "170px",
//     height: "8px",
//     backgroundColor: "#F6B93B",
//   },
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "8px",
//     height: "188px",
//     backgroundColor: "#F6B93B",
//   },
// }));

// const BottomRightCorner = styled(Box)(({ theme }) => ({
//   position: "relative",
//   display: "inline-block",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     width: "160px",
//     height: "8px",
//     backgroundColor: "#F6B93B",
//   },
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     width: "8px",
//     height: "170px",
//     backgroundColor: "#F6B93B",
//   },
// }));

// const Highlight = styled("span")({
//   color: "#F6B93B",
//   fontWeight: "bold",
// });

// const Bold = styled("span")({
//   color: "#192A56",
//   fontWeight: "bold",
// });

// const Whoweare = () => {
//   return (
//     <Box sx={{ maxWidth: 1394, mx: "auto", p: { xs: 1, sm: 2, md: 3 } }}>
//       <Paper
//         sx={{
//           p: { xs: 1.5, sm: 2, md: 3 },
//           boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
//           color: "#322E2E",
//         }}
//       >
//         <Typography 
//           variant="h4" 
//           gutterBottom 
//           sx={{ 
//             fontFamily: "Lora",
//             fontSize: { xs: "24px", sm: "28px", md: "34px" }
//           }}
//         >
//           <Highlight>WHO</Highlight> <Bold>WE ARE</Bold>
//         </Typography>

//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontFamily: "Poppins, sans-serif",
//             fontSize: { xs: "14px", sm: "16px", md: "17px" },
//             fontWeight: "400",
//             lineHeight: 1.6,
//           }}
//         >
//           Ideal Talent Connect is your gateway to career success. We are a dynamic placement and recruitment company dedicated to connecting talented professionals with leading organizations across India and beyond. Whether you're a fresh graduate seeking your first opportunity or an experienced professional ready for your next big move, Ideal Talent Connect is the place where your journey begins.
//         </Typography>

//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontFamily: "Poppins, sans-serif",
//             fontSize: { xs: "14px", sm: "16px", md: "17px" },
//             fontWeight: "400",
//             lineHeight: 1.6,
//           }}
//         >
//           We partner with top MNCs and fast-growing companies to offer a wide range of career opportunities across industries. Our goal is simple: to help people find meaningful work, and help companies find exceptional talent.
//         </Typography>

//         <Typography
//           variant="body1"
//           paragraph
//           sx={{
//             fontFamily: "Poppins, sans-serif",
//             fontSize: { xs: "14px", sm: "16px", md: "17px" },
//             fontWeight: "400",
//             lineHeight: 1.6,
//           }}
//         >
//           Our secret? A deep understanding of people, industries, and what it takes to make the perfect match. With a focus on personalized guidance, fast turnarounds, and quality placements, we make job hunting smoother, smarter, and more successful.
//         </Typography>

//         {/* MISSION SECTION */}
//         <Grid 
//           container 
//           spacing={{ xs: 2, sm: 3, md: 4 }}
//           mt={{ xs: 2, sm: 3, md: 4 }} 
//           mb={{ xs: 2, sm: 3, md: 4 }}
//           alignItems="center"
//         >
//           <Grid item xs={12} md={5}>
//             <TopLeftCorner>
//               <StyledImage src={whoare1} alt="Teamwork" />
//             </TopLeftCorner>
//           </Grid>
//           <Grid item xs={12} md={7}>
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontFamily: "Lora",
//                 fontWeight: "700",
//                 fontSize: { xs: "22px", sm: "26px", md: "32px" },
//                 mt: { xs: 2, md: 0 }
//               }}
//             >
//               <Highlight>OUR</Highlight> <Bold>MISSION</Bold>
//             </Typography>
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontSize: { xs: "14px", sm: "15px", md: "16px" },
//                 fontWeight: "400",
//                 lineHeight: 1.6,
//               }}
//             >
//               To help individuals build rewarding careers by connecting them with the right job opportunities, across industries and experience levels. To provide companies with reliable, high-quality talent that fits their culture and drives their growth.
//             </Typography>
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontSize: { xs: "14px", sm: "15px", md: "16px" },
//                 fontWeight: "400",
//                 lineHeight: 1.6,
//               }}
//             >
//               To deliver recruitment solutions that are fast, personalized, and built on long-term partnerships. To make the hiring process human, simple, and successful—for both job seekers and employers.
//             </Typography>
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontSize: { xs: "14px", sm: "15px", md: "16px" },
//                 fontWeight: "400",
//                 lineHeight: 1.6,
//               }}
//             >
//               Because at Ideal Talent Connect, “Where Talent Meets Opportunity” is more than a tagline—it's our promise.
//             </Typography>
//           </Grid>
//         </Grid>

//         {/* VISION SECTION */}
//         <Grid 
//           container 
//           spacing={{ xs: 2, sm: 3, md: 4 }}
//           mt={{ xs: 2, sm: 3, md: 4 }}
//           alignItems="center"
//         >
//           <Grid 
//             item 
//             xs={12} 
//             md={7} 
//             sx={{ 
//               order: { xs: 2, md: 1 },
//               pl: { xs: 2, md: 4 },
//               pr: { xs: 2, md: 3 }
//             }}
//           >
//             <Typography
//               variant="h4"
//               gutterBottom
//               sx={{
//                 fontFamily: "Lora",
//                 fontSize: { xs: "22px", sm: "26px", md: "32px" },
//                 mt: { xs: 2, md: 0 }
//               }}
//             >
//               <Highlight>OUR</Highlight> <Bold>VISION</Bold>
//             </Typography>
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontSize: { xs: "14px", sm: "15px", md: "16px" },
//                 fontWeight: "400",
//                 lineHeight: 1.6,
//               }}
//             >
//               To be the most trusted career and recruitment partner - a place where every job seeker finds the right opportunity and every business finds the right talent.
//             </Typography>
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{
//                 fontFamily: "Poppins, sans-serif",
//                 fontSize: { xs: "14px", sm: "15px", md: "16px" },
//                 fontWeight: "400",
//                 lineHeight: 1.6,
//               }}
//             >
//               We envision a future where people and companies grow together through meaningful connections, driven by trust, innovation, and impact.
//             </Typography>
//           </Grid>
//           <Grid 
//             item 
//             xs={12} 
//             md={5} 
//             sx={{ 
//               order: { xs: 1, md: 2 }
//             }}
//           >
//             <BottomRightCorner>
//               <StyledImage src={whoare2} alt="Vision" />
//             </BottomRightCorner>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//   );
// };

// export default Whoweare;



import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import whoare1 from "../assets/whoare1.png";
import whoare2 from "../assets/whoare2.png";

// Styled image
const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "400px", // Reduced from 500px
  height: "auto",
  display: "block",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
  },
}));

// Top-left orange corner (for whoare1)
const TopLeftCorner = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "170px",
    height: "8px",
    backgroundColor: "#F6B93B",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "8px",
    height: "188px",
    backgroundColor: "#F6B93B",
  },
}));

// Bottom-right orange corner (for whoare2)
const BottomRightCorner = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "160px",
    height: "8px",
    backgroundColor: "#F6B93B",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "8px",
    height: "170px",
    backgroundColor: "#F6B93B",
  },
}));

const Highlight = styled("span")({
  color: "#F6B93B",
  fontWeight: "bold",
});

const Bold = styled("span")({
  color: "#192A56",
  fontWeight: "bold",
});

const Whoweare = () => {
  return (
    <Box sx={{ 
      maxWidth: 1394, 
      mx: "auto", 
      p: { xs: 1, sm: 2, md: 3 } // Responsive padding
    }}>
      <Paper
        sx={{
          p: { xs: 1.5, sm: 2, md: 3 }, // Responsive padding
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          color: "#322E2E",
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontFamily: "Lora",
            fontSize: { xs: "24px", sm: "28px", md: "34px" } // Responsive font size
          }}
        >
          <Highlight>WHO</Highlight> <Bold>WE ARE</Bold>
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "17px" }, // Reduced font sizes
            fontWeight: "400", // Reduced from 500
            lineHeight: 1.6,
          }}
        >
          Ideal Talent Connect is your gateway to career success. We are a dynamic placement and recruitment company dedicated to connecting talented professionals with leading organizations across India and beyond. Whether you're a fresh graduate seeking your first opportunity or an experienced professional ready for your next big move, Ideal Talent Connect is the place where your journey begins.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "17px" }, // Reduced font sizes
            fontWeight: "400", // Reduced from 500
            lineHeight: 1.6,
          }}
        >
          We partner with top MNCs and fast-growing companies to offer a wide range of career opportunities across industries. Our goal is simple: to help people find meaningful work, and help companies find exceptional talent.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "17px" }, // Reduced font sizes
            fontWeight: "400", // Reduced from 500
            lineHeight: 1.6,
          }}
        >
          Our secret? A deep understanding of people, industries, and what it takes to make the perfect match. With a focus on personalized guidance, fast turnarounds, and quality placements, we make job hunting smoother, smarter, and more successful.
        </Typography>

        {/* MISSION SECTION */}
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }} // Responsive spacing
          mt={{ xs: 2, sm: 3, md: 4 }} 
          mb={{ xs: 2, sm: 3, md: 4 }}
          alignItems="center"
        >
          <Grid item xs={12} md={5}>
            <TopLeftCorner>
              <StyledImage src={whoare1} alt="Teamwork" />
            </TopLeftCorner>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Lora",
                fontWeight: "700", // Reduced from 800
                fontSize: { xs: "22px", sm: "26px", md: "32px" }, // Responsive font size
                mt: { xs: 2, md: 0 } // Add margin top on mobile
              }}
            >
              <Highlight>OUR</Highlight> <Bold>MISSION</Bold>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: "400",
                lineHeight: 1.6,
              }}
            >
              To help individuals build rewarding careers by connecting them with the right job opportunities, across industries and experience levels. To provide companies with reliable, high-quality talent that fits their culture and drives their growth.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: "400",
                lineHeight: 1.6,
              }}
            >
              To deliver recruitment solutions that are fast, personalized, and built on long-term partnerships. To make the hiring process human, simple, and successful—for both job seekers and employers.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: "400",
                lineHeight: 1.6,
              }}
            >
              Because at Ideal Talent Connect, “Where Talent Meets Opportunity” is more than a tagline—it's our promise.
            </Typography>
          </Grid>
        </Grid>

        {/* VISION SECTION */}
        <Grid 
          container 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          mt={{ xs: 2, sm: 3, md: 4 }}
          alignItems="center"
        >
          <Grid 
            item 
            xs={12} 
            md={7} 
            sx={{ 
              order: { xs: 2, md: 1 }, // Stack order for mobile
              pl: { xs: 2, md: 4 },
              pr: { xs: 2, md: 3 }
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Lora",
                fontSize: { xs: "22px", sm: "26px", md: "32px" },
                mt: { xs: 2, md: 0 }
              }}
            >
              <Highlight>OUR</Highlight> <Bold>VISION</Bold>
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: "400",
                lineHeight: 1.6,
              }}
            >
              To be the most trusted career and recruitment partner - a place where every job seeker finds the right opportunity and every business finds the right talent.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                fontWeight: "400",
                lineHeight: 1.6,
              }}
            >
              We envision a future where people and companies grow together through meaningful connections, driven by trust, innovation, and impact.
            </Typography>
          </Grid>
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              order: { xs: 1, md: 2 } // Stack order for mobile
            }}
          >
            <BottomRightCorner>
              <StyledImage src={whoare2} alt="Vision" />
            </BottomRightCorner>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Whoweare;

