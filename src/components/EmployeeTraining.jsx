import React from "react";
import { Grid, Container } from "@mui/material";
import { Box, Typography } from "@mui/material";
import ContactSection from "./ContactSection";
import TestimonialPage from "./TestimonialPage";
import etl1 from "../assets/etl1.svg";
import etl2 from "../assets/etl2.svg";
import etl3 from "../assets/etl3.svg";
import etr1 from "../assets/etr1.svg";
import etr2 from "../assets/etr2.svg";
import etr3 from "../assets/etr3.svg";
import service3 from "../assets/service3.png";

const stepsLeft = [
  {
    title: "Interactive Learning Sessions",
    desc: "Engage employees with hands-on training, real-world scenarios, and collaborative activities.",
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
        <img src={etl1} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
  {
    title: "Customized Training Modules",
    desc: "Tailor training content to match your company's specific goals and objectives.",
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
        <img src={etl2} alt="Icon 2" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
  {
    title: "Leadership & Development",
    desc: "Develop strong leadership skills with specialized coaching and mentoring programs.",
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
        <img src={etl3} alt="Icon 3" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
];

const stepsRight = [
  {
    title: "Expert Trainers",
    desc: "Our dedicated research team undertakes a systematic search for qualified executives that fit the criteria and mandate.",
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
        <img src={etr1} alt="Icon 4" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
  {
    title: "Certification & Assessment",
    desc: "Track progress and recognize achievements with certificates and evaluations.",
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
        <img src={etr2} alt="Icon 5" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
  {
    title: "Continuous Learning Support",
    desc: "Access ongoing resources and support to promote continuous employee growth.",
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
        <img src={etr3} alt="Icon 6" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    ),
  },
];

const EmployeeTraining = () => {
  return (
    <Box>
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
              EMPLOYEE <Box component="span" sx={{ color: "#F7941D" }}>TRAINING</Box>
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
              Our employee training programs enhance skills, boost productivity, and empower your workforce with the latest industry knowledge.
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
              Our employee training programs enhance skills, boost productivity, and empower your workforce with the latest industry knowledge.
            </Typography>
          </Grid>

          {/* Right side image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={service3}
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
            sx={{
              color: "#F7941D",
              fontFamily: "Lora",
              fontSize: { xs: "22px", md: "2rem" }
            }}
          >
            Employee Training & Development
          </Typography>
          <Typography 
            align="center" 
            sx={{ 
              maxWidth: "700px", 
              mx: "auto", 
              mb: 6, 
              fontSize: { xs: "14px", md: "18px" }, 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: "500",
              lineHeight: { xs: "1.5", md: "1.6" }
            }}
          >
            Empower your workforce with our expert-led training programs. Our courses are designed to enhance skills, boost productivity, and drive business growth.
          </Typography>

          <Grid container spacing={4} sx={{ position: "relative" }}>
            {/* Vertical Line */}
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
                height: "86.6%",
                width: "4px",
                backgroundColor: "#192A56",
                zIndex: 0,
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "16px",
                  height: "16px",
                  backgroundColor: "#192A56",
                  borderRadius: "50%",
                  zIndex: 2,
                }}
              />
            </Box>

            {/* Left Steps */}
            <Grid item xs={12} md={6}>
              {stepsLeft.map((step, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "center" },
                    justifyContent: { xs: "center", md: "flex-start" },
                    textAlign: { xs: "center", md: "right" },
                    mb: 6,
                  }}
                >
                  {/* Dot */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "100%",
                      transform: "translate(-50%, -50%)",
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#192A56",
                      borderRadius: "50%",
                      zIndex: 3,
                      display: { xs: "none", md: "block" },
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#F6B93B",
                        borderRadius: "50%",
                        marginLeft: "6px",
                        marginTop: "6px",
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box sx={{ maxWidth: "85%", zIndex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" fontFamily="Lora">
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontFamily: 'Poppins, sans-serif', fontWeight: "500" }}>
                      {step.desc}
                    </Typography>
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
                      display: { xs: "none", md: "block" },
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
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "center" },
                    justifyContent: { xs: "center", md: "flex-end" },
                    textAlign: { xs: "center", md: "left" },
                    mb: 6,
                  }}
                >
                  {/* Dot */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "92%",
                      right: "105.5%",
                      transform: "translate(50%, -50%)",
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#192A56",
                      borderRadius: "50%",
                      zIndex: 3,
                      display: { xs: "none", md: "block" },
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#F6B93B",
                        borderRadius: "50%",
                        marginLeft: "6px",
                        marginTop: "6px",
                      }}
                    />
                  </Box>

                  {/* Horizontal line */}
                  <Box
                    sx={{
                      width: "50%",
                      height: "2px",
                      backgroundColor: "#192A56",
                      position: "relative",
                      right: "5.5%",
                      transform: "translateX(0%)",
                      zIndex: 1,
                      marginTop: "89px",
                      display: { xs: "none", md: "block" },
                    }}
                  />

                  {/* Icon */}
                  <Box sx={{ mx: 2, zIndex: 2 }}>{step.icon}</Box>

                  {/* Content */}
                  <Box sx={{ maxWidth: "85%", zIndex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" fontFamily="Lora">
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontFamily: 'Poppins, sans-serif', fontWeight: "500" }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>

      <ContactSection />
      <TestimonialPage />
    </Box>
  );
};

export default EmployeeTraining;
