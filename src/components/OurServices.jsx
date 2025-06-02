import React from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

// Sample services - Replace with your actual data
const services = [
  { id: "manufacturing-technology", 
    title: "Manufacturing & Technology", 
    content:
      "Advancing technology and automation have transformed manufacturing, increasing productivity – but also complexity. Companies now need executives to possess an advanced understanding of these complexities as well as the capabilities of the new technologies.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_013.jpg",
  },
  { id: "service-distribution", title: "Service / Distribution", 
    content: "In recent times, the service and distribution industries have undergone sudden and unexpected changes. Leaders in this industry must be responsive and nimble.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_018.jpg",
  },
  { id: "accounting-finance", 
    title: "Accounting / Finance", 
    content: "Financial expertise is more crucial than ever in today's rapidly evolving economy. Companies require leaders who can drive financial strategy and innovation.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_016.jpg"
  },
    {
    id: "financial-services-banking",
    title: "Financial Services / Banking",
    content:
      "The financial services and banking sector is experiencing rapid digital transformation. Companies need leaders who can navigate regulatory complexities, drive innovation, and ensure financial security. With the right expertise, firms can thrive in a competitive and evolving market.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_020.jpg",

  },
  {
    id: "private-equity", title: "Private Equity",
    content: " Growth in this industry has come through a gradual increase in scope of investin from traditional buyouts to distressed funding, venture capital funding and more  The technology boom has brought an increase in private equity firms as companies move to gain funding for expansion. Rapid expansion and a volatile environment create a need for the best possible talent to both manage investments and manage the companies in which they have invested.",
    image: 'https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_08.jpg',
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    content: "Technological advances have led to breakthroughs in life sciences. Evolving models of healthcare, increasing patient expectations, and global competition add complexity. Leaders require a thorough understanding of consequences and the ability to make fast decisions.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_03.jpg",

  },
  {
    id: "healthcare",
    title: "Healthcare",
    content:
      "The healthcare industry is transforming rapidly as new delivery methods evolve due to consumer demand. Value-based healthcare is changing the face of the industry...",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_05.jpg",
  },
  {
    id: "insurance", title: "Insurance",

    content: "New players in the insurance industry have brought increased competition, and leaders must be quick to identify and grasp opportunities to decrease their company's risks. Leaders in this industry are looking to data mining and predictive analytics and modeling to increase their company's competitive edge",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_010.jpg",
  },
];

const OurServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: '#192A56',
        color: '#fff',
        py: { xs: 4, sm: 6, md: 8 },
        fontFamily: 'Lora, serif',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h5" : "h4"}
          align="center"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Lora, serif',
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
          }}
        >
          <span style={{ color: '#F2BC38' }}>OUR</span> PRACTICE AREA
        </Typography>

        <Typography
          variant="body1"
          align="center"
          mt={2}
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            fontFamily: 'Poppins, sans-serif',
            fontWeight: "500",
            px: { xs: 2, sm: 0 }
          }}
        >
          Explore our wide range of services designed to meet your business needs.
        </Typography>

        {/* Scrollable card section */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 3 },
            mt: { xs: 4, sm: 5, md: 6 },
            px: { xs: 0.5, sm: 1 },
            pb: 2,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            cursor: 'grab',
            '&::-webkit-scrollbar': {
              height: 0,
            },
            WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
            scrollSnapType: 'x mandatory', // Snap scrolling
          }}
          onWheel={(e) => {
            if (!isMobile) {
              e.currentTarget.scrollLeft += e.deltaY;
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.03 }}
              style={{
                minWidth: isMobile ? 260 : isTablet ? 280 : 300,
                backgroundColor: '#fff',
                overflow: 'hidden',
                color: '#000',
                textAlign: 'center',
                fontFamily: 'Lora, serif',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                scrollSnapAlign: 'start', // Snap scrolling
                flexShrink: 0,
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ 
                  width: '100%', 
                  height: isMobile ? '180px' : '220px', 
                  objectFit: 'cover' 
                }}
              />
              <Box
                sx={{
                  backgroundColor: '#F2BC38',
                  py: { xs: 1, sm: 1.5 },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: 'Lora',
                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
                    fontWeight: "600",
                    px: { xs: 1, sm: 2 }
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;
