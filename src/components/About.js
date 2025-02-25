import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, useMediaQuery } from "@mui/material";
import experiencePhoto from "../images/our-experience.jpg";
import insurance from "../images/insurance.jpg";
import customer from "../images/customer-service.jpg";
import { motion } from "framer-motion";

export default function About() {
  const [activeCard, setActiveCard] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const cards = [
    {
      title: "Our Experience",
      image: experiencePhoto,
      description:
        "The market needs in a not-so-economically developed country led to the development of a business idea as a result of the existing market opportunities. Precisely in 2003, a partnership was established between the Dauti and Ramadani brothers, which today stands as one of the companies with the highest gross profit in the country. Our company has over 20 years of experience in importing and exporting various goods across different countries.",
    },
    {
      title: "Goods safety",
      image: insurance,
      description:
        "Goods safety is our top priority. Our use of advanced technology and modern equipment allows us to monitor every stage of the journey, ensuring timely and damage-free deliveries. This commitment to quality and reliability has earned us a reputation as a trusted leader in the market. Additionally, our dedication to continuous improvement guarantees an advanced system that provides full protection and reliability for every shipment.",
    },
    {
      title: "Customer Service",
      image: customer,
      description:
        "Our dedicated team is committed to offering exceptional support and fast solutions for our clients. We prioritize customer satisfaction by providing clear communication, addressing concerns promptly, and offering tailored assistance to meet individual needs. With a focus on efficiency and reliability, we ensure that every client receives the attention and care they deserve, helping them navigate any challenges with ease.",
    },
  ];

  return (
    <div id="about-section" style={{ padding: isMobile ? "20px" : "40px", marginTop: "30px", paddingBottom: "50px" }}>
      <hr style={{ marginBottom: "100px", color: "white", marginTop: "-75px" }} />
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        gutterBottom
        style={{ fontWeight: "bold", fontSize: isMobile ? "30px" : "40px" }}
      >
        About Dauti-Transport-Shped
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        style={{ fontSize: isMobile ? "16px" : "20px" }}
      >
        "We offer transportation and logistics services with high standards for our clients."
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
              whileHover={{ scale: activeCard === index ? 1.05 : 1.02, transition: { duration: 0.1 } }}
              animate={{
                scale: activeCard === index ? 1.1 : 1,
                transition: { duration: 0.4 },
              }}
              onClick={() => handleCardClick(index)}
            >
              <Card style={{ maxWidth: isMobile ? "100%" : "400px", margin: "auto" }}>
                <CardMedia
                  component="img"
                  height={isMobile ? "250px" : "350px"}
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ fontSize: isMobile ? "14px" : "16px" }}>
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

