// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";

// export default function Navbar() {
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
//             flexGrow: 4,
//             whiteSpace: "nowrap",
//             fontWeight: "bold",
//             fontSize: "30px",
//           }}
//         >
//           <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
//             CargoHub-Dauti
//           </Link>
//         </Typography>

//         <Box
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             gap: "40px",
//             fontSize: "30px",
//             fontWeight: "9px",
//           }}
//         >
//           <Link to="/home" style={{ textDecoration: "none" }}>
//             <Button
//               color="inherit"
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 color: "white",
//               }}
//             >
//               Home
//             </Button>
//           </Link>
//           <Link to="/about" style={{ textDecoration: "none" }}>
//             <Button
//               color="inherit"
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 color: "white",
//               }}
//             >
//               About
//             </Button>
//           </Link>
//           <Link to="/careers" style={{ textDecoration: "none" }}>
//             <Button
//               color="inherit"
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 color: "white",
//               }}
//             >
//               Careers
//             </Button>
//           </Link>
//           <Link to="/contact" style={{ textDecoration: "none" }}>
//             <Button
//               color="inherit"
//               style={{
//                 fontSize: "20px",
//                 fontWeight: "bold",
//                 color: "white",
//               }}
//             >
//               Contact
//             </Button>
//           </Link>
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
            flexGrow: 1,
            whiteSpace: "nowrap",
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "30px" }, // Adjusted font size for different screen sizes
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            CargoHub-Dauti
          </Link>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: { xs: "20px", sm: "40px" }, // Adjusted gap for mobile view
            fontSize: { xs: "18px", sm: "20px" }, // Adjusted font size for mobile view
          }}
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{
                fontSize: { xs: "16px", sm: "20px" }, // Font size adjustments for mobile view
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
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
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
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
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
              sx={{
                fontSize: { xs: "16px", sm: "20px" },
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
