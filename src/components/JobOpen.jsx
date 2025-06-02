import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  Button,
  Box,
  MenuItem,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';
import bannerjoimg from "../assets/bannerjoimg.png"
import axios from 'axios';
import JobGrid from './JobGrid';
import reset from "../assets/reset.svg"
import ContactSection from "./ContactSection";
import TestimonialPage from "./TestimonialPage";

// Static job results object
const staticJobResults = [
  {
    title: "Executive Sales",
    location: "Surat",
    experienceRequired: "Fresher",
    salary: "Up to 4 Lakh",
  },
  {
    title: "Executive Sales",
    location: "Surat",
    experienceRequired: "Fresher",
    salary: "Up to 4 Lakh",
  },
  {
    title: "Executive Sales",
    location: "Surat",
    experienceRequired: "Fresher",
    salary: "Up to 4 Lakh",
  },
  {
    title: "Executive Sales",
    location: "Surat",
    experienceRequired: "Fresher",
    salary: "Up to 4 Lakh",
  },
  {
    title: "Executive Sales",
    location: "Surat",
    experienceRequired: "Fresher",
    salary: "Up to 4 Lakh",
  },
  {
    title: "Executive Sales",
    location: "Surat",
    experienceRequired: "Fresher",
    salary: "Up to 4 Lakh",
  }
];

const JobOpen = () => {
  const [title, setTitle] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [experienceRequired, setExperienceRequired] = useState('');
  const [jobResults, setJobResults] = useState(staticJobResults); // Initialize with static results
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    setNoResults(false);
    try {
      const response = await axios.get('https://itc-backend-241149078260.us-central1.run.app/api/job/search', {
        params: { title, jobLocation, experienceRequired },
      });

      setJobResults(response.data.jobs);
      if (response.data.jobs.length === 0) {
        setNoResults(true);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // Fallback to static results if API call fails
      setJobResults(staticJobResults);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTitle('');
    setJobLocation('');
    setExperienceRequired('');
    setJobResults(staticJobResults); // Reset to static results
    setNoResults(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: { xs: '220px', sm: '280px', md: '350px' },
          overflow: 'hidden',
          backgroundImage: `url(${bannerjoimg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          width: '96%',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 6 },
          textAlign: 'center',
          fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(252, 199, 41, 0.81)',
            zIndex: 1,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, color: "#192A56", fontFamily: "Lora" }}>
          Job Opening
        </Box>
      </Box>

      <Box
        sx={{
          background: '#192A56',
          color: '#fff',
          padding: '65px 20px',
          marginTop: { xs: '2.5px', sm: '5px', md: '70px' },
          mx: { xs: '10px', sm: '30px', md: '70px' },
        }}
      >
        <Box sx={{ maxWidth: '1100px', mx: 'auto', textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              fontSize: { xs: '24px', sm: '32px', md: '40px' },
              letterSpacing: '1px',
              fontFamily: 'Lora',
            }}
          >
            <Box component="span" sx={{ color: '#F6B93B' }}>Find Your </Box>
            <Box component="span" sx={{ color: '#FFFFFF' }}>Dream Job Now</Box>
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              maxWidth: '800px',
              margin: '0 auto',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              marginBottom: '30px',
            }}
          >
            Browse thousands of job listings and find the perfect fit for your career.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter Requirement"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#FFC107' }} />
                  </InputAdornment>
                ),
                sx: {
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#121153',
                },
              }}
              sx={{ width: { xs: '100%', md: '250px' }, flexGrow: 1 }}
            />

            <TextField
              variant="outlined"
              placeholder="Enter Location"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: '#FFC107' }} />
                  </InputAdornment>
                ),
                sx: {
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#121153',
                },
              }}
              sx={{ width: { xs: '100%', md: '250px' }, flexGrow: 1 }}
            />

            <TextField
              select
              variant="outlined"
              value={experienceRequired}
              onChange={(e) => setExperienceRequired(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon sx={{ color: '#FFC107' }} />
                  </InputAdornment>
                ),
                sx: {
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#121153',
                },
              }}
              sx={{ width: { xs: '100%', md: '150px' }, flexGrow: 1 }}
            >
              <MenuItem value="">Experience</MenuItem>
              <MenuItem value="fresher">Fresher</MenuItem>
              <MenuItem value="1-3">1-3 Years</MenuItem>
              <MenuItem value="3-5">3-5 Years</MenuItem>
              <MenuItem value="5+">5+ Years</MenuItem>
            </TextField>

            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                padding: '15px 30px',
                background: '#F6B93B',
                '&:hover': { background: '#E0A800' },
                color: '#121153',
                fontWeight: '800',
                width: { xs: '100%', md: 'auto' },
                flexGrow: 1,
                fontFamily: "Lora",
                fontSize: "15px"
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Search'}
            </Button>

            <Button
              variant="outlined" 
              onClick={handleReset}
              startIcon={
                <Box
                  component="img"
                  src={reset}
                  alt="reset icon"
                  sx={{ width: 28, height: 28, ml: 1 }}
                />
              }
              sx={{
                px: 1.5,
                py: 1.6,
                background: '#F6B93B',
                color: 'green',
                fontWeight: 'bold',
                minWidth: '100px',
                fontSize: '0.75rem',
                width: { xs: '100px', md: 'auto' },
                lineHeight: 1.2,
              }}
            />
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 3 }}>
        {loading ? (
          <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
        ) : noResults ? (
          <Typography
            variant="h6"
            sx={{ color: '#ff3b30', textAlign: 'center' }}
          >
            No jobs found matching your search criteria.
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
              },
              gap: '20px',
            }}
          >
            {jobResults.map((job, index) => (
              <Card
                key={index}
                sx={{
                  boxShadow: 3,
                  borderRadius: '15px',
                  transition: '0.3s',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#121153' }}
                  >
                    {job.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {job.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#121153',
                    }}
                  >
                    <WorkIcon sx={{ color: '#FFC107', marginRight: '5px' }} />
                    {job.experienceRequired} experience
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#121153',
                    }}
                  >
                    <CurrencyRupeeIcon
                      sx={{ color: '#FFC107', marginRight: '5px' }}
                    />
                    {job.salary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => navigate('/jobdetails', { state: { job } })}
                    sx={{ color: '#FFC107', fontWeight: 'bold' }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
      </Container>
      
      <JobGrid />
      <ContactSection />
      <TestimonialPage />
    </>
  );
};

export default JobOpen;




