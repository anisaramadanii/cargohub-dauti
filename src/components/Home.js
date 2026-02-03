import React from "react";
import ImageCarousel from "./ImageCarousel";
import Contact from "./Contact";
import { Box } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const { currentTranslations } = useLanguage();

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <ImageCarousel homeTitle={currentTranslations.homeTitle} />
      
       <Box id="contact-section" sx={{ paddingTop: { xs: "50px", md: "80px" } }}>
        <Contact />
      </Box>
    </Box>
  );
}

