import React from "react";
import ImageCarousel from "./ImageCarousel";
import About from "./About";
import Careers from "./Careers";
import Contact from "./Contact";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      {/* Home */}
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
            fontSize: "40px",
            display: "inline-block", // Ky stil bëri që background-i të shtrihet vetëm mbi tekst
            backgroundColor: "#1e90ff", // Kjo është ngjyra e kaltër
            padding: "5px", // Për të shtuar një hapësirë rreth tekstit
          }}
        >
          Welcome to CargoHub Dauti
        </Typography>
      </Box>
      <ImageCarousel />

      {/* About */}
      <Box id="about-section" sx={{ paddingTop: "80px" }}>
        <About />
      </Box>

      {/* Careers */}
      <Box id="careers-section" sx={{ paddingTop: "80px" }}>
        <Careers />
      </Box>

      {/* Contact*/}
      <Box id="contact-section" sx={{ paddingTop: "80px" }}>
        <Contact />
      </Box>
    </div>
  );
}
