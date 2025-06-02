// import React from "react";
// import { Box, Typography, Grid, Link } from "@mui/material";
// import blogimage from "../assets/blog.png";

// const blogs = [
//   {
//     image: blogimage,
//     title: "Business Meeting",
//     description:
//       "Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on hiring.",
//   },
//   {
//     image: blogimage,
//     title: "Team Collaboration",
//     description:
//       "Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on hiring.",
//   },
//   {
//     image: blogimage,
//     title: "Office Environment",
//     description:
//       "Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on hiring.",
//   },
// ];

// const BlogSpotSection = () => {
//   return (
//     <Box sx={{ px: 6, py: 8, textAlign: "center" }}>
//       {/* <Typography
//         sx={{
//           fontFamily: "Lora",
//           fontWeight: 700,
//           fontSize: "40px",
//           textTransform: "uppercase",
//           color: "#192A56",
//         }}
//       >
//         <span style={{ color: "#F6B93B" }}>Blog</span> Spot
//       </Typography>

//       <Typography
//         sx={{

//           maxWidth: 800,
//           mx: "auto",
//           mt: 2,
//           fontFamily:'Poppins, sans-serif',
//           fontSize:"18px",
//           fontWeight:"500"
//         }}
//       >
//         Your trusted partner in finding the right talent or your dream role.
//         Explore our blog for valuable advice on hiring and career advancement.
//       </Typography>

//       <Grid container spacing={4} justifyContent="center" mt={4}>
//         {blogs.map((blog, index) => (
//           <Grid item key={index}>
//             <Box sx={{ width: 392 }}>
//               <Box
//                 component="img"
//                 src={blog.image}
//                 alt={blog.title}
//                 sx={{ width: "100%", height: 249, objectFit: "cover" }}
//               />
//               <Typography
//                 sx={{
//                   fontFamily: "Lora",
//                   fontWeight: 600,
//                   fontSize: "30px",
//                   mt: 2,

//                 }}
//               >
//                 {blog.title}
//               </Typography>
//               <Typography
//                 sx={{
//                  fontFamily: 'Poppins, sans-serif',
//                   fontSize:"18px",
//                   fontWeight:"500",

//                   textAlign: "justify",
//                   mt: 1,
//                 }}
//               >
//                 {blog.description}
//               </Typography>
//               <Link
//                 href="#"
//                 underline="none"
//                 sx={{
//                   fontFamily: "Lora",
//                   fontWeight: 600,
//                   fontSize: "20px",
//                   display: "inline-block",
//                   mt: 2,
//                   color: "#F6B93B",
//                 }}
//               >
//                 Read More →
//               </Link>
//             </Box>
//           </Grid>
//         ))}
//       </Grid> */}
//       <Typography
//   sx={{
//     fontFamily: "Lora",
//     fontWeight: 700,
//     fontSize: "40px",
//     textTransform: "uppercase",
//     color: "#192A56",
//   }}
// >
//   <span style={{ color: "#F6B93B" }}>Blog</span> Spot
// </Typography>

// <Typography
//   sx={{
//     maxWidth: 800,
//     mx: "auto",
//     mt: 1, // changed from mt: 2 to mt: 1
//     fontFamily: 'Poppins, sans-serif',
//     fontSize: "18px",
//     fontWeight: "500",
//     mb:-5
//   }}
// >
//   Your trusted partner in finding the right talent or your dream role.
//   Explore our blog for valuable advice on hiring and career advancement.
// </Typography>

// <Grid container spacing={4} justifyContent="center" mt={4}>
//   {blogs.map((blog, index) => (
//     <Grid item key={index}>
//       <Box sx={{ width: 392 }}>
//         <Box
//           component="img"
//           src={blog.image}
//           alt={blog.title}
//           sx={{ width: "100%", height: 249, objectFit: "cover" }}
//         />
//         <Typography
//           sx={{
//             fontFamily: "Lora",
//             fontWeight: 600,
//             fontSize: "30px",
//             mt: 1, // reduced margin between image and title
//           }}
//         >
//           {blog.title}
//         </Typography>
//         <Typography
//           sx={{
//             fontFamily: 'Poppins, sans-serif',
//             fontSize: "18px",
//             fontWeight: "500",
//             textAlign: "justify",
//             mt: 1,
//           }}
//         >
//           {blog.description}
//         </Typography>
//         <Box sx={{ textAlign: "left", mt: 2 }}>
//           <Link
//             href="#"
//             underline="none"
//             sx={{
//               fontFamily: "Lora",
//               fontWeight: 600,
//               fontSize: "20px",
//               color: "#F6B93B",
//               display: "inline-block",
//             }}
//           >
//             Read More →
//           </Link>
//         </Box>
//       </Box>
//     </Grid>
//   ))}
// </Grid>
//     </Box>
//   );
// };

// export default BlogSpotSection;
// import React from "react";
// import { Box, Typography, Grid, Link, useMediaQuery } from "@mui/material";
// import blogimage from "../assets/blog.png";

// const blogs = [
//   {
//     image: blogimage,
//     title: "Business Meeting",
//     description:
//       "Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on hiring.",
//   },
//   {
//     image: blogimage,
//     title: "Team Collaboration",
//     description:
//       "Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on hiring.",
//   },
//   {
//     image: blogimage,
//     title: "Office Environment",
//     description:
//       "Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on hiring.",
//   },
// ];

// const BlogSpotSection = () => {
//   const isMobile = useMediaQuery("(max-width:600px)");

//   return (
//     <Box sx={{ px: isMobile ? 2 : 6, py: 8, textAlign: "center" }}>
//       {/* Title */}
//       <Typography
//         sx={{
//           fontFamily: "Lora",
//           fontWeight: 700,
//           fontSize: "40px",
//           textTransform: "uppercase",
//           color: "#192A56",
//         }}
//       >
//         <span style={{ color: "#F6B93B" }}>Blog</span> Spot
//       </Typography>

//       {/* Subtext */}
//       <Typography
//         sx={{
//           maxWidth: 800,
//           mx: "auto",
//           mt: 2,
//           fontFamily: "Poppins, sans-serif",
//           fontSize: "18px",
//           fontWeight: "500",
//           mb: isMobile ? 2 : -5,
//         }}
//       >
//         Your trusted partner in finding the right talent or your dream role.
//         Explore our blog for valuable advice on hiring and career advancement.
//       </Typography>

//       {/* Blog cards */}
//       <Grid container spacing={4} justifyContent="center" mt={4}>
//         {blogs.map((blog, index) => (
//           <Grid item key={index} xs={12} sm={12} md="auto">
//             <Box sx={{ width: isMobile ? "100%" : 392 }}>
//               <Box
//                 component="img"
//                 src={blog.image}
//                 alt={blog.title}
//                 sx={{
//                   width: "100%",
//                   height: 249,
//                   objectFit: "cover",
//                   borderRadius: 2,
//                 }}
//               />
//               <Typography
//                 sx={{
//                   fontFamily: "Lora",
//                   fontWeight: 600,
//                   fontSize: "30px",
//                   mt: 2,
//                 }}
//               >
//                 {blog.title}
//               </Typography>
//               <Typography
//                 sx={{
//                   fontFamily: "Poppins, sans-serif",
//                   fontSize: "18px",
//                   fontWeight: "500",
//                   textAlign: "justify",
//                   mt: 1,
//                 }}
//               >
//                 {blog.description}
//               </Typography>
//               <Box sx={{ textAlign: "left", mt: 2 }}>
//                 <Link
//                   href="#"
//                   underline="none"
//                   sx={{
//                     fontFamily: "Lora",
//                     fontWeight: 600,
//                     fontSize: "20px",
//                     color: "#F6B93B",
//                     display: "inline-block",
//                   }}
//                 >
//                   Read More →
//                 </Link>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default BlogSpotSection;

import React from "react";
import { Box, Typography, Grid, Link, useMediaQuery } from "@mui/material";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

const blogs = [
  {
    image: blog1,
    title: "Business Meeting",
    description:
      "Business meetings play a key role in aligning goals between clients and internal teams. They serve as a space for strategic decision-making and setting project direction.",
  },
  {
    image: blog2,
    title: "Team Collaboration",
    description:
      " Team collaboration is the backbone of success at ITC.We ensure that every talent we onboard complements our culture of unity and innovation.This collaborative spirit drives ITC toward excellence and growth. ",
  },
  {
    image: blog3,
    title: "Office Environment",
    description:
      "A positive office environment reflects a company’s values and directly impacts employee satisfaction. Modern workspaces are designed with comfort and productivity in mind.",
  },
];

const BlogSpotSection = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ px: isMobile ? 2 : 6, py: 8, textAlign: "center" }}>
      {/* Title */}
      <Typography
        sx={{
          fontFamily: "Lora",
          fontWeight: 700,
          fontSize: "40px",
          textTransform: "uppercase",
          color: "#192A56",
        }}
      >
        <span style={{ color: "#F6B93B" }}>Blog</span> Spot
      </Typography>

      {/* Subtext */}
      <Typography
        sx={{
          maxWidth: 800,
          mx: "auto",
          mt: 2,
          fontFamily: "Poppins, sans-serif",
          fontSize: { xs: "16px", sm: "18px", md: "18px" },
          fontWeight: "500",
          mb: isMobile ? 2 : -5,
        }}
      >
        Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on
        hiring and career advancement.
      </Typography>

      {/* Blog cards */}
      <Grid container spacing={4} justifyContent="center" mt={4}>
        {blogs.map((blog, index) => (
          <Grid item key={index} xs={12} sm={12} md="auto">
            <Box sx={{ width: isMobile ? "100%" : 392 }}>
              <Box
                component="img"
                src={blog.image}
                alt={blog.title}
                sx={{
                  width: "100%",
                  height: 249,
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Lora",
                  fontWeight: 600,
                  fontSize: "30px",
                  mt: 2,
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: { xs: "16px", sm: "18px", md: "18px" },
                  fontWeight: { xs: "400", sm: "500", md: "500" },
                  textAlign: "justify",
                  mt: 1,
                }}
              >
                {blog.description}
              </Typography>
              <Box sx={{ textAlign: "left", mt: 2 }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontFamily: "Lora",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#F6B93B",
                    display: "inline-block",
                  }}
                >
                  Read More →
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSpotSection;
