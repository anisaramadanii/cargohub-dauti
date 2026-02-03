import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useMediaQuery,
  Box,
} from "@mui/material";
import experiencePhoto from "../images/our-experience.jpg";
import insurance from "../images/foto5.jpg";
import customer from "../images/customer-service.jpg";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import director from "../images/director.jpg";
import director2 from "../images/director2.jpg";
import ImageCarousel from "./ImageCarousel";

export default function About() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { currentTranslations } = useLanguage();

  const cards = [
    {
      title: currentTranslations.ourExperience,
      image: experiencePhoto,
      description: currentTranslations.ourExperienceDesc,
    },
    {
      title: currentTranslations.goodsSafety,
      image: insurance,
      description: currentTranslations.goodsSafetyDesc,
    },
    {
      title: currentTranslations.customerService,
      image: customer,
      description: currentTranslations.customerServiceDesc,
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <ImageCarousel homeTitle={currentTranslations.homeTitle} />
      </Box>

      <div
        id="about-section"
        style={{
          padding: isMobile ? "20px" : "40px",
          marginTop: "30px",
          paddingBottom: "60px",
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          align="center"
          gutterBottom
          style={{
            fontWeight: "bold",
            fontSize: isMobile ? "30px" : "40px",
          }}
        >
          {currentTranslations.aboutTitle}
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          style={{
            fontSize: isMobile ? "16px" : "20px",
            color: "black",
          }}
        >
          "{currentTranslations.aboutSubtitle}"
        </Typography>

        {/* Drejtori 1 */}
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          justifyContent="center"
          gap={isMobile ? 2 : 4}
          marginTop={5}
          marginBottom={5}
        >
          <Box flexShrink={0}>
            <img
              src={director}
              alt="Director"
              style={{
                width: isMobile ? "100%" : "300px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box maxWidth={isMobile ? "100%" : "600px"}>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              style={{
                fontWeight: "bold",
                marginBottom: "15px",
                fontSize: isMobile ? "18px" : "22px",
              }}
            >
              Irfan Ramadani
            </Typography>
            <Typography
              variant={isMobile ? "body1" : "h6"}
              style={{ fontSize: isMobile ? "14px" : "16px", lineHeight: 1.6 }}
            >
              {currentTranslations.director}
            </Typography>
            <Typography
              variant={isMobile ? "body1" : "h6"}
              style={{
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: 1.6,
                marginTop: "10px",
              }}
            >
              {currentTranslations.thanks}
            </Typography>
          </Box>
        </Box>

        {/* Drejtori 2 */}
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          justifyContent="center"
          gap={isMobile ? 2 : 4}
          marginTop={5}
          marginBottom={5}
        >
          <Box flexShrink={0}>
            <img
              src={director2}
              alt="Director"
              style={{
                width: isMobile ? "100%" : "300px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box maxWidth={isMobile ? "100%" : "600px"}>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              style={{
                fontWeight: "bold",
                marginBottom: "15px",
                fontSize: isMobile ? "18px" : "22px",
              }}
            >
              Daim Ramadani
            </Typography>
            <Typography
              variant={isMobile ? "body1" : "h6"}
              style={{ fontSize: isMobile ? "14px" : "16px", lineHeight: 1.6 }}
            >
              {currentTranslations.director2}
            </Typography>
            <Typography
              variant={isMobile ? "body1" : "h6"}
              style={{
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: 1.6,
                marginTop: "10px",
              }}
            >
              {currentTranslations.thanks}
            </Typography>
          </Box>
        </Box>

        <Grid
          container
          spacing={isMobile ? 2 : 4}
          justifyContent="center"
          style={{ marginTop: "20px" }}
        >
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.1 },
                }}
              >
                <Card
                  style={{
                    width: isMobile ? "100%" : "400px",
                    height: isMobile ? "auto" : "660px",
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height={isMobile ? "220px" : "250px"}
                    image={card.image}
                    alt={card.title}
                    style={{ flexShrink: 0, objectFit: "cover" }}
                  />
                  <CardContent
                    style={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{
                        fontWeight: "bold",
                        marginBottom: "15px",
                        fontSize: "18px",
                        lineHeight: "1.2",
                        minHeight: "22px",
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        fontSize: isMobile ? "14px" : "15px",
                        flexGrow: 1,
                        lineHeight: "1.6",
                      }}
                    >
                      {card.description}
                    </Typography>

                    {index === 2 && (
                      <Button
                        component={RouterLink}
                        to="/careers"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2, alignSelf: "flex-start" }}
                      >
                        {currentTranslations.readMore}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
