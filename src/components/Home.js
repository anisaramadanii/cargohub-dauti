import React from "react";
import ImageCarousel from "./ImageCarousel";
import About from "./About";
import Careers from "./Careers";
import Contact from "./Contact";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>

      <Box
        id="home-section"
        sx={{
          paddingTop: "80px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginTop: "30px",
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "28px", sm: "35px", md: "40px" },
            display: "inline-block",
            backgroundColor: "#1e90ff",
            padding: { xs: "3px", sm: "5px" }, 
          }}
        >
          Welcome to CargoHub Dauti
        </Typography>
      </Box>
      <ImageCarousel />

      <Box id="about-section" sx={{ paddingTop: { xs: "50px", md: "80px" } }}>
        <About />
      </Box>


      <Box id="careers-section" sx={{ paddingTop: { xs: "50px", md: "80px" } }}>
        <Careers />
      </Box>


      <Box id="contact-section" sx={{ paddingTop: { xs: "50px", md: "80px" } }}>
        <Contact />
      </Box>
    </div>
  );
}
