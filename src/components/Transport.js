import React from "react";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ImageCarousel from "./ImageCarousel";
import foto from "../images/about1.jpg";
export default function Transport() {
  const { currentTranslations } = useLanguage();

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", overflowX: "hidden" }}>
        <ImageCarousel homeTitle={currentTranslations.homeTitle} />
      </Box>

      {/* TEKST + FOTO */}
      <Box
        sx={{
          width: "100%",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 8 },
          py: 6,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            maxWidth: "1300px",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* MAJTAS – TEKSTI */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {currentTranslations.transportFleetTitle}
            </Typography>

            <Typography sx={{ mb: 3, color: "#555", lineHeight: 1.7 }}>
              {currentTranslations.transportFleetDesc}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 4,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            ></Box>

            <Feature
              icon={<SecurityIcon />}
              title={currentTranslations.cmrInsurance}
              desc={currentTranslations.cmrInsuranceDesc}
            />
            <Feature
              icon={<PublicIcon />}
              title={currentTranslations.europeanNetwork}
              desc={currentTranslations.europeanNetworkDesc}
            />
            <Feature
              icon={<HeadsetMicIcon />}
              title={currentTranslations.trackingSupport}
              desc={currentTranslations.trackingSupportDesc}
            />
          </Box>

          {/* DJATHTAS – FOTO */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              component="img"
              src={foto}
              alt="Transport"
              sx={{
                width: { xs: "100%", md: "80%" },
                maxWidth: "490px",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 2,
        alignItems: "flex-start",
        justifyContent: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box sx={{ color: "#1976d2", mt: "4px" }}>{icon}</Box>
      <Box>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
