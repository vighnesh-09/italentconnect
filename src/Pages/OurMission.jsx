import React from "react";
import { Box, Grid, Typography, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const WhoWeAreSection = () => {
  return (
    <Box
      sx={{
        width: "100vw", // Full width to avoid horizontal overflow
        maxWidth: "100%",
        overflowX: "hidden",
        overflowY: "hidden", // Prevent vertical scroll from padding/margin
        background: "linear-gradient(135deg, #f0f0f0, #dcdcdc)",
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 10 },
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Who We Are
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth="800px"
          mx="auto"
        >
          Empowering businesses with top-tier talent and driving career growth
          through personalized recruitment solutions.
        </Typography>
      </motion.div>

      {/* Main Content Section */}
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={2}>
              <strong>Ideal Talent Connect Pvt. Ltd.</strong> is committed to
              creating seamless and impactful recruitment experiences. We
              specialize in matching top-tier talent with leading organizations
              through tailored, data-driven strategies.
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              Our dedication to quality, transparency, and trust has made us a
              preferred partner for businesses seeking skilled professionals and
              candidates striving for career growth.
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Our Vision
            </Typography>
            <Typography variant="body1" color="text.secondary">
              To be the premier talent partner in all industries, recognized for
              our expertise, and commitment to client success.
            </Typography>
          </motion.div>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardMedia
              component="img"
              image="38.jpg"
              alt="Who We Are"
              sx={{
                width: "100%",
                maxHeight: { xs: 300, sm: 350, md: 400 },
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "transform 0.4s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAreSection;
