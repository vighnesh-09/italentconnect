import React ,{useState}from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  Paper,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApplyJobModal from "./ApplyModel";

const JobDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job;
  const [showModal, setShowModal] = useState(false);

  if (!job) {
    return <Typography>No job details available</Typography>;
  }


  const handleApplyClick = () => {
    setShowModal(true);
  };
  
  
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: "300px", sm: "400px", md: "500px" },
          backgroundImage: `url(37.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          paddingX: { xs: "20px", sm: "30px", md: "40px" },
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          fontWeight: "bold",
          textShadow: "3px 3px 15px rgba(0,0,0,0.7)",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        Job Details
      </Box>

      {/* Job Details Section */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Grid container spacing={4}>
          {/* Left Section: Job Information */}
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3, borderRadius: "15px", boxShadow: 2, mb: 4 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar sx={{ width: 75, height: 75, bgcolor: "#007bff" }}>
                    <WorkIcon fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5" fontWeight="bold" color="#007bff">
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mt: 1,
                      }}
                    >
                      <LocationOnIcon fontSize="small" />
                      {job.jobLocation}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="text.primary"
              gutterBottom
            >
              Job Description
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {job.description}
            </Typography>
          </Grid>

          {/* Right Section: Key Details */}
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: "15px" }}>
              <Box sx={{ lineHeight: 2 }}>
                <Typography variant="body1">
                  <strong>Experience:</strong> {job.experienceRequired}
                </Typography>
                <Typography variant="body1">
                  <strong>Salary:</strong> {job.salary}
                </Typography>
                <Typography variant="body1">
                  <strong>Job Type:</strong> {job.jobType}
                </Typography>
                <Typography variant="body1">
                  <strong>Qualification:</strong> {job.educationalQualification}
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Button
            variant="contained"
            color="success"
            onClick={handleApplyClick}
            sx={{
              textTransform: "none",
              px: 4,
              py: 1,
              backgroundColor: "#007bff",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Apply
          </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate(-1)}
            sx={{
              textTransform: "none",
              px: 4,
              py: 1,
              borderColor: "#007bff",
              color: "#007bff",
              "&:hover": {
                borderColor: "#0056b3",
                backgroundColor: "#f0f8ff",
              },
            }}
          >
            Go Back
          </Button>
{/* 
          <Button
            variant="contained"
            color="success"
            onClick={handleApplyClick}
            sx={{
              textTransform: "none",
              px: 4,
              py: 1,
              backgroundColor: "#007bff",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Apply
          </Button> */}
          {showModal && (
        <ApplyJobModal jobId={job._id} onClose={() => setShowModal(false)} />
      )}
        </Box>
      </Container>
    </>
  );
};

export default JobDetails;
