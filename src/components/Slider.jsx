import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/banner.webp';
import overlayImage from '../assets/Rectangle1.png';
import cornerVector from '../assets/Vector 5.png';
import cornerVectorRight from '../assets/Vector 6.png';
import { Instagram, Facebook, WhatsApp, LinkedIn } from '@mui/icons-material';

const loraFont = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
`;

const HeroSection = () => {
  const navigate = useNavigate();

  const handleEmployerClick = () => {
    navigate('/employer-login');
  };

  const handleCandidateClick = () => {
    navigate('/candidate-register');
  };

  const handleJobClick = () => {
    navigate('/open-job')
  }

  return (
    <>
      <style>{loraFont}</style>
      <Box
        sx={{
          width: '100%',
          overflowX: 'hidden',
          height: {
            xs: '550px',
            sm: '550px',
            md: '600px',
            lg: '650px',
          },
          position: 'relative',
          // mt: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
          minHeight: { xs: '450px' },
        }}
      >
        {/* Overlay Card */}
        <Box
          sx={{
            width: {
              xs: '90%',
              sm: '75%',
              md: '50%',
            },
            background: `linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 35.67%), url(${overlayImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: {
              xs: '16px',
              sm: '25px',
              md: '35px',
            },
            borderRadius: 2,
            boxShadow: 3,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            textAlign: 'left',
            ml: {
              xs: 0,
              md: -40,
            },
          }}
        >
          {/* Top Left Vector */}
          <Box
            component="img"
            src={cornerVector}
            alt="Corner Decoration"
            sx={{
              position: 'absolute',
              top: {
                xs: 15,
                sm: 25,
                md: 35
              },
              left: {
                xs: 10,
                sm: 15,
                md: 25
              },
              width: {
                xs: '120px',
                sm: '180px',
                md: '320px',
              },
              display: 'block',
              zIndex: 1,
              opacity: {
                xs: 0.8,
                sm: 0.9,
                md: 1
              }
            }}
          />

          {/* Bottom Right Vector */}
          <Box
            component="img"
            src={cornerVectorRight}
            alt="Corner Decoration Bottom Right"
            sx={{
              position: 'absolute',
              bottom: {
                xs: 10,
                sm: 35,
                md: 45
              },
              right: {
                xs: 5,
                sm: 8,
                md: 20
              },
              width: {
                xs: '120px',
                sm: '180px',
                md: '320px',
              },
              display: 'block',
              zIndex: 1,
              opacity: {
                xs: 0.8,
                sm: 0.9,
                md: 1
              }
            }}
          />

          {/* Text Content */}
          <Box sx={{ pl: { xs: 2, sm: 4, md: 4 }, zIndex: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                mt: 3,
                color: '#F5B122',
                fontFamily: 'Lora, serif',
                fontSize: {
                  xs: '1.3rem',
                  sm: '1.8rem',
                  md: '2.6rem',
                },
              }}
            >
              Connecting Talent
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // mt: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  color: '#F6B93B',
                  fontFamily: 'Lora, serif',
                  fontSize: {
                    xs: '1.6rem',
                    sm: '2.2rem',
                    md: '3rem',
                  },
                  textTransform: 'uppercase',
                  mr: 1,
                }}
              >
                WITH
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: '#192A56',
                  fontFamily: 'Lora, serif',
                  fontSize: {
                    xs: '1.6rem',
                    sm: '2.2rem',
                    md: '3rem',
                  },
                  textTransform: 'uppercase',
                }}
              >
                OPPORTUNITIES
              </Typography>
            </Box>

            {/* Subtext */}
            <Box sx={{ width: { xs: "90%", sm: "auto" }, mt: { xs: 1, sm: 0 } }}>
              <Typography
                sx={{
                  color: '#1E2B51',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: {
                    xs: '13px',
                    sm: '20px',
                  },
                  fontWeight: 500,
                  mb: { md: 1, xs: 0 },
                }}
              >
                Your Strategic Placement Partner, Elevate Your
              </Typography>
              <Typography
                sx={{
                  color: '#1E2B51',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: {
                    xs: '12px',
                    sm: '20px',
                  },
                  fontWeight: 500,
                }}
              >
                Workforce, Transform Your Future.
              </Typography>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                },
                gap: 2,
                mt: { xs: 3, sm: 4 },
                width: { xs: '97%', sm: 'auto' },
              }}
            >
              <Button
                variant="contained"
                onClick={handleEmployerClick}
                sx={{
                  backgroundColor: '#F5B122',
                  color: '#000',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins, sans-serif',
                  px: 3,
                  py: 1,
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                  '&:hover': {
                    backgroundColor: '#dca20e',
                  },
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                Employer
              </Button>
              <Button
                variant="contained"
                onClick={handleCandidateClick}
                sx={{
                  backgroundColor: '#192A56',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontFamily: 'Poppins, sans-serif',
                  px: 3,
                  py: 1,
                  mb: { md: 0, xs: 2 },
                  fontSize: { xs: '0.85rem', sm: '1rem' },
                  '&:hover': {
                    backgroundColor: '#162042',
                  },
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                Candidate
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Job Opening Tag */}
        <Button
          onClick={handleJobClick}
          sx={{
            position: 'absolute',
            right: 0,
            top: {
              xs: '45%',
              sm: '50%',
            },
            transform: 'translateY(-50%) rotate(180deg)',
            backgroundColor: '#F5B122',
            color: '#1E2B51',
            writingMode: 'vertical-lr',
            textOrientation: 'mixed',
            padding: {
              xs: '4px 3px',
              sm: '8px 6px',
              md: '12px 10px',
            },
            textTransform: 'capitalize',
            fontWeight: 800,
            borderRadius: '0 8px 8px 0',
            cursor: 'pointer',
            zIndex: 3,
            fontFamily: 'Lora, serif',
            letterSpacing: '1px',
            fontSize: {
              xs: '0.65rem',
              sm: '0.9rem',
              md: '1.2rem',
            },
            display: 'block',
            minWidth: { xs: '28px', sm: 'auto' },
            height: { xs: '120px', sm: '150px', md: '180px' },
          }}
        >
          Job Opening
        </Button>


      </Box>
    </>
  );
};

export default HeroSection;
