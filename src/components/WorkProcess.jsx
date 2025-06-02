import React from "react";
import { Box, Typography, Card, Container, Grid } from "@mui/material";
import wp1 from "../assets/wp1.svg"
import wp2 from "../assets/wp2.svg"
import wp3 from "../assets/wp3.svg"
import wp4 from "../assets/wp4.svg"
import wp5 from "../assets/wp5.svg"

const workProcess = [
  {
    title: "Consultation",
    description:
      "We begin by understanding your requirements—whether you're looking to hire or seeking employment.",
    icon: <img src={wp1} alt="Consultation" style={{ width: 42, height: 42 }} />,
  },
  {
    title: "Talent Search",
    description:
      "Using a combination of industry knowledge, proprietary technology, and a vast network, we identify the best-fit candidates for your needs.",
    icon: <img src={wp2} alt="Talent Search" style={{ width: 42, height: 42 }} />,
  },
  {
    title: "Screening & Interviews",
    description:
      "We thoroughly assess each candidate's qualifications, experience, and cultural fit to ensure they meet your standards.",
    icon: <img src={wp3} alt="Screening & Interviews" style={{ width: 42, height: 42 }} />,
  },
  {
    title: "Placement",
    description:
      "We finalize the match and ensure both the client and candidate are satisfied with the decision.",
    icon: <img src={wp4} alt="Placement" style={{ width: 42, height: 42 }} />,
  },
  {
    title: "Follow-up",
    description:
      "We maintain ongoing support to ensure the success of the placement, making adjustments as necessary.",
    icon: <img src={wp5} alt="Follow-up" style={{ width: 42, height: 42 }} />,
  },
];

const WorkProcess = () => {
  return (
    <Box py={10} display="flex" justifyContent="center">
      <Container maxWidth="xl">
        <Box
          sx={{
            bgcolor: "#192A56",
            px: { xs: 3, sm: 8, md: 10 },
            py: 6,
            maxWidth: "100%",
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 6,
              color: "white",
              fontWeight: 600,
              fontFamily: "Lora, serif",
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              "& .highlight": {
                color: "#F6B93B",
              },
            }}
          >
            <span className="highlight">OUR BASIC</span> WORK PROCESS
          </Typography>

          {/* First Row */}
          <Grid item container spacing={3} xs={12}>
            {workProcess.slice(0, 3).map((process, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: { xs: "auto", md: 180 },
                    bgcolor: "white",
                    px: 3,
                    py: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box>{process.icon}</Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#192A56",
                        fontWeight: 800,
                        fontFamily: "Lora, serif",
                        fontSize: { xs: "18px", sm: "19px", md: "20px" },
                      }}
                    >
                      {process.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#322E2E",
                      fontSize: { xs: "15px", sm: "16px", md: "17px" },
                      lineHeight: 1.4,
                      mt: 1,
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {process.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Second Row */}
          <Grid
            item
            container
            spacing={3}
            xs={12}
            justifyContent="center"
            sx={{ mt: 1 }}
          >
            {workProcess.slice(3).map((process, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: { xs: "auto", md: 150 },
                    bgcolor: "white",
                    px: 3,
                    py: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                    <Box>{process.icon}</Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#192A56",
                        fontWeight: 800,
                        fontFamily: "Lora, serif",
                        fontSize: { xs: "18px", sm: "19px", md: "20px" },
                      }}
                    >
                      {process.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#322E2E",
                      fontSize: { xs: "15px", sm: "16px", md: "17px" },
                      fontWeight: 500,
                      lineHeight: 1.4,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {process.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkProcess;
