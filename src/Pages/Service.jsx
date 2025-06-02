import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import RecruiterService from "../components/RecruiterService";
import ExecutiveSearch from "../components/ExecutiveSearch";
import EmployeeTraining from "../components/EmployeeTraining";
import TeamLeadership from "../components/TeamLeadership";
import service from "../assets/ourservice.png";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabComponents = [
    <RecruiterService />,
    <ExecutiveSearch />,
    <EmployeeTraining />,
    <TeamLeadership />,
  ];

  const tabLabels = [
    "Recruiter Service",
    "Executive Search",
    "Employee Training",
    "Team Leadership",
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: { xs: "220px", sm: "280px", md: "350px" },
          overflow: "hidden",
          backgroundImage: `url(${service})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4, md: 6 },
          textAlign: "center",
          fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.8rem" },
          fontWeight: "bold",
          boxSizing: 'border-box',
          color: "white",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(252, 199, 41, 0.81)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#192A56",
            fontFamily: "Lora",
          }}
        >
          Our Services
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "white",
            py: 4,
            mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              bgcolor: "#13294B",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "stretch",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {tabLabels.map((label, index) => (
                <Box
                  key={label}
                  onClick={() => setActiveTab(index)}
                  sx={{
                    flex: { xs: "1", md: "1 1 0" },
                    textAlign: "center",
                    bgcolor: activeTab === index ? "#F4B63D" : "transparent",
                    color: activeTab === index ? "#000" : "#fff",
                    fontWeight: 500,
                    fontFamily: "Lora, serif",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    py: { xs: 2, md: 3 },
                    px: { xs: 2, md: 4 },
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    borderRight: {
                      xs: "none",
                      md:
                        index !== tabLabels.length - 1
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",
                    },
                    borderBottom: {
                      xs:
                        index !== tabLabels.length - 1
                          ? "1px solid rgba(255,255,255,0.1)"
                          : "none",
                      md: "none",
                    },
                    "&:hover": {
                      bgcolor:
                        activeTab === index
                          ? "#F4B63D"
                          : "rgba(244, 182, 61, 0.1)",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    "&::after":
                      activeTab === index
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "100%",
                            height: "3px",
                            bgcolor: "#F4B63D",
                            display: { xs: "none", md: "block" },
                          }
                        : {},
                  }}
                >
                  {label}
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              mt: 6,
              width: "100%",
              maxWidth: "1200px",
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 3, md: 4 },
              borderRadius: 2,
              bgcolor: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            {tabComponents[activeTab]}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Services;
