// import React from "react";
// import Slider from "react-slick";
// import { Box } from "@mui/material";
// import foto2 from "../images/foto2.jpg";
// import foto3 from "../images/foto3.jpg";
// import foto4 from "../images/foto4.jpg";
// import ourexperience from "../images/our-experience.jpg";
// import neww from "../images/new-photo.jpg";

// function PrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={className}
//       onClick={onClick}
//       style={{
//         display: "block",
//         position: "absolute",
//         left: "10px",
//         zIndex: 2,
//         fontSize: "40px",
//         cursor: "pointer",
//         color: "#333",
//         top: "45%",
//         transform: "translateY(-50%)",
//       }}
//     ></div>
//   );
// }

// function NextArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={className}
//       onClick={onClick}
//       style={{
//         display: "block",
//         position: "absolute",
//         right: "90px",
//         zIndex: 2,
//         fontSize: "40px",
//         cursor: "pointer",
//         color: "#333",
//         top: "45%",
//         transform: "translateY(-50%)",
//       }}
//     ></div>
//   );
// }

// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   centerMode: true,
//   centerPadding: "0",
//   prevArrow: <PrevArrow />,
//   nextArrow: <NextArrow />,
// };

// export default function ImageCarousel() {
//   return (
//     <Box
//       sx={{
//         width: "90%",
//         height: { xs: "300px", sm: "500px", md: "700px" },
//         margin: "0 auto",
//         marginTop: 6,
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <Slider {...sliderSettings}>
//         {[neww, foto2, foto3, foto4, ourexperience].map((foto, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               height: { xs: "300px", sm: "500px", md: "700px" },
//             }}
//           >
//             <img
//               src={foto}
//               alt={`Foto ${index + 1}`}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//               }}
//             />
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// }
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import foto2 from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpg";
import ourexperience from "../images/our-experience.jpg";
import neww from "../images/new-photo.jpg";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        left: "30px",
        top: "50%",
        transform: "translateY(-30%)",
        zIndex: 2,
        cursor: "pointer",
      }}
    >
      <HiChevronLeft size={80} color="#fff" />
    </div>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: "30px",
        top: "50%",
        transform: "translateY(-30%)",
        zIndex: 2,
        cursor: "pointer",
      }}
    >
      <HiChevronRight size={80} color="#fff" />
    </div>
  );
}
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  arrows: true,
  fade: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

export default function ImageCarousel() {
  const { currentTranslations } = useLanguage();
  const images = [neww, foto2, foto3, foto4, ourexperience];

  return (
    <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Slider {...sliderSettings}>
        {images.map((foto, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "100vh",
              backgroundImage: `url(${foto})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.45)",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: { xs: "40%", sm: "45%", md: "50%" },
                left: { xs: "5%", sm: "8%", md: "10%" },
                transform: "translateY(-50%)",
                color: "#fff",
                textAlign: "left",
                zIndex: 2,
                maxWidth: { xs: "90%", sm: "70%", md: "50%" },
              }}
            >
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    mb: 2,
                    fontSize: { xs: "14px", sm: "18px", md: "22px" },
                  }}
                >
                  Welcome to
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "750",
                    lineHeight: 1.1,
                    fontSize: { xs: "28px", sm: "42px", md: "52px" },
                    color: "#fff",
                    textTransform: "uppercase",
                    position: "relative",
                    display: "inline-block",
                    mb: 2,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-12px",
                      left: 0,
                      width: "60%",
                      height: "3px",
                      backgroundColor: "#00246B",
                      borderRadius: "2px",
                    },
                  }}
                >
                  Dauti-TransportShped
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mt: { xs: 1, sm: 3, md: 3 },
                    color: "#f0f0f0",
                    fontWeight: "400",
                    lineHeight: 1.4,
                    fontSize: { xs: "14px", sm: "17px", md: "20px" },
                    maxWidth: { xs: "95%", sm: "75%", md: "80%" },
                  }}
                >
                  {currentTranslations.homeTitle}
                </Typography>
              </motion.div>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
