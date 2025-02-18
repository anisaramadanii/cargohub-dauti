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
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
            fontSize: { xs: "20px", sm: "30px" }, // Responsive font size
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            CargoHub-Dauti
          </Link>
        </Typography>

        {/* Hamburger Menu for Mobile */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" }, // Hide on small screens
            justifyContent: "flex-end",
            paddingRight: "40px",
            gap: "20px",
          }}
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              About
            </Button>
          </Link>
          <Link to="/careers" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Careers
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Contact
            </Button>
          </Link>
        </Box>
      </Toolbar>

      {/* Mobile Drawer (Hamburger Menu) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: "200px",
            paddingTop: "60px", // Shton hapësirë lart që butoni "Home" të duket mirë
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Alinjon butonat majtas
            paddingLeft: "15px",
          }}
          role="presentation"
        >
          <List>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link to="/home" style={{ textDecoration: "none", width: "100%" }}>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onClick={toggleDrawer}
                >
                  Home
                </Button>
              </Link>
            </ListItem>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link to="/about" style={{ textDecoration: "none", width: "100%" }}>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onClick={toggleDrawer}
                >
                  About
                </Button>
              </Link>
            </ListItem>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link to="/careers" style={{ textDecoration: "none", width: "100%" }}>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onClick={toggleDrawer}
                >
                  Careers
                </Button>
              </Link>
            </ListItem>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link to="/contact" style={{ textDecoration: "none", width: "100%" }}>
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onClick={toggleDrawer}
                >
                  Contact
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
