import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import ContactSection from "./ContactSection";
import TestimonialPage from "./TestimonialPage";
import service1 from "../assets/service1.png"
import rpl1 from "../assets/rpl1.svg";
import rpl2 from "../assets/rpl2.svg";
import rpl3 from "../assets/rpl3.svg";
import rpl4 from "../assets/rpl4.svg";
import rpr1 from "../assets/rpr1.svg";
import rpr2 from "../assets/rpr2.svg";
import rpr3 from "../assets/rpr3.svg";

const stepsLeft = [
  {
    title: "Requirement Analysis",
    desc: "Understanding the client's needs, job description, and desired qualifications.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 55, md: 60 },
          height: { xs: 55, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={rpl1} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Screening & Shortlisting",
    desc: "Reviewing resumes, conducting initial interviews, and shortlisting qualified candidates.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 55, md: 60 },
          height: { xs: 55, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={rpl2} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Client Interview & Selection",
    desc: "Arranging interviews with the client and assisting in the selection process.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 55, md: 60 },
          height: { xs: 55, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={rpl3} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Follow-Up",
    desc: "Following up with candidates and clients post-placement to ensure satisfaction.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 55, md: 60 },
          height: { xs: 55, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={rpl4} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
];

const stepsRight = [
  {
    title: "Candidate Sourcing",
    desc: "Identifying and reaching out to potential candidates through multiple channels.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 55, md: 60 },
          height: { xs: 55, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={rpr1} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Grooming Candidate",
    desc: "Ensuring the candidate is prepared and aligned with client expectations before the final interview.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 55, md: 60 },
          height: { xs: 55, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={rpr2} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Offer & Onboarding",
    desc: "Extending the offer and ensuring a smooth onboarding process for the new hire.",
    icon: (
      <Box
        sx={{
          backgroundColor: "#F6B93B",
          borderRadius: "50%",
          width: { xs: 55, md: 60 },
          height: { xs: 55, md: 60 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={rpr3} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
];

const RecruiterService = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ mb: 1 }}>
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
              Recruiter <Box component="span" sx={{ color: "#F7941D" }}>Service</Box>
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
              Our recruitment service helps you find the best talent through a streamlined process,
              including job posting, candidate screening, and final selection. We identify, evaluate,
              and connect the right people to the right opportunities.
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
              Our recruitment service helps you find the best talent through a streamlined process,
              including job posting, candidate screening, and final selection. We identify, evaluate,
              and connect the right people to the right opportunities.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={service1}
              alt="Recruiter"
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ my: 8 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            align="center"
            gutterBottom
            fontFamily={"Lora"}
            sx={{
              color: "#F7941D",
              fontSize: { xs: "20px", md: "2rem" }
            }}
          >
            Recruitment Process
          </Typography>
          <Typography
            align="center"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              mb: 6,
              fontSize: { xs: "13px", md: "18px" },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: "500",
              lineHeight: { xs: "1.5", md: "1.6" }
            }}
          >
            Our streamlined recruitment process ensures that the right talent is identified, evaluated, and hired efficiently.
          </Typography>

          <Grid container spacing={4} sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: 1,
                left: "50%",
                transform: "translateX(-50%)",
                height: "91%",
                width: "4px",
                backgroundColor: "#1B2A47",
                zIndex: 0,
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "1px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "16px",
                height: "16px",
                backgroundColor: "#192A56",
                borderRadius: "50%",
                zIndex: 2,
                display: { xs: "none", md: "block" },
              }}
            />

            <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
              {[...stepsLeft, ...stepsRight].map((step, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mb: 4,
                    textAlign: "left",
                  }}
                >
                  <Box sx={{ mr: 2 }}>{step.icon}</Box>
                  <Box>
                    <Typography variant="h6" fontWeight="bold" fontFamily="Lora" sx={{ fontSize: "16px" }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: "13px", fontFamily: 'Poppins, sans-serif', fontWeight: "500" }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
              {stepsLeft.map((step, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    mb: 6,
                    alignItems: { xs: "flex-start", md: "center" },
                    textAlign: { xs: "left", md: "right" },
                  }}
                >
                  <Box sx={{ maxWidth: "85%", zIndex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" fontFamily="Lora">
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, fontFamily: 'Poppins, sans-serif', fontWeight: "500" }}>{step.desc}</Typography>
                  </Box>

                  <Box sx={{ mx: { xs: 0, md: 2 }, my: { xs: 2, md: 0 }, zIndex: 2 }}>{step.icon}</Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: "80%",
                      left: "calc(100% + -12px)",
                      transform: "translateY(-50%)",
                      width: 12,
                      height: 12,
                      backgroundColor: "#F6B93B",
                      borderRadius: "50%",
                      border: "6.5px solid #192A56",
                      zIndex: 3,
                    }}
                  />

                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      width: "50%",
                      height: "2px",
                      top: "-20px",
                      backgroundColor: "#1B2A47",
                      position: "relative",
                      left: "0%",
                      transform: "translateX(0%)",
                      zIndex: 1,
                      marginTop: "110px"
                    }}
                  />
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
              {stepsRight.map((step, i) => (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column-reverse", md: "row" },
                    mb: 6,
                    alignItems: { xs: "flex-start", md: "center" },
                    textAlign: { xs: "left", md: "left" },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      width: "50%",
                      height: "2px",
                      backgroundColor: "#1B2A47",
                      position: "relative",
                      right: "6%",
                      transform: "translateX(0%)",
                      zIndex: 1,
                      marginBottom: "22px"
                    }}
                  />

                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      position: "absolute",
                      top: "39%",
                      right: "calc(100% + 20px)",
                      transform: "translateY(-50%)",
                      width: 24,
                      height: 24,
                      backgroundColor: "#F6B93B",
                      borderRadius: "50%",
                      border: "6.5px solid #192A56",
                      boxSizing: "border-box",
                      zIndex: 3,
                    }}
                  />

                  <Box sx={{ mx: { xs: 0, md: 2 }, my: { xs: 2, md: 0 }, zIndex: 2 }}>{step.icon}</Box>

                  <Box sx={{ maxWidth: "85%", zIndex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" fontFamily="Lora">
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "16px", md: "18px" }, fontFamily: 'Poppins, sans-serif', fontWeight: "500" }}>{step.desc}</Typography>
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

export default RecruiterService;

