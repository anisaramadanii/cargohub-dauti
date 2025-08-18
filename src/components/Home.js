import React from "react";
import ImageCarousel from "./ImageCarousel";
import About from "./About";
// import Careers from "./Careers";
import Contact from "./Contact";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { currentTranslations } = useLanguage();

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
          variant="h1"
          sx={{
            marginTop: "30px",
            color: "#CADCFC",
            fontWeight: "bold",
            fontSize: { xs: "22px", sm: "25px", md: "34px" },
            display: "inline-block",
            backgroundColor: "#00246B",
            padding: { xs: "3px", sm: "5px" },
          }}
        >
          {currentTranslations.homeTitle}
        </Typography>
      </Box>
      <ImageCarousel />

      <Box id="about-section" sx={{ paddingTop: { xs: "50px", md: "80px" } }}>
        <About />
      </Box>

      {/* <Box id="careers-section" sx={{ paddingTop: { xs: "50px", md: "80px" } }}>
        <Careers />
      </Box> */}

      <Box id="contact-section" sx={{ paddingTop: { xs: "50px", md: "80px" } }}>
        <Contact />
      </Box>
    </div>
  );
}
