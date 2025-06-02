import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import practice1 from "../assets/practice1.png"
import practice2 from "../assets/practice2.png"
import practice3 from "../assets/practice3.png"
import practice4 from "../assets/practice4.png"
import practice5 from "../assets/practice5.png"
import practice6 from "../assets/practice6.png"
import practice7 from "../assets/practice7.png"
import practice8 from "../assets/practice8.png"
import practice9 from "../assets/practice9.png"
import ContactSection from "./ContactSection";
import TestimonialPage from "./TestimonialPage";
const sections = [
  {
    id: "manufacturing-technology",
    title: "MANUFACTURING & TECHNOLOGY",
    content:
      "Advancing technology and automation have transformed manufacturing, increasing productivity – but also complexity. Companies now need executives to possess an advanced understanding of these complexities as well as the capabilities of the new technologies.",
    image: practice2,
  },
  {
    id: "service-distribution", title: "SERVICE / DISTRIBUTION",
    content: "In recent times, the service and distribution industries have undergone sudden and unexpected changes. Leaders in this industry must be responsive and nimble.",
    image: practice3,
  },
  {
    id: "accounting-finance",
    title: "ACCOUNTING / FINANCE",
    content: "Financial expertise is more crucial than ever in today’s rapidly evolving economy. Companies require leaders who can drive financial strategy and innovation.",
    image: practice4
  },
  {
    id: "financial-services-banking",
    title: "FINANCIAL SERVICE  / BANKING",
    content:
      "The financial services and banking sector is experiencing rapid digital transformation. Companies need leaders who can navigate regulatory complexities, drive innovation, and ensure financial security. With the right expertise, firms can thrive in a competitive and evolving market.",
    image: practice5,

  },
  {
    id: "private-equity", title: "PRIVATE EQUITY",
    content: " Growth in this industry has come through a gradual increase in scope of investin from traditional buyouts to distressed funding, venture capital funding and more  The technology boom has brought an increase in private equity firms as companies move to gain funding for expansion. Rapid expansion and a volatile environment create a need for the best possible talent to both manage investments and manage the companies in which they have invested.",
    image: practice6,
  },
  {
    id: "life-sciences",
    title: "LIFE SCIENCE",
    content: "Technological advances have led to breakthroughs in life sciences. Evolving models of healthcare, increasing patient expectations, and global competition add complexity. Leaders require a thorough understanding of consequences and the ability to make fast decisions.",
    image: practice7,

  },
  {
    id: "healthcare & medical",
    title: "HEALTHCARE & MEDICAL",
    content:
      "The healthcare industry is transforming rapidly as new delivery methods evolve due to consumer demand. Value-based healthcare is changing the face of the industry...",
    image: practice8,
  },
  {
    id: "insurance & invesment", title: "INSURANCE & INVESMENT",

    content: "New players in the insurance industry have brought increased competition, and leaders must be quick to identify and grasp opportunities to decrease their company’s risks. Leaders in this industry are looking to data mining and predictive analytics and modeling to increase their company’s competitive edge",
    image: practice9,
  },
];

export default function PracticeAreas() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
        const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight - 20;
        setTimeout(() => {
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: { xs: '220px', sm: '280px', md: '350px' },
          overflow: 'hidden',
          backgroundImage: `url(${practice1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 6 },
          textAlign: 'center',
          fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.8rem' }, // Adjusted font size for mobile
          fontWeight: 'bold',
           boxSizing: 'border-box',
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
        <Box sx={{ 
          position: 'relative', 
          zIndex: 2,
          color: "#192A56",
          fontFamily: "Lora",
          fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.8rem' } // Added responsive font size
        }}>
          Practice Areas
        </Box>
      </Box>

      <Container sx={{ my: 4 }} maxWidth="lg">
        {sections.map((section, index) => (
          <Box
            key={section.id}
            id={section.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
              alignItems: "center",
              gap: { xs: 3, sm: 4, md: 9 }, // Adjusted gap for better mobile spacing
              my: { xs: 3, sm: 4, md: 6 }, // Adjusted margin for mobile
              p: { xs: 1.5, sm: 2, md: 4 }, // Adjusted padding for mobile
              borderBottom: "1px solid #ddd",
              scrollMarginTop: "100px",
            }}
          >
            <Box
              component="img"
              src={section.image}
              alt={section.title}
              sx={{
                width: { xs: "100%", sm: "80%", md: "35%" }, // Adjusted image width for mobile
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
                '&:hover': { transform: "scale(1.05)" }
              }}
            />

            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography 
                variant="h4" 
                fontWeight={600} 
                sx={{ 
                  mb: { xs: 1, sm: 1.5, md: 2 }, 
                  fontFamily: "Lora",
                  color: "#192A56",
                  fontSize: { xs: '1.3rem', sm: '1.5rem', md: '2rem' } // Added responsive font size
                }}
              >
                <Box 
                  component="span" 
                  sx={{ 
                    color: "#F6B93B",
                    fontSize: { xs: '1.3rem', sm: '1.5rem', md: '2rem' } // Added responsive font size
                  }}
                >
                  {section.title.split(" ")[0]}
                </Box>{" "}
                {section.title.split(" ").slice(1).join(" ")}
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'black', 
                  mt: 1, 
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Added responsive font size
                  fontWeight: "500",
                  lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 } // Added responsive line height
                }}
              >
                {section.content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>

      <ContactSection />
      <TestimonialPage />
    </>
  );
}
