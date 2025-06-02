import React,{useState} from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import contactimage from "../assets/contact.png";
import axios from "axios";
import { toast } from "react-toastify";

const states = ["Gujarat", "Delhi", "Mumbai", "Kolkata", "Bangalore", "Chennai"];

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      state: "",
      message: ""
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = async () => {
      try {
        await axios.post("https://itc-backend-241149078260.us-central1.run.app/api/contact/send-enquiry", formData);
        toast.success("Enquiry sent successfully!");
      } catch (err) {
        toast.error("Failed to send enquiry.");
      }
    };
  

  return (
    <Box sx={{ pb: { xs: 5, sm: 8, md: 10 }, overflowX: "hidden" }}>
      {/* Top Banner */}
      <Box
        sx={{
          backgroundColor: "#192A56",
          width: "100%",
          boxSizing: "border-box",
          height: {
            xs: "200px",    // mobile
            sm: "250px",    // tablet
            md: "300px",    // laptop
            lg: "360px"     // desktop (unchanged)
          },
          textAlign: "center",
          py: { xs: 2, sm: 3, md: 4, lg: 5 },
          px: { xs: 1.5, sm: 2, md: 2, lg: 2 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ 
            color: "#fff", 
            fontWeight: 500, 
            fontFamily: "Lora",
            fontSize: {
              xs: "20px",
              sm: "24px",
              md: "28px",
              lg: "32px"
            },
            mt: { xs: 2, sm: 3, md: 4 }
          }}
        >
          <span style={{ color: "#F7C04A" }}>HAVE</span> QUESTIONS?
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            mt: { xs: 1, sm: 1.5, md: 2 },
            fontSize: {
              xs: "13px",
              sm: "14px",
              md: "16px",
              lg: "18px"
            },
            maxWidth: { xs: "95%", sm: 600, md: 700, lg: 800 },
            mx: "auto",
            px: { xs: 1, sm: 2 },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          We're here to help. Reach out to us via email, phone, or the contact
          form, and we'll get back to you as soon as possible.
        </Typography>
      </Box>

      {/* Contact Box */}
      <Box
        sx={{
          maxWidth: "1274px",
          width: { xs: "95%", sm: "92%", md: "90%" },
          mx: "auto",
          mt: { xs: -5, sm: -7, md: -8, lg: -10 },
          position: "relative",
          zIndex: 2,
          borderRadius: { xs: "15px", sm: "20px" },
          backgroundColor: "#fff",
          boxShadow: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          overflow: "hidden",
        }}
      >
        {/* Left Side Image */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, sm: 3, md: 3.5, lg: 4 }, 
            height: {
              xs: "180px",
              sm: "200px",
              md: "100%"
            },
          }}
        >
          <img
            src={contactimage}
            alt="contact"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px 20px 0 0"
            }}
          />
        </Box>  

        {/* Right Side Form */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, sm: 3, md: 3.5, lg: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={{ xs: 1.5, sm: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                label="First Name" 
                variant="outlined" 
                size={isMobile ? "small" : "medium"} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth name ="lastName" value={formData.lastName} onChange={handleChange} label="Last Name" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth  name ="email" value={formData.email} onChange={handleChange} label="Email Id" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth  name ="contactNo" value={formData.contactNo} onChange={handleChange} label="Contact No." variant="outlined" size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField  name ="state" value={formData.state} onChange={handleChange} select label="State" fullWidth size="small">
                {states.map((state, index) => (
                  <MenuItem key={index} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name ="message" 
                value={formData.message}
                 onChange={handleChange}
                label="Message"
                variant="outlined"
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  backgroundColor: "#F7C04A",
                  color: "#000",
                  fontWeight: 600,
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  "&:hover": {
                    backgroundColor: "#e6ac2c",
                  },
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
