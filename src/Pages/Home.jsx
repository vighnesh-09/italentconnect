import React from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Tooltip,
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // PDF Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Slider from '../components/Slider';
import TestimonialPage from '../components/TestimonialPage';
import AboutITC from '../components/AboutITC';
import HomeInfo from '../components/HomeInfo'
import OurCoreValue from '../components/OurCoreValue';
import PracticeAreas from '../components/OurServices';
import AdvantagesSection from '../components/AdvantagesSection';
import ContactSection from '../components/ContactSection';
import BlogSpotSection from '../components/Blog';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  // PDF Download Handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'br.pdf'; // 👈 PDF ka path
    link.download = 'Company_Brochure.pdf';
    link.click();
  };

  return (
    <>
      {/* Responsive Brochure Section */}
      <Box
        sx={{
          position: 'fixed',
          top: '93%',
          left: 0,
          transform: 'translateY(-50%)',
          background: '#FF9800',
          color: '#fff',
          padding: isMobile ? '8px' : '12px 18px',
          borderRadius: '0 10px 10px 0',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': { background: '#f57c00' },
        }}
        onClick={handleDownload}
      >
        {isMobile ? (
          <Tooltip title="Download Brochure" arrow>
            <IconButton color="inherit">
              <PictureAsPdfIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>
        ) : (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <PictureAsPdfIcon sx={{ fontSize: 28 }} /> Download Brochure
          </Typography>
        )}
      </Box>

      <Slider />
      <AboutITC/>
      <PracticeAreas />
      <HomeInfo/>
      <OurCoreValue />
      <AdvantagesSection/>
      
      <TestimonialPage />
      <ContactSection/>
      <BlogSpotSection/>
      

      {/* WhatsApp Floating Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: isMobile ? '10px' : '20px',
          right: isMobile ? '10px' : '40px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          background: '#25D366',
          color: '#fff',
          borderRadius: '50px',
          padding: isMobile ? '8px 12px' : '12px 20px',
          boxShadow: 3,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': { background: '#1ebe57' },
          marginRight: '50px',
          marginBottom: '20px',
        }}
        onClick={() => window.open('https://wa.me/919904501115', '_blank')}
      >
        <WhatsAppIcon sx={{ fontSize: isMobile ? 24 : 30 }} />
        {!isMobile && (
          <Typography sx={{ fontWeight: 'bold' }}>Hello</Typography>
        )}
      </Box>
    </>
  );
};

export default Home;
