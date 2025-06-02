// import React, { useEffect, useRef } from "react";
// import { Box, Typography, Container } from "@mui/material";

// const logos = [
//   { name: "aether", image: "aether.jpg" },
//   { name: "aether", image: "aether.jpg" },
//   { name: "aether", image: "aether.jpg" },
//   { name: "aether", image: "aether.jpg" },
// ];

// const TestimonialPage = () => {
//   const scrollRef = useRef(null);
//   const scrollSpeed = 0.5;

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollPosition = 0;

//     const scrollAnimation = () => {
//       scrollPosition += scrollSpeed;
//       if (scrollPosition >= scrollContainer.scrollWidth / 2) {
//         scrollPosition = 0;
//       }
//       scrollContainer.scrollLeft = scrollPosition;
//       requestAnimationFrame(scrollAnimation);
//     };

//     requestAnimationFrame(scrollAnimation);

//     return () => cancelAnimationFrame(scrollAnimation);
//   }, []);

//   return (
//     <Box sx={{ py: 10, backgroundColor: "#fff", overflow: "hidden" }}>
//       <Container>
//         {/* Heading */}
//         <Typography
//           variant="h4"
//           sx={{
//             fontFamily: "Lora, serif",
//             textAlign: "center",
//             mb: 1,
//             color: "#F6B93B",
//             fontWeight: 600,
//           }}
//         >
//           OUR{" "}
//           <Box component="span" sx={{ color: "#192A56" }}>
//             CLIENTS
//           </Box>
//         </Typography>

//         {/* Subtitle */}
//         <Typography
//           variant="body1"
//           sx={{
            
//             textAlign: "center",
//             mb: 6,
//             color: "322E2E",
//             maxWidth: "700px",
//              mx: "auto",
//             fontFamily: 'Poppins, sans-serif',fontSize:"18px",fontWeight:"500"
           
//           }}
//         >
//           Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on hiring and career advancement.
//         </Typography>

//         {/* Logo Carousel */}
//         <Box
//           ref={scrollRef}
//           sx={{
//             display: "flex",
//             gap: 3,
//             overflow: "hidden",
//             whiteSpace: "nowrap",
//             width: "100%",
//           }}
//         >
//           {[...logos, ...logos].map((logo, index) => (
//             <Box
//               key={index}
//               sx={{
//                 backgroundColor: "#f5f6f8",
//                 borderRadius: "12px",
//                 minWidth: "180px",
//                 py: 3,
//                 px: 5,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={logo.image}
//                 alt={logo.name}
//                 sx={{
//                   width: "60px",
//                   height: "60px",
//                   objectFit: "contain",
//                   mb: 1,
//                 }}
//               />
//               <Typography
//                 sx={{
//                   fontSize: "1.3rem",
//                   fontWeight: 500,
//                   color: "#000",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 {logo.name}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default TestimonialPage;


import React, { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const logos = [
  {  image: "ather1.svg" },
  {  image: "orange3.svg" },
  {  image: "apple4.svg" },
  {  image: "balaji2.svg" },
  {  image: "protrack7.svg" },
  { image: "omdev5.svg" },
  {  image: "anthem8.svg" },
  {  image: "pleadmaster6.svg" },
];

const TestimonialPage = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const scrollRef = useRef(null);
  const scrollSpeed = 0.5;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;

    const scrollAnimation = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scrollAnimation);
    };

    requestAnimationFrame(scrollAnimation);

    return () => cancelAnimationFrame(scrollAnimation);
  }, []);

  return (
    <Box sx={{ py: isMobile ? 5 : 10, backgroundColor: "#fff", overflow: "hidden" }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Lora",
            textAlign: "center",
            mb: 1,
            color: "#FBB040",
            fontWeight: 600,
            fontSize:isMobile? "24px": "35px",
          }}
        >
          WHAT OUR{" "}
          <Box component="span" sx={{ color: "#192A56" }}>
            CLIENTS SAY
          </Box>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
            mb: 6,
            color: "black",
            maxWidth: "700px",
            mx: "auto",
            fontWeight: 500,
            fontSize:isMobile? "14px":"18px"
            
          }}
        >
          Your trusted partner in finding the right talent or your dream role. Explore our blog for valuable advice on hiring and career advancement.
        </Typography>

        {/* Logo Carousel */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 3,
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#f5f6f8",
                borderRadius: "12px",
                minWidth: "180px",
                py: 3,
                px: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={logo.image}
                alt={logo.name}
                sx={{
                  width: "175px",
                  height: "80px",
                  objectFit: "contain",
                  mb: 1,
                }}
              />
              
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialPage;
