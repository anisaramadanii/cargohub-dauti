// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

// export default function Navbar() {
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 80, // Zbritje për navbar-in
//         behavior: "smooth", // Efekti i skrollimit të qetë
//       });
//     }
//   };

//   return (
//     <AppBar
//       position="fixed"
//       color="primary"
//       sx={{
//         top: 0,
//         width: "100%",
//         zIndex: 1300,
//       }}
//     >
//       <Toolbar>
//         <Typography
//           variant="h6"
//           sx={{
//             flexGrow: 1,
//             whiteSpace: "nowrap",
//             fontWeight: "bold",
//             fontSize: "25px",
//           }}
//         >
//           CargoHub-Dauti
//         </Typography>

//         <Box style={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
//           <Button
//             color="inherit"
//             onClick={() => handleScroll("home-section")} // Përdorimi i id të seksionit
//             style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
//           >
//             Home
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => handleScroll("about-section")}
//             style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
//           >
//             About
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => handleScroll("careers-section")}
//             style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
//           >
//             Careers
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => handleScroll("contact-section")}
//             style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
//           >
//             Contact
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        top: 0,
        width: "100%",
        zIndex: 1300,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 4,
            whiteSpace: "nowrap",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          CargoHub-Dauti
        </Typography>

        <Box style={{ display: "flex", justifyContent: "flex-end", gap: "40px", fontSize: "30px", fontWeight: "9px", }}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              About
            </Button>
          </Link>
          <Link to="/careers" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Careers
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Contact
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
