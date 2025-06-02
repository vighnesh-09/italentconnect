
import React, { useState } from "react";
import { Box, Card, CardMedia, Grid, Typography, Button } from "@mui/material";

const initialVideoData = [
  { id: 1, title: "Business Meeting", src: "1.mp4" },
  { id: 2, title: "Team Collaboration", src: "2.mp4" },
  { id: 3, title: "Office Environment", src: "3.mp4" },
  { id: 4, title: "Presentation Skills", src: "4.mp4" },
  { id: 5, title: "Startup Pitch", src: "5.mp4" },
  { id: 6, title: "Product Demo", src: "6.mp4" },
  { id: 7, title: "Client Meeting", src: "7.mp4" },
  { id: 8, title: "Workplace Strategy", src: "8.mp4" }
];

const VideoSection = () => {
  const [videos, setVideos] = useState(initialVideoData);

  const handleMouseOver = (event) => {
    event.target.play();
  };

  const handleMouseOut = (event) => {
    event.target.pause();
    event.target.currentTime = 0;
  };



  return (
    <Box sx={{ padding: "50px 0", backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "30px", fontWeight: "bold" }}
      >
        Business Insights
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {videos.map((video) => (
          <Grid item key={video.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)"
                }
              }}
            >
              <CardMedia
                component="video"
                src={video.src}
                title={video.title}
                muted
                loop
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center", padding: "10px" }}
              >
                {video.title}
              </Typography>
             
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoSection;
