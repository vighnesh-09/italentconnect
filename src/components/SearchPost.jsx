import React, { useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const cities = [
  "Bangalore", "Mumbai", "Gurgaon", "Noida", "Hyderabad", "Pune",
  "Ahmedabad", "Delhi", "Chandigarh", "Chennai", "Kolkata", "Jaipur"
];

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "15px",
  justifyContent: "center",
  padding: "20px"
}));

const StyledButton = styled(Button)({
  borderRadius: "20px",
  textTransform: "none",
  fontWeight: "bold",
  padding: "10px 20px",
  boxShadow: "none",
  '&:hover': {
    backgroundColor: "#0056b3",
    color: "white"
  }
});

const CityButton = styled(Button)({
  borderRadius: "10px",
  textTransform: "none",
  padding: "10px 15px",
  border: "1px solid #ddd",
  backgroundColor: "#fff",
  color: "#333",
  transition: "all 0.3s",
  '&:hover': {
    backgroundColor: "#007bff",
    color: "white"
  }
});

const SearchPost = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCities = showAll ? cities : cities.slice(0, 6);
  const navigate = useNavigate()

  return (
    <Box textAlign="center" p={3} bgcolor="#eef7ff">
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Are you an employer?
      </Typography>
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap" mb={2}>
        <StyledButton variant="contained" color="error"onClick={() => navigate("/")}>Search Your Hire</StyledButton>
        <StyledButton variant="contained" color="primary" onClick={() => navigate("/employer-login")}>Post Jobs for Free</StyledButton>
      </Box>
      <Typography variant="body1" color="textSecondary" mb={2}>
        Explore our top recruitment agencies and placement consultants by city to find the best hiring solutions for your business.
      </Typography>
      <StyledGrid>
        {visibleCities.map((city, index) => (
          <CityButton key={index}>{`Recruitment Agencies in ${city}`}</CityButton>
        ))}
      </StyledGrid>
      {cities.length > 6 && (
        <Button
          variant="outlined"
          startIcon={<SearchIcon />}
          onClick={() => setShowAll(!showAll)}
          sx={{ marginTop: "20px", borderRadius: "20px" }}
        >
          {showAll ? "Show Less" : "Find More Cities"}
        </Button>
      )}
    </Box>
  );
};

export default SearchPost;
