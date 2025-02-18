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

  const menuItems = (
    <>
      <List>
        <ListItem>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button color="inherit">Home</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button color="inherit">About</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/careers" style={{ textDecoration: "none" }}>
            <Button color="inherit">Careers</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button color="inherit">Contact</Button>
          </Link>
        </ListItem>
      </List>
    </>
  );

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
            fontSize: "30px",
            fontWeight: "9px",
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
            width: "250px",
            paddingTop: "20px",
          }}
          role="presentation"
        >
          {menuItems}
        </Box>
      </Drawer>
    </AppBar>
  );
}
