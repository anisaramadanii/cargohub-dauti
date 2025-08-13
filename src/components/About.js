import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, useMediaQuery } from "@mui/material";
import experiencePhoto from "../images/our-experience.jpg";
import insurance from "../images/foto5.jpg";
import customer from "../images/customer-service.jpg";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

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
      image: insurance ,
      description: currentTranslations.goodsSafetyDesc,
    },
    {
      title: currentTranslations.customerService,
      image: customer,
      description: currentTranslations.customerServiceDesc,
    },
  ];

  return (
    <div
      id="about-section"
      style={{
        padding: isMobile ? "20px" : "40px",
        marginTop: "30px",
        paddingBottom: "50px",
      }}
    >
      <hr
        style={{
          marginBottom: "90px",
          color: "white",
          marginTop: "-75px",
        }}
      />
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
                  height: isMobile ? "auto" : "550px", 
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
                    component="div"
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
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
