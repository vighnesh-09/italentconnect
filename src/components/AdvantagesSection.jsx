import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import {
  Gavel,
  TrendingUp,
  People,
  Storefront,
  PieChart,
  AccountBalance,
} from "@mui/icons-material";
import { useMediaQuery } from '@mui/material';

const advantages = [
  {
    id: 1,
    title: "Reduce Hiring Risks",
    description: "Minimize risks with effective recruitment strategies.",
    icon: <Gavel />,
  },
  {
    id: 2,
    title: "Increase Efficiencies",
    description: "Streamline your hiring process with expert solutions.",
    icon: <TrendingUp />,
  },
  {
    id: 3,
    title: "Deeper Talent Pools",
    description: "Access a wider and more qualified candidate network.",
    icon: <People />,
  },
  {
    id: 4,
    title: "Onboarding Support",
    description: "Ensure smooth transitions for new hires.",
    icon: <Storefront />,
  },
  {
    id: 5,
    title: "Effective Employer Branding",
    description: "Enhance your brand's reputation in the job market.",
    icon: <PieChart />,
  },
  {
    id: 6,
    title: "Deep Industry Knowledge",
    description: "Leverage insights from industry experts.",
    icon: <AccountBalance />,
  },
];

const AdvantagesSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={{
      py: 6, position: "relative", overflow: "hidden",
      '&::before': {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "100%",
        backgroundColor: "#f8f9fa",
        background:
          "linear-gradient(180deg, rgba(245,246,250,0.95) 0%, rgba(195, 197, 208, 0.3) 100%)",
        opacity: 0.8,
        zIndex: -1,
        borderRadius: "10px",
      },
    }}>
      <Container
        maxWidth={"lg"}
        sx={{
          maxWidth: "1500px",
          mx: "auto",
          position: "relative",
          zIndex: 1,
          borderRadius: "30px",
          px: { xs: 2, md: 6 },
          py: 4,

        }}
      >
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h4" 
            component="div" 
            sx={{ 
              mb: 2, 
              fontFamily: "Lora",
              fontSize: isMobile ? '1.5rem' : undefined 
            }}
          >
            <Box component="span" sx={{ color: "#F6B93B", fontWeight: 800 }}>
              ADVANTAGES OF{" "}
            </Box>
            <Box component="span" sx={{ color: "#192A56", fontWeight: 800 }}>
              WORKING WITH US
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "322E2E",
              maxWidth: "800px",
              mx: "auto",
              fontFamily: 'Poppins, sans-serif', 
              fontSize: isMobile ? "14px" : "18px", 
              fontWeight: "500"
            }}
          >
            We provide expert HR solutions to streamline your hiring process and
            maximize efficiency.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {advantages.map((advantage) => (
            <Grid item xs={12} sm={6} md={4} key={advantage.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: { xs: 2, md: 3 },
                  padding: { 
                    xs: "0px", 
                    md: "20px" 
                  },
                  width: "100%",
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                <Box
                  sx={{
                    width: 69,
                    height: 69,
                    borderRadius: 2,
                    backgroundColor: "#F6B93B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {React.cloneElement(advantage.icon, {
                    sx: {
                      color: "#192A56",
                      fontSize: 50,
                    },
                  })}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#192A56",
                      fontWeight: 600,
                      fontSize: isMobile ? "16px" : "20px",
                      mb: 0.5,
                      lineHeight: 1.2,
                      fontFamily: "Lora"
                    }}
                  >
                    {advantage.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#322E2E",
                      lineHeight: 1.4,
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: isMobile ? "14px" : "18px", 
                      fontWeight: "500"
                    }}
                  >
                    {advantage.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvantagesSection;

