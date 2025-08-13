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
import { useLanguage } from "../contexts/LanguageContext";
import logo from "../images/logo.jpg";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { selectedLanguage, handleLanguageChange, currentTranslations } =
    useLanguage();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const LanguageSelector = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "#CADCFC",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      <Button
        onClick={() => handleLanguageChange("MK")}
        sx={{
          color: selectedLanguage === "MK" ? "#ffffff" : "#CADCFC",
          minWidth: "auto",
          padding: "4px 8px",
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        MK
      </Button>
      <Box
        sx={{
          width: "1px",
          height: "20px",
          backgroundColor: "#CADCFC",
        }}
      />
      <Button
        onClick={() => handleLanguageChange("AL")}
        sx={{
          color: selectedLanguage === "AL" ? "#ffffff" : "#CADCFC",
          minWidth: "auto",
          padding: "4px 8px",
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        AL
      </Button>
      <Box
        sx={{
          width: "1px",
          height: "20px",
          backgroundColor: "#CADCFC",
        }}
      />
      <Button
        onClick={() => handleLanguageChange("EN")}
        sx={{
          color: selectedLanguage === "EN" ? "#ffffff" : "#CADCFC",
          minWidth: "auto",
          padding: "4px 8px",
          fontSize: "16px",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        EN
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#00246B" }}
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
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#CADCFC",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Company Logo"
              style={{ height: "55px", marginRight: "10px" }}
            />
            {currentTranslations.companyName}
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

            alignItems: "center",
            gap: "20px",
            flexGrow: 1,
          }}
        >
          <Link
            to="/home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Button
              style={{ color: "#CADCFC" }}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              {currentTranslations.home}
            </Button>
          </Link>

          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              style={{ color: "#CADCFC" }}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              {currentTranslations.about}
            </Button>
          </Link>
          <Link to="/careers" style={{ textDecoration: "none" }}>
            <Button
              style={{ color: "#CADCFC" }}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              {currentTranslations.activities}
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              style={{ color: "#CADCFC" }}
              sx={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              {currentTranslations.contact}
            </Button>
          </Link>

          {/* Language Selector */}
          <LanguageSelector />
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
                  {currentTranslations.home}
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
                  {currentTranslations.about}
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
                  {currentTranslations.activities}
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
                  {currentTranslations.contact}
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
