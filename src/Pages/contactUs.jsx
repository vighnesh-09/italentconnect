import React, { useState } from "react";
import { Container, Grid, TextField, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import contactImage from "../assets/contact1.png"; // Replace with actual image path
import contact from "../assets/contact.webp"; // Replace with actual banner image path
import { toast } from "react-toastify";
import axios from "axios";

const ContactUs = () => {
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
    } catch {
      toast.error("Failed to send enquiry.");
    }
  };

  return (
    <Container disableGutters sx={{ maxWidth: '100%', padding: 0 }}>
      {/* Banner Section */}
      <Box
        sx={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          position: 'relative',
          height: { xs: '220px', sm: '280px', md: '350px' },
          overflow: 'hidden',
          backgroundImage: `url(${contact})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 6 },
          textAlign: 'center',
          fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.8rem' },
          fontWeight: 'bold',
          textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
          color: 'white',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(255, 193, 7, 0.5)',
            zIndex: 1,
          }}
        />
        <Box 
          sx={{ 
            position: 'relative', 
            zIndex: 2,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' }
          }}
        >
          Contact Us
        </Box>
      </Box>

      {/* Image Section Below Banner */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 2, md: 4 },
          mb: { xs: 2, md: 4 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          component="img"
          src={contactImage}
          alt="Contact Image"
          sx={{
            width: "100%",
            maxWidth: "1220px",
            borderRadius: "2px",
          }}
        />
      </Box>

      <Box
        sx={{
          textAlign: "left",
          maxWidth: "1394px",
          mt: { xs: 3, md: 6 },
          mb: { xs: 3, md: 6 },
          backgroundColor: '#192A56',
          borderRadius: '12px',
          p: { xs: 2, sm: 3, md: 6 },
          marginX: { xs: 2, md: 'auto' },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "Lora, serif",
            mb: 2,
            fontSize: { xs: '1.5rem', md: '2.25rem' },
          }}
        >
          <Box component="span" sx={{ color: "#F6B93B" }}>WE&apos;RE READY</Box> TO CONNECT!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#ccc",
            fontFamily: 'Poppins, sans-serif', 
            fontSize: { xs: '14px', md: "18px" }, 
            fontWeight: "500",
            mb: 4,
          }}
        >
          Whether you have a question, a business inquiry, or just want to say hello, we&apos;d love to hear from you.
          Fill out the form below, and we&apos;ll get back to you as soon as possible.
        </Typography>

        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              label="First Name"
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                '& .MuiInputBase-root': {
                  height: { xs: '44px', md: 'auto' },
                },
                '& .MuiInputLabel-root': {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
              InputProps={{
                sx: {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              label="Last Name"
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                '& .MuiInputBase-root': {
                  height: { xs: '44px', md: 'auto' },
                },
                '& .MuiInputLabel-root': {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
              InputProps={{
                sx: {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email Id"
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                '& .MuiInputBase-root': {
                  height: { xs: '44px', md: 'auto' },
                },
                '& .MuiInputLabel-root': {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
              InputProps={{
                sx: {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              label="Contact No."
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                '& .MuiInputBase-root': {
                  height: { xs: '44px', md: 'auto' },
                },
                '& .MuiInputLabel-root': {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
              InputProps={{
                sx: {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="state"
              value={formData.state}
              onChange={handleChange}
              label="State"
              select
              SelectProps={{ native: true }}
              variant="outlined"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                '& .MuiInputBase-root': {
                  height: { xs: '44px', md: 'auto' },
                },
                '& .MuiInputLabel-root': {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
              InputProps={{
                sx: {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
            >
              <option value=""></option>
              <option value="Gujarat">Gujarat</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
              <option value="Karnataka">Karnataka</option>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleChange}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                '& .MuiInputLabel-root': {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
              InputProps={{
                sx: {
                  fontSize: { xs: '0.875rem', md: '1rem' },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#F6B93B",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "2px",
                px: { xs: 3, md: 6 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: '0.875rem', md: '1rem' },
                '&:hover': {
                  backgroundColor: "#F6B93B",
                },
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Google Maps Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          width: "100vw",
          height: { xs: '250px', md: "400px" },
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          mt: { xs: 2, md: 5 },
          overflow: "hidden",
          borderRadius: 0,
          boxSizing: 'border-box',
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.442688650946!2d72.8374340750368!3d21.214287180481996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc789919359%3A0xdc8f1d468f830c77!2sMahek%20Icon!5e0!3m2!1sen!2sin!4v1742031715231!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  );
};

export default ContactUs;
