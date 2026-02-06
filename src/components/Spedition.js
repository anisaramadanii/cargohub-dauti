import React from "react";
import { Box, Typography } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";
import ImageCarousel from "./ImageCarousel";
import foto from "../images/foto3.jpg";
import background from "../images/background.jpg";
import DescriptionIcon from "@mui/icons-material/Description";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import GavelIcon from "@mui/icons-material/Gavel";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CategoryIcon from "@mui/icons-material/Category";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function Spedition() {
  const { currentTranslations } = useLanguage();

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* CAROUSEL */}
      <Box>
        <ImageCarousel homeTitle={currentTranslations.homeTitle} />
      </Box>

      {/* TEKST + FOTO */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 8 },
          py: 6,
          overflow: "hidden",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.1)",
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1300px",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: "center",
            gap: { xs: 4, md: 10 },
            pr: { md: 4 },
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {currentTranslations.speditionTitle}
            </Typography>

            <Typography sx={{ mb: 3, color: "#555", lineHeight: 1.7 }}>
              {currentTranslations.speditionText}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {currentTranslations.branchesTitle}
            </Typography>

            <ul>
              {currentTranslations.branches.map((branch, i) => (
                <li key={i}>{branch}</li>
              ))}
            </ul>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              pr: { md: 8 },
            }}
          >
            <Box
              component="img"
              src={foto}
              alt="Shpedicion"
              sx={{
                width: { xs: "100%", md: "100%" },
                height: "auto",
                maxWidth: "580px",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* PROCESET / SHËRBIMET ME BACKGROUND */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 8 },
          py: 6,
          overflow: "hidden",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.05)",
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1300px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            {currentTranslations.speditionProcessTitle}
          </Typography>

          <Typography
            textAlign="center"
            sx={{ maxWidth: "800px", mx: "auto", mb: 6, color: "#555" }}
          >
            {currentTranslations.speditionProcessSubtitle}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 4,
            }}
          >
            {[
              {
                icon: <DescriptionIcon />,
                title: currentTranslations.serviceDocsTitle,
                text: currentTranslations.serviceDocsText,
              },
              {
                icon: <ImportExportIcon />,
                title: currentTranslations.serviceImportExportTitle,
                text: currentTranslations.serviceImportExportText,
              },
              {
                icon: <GavelIcon />,
                title: currentTranslations.serviceCustomsTitle,
                text: currentTranslations.serviceCustomsText,
              },
              {
                icon: <FactCheckIcon />,
                title: currentTranslations.serviceControlTitle,
                text: currentTranslations.serviceControlText,
              },
              {
                icon: <CategoryIcon />,
                title: currentTranslations.serviceClassificationTitle,
                text: currentTranslations.serviceClassificationText,
              },
              {
                icon: <VerifiedIcon />,
                title: currentTranslations.serviceCertificatesTitle,
                text: currentTranslations.serviceCertificatesText,
              },
              {
                icon: <AccountBalanceIcon />,
                title: currentTranslations.serviceDisputesTitle,
                text: currentTranslations.serviceDisputesText,
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "14px",
                  p: 4,
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#1976d2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                    color: "#fff",
                    fontSize: 32,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>

                <Typography sx={{ color: "#666", fontSize: "0.95rem" }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
