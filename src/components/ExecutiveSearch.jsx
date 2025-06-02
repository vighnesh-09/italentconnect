import React from "react";
import {
  Grid,
  Container,
} from "@mui/material";
import { Box, Typography } from "@mui/material";
import ContactSection from "./ContactSection";
import TestimonialPage from "./TestimonialPage";
import esl1 from "../assets/esl1.svg";
import esl2 from "../assets/esl2.svg"
import esl3 from "../assets/esl3.svg"
import esl4 from "../assets/esl4.svg"
import esr1 from "../assets/esr1.svg"
import esr2 from "../assets/esr2.svg"
import esr3 from "../assets/esr3.svg"

import service2 from "../assets/service2.png"

const stepsLeft = [
  {
    title: "Assignment Specification",
    desc: "We learn about our clients through meetings with senior executives and key decision-makers or stakeholders. After solidifying the details of the mandate, Ideal Talent Connect develops a customised search strategy.",
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
        <img src={esl1} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },


  {
    title: "Candidate Assessment",
    desc: "On identifying candidates with the necessary expertise and skills for the role, we ensure that the candidate's personality and intellectual depth complements the client's organisation and culture.",
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
        <img src={esl2} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Candidate Offer",
    desc: "We work in partnership with our client to select the final candidate and assist with the negotiation and presentation of an offer.",
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
        <img src={esl3} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Follow-Up",
    desc: "Ideal Talent Connect follows up with every placed candidate during the first year of their employment to ensure smooth transitioning into the role.",
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
        <img src={esl4} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
];

const stepsRight = [
  {
    title: "Identifying Talent",
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
        <img src={esr1} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Grooming Candidate",
    desc: "We meet with our clients to discuss a final short list and present comprehensive reports on each candidate.",
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
        <img src={esr2} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
  {
    title: "Sign-Off",
    desc: "Once the selected candidate has accepted the offer in writing, we personally contact the other candidates, thanking them for their time and interest.",
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
        <img src={esr3} alt="Icon 1" style={{ width: { xs: 25, md: 33 }, height: { xs: 25, md: 33 } }} />
      </Box>
    )
  },
];


const ExecutiveSearch = () => {
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
              Executive <Box component="span" sx={{ color: "#F7941D" }}>Search</Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3, 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: { xs: "14px", md: "18px" }, 
                fontWeight: "500",
                lineHeight: { xs: "1.5", md: "1.6" }
              }}
            >
              Unearth exceptional leaders through our dedicated executive search services. We thoughtfully identify top-tier candidates to spearhead your organization. With a deep understanding of your requirements, we deliver tailored executive solutions that align with your vision.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3, 
                fontFamily: 'Poppins, sans-serif', 
                fontSize: { xs: "14px", md: "18px" }, 
                fontWeight: "500",
                lineHeight: { xs: "1.5", md: "1.6" }
              }}
            >
              Unearth exceptional leaders through our dedicated executive search services. We thoughtfully identify top-tier candidates to spearhead your organization. With a deep understanding of your requirements, we deliver tailored executive solutions that align with your vision.
            </Typography>
          </Grid>

          {/* Right side image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={service2}
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
            fontFamily={"Lora"}
            gutterBottom
            sx={{ 
              color: "#F7941D",
              fontSize: { xs: "22px", md: "2rem" }
            }}
          >
            Executive Search Process
          </Typography>
          <Typography 
            align="center" 
            sx={{ 
              maxWidth: "700px", 
              mx: "auto", 
              mb: 6, 
              fontFamily: 'Poppins, sans-serif', 
              fontSize: { xs: "14px", md: "18px" }, 
              fontWeight: "500",
              lineHeight: { xs: "1.5", md: "1.6" }
            }}
          >
            Our structured executive search process ensures that top-tier talent is identified, evaluated, and placed successfully.
          </Typography>

          <Grid container spacing={4} sx={{ position: "relative" }}>
            {/* Vertical Line */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                height: "86%",
                width: "4px",
                backgroundColor: "#1B2A47",
                zIndex: 0,
                display: { xs: "none", md: "block" },
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 8,
                height: 8,
                backgroundColor: "#192A56",
                borderRadius: "50%",
                border: "4px solid #192A56",
                zIndex: 2,
                display: { xs: "none", md: "block" },
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
                  {/* Content */}
                  <Box sx={{ maxWidth: "85%", textAlign: "right", zIndex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Lora" }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontFamily: 'Poppins, sans-serif', fontWeight: "500" }}>{step.desc}</Typography>
                  </Box>

                  {/* Icon */}
                  <Box sx={{ mx: 2, zIndex: 2 }}>{step.icon}</Box>

                  {/* Dot on the center line */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "calc(100% + -12px)",
                      transform: "translateY(-50%)",
                      width: 12,
                      height: 12,
                      backgroundColor: "#FBBF24",
                      borderRadius: "50%",
                      border: "6.5px solid #192A56",

                      zIndex: 3,
                    }}
                  />

                  {/* Horizontal line */}
                  <Box
                    sx={{
                      width: "50%",
                      height: "2px",
                      backgroundColor: "#1B2A47",
                      position: "relative",
                      left: "0%",
                      transform: "translateX(0%)",
                      zIndex: 1,
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
                  {/* Horizontal line */}
                  <Box
                    sx={{
                      width: "50%",
                      height: "2px",
                      backgroundColor: "#1B2A47",
                      position: "relative",
                      right: "6%",
                      transform: "translateX(0%)",
                      zIndex: 1,
                      marginBottom: "28px"
                    }}
                  />

                  {/* dotline */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "39%",
                      right: "calc(100% + 20px)",
                      transform: "translateY(-50%)",
                      width: 24, // Slightly bigger to show border clearly
                      height: 24,
                      backgroundColor: "#FBBF24", // Yellow dot
                      borderRadius: "50%",
                      border: "6.5px solid #192A56", // Thin dark border for visibility
                      boxSizing: "border-box",
                      zIndex: 3,
                    }}
                  />


                  {/* Icon */}
                  <Box sx={{ mx: 1, zIndex: 2 }}>{step.icon}</Box>

                  {/* Content */}
                  <Box sx={{ maxWidth: "85%", textAlign: "left", zIndex: 1 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Lora" }}>
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

export default ExecutiveSearch;
