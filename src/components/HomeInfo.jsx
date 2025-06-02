import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { FiberManualRecord as DotIcon } from '@mui/icons-material';
import teamImage from '../assets/result.svg';

const bulletPointsTop = [
  "Deep industry specialization: Our recruiters are experts in your field, understanding the specific skills, certifications, and experience required for success.",
  "Proactive talent pipeline development: We build and nurture a robust network of top talent, allowing us to respond quickly to your evolving needs.",
  "Customized talent solutions: We tailor our staffing services to your specific requirements, offering flexible solutions including Direct Hiring.",
  "Emphasis on cultural fit: We prioritize culture alignment, ensuring that candidates seamlessly integrate into your team.",
  "Dedicated client partnership: We are committed to building long-term relationships with our clients, providing ongoing support and communication.",
];

const bulletPointsBottom = [
  "Focus on employee retention: We don't just place talent; we help retain it by fostering a positive and productive work environment.",
  "Reduced time to hire: We accelerate the hiring process, minimizing downtime and maximizing productivity.",
  "Increased productivity and efficiency: We help you build a high-performing team that drives business growth.",
  "Reduced hiring cost: We optimize the recruitment process, saving you time and money.",
];

const HomeInfo = () => {
  return (
    <Box sx={{ py: { xs: 3, sm: 4, md: 6 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Lora, serif',
            fontWeight: 800,
            mb: { xs: 1, md: 1.5 },
            fontSize: { xs: '22px', sm: '26px', md: '32px' },
            textAlign: { xs: 'center', md: 'left' },
            letterSpacing: '0.5px',
          }}
        >
          <Box component="span" sx={{ color: '#FBB040' }}>WE PRODUCE </Box>
          <Box component="span" sx={{ color: '#1a237e' }}>RESULTS.</Box>
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            color: '#322E2E',
            mb: { xs: 3, md: 4 },
            lineHeight: { xs: 1.5, md: 1.7 },
            fontSize: { xs: '16px', sm: '17px', md: '18px' },
            fontWeight: "500",
            maxWidth: '1100px',
            textAlign: { xs: 'center', md: 'left' },
            mx: { xs: 'auto', md: 1 },
            px: { xs: 1, md: 0 },
          }}
        >
          We understand the impact of meeting your executive search needs. Our ability to deliver results to you, your company, and your stakeholders has made us a leader in the industry.
        </Typography>

        {/* Grid Layout: Image + Bullet Points */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          alignItems="flex-start"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' },
          }}
        >
          {/* Left Side: Bullet Points */}
          <Grid item xs={12} md={7.5}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Lora, sans-serif',
                fontSize: { xs: '18px', sm: '20px', md: '25px' },
                fontWeight: '800',
                color: '#192A56',
                mb: { xs: 1.5, md: 2 },
                textAlign: { xs: 'center', md: 'left' },
                letterSpacing: '0.3px',
              }}
            >
              Our Unique Approach
            </Typography>

            {bulletPointsTop.map((point, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: { xs: 1, md: 1.5 },
                  px: { xs: 0.5, md: 0 },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <DotIcon
                  sx={{
                    color: '#F6B93B',
                    fontSize: { xs: 8, md: 10 },
                    mt: { xs: '5px', md: '6px' },
                    mr: { xs: 1, md: 1.5 },
                    flexShrink: 0,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: { xs: '15px', sm: '16px', md: '18px' },
                    fontWeight: '500',
                    color: '#322E2E',
                    lineHeight: { xs: 1.4, md: 1.6 },
                    textAlign: { xs: 'left', md: 'inherit' },
                  }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Right Side: Image with Orange Corners */}
          <Grid item xs={12} md={4.5}>
            <Box sx={{ position: 'relative', width: '100%', mb: { xs: 3, md: 0 } }}>
              {/* Orange Top-Right Corner */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: { xs: '60px', sm: '80px', md: '150px' },
                  height: { xs: '60px', sm: '80px', md: '130px' },
                  borderTop: { xs: '5px', md: '7px' } + ' solid #F6B93B',
                  borderRight: { xs: '5px', md: '7px' } + ' solid #F6B93B',
                  zIndex: 2,
                }}
              />

              {/* Orange Bottom-Left Corner */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: { xs: '60px', sm: '80px', md: '150px' },
                  height: { xs: '60px', sm: '80px', md: '130px' },
                  borderBottom: { xs: '5px', md: '7px' } + ' solid #F6B93B',
                  borderLeft: { xs: '5px', md: '7px' } + ' solid #F6B93B',
                  zIndex: 2,
                }}
              />

              {/* Image */}
              <Box
                component="img"
                src={teamImage}
                alt="Team"
                sx={{
                  mt: { xs: 1.5, sm: 2, md: '70px' },
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section Under Image */}
        <Box sx={{ mt: { xs: 2, md: 3 } }}>
          {bulletPointsBottom.map((point, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: { xs: 0.75, md: 1 },
                px: { xs: 0.5, md: 0 },
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <DotIcon
                sx={{
                  color: '#F6B93B',
                  fontSize: { xs: 8, md: 10 },
                  mt: { xs: '5px', md: '6px' },
                  mr: { xs: 1, md: 1.5 },
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: { xs: '15px', sm: '16px', md: '18px' },
                  fontWeight: '500',
                  color: '#322E2E',
                  lineHeight: { xs: 1.3, md: 1.4 },
                  textAlign: { xs: 'left', md: 'inherit' },
                }}
              >
                {point}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeInfo;



