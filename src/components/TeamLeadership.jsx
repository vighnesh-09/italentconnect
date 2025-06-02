import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import ContactSection from "./ContactSection";
import TestimonialPage from "./TestimonialPage";
import tlf1 from "../assets/tlf1.svg"
import tlf2 from "../assets/tlf2.svg"
import tlf3 from "../assets/tlf3.svg"
import tlr1 from "../assets/tlr1.svg"
import tlr2 from "../assets/tlr2.svg"
import tlr3 from "../assets/tlr3.svg"
import service4 from "../assets/service4.png"

const stepsLeft = [
  {
    title: " Effective Communication Skills",
    desc: "Learn how to clearly convey ideas, motivate your team, and build trust with effective communication techniques.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 45, md: 60 },
          height: { xs: 45, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={tlf1} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
  {
    title: "Leadership Mindset Development",
    desc: "Enhance your leadership capabilities by fostering a growth mindset and strengthening decision-making skills.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 45, md: 60 },
          height: { xs: 45, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={tlf2} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
  {
    title: "Strategic Thinking & Planning",
    desc: "Improve your strategic planning skills to make informed decisions and achieve long-term business goals.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 45, md: 60 },
          height: { xs: 45, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={tlf3} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
];

const stepsRight = [
  {
    title: "Conflict Resolution & Problem Solving",
    desc: "Develop strategies to resolve conflicts, promote teamwork, and maintain a harmonious work environment.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 45, md: 60 },
          height: { xs: 45, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={tlr1} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
  {
    title: "Practical Case Studies & Role Plays",
    desc: "Apply leadership theories to real-life scenarios through engaging role plays and case studies.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 45, md: 60 },
          height: { xs: 45, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={tlr2} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
  {
    title: "Coaching & Mentoring",
    desc: "Learn to coach and mentor your team effectively, fostering personal and professional growth.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 45, md: 60 },
          height: { xs: 45, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={tlr3} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
];

const TeamLeadership = () => {
  return (
    <Box>
      {/* Container width section */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ mb: 1 }}>
          {/* Left side text */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                color: "#1B2A47", 
                fontFamily: "Lora",
                fontSize: { xs: "24px", md: "2.5rem" }
              }}
            >
              TEAM <Box component="span" sx={{ color: "#F7941D"  }}>LEADERSHIP</Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3, 
                fontSize: { xs: "14px", md: "18px" }, 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: "500",
                lineHeight: { xs: "1.5", md: "1.6" }
              }}
            >
              We offer expert consultation on building strong, effective teams by improving communication, collaboration, and leadership skills.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3, 
                fontSize: { xs: "14px", md: "18px" }, 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: "500",
                lineHeight: { xs: "1.5", md: "1.6" }
              }}
            >
              We offer expert consultation on building strong, effective teams by improving communication, collaboration, and leadership skills.
            </Typography>
          </Grid>

          {/* Right side image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={service4}
              alt="Recruiter"
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        {/* Recruitment Process Section */}
        <Box sx={{ my: 8 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            gutterBottom
            fontFamily="Lora"
            sx={{ 
              color: "#F7941D",
              fontSize: { xs: "22px", md: "2rem" }
            }}
          >
            Team Leadership Training
          </Typography>
          <Typography 
            align="center" 
            sx={{ 
              mb: 3, 
              fontSize: { xs: "14px", md: "18px" }, 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: "500",
              lineHeight: { xs: "1.5", md: "1.6" }
            }}
          >
            Develop strong leadership skills to guide and inspire your team. Our training focuses on communication, decision-making, and strategic thinking to create effective leaders...
          </Typography>

          <Grid container spacing={4} sx={{ position: "relative" }}>
            {/* Vertical Line */}
            <Box
              sx={{
                position: "absolute",
                marginTop: "30px",
                top: 1,
                left: "50%",
                transform: "translateX(-50%)",
                bottom: "60px",
                width: "4px",
                backgroundColor: "#192A56",
                zIndex: 0,
                display: { xs: "none", md: "block" },
              }}
            />

            {/* Blue Dot on Top of Vertical Line */}
            <Box
              sx={{
                position: "absolute",
                top: "24px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "14px",
                height: "14px",
                backgroundColor: "#192A56",
                borderRadius: "50%",
                zIndex: 2,
              }}
            />

            {/* Left Steps */}
            <Grid item xs={12} md={6}>
              {stepsLeft.map((step, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    display: "flex",
                    mb: 6,
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  {/* Dot */}
                  {/* Dot with Blue Background */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "70%",
                      left: "100%",
                      transform: "translate(-50%, -50%)",
                      width: "24px", // Outer Blue Circle
                      height: "24px",
                      backgroundColor: "#192A56", // Blue
                      borderRadius: "50%",
                      zIndex: 3,
                      display: { xs: "none", md: "block" },
                      alignItems: "center",
                      justifyContent: "center",

                    }}
                  >
                    <Box
                      sx={{
                        width: "12px", // Inner Yellow Circle
                        height: "12px",
                        backgroundColor: "#F6B93B", // Yellow
                        borderRadius: "50%",
                        marginLeft: "6px",
                        marginTop: "6px"
                      }}
                    />
                  </Box>


                  {/* Content */}
                  <Box sx={{ maxWidth: "85%", textAlign: "right", zIndex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" fontFamily="Lora">
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontFamily: 'Poppins, sans-serif', fontWeight: "500" }}>{step.desc}</Typography>
                  </Box>

                  {/* Icon */}
                  <Box sx={{ mx: 2, zIndex: 2 }}>{step.icon}</Box>

                  {/* Horizontal line */}
                  <Box
                    sx={{
                      width: "50%",
                      height: "2px",
                      backgroundColor: "#192A56",
                      position: "relative",
                      left: "0%",
                      transform: "translateX(0%)",
                      zIndex: 1,
                      marginTop: "40px"
                    }}
                  />
                </Box>
              ))}
            </Grid>

            {/* Right Steps */}
            <Grid item xs={12} md={6}>
              {stepsRight.map((step, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    display: "flex",
                    mb: 6,
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  {/* Dot */}
                  {/* Dot with Blue Background */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "96%",
                      right: "100%",
                      transform: "translate(50%, -50%)",
                      width: "24px", // Outer Blue Circle
                      height: "24px",
                      backgroundColor: "#192A56",
                      borderRadius: "50%",
                      zIndex: 3,
                      marginRight: "32px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#F6B93B",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>


                  {/* Horizontal line */}
                  <Box
                    sx={{
                      width: "50%",
                      height: "2px",
                      backgroundColor: "#1B2A47",
                      position: "relative",
                      right: "5.5%",
                      transform: "translateX(0%)",
                      zIndex: 1,
                      marginTop: "120px",
                    }}
                  />

                  {/* Icon */}
                  <Box sx={{ mx: 2, zIndex: 2, mt: 1 }}>{step.icon}</Box>

                  {/* Content */}
                  <Box sx={{ maxWidth: "85%", textAlign: "left", zIndex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" fontFamily="Lora">
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontFamily: 'Poppins, sans-serif', fontWeight: "500" }}>{step.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Full-width sections */}
      <ContactSection />
      <TestimonialPage />
    </Box>
  );
};

export default TeamLeadership;
