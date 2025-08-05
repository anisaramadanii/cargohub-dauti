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
      style={{ backgroundColor: "#00246B"}}
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
            fontSize: { xs: "20px", sm: "30px" },
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color:"#CADCFC" }}>
            Dauti-TransportShped
          </Link>
        </Typography>

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

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "flex-end",
            paddingRight: "40px",
            gap: "20px",
          }}
        >
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              style={{color:"#CADCFC",}}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              style={{color:"#CADCFC",}}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              About
            </Button>
          </Link>
          <Link to="/careers" style={{ textDecoration: "none" }}>
            <Button
              style={{color:"#CADCFC",}}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Careers
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              style={{color:"#CADCFC",}}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              Contact
            </Button>
          </Link>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: "200px",
            paddingTop: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingLeft: "15px",
          }}
          role="presentation"
        >
          <List>
            <ListItem sx={{ padding: "10px 0" }}>
              <Link
                to="/home"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "17px",
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
              <Link
                to="/about"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "17px",
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
              <Link
                to="/careers"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "17px",
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
              <Link
                to="/contact"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "17px",
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
