import { Box, Grid, Typography, IconButton, Container, useMediaQuery, Link as MuiLink } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp, Phone, Mail } from "@mui/icons-material";
import logo from "../assets/layer.svg";
 
const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
 
  return (
    <Box sx={{
      backgroundColor: "#192A56",
      color: "#fff",
      pt: isMobile ? 2 : 4,
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 2 : 4} pb={isMobile ? 2 : 4}>
          {/* Logo & About Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Box sx={{ mb: isMobile ? 1 : 2, textAlign: isMobile ? 'center' : 'left' }}>
                <img
                  src={logo}
                  alt="Ideal Talent Connect Logo"
                  style={{ width: isMobile ? "100px" : "180px", height: "auto" }}
                />
              </Box>
 
              <Typography variant="body2" sx={{
                mt: isMobile ? 1 : 2,
                lineHeight: 1.5,
                fontFamily: "Poppins,sans-serif",
                fontSize: isMobile ? "12px" : "16px",
                fontWeight: "400",
                textAlign: isMobile ? 'center' : 'left'
              }}>
                Connecting Talent With Opportunities...
              </Typography>
 
              {/* Remove the existing contact box for mobile view */}
              {isMobile && (
                <Box sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  px: isMobile ? 1 : 2,
                  py: isMobile ? 1 : 1.5,
                  mt: { xs: 2, md: 12 },
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <Phone sx={{ color: "#f5b21d", mr: isMobile ? 0 : 1.5, mb: isMobile ? 0.5 : 0, fontSize: isMobile ? "20px" : "24px" }} />
                  <Box>
                    <MuiLink href="tel:+919904501115" underline="none">
                      <Typography variant="body2" sx={{
                        color: "#333",
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: isMobile ? "13px" : "16px"
                      }}>
                        +91 99045 01115
                      </Typography>
                    </MuiLink>
                    <Typography variant="subtitle2" sx={{
                      fontWeight: 600,
                      color: "#0b1e49",
                      fontFamily: "Lora",
                      fontSize: isMobile ? "11px" : "14px"
                    }}>
                      Give us a call
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
 
          {/* Useful Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{
              fontWeight: 700,
              color: "#f5b21d",
              mb: isMobile ? 1 : 1.5,
              fontFamily: "Lora",
              fontSize: isMobile ? "16px" : "20px",
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Useful Links
            </Typography>
            <Grid container spacing={isMobile ? 1 : 2}>
              <Grid item xs={6} sm={6}>
                {[
                  { text: "Home", href: "/" },
                  { text: "About Us", href: "/about" },
                  { text: "Services", href: "/service" },
                  { text: "Job Opening", href: "/open-job" },
                  { text: "Practice Areas", href: "/practice-areas" },
                ].map((link, i) => (
                  <MuiLink
                    key={i}
                    href={link.href}
                    underline="none"
                    sx={{
                      color: "#fff",
                      pl: isMobile ? 1 : 0,
                      display: "block",
                      '&:hover': {
                        color: "#F6B93B"
                      }
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mb: isMobile ? 1 : 0.8,
                        fontFamily: "Poppins, sans-serif",
                        fontSize: isMobile ? "12px" : "15px",
                        fontWeight: "400",
                        transition: "0.3s ease",
                        '&:hover': {
                          pl: isMobile ? 0.5 : 0
                        }
                      }}
                    >
                      {link.text}
                    </Typography>
                  </MuiLink>
                ))}
              </Grid>
              <Grid item xs={6} sm={6}>
                <Box sx={{ height: { xs: 0, md: "20px" } }} />
                {[
                  { text: "Contact Us", href: "/contactUs" },
                  { text: "Terms and Conditions", href: "#" },
                  { text: "Privacy Policy", href: "#" },
                ].map((link, i) => (
                  <MuiLink
                    key={i}
                    href={link.href}
                    underline="none"
                    sx={{
                      color: "#fff",
                      pl: isMobile ? 1 : 0,
                      display: "block",
                      '&:hover': {
                        color: "#F6B93B"
                      }
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        mb: isMobile ? 1 : 0.8,
                        fontFamily: "Poppins, sans-serif",
                        fontSize: isMobile ? "12px" : "15px",
                        fontWeight: "400",
                        transition: "0.3s ease",
                        '&:hover': {
                          pl: isMobile ? 0.5 : 0
                        }
                      }}
                    >
                      {link.text}
                    </Typography>
                  </MuiLink>
                ))}
              </Grid>
            </Grid>
 
            {/* Remove the existing mail contact box */}
            {isMobile && (
              <Box sx={{ backgroundColor: "#fff", borderRadius: 2, display: "flex", alignItems: "center", px: 2, py: 1.5, mt: { xs: 3, md: 4 } }}>
                <Mail sx={{ color: "#f5b21d", mr: 1.5, fontSize: isMobile ? "20px" : "24px" }} />
                <Box>
                  <MuiLink href="mailto:admin@italentconnect.com" underline="none">
                    <Typography variant="body2" sx={{ color: "#333", fontFamily: "Lora", fontSize: isMobile ? "13px" : "16px" }}>
                      admin@italentconnect.com
                    </Typography>
                  </MuiLink>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#0b1e49", fontFamily: "Lora", fontSize: isMobile ? "11px" : "14px" }}>
                    Give us a Mail
                  </Typography>
                </Box>
              </Box>
            )}
          </Grid>
 
          {/* Social Media and Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{
              fontWeight: 700,
              color: "#f5b21d",
              mb: isMobile ? 1 : 1.5,
              fontFamily: "Poppins",
              fontSize: isMobile ? "16px" : "20px",
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Follow Us
            </Typography>
           
            <Box sx={{
              display: "flex",
              gap: 1,
              mb: 2,
              flexWrap: "wrap",
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              {[
                { icon: <Facebook />, href: "https://www.facebook.com/profile.php?id=61574087487969" },
                { icon: <Instagram />, href: "https://instagram.com" },
                { icon: <WhatsApp />, href: "https://wa.me/919904501115" },
                { icon: <Twitter />, href: "https://twitter.com" },
                { icon: <LinkedIn />, href: "https://linkedin.com" },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#0b1e49",
                    padding: isMobile ? "6px" : "8px",
                    "&:hover": { backgroundColor: "#f5b21d", color: "#fff" },
                    "& .MuiSvgIcon-root": {
                      fontSize: isMobile ? "18px" : "20px"
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
 
            <Typography variant="h5" sx={{
              fontWeight: 700,
              color: "#f5b21d",
              mb: 1.5,
              fontFamily: "Poppins",
              fontSize: isMobile ? "16px" : "20px",
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Get In Touch
            </Typography>
 
            <Typography variant="body2" sx={{
              fontFamily: "Poppins",
              fontSize: isMobile ? "12px" : "15px",
              textAlign: isMobile ? 'center' : 'left',
              mb: 2,
              lineHeight: 1.5
            }}>
              <strong>Address :</strong> 123, Mahek Icon, Sumul Dairy Road, Near Railway Station, Surat - 395004.
            </Typography>
             {/* Remove the existing WhatsApp contact box */}
             {isMobile && (
               <Box sx={{
                 backgroundColor: "#fff",
                 borderRadius: 2,
                 display: "flex",
                 alignItems: "center",
                 px: 2,
                 py: 1.5,
                 mt: { xs: 2, md: 4 },
                 flexDirection: isMobile ? 'column' : 'row',
                 textAlign: isMobile ? 'center' : 'left'
               }}>
                 <WhatsApp sx={{ color: "#f5b21d", mr: isMobile ? 0 : 1.5, mb: isMobile ? 0.5 : 0, fontSize: isMobile ? "20px" : "24px" }} />
                 <Box>
                   <MuiLink href="https://wa.me/919904501115" underline="none" target="_blank" rel="noopener noreferrer">
                     <Typography variant="body2" sx={{
                       color: "#333",
                       fontFamily: "Poppins",
                       fontSize: isMobile ? "13px" : "16px"
                     }}>
                       +91 99045 01115
                     </Typography>
                   </MuiLink>
                   <Typography variant="subtitle2" sx={{
                     fontWeight: 700,
                     color: "#0b1e49",
                     fontFamily: "Poppins",
                     fontSize: isMobile ? "11px" : "14px"
                   }}>
                     Message us on WhatsApp
                   </Typography>
                 </Box>
               </Box>
             )}
          </Grid>
        </Grid>

        {/* New Contact Buttons Section - Added just before Copyright */}
        {!isMobile && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mb: 4,
            width: '100%',
              // borderTop: '1px solid rgba(255,255,255,0.1)',
              // paddingTop: 4,
          }}>
            <Box 
              sx={{
                backgroundColor: "#fff", 
                borderRadius: 2, 
                display: "flex", 
                alignItems: "center", 
                px: 2, 
                py: 1.5,
                width: '33%',
              }}
            >
              <Phone sx={{ color: "#f5b21d", mr: 1.5, fontSize: "24px" }} />
              <Box>
                <MuiLink href="tel:+919904501115" underline="none">
                  <Typography variant="body2" sx={{ color: "#333", fontFamily: "Lora", fontSize: "16px" }}>
                    +91 99045 01115
                  </Typography>
                </MuiLink>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#0b1e49", fontFamily: "Lora", fontSize: "14px" }}>
                  Give us a call
                </Typography>
              </Box>
            </Box>

            <Box 
              sx={{
                backgroundColor: "#fff", 
                borderRadius: 2, 
                display: "flex", 
                alignItems: "center", 
                px: 2, 
                py: 1.5,
                width: '33%',
              }}
            >
              <Mail sx={{ color: "#f5b21d", mr: 1.5, fontSize: "24px" }} />
              <Box>
                <MuiLink href="mailto:admin@italentconnect.com" underline="none">
                  <Typography variant="body2" sx={{ color: "#333", fontFamily: "Lora", fontSize: "16px" }}>
                    admin@italentconnect.com
                  </Typography>
                </MuiLink>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#0b1e49", fontFamily: "Lora", fontSize: "14px" }}>
                  Give us a Mail
                </Typography>
              </Box>
            </Box>

            <Box 
              sx={{
                backgroundColor: "#fff", 
                borderRadius: 2, 
                display: "flex", 
                alignItems: "center", 
                px: 2, 
                py: 1.5,
                width: '33%',
              }}
            >
              <WhatsApp sx={{ color: "#f5b21d", mr: 1.5, fontSize: "24px" }} />
              <Box>
                <MuiLink href="https://wa.me/919904501115" underline="none" target="_blank" rel="noopener noreferrer">
                  <Typography variant="body2" sx={{ color: "#333", fontFamily: "Lora", fontSize: "16px" }}>
                    +91 99045 01115
                  </Typography>
                </MuiLink>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#0b1e49", fontFamily: "Lora", fontSize: "14px" }}>
                  Give us a Whatsapp
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* Copyright Section */}
        <Box sx={{
          backgroundColor: "#f5b21d",
          textAlign: "center",
          py: isMobile ? 0.6 : 1,
        }}>
          <Container maxWidth="lg">
            <Typography variant="body2" sx={{
              color: "#192A56",
              fontFamily: 'Poppins, sans-serif',
              fontSize: isMobile ? "10px" : "14px",
              lineHeight: 1.3
            }}>
              Copyright © {new Date().getFullYear()}, All Right Reserved by{" "}
              <strong>Ideal Talent Connect Private Limited.</strong>
            </Typography>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};
 
export default Footer;