import React from "react";
import { Box, Typography } from "@mui/material";
import albania from "../images/Albania-map.jpg";
import croatia from "../images/croatia-map.jpg";
import macedonia from "../images/macedonia-map.jpg";
import { useLanguage } from "../contexts/LanguageContext";

function Careers() {
  const { currentTranslations } = useLanguage();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        p: { xs: 2, md: 4 },
      }}
    >
      {/* Maqedonia */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          mt: 8,
        }}
      >
        <Box
          component="img"
          src={macedonia}
          alt="Macedonia"
          sx={{
            width: { xs: "80%", sm: "40%", md: "30%" },
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
        <Typography
          sx={{
            width: { xs: "100%", md: "60%" },
            fontSize: "1.1rem",
            lineHeight: 1.6,
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 2, md: 0 },
          }}
        >
          {currentTranslations.aboutMacedonia}
        </Typography>
      </Box>

      {/* Shqipëria */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          gap: { xs: 3, md: 4 },
        }}
      >
        <Box
          component="img"
          src={albania}
          alt="Albania"
          sx={{
            width: { xs: "80%", sm: "25%", md: "22%" },
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
        <Typography
          sx={{
            width: { xs: "100%", md: "60%" },
            fontSize: "1.1rem",
            lineHeight: 1.6,
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 2, md: 0 },
            marginRight: { xs: 0, md: 10 },
          }}
        >
          {currentTranslations.aboutAlbania}
        </Typography>
      </Box>

      {/* Kroacia */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 3, md: 6 },
          pt: 4,
        }}
      >
        <Box
          component="img"
          src={croatia}
          alt="Croatia"
          sx={{
            width: { xs: "80%", sm: "40%", md: "30%" },
            borderRadius: 3,
            boxShadow: 3,
          }}
        />
        <Typography
          sx={{
            width: { xs: "100%", md: "60%" },
            fontSize: "1.1rem",
            lineHeight: 1.6,
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 2, md: 0 },
          }}
        >
         {currentTranslations.aboutKroacia}
        </Typography>
      </Box>
    </Box>
  );
}

export default Careers;
