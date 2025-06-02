
import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const consultants = [
  { name: "Job Jerky", location: "Kisrol, Moradabad", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/1208876_20231018120533.jpg" },
  { name: "Decent Manpower", location: "Vasna, Ahmedabad", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/1204494_20231212125848.jpg" },
  { name: "Shri Management Services", location: "Bhosari, Pune", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/1013221_20230209151816.jpg" },
  { name: "Jmsm Services", location: "Ghansoli, Navi Mumbai", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/1039086_20210926133359.jpg" },
  { name: "Kanpur Jobs Placement", location: "Kaushalpuri, Kanpur", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/1217543.jpg" },
  { name: "Fair Deal Recruitment Services", location: "Bansdroni, Kolkata", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/290947_20230306154648.jpg" },
  { name: "Jc Enterprise", location: "Panvel, Raigad", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/1166929_20240612132824.jpg" },
  { name: "P And R Perfect Resources", location: "Vikas Nagar, Lucknow", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/1262089_20241205141926.jpg" },
  { name: "Global Prospects", location: "Rajgarh Road, Guwahati", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/340066_20190305155829.jpg" },
  { name: "Mahima Consultancy", location: "Kamptee, Nagpur", logo: "https://dynamic.placementindia.com/recruiter_comp_logo/250204.jpg" },
];

// Styled Components
const StyledCard = styled(Card)({
  textAlign: "center",
  padding: "15px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
});

const Logo = styled("img")({
  width: "80px",
  height: "80px",
  objectFit: "contain",
  marginBottom: "10px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
});

const StyledButton = styled(Button)({
  marginTop: "20px",
  borderRadius: "20px",
  backgroundColor: "#007bff",
  color: "white",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
});

const PlacementConsultants = () => {
  const [showAll, setShowAll] = useState(false);

  // Limit to 6 cards initially
  const displayedConsultants = showAll ? consultants : consultants.slice(0, 6);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Box textAlign="center" p={3} sx={{ backgroundColor: "#f4f4f9" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
        Featured Placement Consultants
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: "20px" }}>
        Connect with trusted placement consultants for your career needs.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {displayedConsultants.map((consultant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <Logo src={consultant.logo} alt={consultant.name} />
                <Typography variant="h6" fontWeight={600}>
                  {consultant.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {consultant.location}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <StyledButton onClick={handleToggle}>
        {showAll ? "Show Less" : "View All Consultants"}
      </StyledButton>
    </Box>
  );
};

export default PlacementConsultants;
