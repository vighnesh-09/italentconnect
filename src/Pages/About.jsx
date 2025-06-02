import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
} from '@mui/material';

import about from "../assets/about.webp";
import AboutITC from '../components/AboutITC';
import Whoweare from '../components/Whoweare';
import ContactSection from '../components/ContactSection';
import TestimonialPage from '../components/TestimonialPage';
import { useNavigate } from 'react-router-dom';
import photo from '../assets/photoleader.png'

const About = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* Header Section */}
      <Box
  sx={{
    position: 'relative',
    height: { xs: '220px', sm: '280px', md: '350px' },
    overflow: 'hidden',
    backgroundImage: `url(${about})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    width: '100%', // Changed from 95% to 100%
    alignItems: 'center',
    justifyContent: 'center',
    px: { xs: 2, sm: 4, md: 6 },
    textAlign: 'center',
    fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
    fontWeight: 'bold',
    color: 'white',
    margin: 0, // Added to prevent any unwanted margins
    boxSizing: 'border-box', // Added to include padding in width calculation
  }}
>
  {/* Yellow overlay layer */}
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

  {/* Content */}
  <Box sx={{ position: 'relative', zIndex: 2,color:"#192A56",fontFamily:"Lora" }}>
    About Us
  </Box>
</Box>


      <AboutITC/>
      <Whoweare />

      {/* Sangita Butani Section */}
     <Box
        sx={{
          backgroundColor: '#fff',
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 4 },
          color: '#000',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* IMAGE */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Avatar
                src={photo}
                alt="Sangita Butani"
                variant="square"
                sx={{
                  width: { xs: '100%', sm: 260, md: 320 },
                  height: { xs: 'auto', sm: 320, md: 385 },
                  maxWidth: 320,
                  border: '4px solid white',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  borderRadius: 2,
                  objectFit: 'cover',
                }}
              />
            </Grid>

            {/* TEXT NEXT TO IMAGE */}
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.1rem' },
                }}
              >
                <Box
                  component="span"
                  sx={{ color: '#F6B93B', fontFamily: 'Lora' }}
                >
                  SANGITA
                </Box>{' '}
                <Box
                  component="span"
                  sx={{ color: '#192A56', fontFamily: 'Lora' }}
                >
                  BUTANI
                </Box>
              </Typography>

              {[
                `Sangita Butani is a dynamic and visionary leader with over fifteen years of extensive experience in the staffing service industry and business development, specializing in talent acquisition and career development.`,
                `A results-driven search practitioner, Sangita Butani is renowned for her integrity, dedication to excellence, and unwavering commitment to exceeding client expectations.`,
                `Her leadership and expertise in talent management have played a key role in helping organizations thrive by building strong, capable teams.`,
                `Sangita Butani holds a Master of Social Work (MSW) from H. N. Shukla College and a Bachelor's degree from Saurashtra University.`,
              ].map((text, index) => (
                <Typography
                  key={index}
                  paragraph
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: { xs: '16px', sm: '17px', md: '19px' },
                    fontWeight: '500',
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Grid>

            {/* FULL WIDTH TEXT UNDER IMAGE */}
            <Grid item xs={12}>
              {[
                `Before joining Management and Staffing Services, she served as CEO and Director of a prominent job placement firm, where she played a pivotal role in connecting top talent with leading organizations.`,
                `Sangita Butani values the diverse spectrum of talent professionals, recognizing that their commitment to career growth is essential not only to their personal passion but also to the security and well-being of their families.`,
                `She has successfully placed executives at all levels of leadership, as well as highly skilled individual contributors.`,
                `Sangita Butani's strategic leadership and market insight have been crucial in advancing the company's progress and achieving its long-term goals.`,
              ].map((text, index) => (
                <Typography
                  key={index}
                  paragraph
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: { xs: '16px', sm: '17px', md: '19px' },
                    fontWeight: '500',
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ContactSection />
      <TestimonialPage />
    </Box>
  );
};

export default About;

