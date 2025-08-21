import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
// import foto1 from "../images/foto1.jpg";
import foto2 from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpg";
import ourexperience from "../images/our-experience.jpg";
import neww from "../images/new-photo.jpg";


function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        left: "10px",
        zIndex: 2,
        fontSize: "40px",
        cursor: "pointer",
        color: "#333",
        top: "45%",
        transform: "translateY(-50%)",
      }}
    ></div>
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "block",
        position: "absolute",
        right: "90px",
        zIndex: 2,
        fontSize: "40px",
        cursor: "pointer",
        color: "#333",
        top: "45%",
        transform: "translateY(-50%)",
      }}
    ></div>
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "0",
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

export default function ImageCarousel() {
  return (
    <Box
      sx={{
        width: "90%",
        height: { xs: "300px", sm: "500px", md: "700px" },
        margin: "0 auto",
        marginTop: 6,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Slider {...sliderSettings}>
        {[neww, foto2, foto3, foto4, ourexperience].map((foto, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: { xs: "300px", sm: "500px", md: "700px" },
            }}
          >
            <img
              src={foto}
              alt={`Foto ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
